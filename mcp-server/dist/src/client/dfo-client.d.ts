/**
 * DFO Client with Offline Support
 *
 * @author ECO-Lambda | DFO Enhancement Plan
 * @date 2025-12-27
 * @task DFN-009
 *
 * Provides transparent online/offline fallback for DFO operations
 */
import { QueuedOperation } from '../cache/operation-queue.js';
export interface DFOClientConfig {
    projectId: number;
    baseUrl?: string;
    timeout?: number;
    cacheDir?: string;
    autoSync?: boolean;
    syncInterval?: number;
}
export interface ConnectivityStatus {
    online: boolean;
    latency: number | null;
    lastCheck: Date;
    error?: string;
}
export interface SyncResult {
    success: boolean;
    synced: number;
    failed: number;
    errors: string[];
    duration: number;
}
export interface TaskFilters {
    status?: 'pending' | 'in_progress' | 'completed' | 'blocked';
    priority?: 'critical' | 'high' | 'medium' | 'low';
    epic_id?: number;
    sprint_id?: number;
}
export interface Task {
    id: number;
    task_code?: string;
    title: string;
    description?: string;
    status: string;
    priority?: string;
    progress: number;
    assigned_agent_id?: number;
    project_id: number;
    sprint_id?: number;
    epic_id?: number;
}
export interface TaskUpdates {
    status?: string;
    progress?: number;
    priority?: string;
    title?: string;
    description?: string;
}
export declare class DFOClient {
    private cache;
    private queue;
    private projectId;
    private baseUrl;
    private timeout;
    private online;
    private lastConnectivityCheck;
    private syncIntervalId;
    constructor(config: DFOClientConfig);
    initialize(): Promise<void>;
    close(): Promise<void>;
    checkConnectivity(): Promise<ConnectivityStatus>;
    ping(): Promise<{
        online: boolean;
        latency: number;
    }>;
    isOnline(): boolean;
    listTasks(filters?: TaskFilters): Promise<Task[]>;
    getTask(taskId: number): Promise<Task | null>;
    updateTask(taskId: number, updates: TaskUpdates): Promise<void>;
    completeTaskItem(taskId: number, itemId: number): Promise<void>;
    syncAll(): Promise<SyncResult>;
    processQueue(): Promise<{
        synced: number;
        failed: number;
        errors: string[];
    }>;
    private executeOperation;
    getQueuedOperations(): QueuedOperation[];
    invalidateCache(): Promise<void>;
    getCacheStats(): Promise<{
        totalTasks: number;
        modifiedTasks: number;
        lastSync: Date | null;
        cacheSize: number;
        queuedOperations: number;
    }>;
    startAutoSync(interval: number): void;
    stopAutoSync(): void;
    private fetchWithTimeout;
    getStatusLine(): Promise<StatusLine>;
}
export interface StatusLine {
    online: boolean;
    projectId: number;
    taskCount: number;
    queuedCount: number;
    lastSync: string | null;
    formatted: string;
}
export declare const OFFLINE_WARNINGS: {
    offline: string;
    queue: (count: number) => string;
    staleCache: (hours: number) => string;
};
export declare function createDFOClient(config: DFOClientConfig): Promise<DFOClient>;
