/**
 * Operation Queue for Offline Sync
 *
 * @author ECO-Lambda | DFO Enhancement Plan
 * @date 2025-12-27
 * @task DFN-009
 *
 * Manages pending operations when offline
 */
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { homedir } from 'os';
// ============================================================================
// Operation Queue Class
// ============================================================================
export class OperationQueue {
    queuePath;
    queue = [];
    maxRetries = 3;
    constructor(cacheDir) {
        const dir = cacheDir || join(homedir(), '.dfo-cache');
        if (!existsSync(dir)) {
            mkdirSync(dir, { recursive: true });
        }
        this.queuePath = join(dir, 'sync-queue.json');
        this.load();
    }
    /**
     * Load queue from disk
     */
    load() {
        if (existsSync(this.queuePath)) {
            try {
                const data = readFileSync(this.queuePath, 'utf-8');
                this.queue = JSON.parse(data);
            }
            catch {
                this.queue = [];
            }
        }
    }
    /**
     * Save queue to disk
     */
    save() {
        writeFileSync(this.queuePath, JSON.stringify(this.queue, null, 2));
    }
    /**
     * Generate unique operation ID
     */
    generateId() {
        return `op_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    /**
     * Add operation to queue
     */
    add(operation) {
        const id = this.generateId();
        const queuedOp = {
            ...operation,
            id,
            createdAt: new Date().toISOString(),
            retryCount: 0,
        };
        this.queue.push(queuedOp);
        this.save();
        return id;
    }
    /**
     * Get all pending operations
     */
    getAll() {
        return [...this.queue];
    }
    /**
     * Get operations for a specific project
     */
    getByProject(projectId) {
        return this.queue.filter((op) => op.projectId === projectId);
    }
    /**
     * Get next operation to process (FIFO)
     */
    peek() {
        return this.queue[0];
    }
    /**
     * Remove operation after successful processing
     */
    remove(operationId) {
        const index = this.queue.findIndex((op) => op.id === operationId);
        if (index !== -1) {
            this.queue.splice(index, 1);
            this.save();
            return true;
        }
        return false;
    }
    /**
     * Mark operation as failed and increment retry count
     */
    markFailed(operationId, error) {
        const op = this.queue.find((o) => o.id === operationId);
        if (op) {
            op.retryCount++;
            op.lastError = error;
            // Remove if max retries exceeded
            if (op.retryCount >= this.maxRetries) {
                this.remove(operationId);
                return false; // Indicates permanently failed
            }
            this.save();
            return true; // Will retry
        }
        return false;
    }
    /**
     * Get queue statistics
     */
    getStats() {
        const byType = {};
        const byEntity = {};
        let failedCount = 0;
        let oldestOperation = null;
        for (const op of this.queue) {
            byType[op.type] = (byType[op.type] || 0) + 1;
            byEntity[op.entity] = (byEntity[op.entity] || 0) + 1;
            if (op.retryCount > 0)
                failedCount++;
            if (!oldestOperation || op.createdAt < oldestOperation) {
                oldestOperation = op.createdAt;
            }
        }
        return {
            total: this.queue.length,
            byType,
            byEntity,
            oldestOperation,
            failedCount,
        };
    }
    /**
     * Clear all operations
     */
    clear() {
        this.queue = [];
        this.save();
    }
    /**
     * Clear operations for a specific project
     */
    clearProject(projectId) {
        const initialCount = this.queue.length;
        this.queue = this.queue.filter((op) => op.projectId !== projectId);
        this.save();
        return initialCount - this.queue.length;
    }
    /**
     * Get operations that need retry
     */
    getRetryable() {
        return this.queue.filter((op) => op.retryCount > 0 && op.retryCount < this.maxRetries);
    }
    /**
     * Check if queue is empty
     */
    isEmpty() {
        return this.queue.length === 0;
    }
    /**
     * Get count of pending operations
     */
    count() {
        return this.queue.length;
    }
}
//# sourceMappingURL=operation-queue.js.map