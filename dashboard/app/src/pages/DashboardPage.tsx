import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FolderKanban,
    CheckCircle2,
    Clock,
    Bot,
    CheckCheck,
    Folder,
    PlusCircle,
    ListTodo,
    Loader2,
    AlertCircle,
    Archive,
    Search,
} from 'lucide-react';
import { useDashboardOverview, useProjects, useTasks } from '@/hooks/useApi';
import { formatRelativeTime } from '@/lib/utils';
import type { Project, Task } from '@/types';

interface CompletedTask extends Task {
    projectName?: string;
}

function StatCard({
    title,
    value,
    icon: Icon,
    iconClass,
    onClick,
}: {
    title: string;
    value: string | number;
    icon: React.ElementType;
    iconClass: string;
    onClick?: () => void;
}) {
    return (
        <div
            onClick={onClick}
            className={`stat-card ${onClick ? 'cursor-pointer' : ''}`}
            title={onClick ? `Ver ${title.toLowerCase()}` : undefined}
        >
            <div className={`stat-icon ${iconClass}`}>
                <Icon className="h-5 w-5" />
            </div>
            <div className="stat-content">
                <div className="stat-label">{title}</div>
                <div className="stat-value">{value}</div>
            </div>
        </div>
    );
}

function CompletedTaskItem({ task, onClick }: { task: CompletedTask; onClick: () => void }) {
    return (
        <div className="completed-task-item" onClick={onClick}>
            <div className="task-check-icon" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
                <CheckCircle2 className="h-4 w-4" />
            </div>
            <div className="task-content">
                <div className="task-title-row">
                    <span className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded mr-2">
                        {task.taskCode || `#${task.taskNumber}`}
                    </span>
                    <span className="task-title">{task.title}</span>
                </div>
                <div className="task-meta">
                    {task.projectName && (
                        <span className="task-meta-item">
                            <Folder className="h-3 w-3" />
                            {task.projectName}
                        </span>
                    )}
                    <span className="task-meta-item">
                        <Clock className="h-3 w-3" />
                        {formatRelativeTime(task.completedAt || task.updatedAt)}
                    </span>
                </div>
            </div>
        </div>
    );
}

function ProjectItem({ project, onClick }: { project: Project; onClick: () => void }) {
    // Map status to phase class for styling
    const phaseClass = project.status === 'completed' ? 'low' :
                       project.status === 'development' ? 'high' : 'medium';
    const taskCount = project.tasksTotal || 0;
    const completedCount = project.tasksCompleted || 0;
    const progress = taskCount > 0 ? Math.round((completedCount / taskCount) * 100) : project.progress || 0;

    return (
        <div className="completed-task-item" onClick={onClick} style={{ cursor: 'pointer' }}>
            <div className="task-check-icon" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa' }}>
                <Folder className="h-4 w-4" />
            </div>
            <div className="task-content">
                <div className="task-title-row">
                    <span className="task-title">{project.name}</span>
                    <span className={`task-priority-badge ${phaseClass}`}>
                        {project.status || 'activo'}
                    </span>
                </div>
                <div className="task-meta">
                    <span className="task-meta-item">
                        <ListTodo className="h-3 w-3" />
                        {taskCount} tareas
                    </span>
                    <span className="task-meta-item">
                        <CheckCircle2 className="h-3 w-3" />
                        {progress}%
                    </span>
                </div>
            </div>
        </div>
    );
}

