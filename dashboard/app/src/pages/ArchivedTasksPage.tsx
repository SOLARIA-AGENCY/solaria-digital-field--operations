import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Search,
    Archive,
    CheckCircle2,
    Calendar,
    Clock,
    User,
    Loader2,
    ArrowLeft,
} from 'lucide-react';
import { useTasks, useProjects } from '@/hooks/useApi';
import { TaskDetailDrawer } from '@/components/tasks';
import { cn, formatRelativeTime, getPriorityColor } from '@/lib/utils';
import type { Task, Project } from '@/types';

export function ArchivedTasksPage() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [projectFilter, setProjectFilter] = useState<string>('');
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

    const { data: allTasks, isLoading } = useTasks();
    const { data: projects } = useProjects();

    // Solo tareas completadas
    const archivedTasks = allTasks?.filter((t: Task) => t.status === 'completed') || [];

    const filteredTasks = archivedTasks.filter((t: Task) => {
        const matchesSearch =
            t.title.toLowerCase().includes(search.toLowerCase()) ||
            t.taskCode?.toLowerCase().includes(search.toLowerCase()) ||
            t.description?.toLowerCase().includes(search.toLowerCase());
        const matchesProject = !projectFilter || t.projectId.toString() === projectFilter;
        return matchesSearch && matchesProject;
    });

    // Ordenar por fecha de completado (mas reciente primero)
    const sortedTasks = [...filteredTasks].sort((a, b) => {
        const dateA = a.completedAt ? new Date(a.completedAt).getTime() : new Date(a.updatedAt).getTime();
        const dateB = b.completedAt ? new Date(b.completedAt).getTime() : new Date(b.updatedAt).getTime();
        return dateB - dateA;
    });

    const handleTaskClick = useCallback((task: Task) => {
        setSelectedTaskId(task.id);
    }, []);

    const handleCloseDrawer = useCallback(() => {
        setSelectedTaskId(null);
    }, []);

    const handleNavigateToProject = useCallback(
        (projectId: number) => {
            navigate(`/projects/${projectId}`);
        },
        [navigate]
    );

    // Agrupar por proyecto
    const tasksByProject = sortedTasks.reduce((acc, task) => {
        const projectKey = task.projectCode || task.projectName || 'Sin Proyecto';
        if (!acc[projectKey]) {
            acc[projectKey] = [];
        }
        acc[projectKey].push(task);
        return acc;
    }, {} as Record<string, Task[]>);

    // Stats
    const totalCompleted = archivedTasks.length;
    const thisWeek = archivedTasks.filter((t: Task) => {
        const completedDate = t.completedAt ? new Date(t.completedAt) : new Date(t.updatedAt);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return completedDate >= weekAgo;
    }).length;

    if (isLoading) {
        return (
            <div className="flex h-full items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="section-header">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                    <div>
                        <h1 className="section-title flex items-center gap-2">
                            <Archive className="h-6 w-6 text-primary" />
                            Tareas Almacenadas
                        </h1>
                        <p className="section-subtitle">
                            {totalCompleted} tareas completadas • {thisWeek} esta semana
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                <div className="stat-card">
                    <div className="stat-icon green">
                        <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Total Completadas</div>
                        <div className="stat-value">{totalCompleted}</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">
                        <Calendar className="h-5 w-5" />
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Esta Semana</div>
                        <div className="stat-value">{thisWeek}</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon projects">
                        <Archive className="h-5 w-5" />
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Proyectos</div>
                        <div className="stat-value">{Object.keys(tasksByProject).length}</div>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="filters-row">
                <div className="filter-search">
                    <Search className="filter-search-icon" />
                    <input
                        type="text"
                        placeholder="Buscar tareas completadas..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="filter-search-input"
                    />
                </div>

                <div className="filter-selects">
                    <select
                        value={projectFilter}
                        onChange={(e) => setProjectFilter(e.target.value)}
                        className="filter-select"
                    >
                        <option value="">Todos los proyectos</option>
                        {projects?.map((p: Project) => (
                            <option key={p.id} value={p.id}>
                                {p.code} - {p.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Tasks List */}
            <div className="space-y-6">
                {Object.entries(tasksByProject).map(([projectName, tasks]) => (
                    <div key={projectName} className="glass-card">
                        <div className="p-4 border-b border-border">
                            <h3 className="font-semibold text-lg">{projectName}</h3>
                            <p className="text-sm text-muted-foreground">
                                {tasks.length} tareas completadas
                            </p>
                        </div>
                        <div className="divide-y divide-border">
                            {tasks.map((task) => (
                                <div
                                    key={task.id}
                                    onClick={() => handleTaskClick(task)}
                                    className="p-4 hover:bg-muted/50 cursor-pointer transition-colors"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-start gap-3 min-w-0 flex-1">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                            <div className="min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">
                                                        {task.taskCode || `#${task.taskNumber}`}
                                                    </span>
                                                    <span className={cn('text-xs px-1.5 py-0.5 rounded', getPriorityColor(task.priority))}>
                                                        {task.priority}
                                                    </span>
                                                </div>
                                                <h4 className="font-medium truncate">{task.title}</h4>
                                                {task.description && (
                                                    <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                                                        {task.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                <Clock className="h-3 w-3" />
                                                {formatRelativeTime(task.completedAt || task.updatedAt)}
                                            </div>
                                            {task.agentName && (
                                                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1 justify-end">
                                                    <User className="h-3 w-3" />
                                                    {task.agentName}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {sortedTasks.length === 0 && (
                    <div className="glass-card p-12 text-center">
                        <Archive className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-muted-foreground">
                            No hay tareas completadas
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            Las tareas completadas apareceran aqui
                        </p>
                    </div>
                )}
            </div>

            {/* Task Detail Drawer */}
            <TaskDetailDrawer
                taskId={selectedTaskId}
                isOpen={selectedTaskId !== null}
                onClose={handleCloseDrawer}
                onNavigateToProject={handleNavigateToProject}
            />
        </div>
    );
}
