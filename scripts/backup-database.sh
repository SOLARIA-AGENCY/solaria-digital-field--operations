#!/bin/bash
# =============================================================================
# SOLARIA DFO Database Backup Script
# =============================================================================
#
# Usage:
#   ./backup-database.sh                    # Backup local (docker)
#   ./backup-database.sh --remote           # Backup production server
#   ./backup-database.sh --restore <file>   # Restore from backup
#
# Backups are stored in: ./backups/
# Retention: 7 daily, 4 weekly, 12 monthly
# =============================================================================

set -e

BACKUP_DIR="$(dirname "$0")/../backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
DATE_DAILY=$(date +%Y%m%d)
DATE_WEEKLY=$(date +%Y_W%V)
DATE_MONTHLY=$(date +%Y%m)

# Database credentials (from .env or defaults)
DB_NAME="${DB_NAME:-solaria_construction}"
DB_USER="${DB_USER:-root}"
DB_PASS="${DB_PASS:-SolariaRoot2024}"

# Production server
PROD_HOST="148.230.118.124"
PROD_USER="root"
PROD_PASS="Np6_qaZmHebnEAe"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info() { echo -e "${GREEN}[INFO]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Create backup directory
mkdir -p "$BACKUP_DIR/daily" "$BACKUP_DIR/weekly" "$BACKUP_DIR/monthly"

# =============================================================================
# Functions
# =============================================================================

backup_local() {
    log_info "Creating local backup from Docker container..."

    BACKUP_FILE="$BACKUP_DIR/daily/dfo_${DATE_DAILY}_${TIMESTAMP}.sql"

    docker exec solaria-dfo-office mariadb-dump \
        -u"$DB_USER" \
        -p"$DB_PASS" \
        --single-transaction \
        --routines \
        --triggers \
        "$DB_NAME" > "$BACKUP_FILE"

    if [ -f "$BACKUP_FILE" ]; then
        gzip "$BACKUP_FILE"
        BACKUP_FILE="${BACKUP_FILE}.gz"
        log_info "Backup created: $BACKUP_FILE"
        log_info "Size: $(ls -lh "$BACKUP_FILE" | awk '{print $5}')"

        # Create symlinks for weekly/monthly if not exists
        create_retention_copies "$BACKUP_FILE"
    else
        log_error "Backup failed!"
        exit 1
    fi
}

backup_remote() {
    log_info "Creating backup from production server ($PROD_HOST)..."

    BACKUP_FILE="$BACKUP_DIR/daily/dfo_prod_${DATE_DAILY}_${TIMESTAMP}.sql"

    sshpass -p "$PROD_PASS" ssh "$PROD_USER@$PROD_HOST" \
        "docker exec solaria-dfo-office mariadb-dump -uroot -pSolariaRoot2024 --single-transaction --routines --triggers solaria_construction" \
        > "$BACKUP_FILE"

    if [ -f "$BACKUP_FILE" ] && [ -s "$BACKUP_FILE" ]; then
        gzip "$BACKUP_FILE"
        BACKUP_FILE="${BACKUP_FILE}.gz"
        log_info "Production backup created: $BACKUP_FILE"
        log_info "Size: $(ls -lh "$BACKUP_FILE" | awk '{print $5}')"

        create_retention_copies "$BACKUP_FILE"
    else
        log_error "Remote backup failed!"
        exit 1
    fi
}

create_retention_copies() {
    local backup_file="$1"
    local basename=$(basename "$backup_file")

    # Weekly (keep 4 weeks)
    local weekly_file="$BACKUP_DIR/weekly/${basename%.sql.gz}_W${DATE_WEEKLY}.sql.gz"
    if [ ! -f "$weekly_file" ]; then
        cp "$backup_file" "$weekly_file"
        log_info "Weekly backup: $weekly_file"
    fi

    # Monthly (keep 12 months)
    local monthly_file="$BACKUP_DIR/monthly/${basename%.sql.gz}_M${DATE_MONTHLY}.sql.gz"
    if [ ! -f "$monthly_file" ]; then
        cp "$backup_file" "$monthly_file"
        log_info "Monthly backup: $monthly_file"
    fi
}

restore_backup() {
    local backup_file="$1"

    if [ ! -f "$backup_file" ]; then
        log_error "Backup file not found: $backup_file"
        exit 1
    fi

    log_warn "WARNING: This will OVERWRITE the current database!"
    read -p "Are you sure? (yes/no): " confirm

    if [ "$confirm" != "yes" ]; then
        log_info "Restore cancelled."
        exit 0
    fi

    log_info "Restoring from: $backup_file"

    if [[ "$backup_file" == *.gz ]]; then
        gunzip -c "$backup_file" | docker exec -i solaria-dfo-office mariadb -u"$DB_USER" -p"$DB_PASS" "$DB_NAME"
    else
        docker exec -i solaria-dfo-office mariadb -u"$DB_USER" -p"$DB_PASS" "$DB_NAME" < "$backup_file"
    fi

    log_info "Restore complete!"
}

restore_to_remote() {
    local backup_file="$1"

    if [ ! -f "$backup_file" ]; then
        log_error "Backup file not found: $backup_file"
        exit 1
    fi

    log_warn "WARNING: This will OVERWRITE the PRODUCTION database!"
    read -p "Are you ABSOLUTELY sure? Type 'RESTORE PRODUCTION': " confirm

    if [ "$confirm" != "RESTORE PRODUCTION" ]; then
        log_info "Restore cancelled."
        exit 0
    fi

    log_info "Restoring to production from: $backup_file"

    if [[ "$backup_file" == *.gz ]]; then
        gunzip -c "$backup_file" | sshpass -p "$PROD_PASS" ssh "$PROD_USER@$PROD_HOST" \
            "docker exec -i solaria-dfo-office mariadb -uroot -pSolariaRoot2024 solaria_construction"
    else
        cat "$backup_file" | sshpass -p "$PROD_PASS" ssh "$PROD_USER@$PROD_HOST" \
            "docker exec -i solaria-dfo-office mariadb -uroot -pSolariaRoot2024 solaria_construction"
    fi

    log_info "Production restore complete!"
}

cleanup_old_backups() {
    log_info "Cleaning up old backups..."

    # Daily: keep 7 days
    find "$BACKUP_DIR/daily" -name "*.sql.gz" -mtime +7 -delete 2>/dev/null || true

    # Weekly: keep 4 weeks (28 days)
    find "$BACKUP_DIR/weekly" -name "*.sql.gz" -mtime +28 -delete 2>/dev/null || true

    # Monthly: keep 12 months (365 days)
    find "$BACKUP_DIR/monthly" -name "*.sql.gz" -mtime +365 -delete 2>/dev/null || true

    log_info "Cleanup complete."
}

list_backups() {
    echo ""
    echo "=== SOLARIA DFO Backups ==="
    echo ""
    echo "Daily (last 7 days):"
    ls -lh "$BACKUP_DIR/daily"/*.sql.gz 2>/dev/null || echo "  No daily backups"
    echo ""
    echo "Weekly (last 4 weeks):"
    ls -lh "$BACKUP_DIR/weekly"/*.sql.gz 2>/dev/null || echo "  No weekly backups"
    echo ""
    echo "Monthly (last 12 months):"
    ls -lh "$BACKUP_DIR/monthly"/*.sql.gz 2>/dev/null || echo "  No monthly backups"
    echo ""
}

show_help() {
    echo "SOLARIA DFO Database Backup Script"
    echo ""
    echo "Usage:"
    echo "  $0                           Create local backup"
    echo "  $0 --remote                  Create backup from production"
    echo "  $0 --restore <file>          Restore local from backup"
    echo "  $0 --restore-remote <file>   Restore production from backup"
    echo "  $0 --list                    List all backups"
    echo "  $0 --cleanup                 Remove old backups"
    echo "  $0 --help                    Show this help"
    echo ""
}

# =============================================================================
# Main
# =============================================================================

case "${1:-}" in
    --remote)
        backup_remote
        cleanup_old_backups
        ;;
    --restore)
        if [ -z "${2:-}" ]; then
            log_error "Please specify backup file"
            exit 1
        fi
        restore_backup "$2"
        ;;
    --restore-remote)
        if [ -z "${2:-}" ]; then
            log_error "Please specify backup file"
            exit 1
        fi
        restore_to_remote "$2"
        ;;
    --list)
        list_backups
        ;;
    --cleanup)
        cleanup_old_backups
        ;;
    --help|-h)
        show_help
        ;;
    *)
        backup_local
        cleanup_old_backups
        ;;
esac
