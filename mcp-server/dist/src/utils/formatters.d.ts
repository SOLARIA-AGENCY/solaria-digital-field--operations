/**
 * Human-Readable Formatters
 *
 * @author ECO-Lambda | DFO Enhancement Plan
 * @date 2025-12-27
 * @task DFN-002
 *
 * Utilities for formatting structured data into human-readable strings
 */
interface Task {
    task_code: string;
    title: string;
    status: 'pending' | 'in_progress' | 'completed' | 'blocked';
    progress: number;
    agent_name?: string;
    priority?: 'low' | 'medium' | 'high' | 'critical';
    estimated_hours?: number;
    deadline?: string;
}
interface Project {
    project_code: string;
    name: string;
    status: string;
    progress?: number;
    budget?: number;
    deadline?: string;
}
interface Agent {
    id: number;
    name: string;
    role: string;
    status: 'active' | 'busy' | 'inactive';
}
interface Sprint {
    sprint_number: number;
    name: string;
    status: 'planned' | 'active' | 'completed' | 'cancelled';
    start_date?: string;
    end_date?: string;
    progress?: number;
}
export declare function formatTask(task: Task): string;
export declare function formatTaskList(tasks: Task[]): string;
export declare function formatTaskSummary(data: {
    total: number;
    pending: number;
    in_progress: number;
    completed: number;
    blocked: number;
}): string;
export declare function formatProject(project: Project): string;
export declare function formatProjectList(projects: Project[]): string;
export declare function formatAgent(agent: Agent): string;
export declare function formatAgentList(agents: Agent[]): string;
export declare function formatSprint(sprint: Sprint): string;
export declare function formatSprintList(sprints: Sprint[]): string;
export interface Capability {
    skill_name: string;
    version: string;
    active: boolean;
    registered_at?: string;
}
export declare function formatCapabilities(agent_id: number, capabilities: Capability[]): string;
export declare function formatTable(data: any[], columns: string[]): string;
export declare function formatDuration(minutes: number): string;
export declare function formatPercentage(value: number, total: number): string;
export declare function formatProgressBar(progress: number, width?: number): string;
type HealthStatus = 'healthy' | 'degraded' | 'unhealthy';
interface HealthCheckResult {
    status: HealthStatus;
    message: string;
    latency_ms?: number;
    details?: Record<string, any>;
}
interface HealthData {
    status: HealthStatus;
    timestamp: string;
    uptime_seconds: number;
    version: string;
    checks: {
        database: HealthCheckResult;
        redis: HealthCheckResult;
        disk: HealthCheckResult;
        memory: HealthCheckResult;
        cpu: HealthCheckResult;
    };
    summary: {
        total_checks: number;
        passed: number;
        warnings: number;
        failed: number;
    };
}
export declare function formatHealth(data: HealthData): string;
interface TaskStats {
    total: number;
    by_status: {
        pending: number;
        in_progress: number;
        completed: number;
        blocked: number;
    };
    by_priority: {
        critical: number;
        high: number;
        medium: number;
        low: number;
    };
}
interface VelocityStats {
    current_sprint: number;
    average: number;
    trend: 'up' | 'down' | 'stable';
}
interface StatsData {
    project_id?: number;
    project_name?: string;
    tasks: TaskStats;
    velocity: VelocityStats;
    completion_rate: number;
    health_score: number;
    agents_active: number;
    agents_total: number;
}
export declare function formatStats(data: StatsData): string;
interface InlineDocument {
    id: number;
    name: string;
    type: string;
    content_md?: string;
    version: number;
    created_at: string;
    updated_at: string;
    project_name?: string;
}
export declare function formatDocument(doc: InlineDocument): string;
export declare function formatDocumentList(docs: InlineDocument[]): string;
export declare const Formatters: {
    task: typeof formatTask;
    taskList: typeof formatTaskList;
    taskSummary: typeof formatTaskSummary;
    project: typeof formatProject;
    projectList: typeof formatProjectList;
    agent: typeof formatAgent;
    agentList: typeof formatAgentList;
    sprint: typeof formatSprint;
    sprintList: typeof formatSprintList;
    capabilities: typeof formatCapabilities;
    table: typeof formatTable;
    progressBar: typeof formatProgressBar;
    health: typeof formatHealth;
    stats: typeof formatStats;
    document: typeof formatDocument;
    documentList: typeof formatDocumentList;
};
export {};
