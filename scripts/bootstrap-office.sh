#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR=$(cd "$(dirname "$0")/.." && pwd)
cd "$ROOT_DIR"

function stop_pid_file() {
  local pidfile=$1
  if [ -f "$pidfile" ]; then
    local pid=$(cat "$pidfile" || true)
    if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
      kill "$pid" 2>/dev/null || true
      sleep 1
    fi
    rm -f "$pidfile"
  fi
}

echo "[DFO] Bringing up single-container office"
docker compose -f docker-compose.single.yml up -d

echo "[DFO] Ingesting project data"
pnpm ingest-akademate

echo "[DFO] Health check"
pnpm health

echo "[DFO] UI smoke (Playwright)"
pnpm test:ui:dfo

# Restart MCP processes
stop_pid_file .mcp-dfo.pid
stop_pid_file .mcp-playwright.pid

echo "[DFO] Starting MCP API (dfo) in background"
nohup pnpm mcp:dfo >/tmp/mcp-dfo.log 2>&1 &
echo $! > .mcp-dfo.pid

echo "[DFO] Starting MCP UI (playwright) in background"
nohup pnpm mcp:playwright >/tmp/mcp-playwright.log 2>&1 &
echo $! > .mcp-playwright.pid

cat <<INFO
[DFO] Ready
- Dashboard: http://localhost:3030 (user: carlosjperez / pass: bypass)
- MCP API PID: $(cat .mcp-dfo.pid)
- MCP UI  PID: $(cat .mcp-playwright.pid)
- Logs: /tmp/mcp-dfo.log, /tmp/mcp-playwright.log
INFO
