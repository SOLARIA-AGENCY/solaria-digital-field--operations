/**
 * SQLite Wrapper for Offline Cache
 *
 * @author ECO-Lambda | DFO Enhancement Plan
 * @date 2025-12-27
 * @task DFN-009
 *
 * Provides a simple SQLite interface for local caching
 */
export interface SQLiteDatabase {
    run(sql: string, params?: any[]): Promise<{
        changes: number;
        lastInsertRowid: number;
    }>;
    get<T = any>(sql: string, params?: any[]): Promise<T | undefined>;
    all<T = any>(sql: string, params?: any[]): Promise<T[]>;
    exec(sql: string): Promise<void>;
    close(): Promise<void>;
}
export interface CacheConfig {
    projectId: number;
    cacheDir?: string;
}
export declare function getCacheDir(customDir?: string): string;
export declare function getProjectCachePath(projectId: number, cacheDir?: string): string;
export declare const CACHE_SCHEMA = "\n-- Tasks table\nCREATE TABLE IF NOT EXISTS tasks (\n  id INTEGER PRIMARY KEY,\n  task_code TEXT,\n  title TEXT,\n  description TEXT,\n  status TEXT,\n  priority TEXT,\n  progress INTEGER DEFAULT 0,\n  assigned_agent_id INTEGER,\n  project_id INTEGER,\n  sprint_id INTEGER,\n  epic_id INTEGER,\n  estimated_hours REAL,\n  deadline TEXT,\n  synced_at TEXT,\n  local_modified INTEGER DEFAULT 0\n);\n\n-- Task items table\nCREATE TABLE IF NOT EXISTS task_items (\n  id INTEGER PRIMARY KEY,\n  task_id INTEGER,\n  title TEXT,\n  description TEXT,\n  is_completed INTEGER DEFAULT 0,\n  notes TEXT,\n  synced_at TEXT,\n  local_modified INTEGER DEFAULT 0,\n  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE\n);\n\n-- Memories table\nCREATE TABLE IF NOT EXISTS memories (\n  id INTEGER PRIMARY KEY,\n  content TEXT,\n  summary TEXT,\n  importance REAL,\n  tags TEXT,\n  synced_at TEXT,\n  local_modified INTEGER DEFAULT 0\n);\n\n-- Dependencies table\nCREATE TABLE IF NOT EXISTS task_dependencies (\n  id INTEGER PRIMARY KEY,\n  task_id INTEGER,\n  depends_on_task_id INTEGER,\n  dependency_type TEXT,\n  synced_at TEXT,\n  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,\n  FOREIGN KEY (depends_on_task_id) REFERENCES tasks(id) ON DELETE CASCADE\n);\n\n-- Sync metadata\nCREATE TABLE IF NOT EXISTS sync_meta (\n  key TEXT PRIMARY KEY,\n  value TEXT,\n  updated_at TEXT\n);\n\n-- Indexes\nCREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);\nCREATE INDEX IF NOT EXISTS idx_tasks_project ON tasks(project_id);\nCREATE INDEX IF NOT EXISTS idx_task_items_task ON task_items(task_id);\nCREATE INDEX IF NOT EXISTS idx_memories_importance ON memories(importance DESC);\n";
/**
 * In-memory mock SQLite for environments without native SQLite
 * For production, use better-sqlite3 or sql.js
 */
export declare class MockSQLiteDatabase implements SQLiteDatabase {
    private dbPath;
    private tables;
    private autoIncrements;
    private closed;
    constructor(dbPath: string);
    run(sql: string, params?: any[]): Promise<{
        changes: number;
        lastInsertRowid: number;
    }>;
    get<T = any>(sql: string, params?: any[]): Promise<T | undefined>;
    all<T = any>(sql: string, params?: any[]): Promise<T[]>;
    exec(sql: string): Promise<void>;
    close(): Promise<void>;
    private parseValues;
}
export declare class SQLiteCache {
    private db;
    private projectId;
    private dbPath;
    constructor(config: CacheConfig);
    initialize(): Promise<void>;
    close(): Promise<void>;
    clear(): Promise<void>;
    cacheTasks(tasks: any[]): Promise<void>;
    getCachedTasks(filters?: {
        status?: string;
    }): Promise<any[]>;
    getCachedTask(taskId: number): Promise<any | undefined>;
    updateCachedTask(taskId: number, updates: any): Promise<void>;
    setMeta(key: string, value: string): Promise<void>;
    getMeta(key: string): Promise<string | undefined>;
    getLastSyncTime(): Promise<Date | null>;
    setLastSyncTime(date?: Date): Promise<void>;
    getModifiedTasks(): Promise<any[]>;
    clearModifiedFlag(taskId: number): Promise<void>;
    getStats(): Promise<{
        totalTasks: number;
        modifiedTasks: number;
        lastSync: Date | null;
        cacheSize: number;
    }>;
}
