import {
    ListChecks,
    Calendar,
    Clock,
    Hash,
    CheckCircle2,
    Loader2,
    CircleDot,
    Circle,
    AlertTriangle,
    FileText,
    User,
} from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogBody,
    DialogFooter,
} from '@/components/ui/dialog';
import { useTask, useTaskItems } from '@/hooks/useApi';
import { cn, formatDate } from '@/lib/utils';

const STATUS_CONFIG = {
    pending: { label: 'Pendiente', bg: 'bg-gray-500/10', color: 'text-gray-600', icon: Circle },
    in_progress: { label: 'En Progreso', bg: 'bg-purple-500/10', color: 'text-purple-600', icon: CircleDot },
    review: { label: 'En Revisión', bg: 'bg-blue-500/10', color: 'text-blue-600', icon: CircleDot },
    completed: { label: 'Completada', bg: 'bg-green-500/10', color: 'text-green-600', icon: CheckCircle2 },
    blocked: { label: 'Bloqueada', bg: 'bg-red-500/10', color: 'text-red-600', icon: AlertTriangle },
} as const;

const PRIORITY_CONFIG = {
    critical: { label: 'Crítico', color: 'text-red-500', bg: 'bg-red-500/10' },
    high: { label: 'Alto', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    medium: { label: 'Medio', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    low: { label: 'Bajo', color: 'text-blue-500', bg: 'bg-blue-500/10' },
} as const;

const TYPE_CONFIG = {
    feature: { label: 'Feature', color: 'text-green-500' },
    bug: { label: 'Bug', color: 'text-red-500' },
    enhancement: { label: 'Mejora', color: 'text-blue-500' },
    documentation: { label: 'Docs', color: 'text-gray-500' },
    research: { label: 'Research', color: 'text-purple-500' },
    maintenance: { label: 'Mantenimiento', color: 'text-yellow-500' },
} as const;

interface TaskDetailModalProps {
    taskId: number | null;
    isOpen: boolean;
    onClose: () => void;
}

export function TaskDetailModal({
    taskId,
    isOpen,
    onClose,
}: TaskDetailModalProps) {
    const shouldFetch = isOpen && taskId !== null && taskId > 0;
    const { data: task, isLoading: taskLoading } = useTask(shouldFetch ? taskId! : 0);
    const { data: itemsData, isLoading: itemsLoading } = useTaskItems(shouldFetch ? taskId! : 0);

    const isLoading = taskLoading || itemsLoading;
    const items = itemsData || [];
    const statusConfig = task ? STATUS_CONFIG[task.status as keyof typeof STATUS_CONFIG] : null;
    const priorityConfig = task ? PRIORITY_CONFIG[task.priority as keyof typeof PRIORITY_CONFIG] : null;
    const typeConfig = task ? TYPE_CONFIG[task.type as keyof typeof TYPE_CONFIG] : null;

    // Calculate progress from items
    const completedItems = items.filter((item: any) => item.isCompleted).length;
    const totalItems = items.length;
    const progressPercent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : task?.progress || 0;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col">
                <DialogClose onClose={onClose} />

                {!shouldFetch ? (
                    <div className="flex items-center justify-center py-12">
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                ) : isLoading ? (
                    <div className="flex items-center justify-center py-12">
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                ) : task ? (
                    <>
                        <DialogHeader>
                            <div className="flex items-start gap-3 pr-8">
                                {/* Icon */}
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <ListChecks className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-mono text-muted-foreground">
                                            {task.taskCode || `T-${String(task.taskNumber).padStart(3, '0')}`}
                                        </span>
                                        {statusConfig && (
                                            <span className={cn('inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium', statusConfig.bg, statusConfig.color)}>
                                                <statusConfig.icon className="h-3 w-3" />
                                                {statusConfig.label}
                                            </span>
                                        )}
                                    </div>
                                    <DialogTitle className="text-lg font-semibold leading-tight">
                                        {task.title}
                                    </DialogTitle>
                                </div>
                            </div>
                        </DialogHeader>

                        <DialogBody className="flex-1 overflow-y-auto space-y-5 pt-2">
                            {/* Quick Info Row */}
                            <div className="flex flex-wrap gap-2">
                                {priorityConfig && (
                                    <span className={cn('inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium', priorityConfig.bg, priorityConfig.color)}>
                                        {priorityConfig.label}
                                    </span>
                                )}
                                {typeConfig && (
                                    <span className={cn('inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-muted', typeConfig.color)}>
                                        {typeConfig.label}
                                    </span>
                                )}
                                {task.epicName && (
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-purple-500/10 text-purple-500">
                                        Epic: {task.epicName}
                                    </span>
                                )}
                                {task.sprintName && (
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-yellow-500/10 text-yellow-500">
                                        Sprint: {task.sprintName}
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            {task.description && (
                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                                        <FileText className="h-4 w-4" />
                                        Descripción
                                    </h4>
                                    <p className="text-sm text-muted-foreground whitespace-pre-wrap bg-muted/50 rounded-lg p-3">
                                        {task.description}
                                    </p>
                                </div>
                            )}

                            {/* Progress */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="flex items-center gap-2 text-muted-foreground">
                                        <Hash className="h-4 w-4" />
                                        Progreso
                                    </span>
                                    <span className="font-medium">{progressPercent}%</span>
                                </div>
                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary rounded-full transition-all duration-300"
                                        style={{ width: `${progressPercent}%` }}
                                    />
                                </div>
                                {totalItems > 0 && (
                                    <p className="text-xs text-muted-foreground">
                                        {completedItems} de {totalItems} subtareas completadas
                                    </p>
                                )}
                            </div>

                            {/* Time Estimates */}
                            <div className="grid grid-cols-2 gap-4">
                                {task.estimatedHours && (
                                    <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                                        <Clock className="h-4 w-4 text-muted-foreground" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Estimado</p>
                                            <p className="text-sm font-medium">{task.estimatedHours}h</p>
                                        </div>
                                    </div>
                                )}
                                {task.actualHours !== undefined && task.actualHours > 0 && (
                                    <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                                        <Clock className="h-4 w-4 text-muted-foreground" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Real</p>
                                            <p className="text-sm font-medium">{task.actualHours}h</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Dates */}
                            {task.dueDate && (
                                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Fecha límite</p>
                                        <p className="text-sm font-medium">{formatDate(task.dueDate)}</p>
                                    </div>
                                </div>
                            )}

                            {/* Agent Assignment */}
                            {task.agentName && (
                                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                                    <User className="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Asignado a</p>
                                        <p className="text-sm font-medium">{task.agentName}</p>
                                    </div>
                                </div>
                            )}

                            {/* Subtasks / Items */}
                            {items.length > 0 && (
                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle2 className="h-4 w-4" />
                                        Subtareas ({completedItems}/{totalItems})
                                    </h4>
                                    <ul className="space-y-1">
                                        {items.map((item: any) => (
                                            <li
                                                key={item.id}
                                                className={cn(
                                                    'flex items-center gap-2 p-2 rounded text-sm',
                                                    item.isCompleted ? 'text-muted-foreground line-through' : ''
                                                )}
                                            >
                                                {item.isCompleted ? (
                                                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                                                ) : (
                                                    <Circle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                                )}
                                                <span className="flex-1">{item.title}</span>
                                                {item.estimatedMinutes && (
                                                    <span className="text-xs text-muted-foreground">
                                                        {item.estimatedMinutes}min
                                                    </span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Notes */}
                            {task.notes && (
                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium text-muted-foreground">Notas</h4>
                                    <p className="text-sm text-muted-foreground whitespace-pre-wrap bg-muted/50 rounded-lg p-3">
                                        {task.notes}
                                    </p>
                                </div>
                            )}
                        </DialogBody>

                        <DialogFooter className="border-t pt-4 mt-2">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-sm font-medium rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                            >
                                Cerrar
                            </button>
                        </DialogFooter>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                        <AlertTriangle className="h-12 w-12 mb-4" />
                        <p>No se encontró la tarea</p>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
