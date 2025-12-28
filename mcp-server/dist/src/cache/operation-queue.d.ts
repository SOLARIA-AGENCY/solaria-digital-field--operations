/**
 * Operation Queue for Offline Sync
 *
 * @author ECO-Lambda | DFO Enhancement Plan
 * @date 2025-12-27
 * @task DFN-009
 *
 * Manages pending operations when offline
 */
export interface QueuedOperation {
    id: string;
    type: 'create' | 'update' | 'delete' | 'complete';
    entity: 'task' | 'task_item' | 'memory' | 'dependency';
    entityId: number;
    data: any;
    createdAt: string;
    retryCount: number;
    lastError?: string;
    projectId: number;
}
export interface QueueStats {
    total: number;
    byType: Record<string, number>;
    byEntity: Record<string, number>;
    oldestOperation: string | null;
    failedCount: number;
}
export declare class OperationQueue {
    private queuePath;
    private queue;
    private maxRetries;
    constructor(cacheDir?: string);
    /**
     * Load queue from disk
     */
    private load;
    /**
     * Save queue to disk
     */
    private save;
    /**
     * Generate unique operation ID
     */
    private generateId;
    /**
     * Add operation to queue
     */
    add(operation: Omit<QueuedOperation, 'id' | 'createdAt' | 'retryCount'>): string;
    /**
     * Get all pending operations
     */
    getAll(): QueuedOperation[];
    /**
     * Get operations for a specific project
     */
    getByProject(projectId: number): QueuedOperation[];
    /**
     * Get next operation to process (FIFO)
     */
    peek(): QueuedOperation | undefined;
    /**
     * Remove operation after successful processing
     */
    remove(operationId: string): boolean;
    /**
     * Mark operation as failed and increment retry count
     */
    markFailed(operationId: string, error: string): boolean;
    /**
     * Get queue statistics
     */
    getStats(): QueueStats;
    /**
     * Clear all operations
     */
    clear(): void;
    /**
     * Clear operations for a specific project
     */
    clearProject(projectId: number): number;
    /**
     * Get operations that need retry
     */
    getRetryable(): QueuedOperation[];
    /**
     * Check if queue is empty
     */
    isEmpty(): boolean;
    /**
     * Get count of pending operations
     */
    count(): number;
}