function NewTaskItem({ task, onClick }: { task: Task; onClick: () => void }) {
    const priorityClass = task.priority === 'high' || task.priority === 'critical' ? 'high' :
                          task.priority === 'medium' ? 'medium' : 'low';

    return (
        <div className="completed-task-item" onClick={onClick} style={{ cursor: 'pointer' }}>
            <div className="task-check-icon" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>
                <PlusCircle className="h-4 w-4" />
            </div>
            <div className="task-content">
                <div className="task-title-row">
                    <span className="text-xs font-mono bg-primary/10 text-primary px-1.5 py-0.5 rounded mr-2 font-semibold">
                        {task.taskCode || `#${task.taskNumber}`}
                    </span>
                    <span className="task-title">{task.title}</span>
                    <span className={`task-priority-badge ${priorityClass}`}>
                        {task.priority || 'normal'}
                    </span>
                </div>
                <div className="task-meta">
                    <span className="task-meta-item">
                        <Clock className="h-3 w-3" />
                        {formatRelativeTime(task.createdAt)}
                    </span>
                    {task.projectName && (
                        <span className="task-meta-item">
                            <Folder className="h-3 w-3" />
                            {task.projectName}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

function FeedLoading() {
    return (
        <div className="feed-loading">
            <Loader2 className="h-5 w-5 animate-spin" />
            <p>Cargando...</p>
        </div>
    );
}

function FeedEmpty({ icon: Icon, message }: { icon: React.ElementType; message: string }) {
    return (
        <div className="feed-empty">
            <Icon className="h-8 w-8" />
            <p>{message}</p>
        </div>
    );
}

export function DashboardPage() {
    const navigate = useNavigate();
    const { data: stats, isLoading: statsLoading } = useDashboardOverview();
    const { data: projects, isLoading: projectsLoading } = useProjects();
    const { data: allTasks, isLoading: tasksLoading } = useTasks({});

    // Search and filter state
    const [search, setSearch] = useState('');
    const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);

    // State for new tasks (last 7 days)
    const [newTasks, setNewTasks] = useState<Task[]>([]);
    const [completedTasks, setCompletedTasks] = useState<CompletedTask[]>([]);

    const togglePriority = (priority: string) => {
        setSelectedPriorities((prev) =>
            prev.includes(priority) ? prev.filter((p) => p !== priority) : [...prev, priority]
        );
    };

    useEffect(() => {
        if (allTasks) {
            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

            // Helper to filter tasks by search and priority
            const applyFilters = (task: Task): boolean => {
                // Search filter
                if (search && search.length >= 3) {
                    const searchLower = search.toLowerCase();
                    const matchesSearch = (
                        task.title.toLowerCase().includes(searchLower) ||
                        (task.taskCode?.toLowerCase().includes(searchLower)) ||
                        (task.description?.toLowerCase().includes(searchLower))
                    );
                    if (!matchesSearch) return false;
                }

                // Priority filter
                if (selectedPriorities.length > 0) {
                    if (!selectedPriorities.includes(task.priority || 'low')) return false;
                }

                return true;
            };

            // Filter new tasks from last 7 days
            const recentNew = allTasks
                .filter((task: Task) => {
                    const createdDate = new Date(task.createdAt);
                    return createdDate >= sevenDaysAgo && applyFilters(task);
                })
                .slice(0, 10);

            // Filter completed tasks
            const completed = allTasks
                .filter((task: Task) => task.status === 'completed' && applyFilters(task))
                .sort((a: Task, b: Task) => {
                    const dateA = new Date(a.completedAt || a.updatedAt);
                    const dateB = new Date(b.completedAt || b.updatedAt);
                    return dateB.getTime() - dateA.getTime();
                })
                .slice(0, 15)
                .map((task: Task) => {
                    const project = projects?.find((p: Project) => p.id === task.projectId);
                    return {
                        ...task,
                        projectName: project?.name,
                    };
                });

            setNewTasks(recentNew);
            setCompletedTasks(completed);
        }
    }, [allTasks, projects, search, selectedPriorities]);

    const handleNavigateProjects = () => navigate('/projects');
    const handleNavigateProject = (projectId: number) => navigate(`/projects/${projectId}`);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="section-header">
                <div>
                    <h1 className="section-title">Dashboard</h1>
                    <p className="section-subtitle">Vista ejecutiva del estado de operaciones</p>
                </div>
            </div>

            {/* Stats Row */}
            <div className="dashboard-stats-row">
                <StatCard
                    title="Proyectos Activos"
                    value={statsLoading ? '-' : (stats?.activeProjects || projects?.length || 0)}
                    icon={FolderKanban}
                    iconClass="projects"
                    onClick={handleNavigateProjects}
                />
                <StatCard
                    title="Tareas Completadas"
                    value={statsLoading ? '-' : (stats?.completedTasks || 0)}
                    icon={CheckCircle2}
                    iconClass="tasks"
                />
                <StatCard
                    title="En Progreso"
                    value={statsLoading ? '-' : (stats?.inProgressTasks || 0)}
                    icon={Clock}
                    iconClass="active"
                />
                <StatCard
                    title="Agentes Activos"
                    value={statsLoading ? '-' : (stats?.activeAgents || 0)}
                    icon={Bot}
                    iconClass="agents"
                />
            </div>

            {/* Search and Filters */}
            <div className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-4 mb-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Buscar en feeds (mínimo 3 caracteres)..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <span className="text-sm text-muted-foreground">
                        {completedTasks.length + newTasks.length} items
                    </span>
                </div>

                {/* Priority Filters */}
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Prioridad:</span>
                    {(['critical', 'high', 'medium', 'low'] as const).map((priority) => {
                        const isSelected = selectedPriorities.includes(priority);
                        const count = (allTasks || []).filter((t: Task) => (t.priority || 'low') === priority).length;
                        if (count === 0) return null;
                        const config = {
                            critical: { label: '🔴 Crítica', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.15)' },
                            high: { label: '🟠 Alta', color: '#f97316', bg: 'rgba(249, 115, 22, 0.15)' },
                            medium: { label: '🟡 Media', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)' },
                            low: { label: '🟢 Baja', color: '#22c55e', bg: 'rgba(34, 197, 94, 0.15)' },
                        }[priority];
                        return (
                            <button
                                key={priority}
                                onClick={() => togglePriority(priority)}
                                className="memory-tag-filter"
                                style={
                                    isSelected
                                        ? { backgroundColor: config.color, color: '#fff' }
                                        : { backgroundColor: config.bg, color: config.color }
                                }
                            >
                                {config.label} ({count})
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Dashboard Grid - 3 Widgets */}
            <div className="dashboard-grid">
                {/* Completed Tasks Feed */}
                <div className="completed-tasks-widget">
                    <div className="widget-header">
                        <div className="widget-header-left">
                            <div className="widget-icon success">
                                <CheckCheck className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="widget-title">Tareas Completadas</div>
                                <div className="widget-subtitle">Feed global en tiempo real</div>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate('/tasks/archived')}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-muted hover:bg-accent rounded-lg transition-colors"
                        >
                            <Archive className="h-3.5 w-3.5" />
                            Ver todas
                        </button>
                    </div>
                    <div className="completed-tasks-feed">
                        {tasksLoading ? (
                            <FeedLoading />
                        ) : completedTasks.length > 0 ? (
                            completedTasks.map((task) => (
                                <CompletedTaskItem
                                    key={task.id}
                                    task={task}
                                    onClick={() => task.projectId && handleNavigateProject(task.projectId)}
                                />
                            ))
                        ) : (
                            <FeedEmpty icon={CheckCircle2} message="No hay tareas completadas todavia" />
                        )}
                    </div>
                </div>

                {/* Recent Projects Feed */}
                <div className="completed-tasks-widget">
                    <div className="widget-header">
                        <div className="widget-header-left">
                            <div className="widget-icon info">
                                <FolderKanban className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="widget-title">Proyectos Recientes</div>
                                <div className="widget-subtitle">Actividad de proyectos</div>
                            </div>
                        </div>
                    </div>
                    <div className="completed-tasks-feed">
                        {projectsLoading ? (
                            <FeedLoading />
                        ) : projects && projects.length > 0 ? (
                            projects.slice(0, 5).map((project: Project) => (
                                <ProjectItem
                                    key={project.id}
                                    project={project}
                                    onClick={() => handleNavigateProject(project.id)}
                                />
                            ))
                        ) : (
                            <FeedEmpty icon={FolderKanban} message="No hay proyectos" />
                        )}
                    </div>
                </div>

                {/* New Tasks by Project Widget */}
                <div className="completed-tasks-widget">
                    <div className="widget-header">
                        <div className="widget-header-left">
                            <div className="widget-icon warning">
                                <PlusCircle className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="widget-title">Nuevas Tareas por Proyecto</div>
                                <div className="widget-subtitle">Ultimos 7 dias</div>
                            </div>
                        </div>
                        <div className="widget-badge">{newTasks.length}</div>
                    </div>
                    <div className="completed-tasks-feed">
                        {tasksLoading ? (
                            <FeedLoading />
                        ) : newTasks.length > 0 ? (
                            newTasks.map((task) => (
                                <NewTaskItem
                                    key={task.id}
                                    task={task}
                                    onClick={() => task.projectId && handleNavigateProject(task.projectId)}
                                />
                            ))
                        ) : (
                            <FeedEmpty icon={AlertCircle} message="No hay tareas nuevas esta semana" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
