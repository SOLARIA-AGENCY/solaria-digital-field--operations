import { useEffect, useState } from 'react';
import { Briefcase, Code2, Settings, DollarSign, AlertCircle, Loader2 } from 'lucide-react';
import { api } from '@/lib/api';

interface ExecutiveDashboard {
    role: string;
    title: string;
    data?: any;
    isLoading: boolean;
    error?: string;
}

export function CLevelPage() {
    const [dashboards, setDashboards] = useState<Record<string, ExecutiveDashboard>>({
        ceo: { role: 'CEO', title: 'Chief Executive Officer', isLoading: true },
        cto: { role: 'CTO', title: 'Chief Technology Officer', isLoading: true },
        coo: { role: 'COO', title: 'Chief Operating Officer', isLoading: true },
        cfo: { role: 'CFO', title: 'Chief Financial Officer', isLoading: true },
    });

    useEffect(() => {
        const fetchDashboards = async () => {
            const roles = ['ceo', 'cto', 'coo', 'cfo'];

            for (const role of roles) {
                try {
                    const response = await api.get(`/csuite/${role}`);
                    setDashboards(prev => ({
                        ...prev,
                        [role]: {
                            ...prev[role],
                            data: response.data,
                            isLoading: false,
                        }
                    }));
                } catch (error: any) {
                    setDashboards(prev => ({
                        ...prev,
                        [role]: {
                            ...prev[role],
                            isLoading: false,
                            error: error.message || 'Error al cargar datos',
                        }
                    }));
                }
            }
        };

        fetchDashboards();
    }, []);

    const getIcon = (role: string) => {
        switch (role.toLowerCase()) {
            case 'ceo': return Briefcase;
            case 'cto': return Code2;
            case 'coo': return Settings;
            case 'cfo': return DollarSign;
            default: return Briefcase;
        }
    };

    const getIconClass = (role: string) => {
        switch (role.toLowerCase()) {
            case 'ceo': return 'bg-purple-500/10 text-purple-500';
            case 'cto': return 'bg-blue-500/10 text-blue-500';
            case 'coo': return 'bg-green-500/10 text-green-500';
            case 'cfo': return 'bg-amber-500/10 text-amber-500';
            default: return 'bg-gray-500/10 text-gray-500';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="section-header">
                <div>
                    <h1 className="section-title">C-Level Dashboards</h1>
                    <p className="section-subtitle">
                        Vista ejecutiva por área - Endpoints activos listos para implementación
                    </p>
                </div>
            </div>

            {/* Info Banner */}
            <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                    <p className="text-sm font-medium text-blue-500">
                        Template básico de recordatorio
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Los endpoints de backend están activos y funcionales. Esta página muestra los datos disponibles.
                        Implementación UI completa pendiente.
                    </p>
                </div>
            </div>

            {/* Dashboards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {Object.entries(dashboards).map(([key, dashboard]) => {
                    const Icon = getIcon(dashboard.role);

                    return (
                        <div key={key} className="bg-card border border-border rounded-lg overflow-hidden">
                            {/* Dashboard Header */}
                            <div className="p-4 border-b border-border bg-muted/30">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2.5 rounded-lg ${getIconClass(dashboard.role)}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-foreground">{dashboard.role}</h2>
                                        <p className="text-xs text-muted-foreground">{dashboard.title}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="p-4">
                                {dashboard.isLoading ? (
                                    <div className="flex items-center justify-center py-8">
                                        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                                    </div>
                                ) : dashboard.error ? (
                                    <div className="flex items-center gap-2 py-8 justify-center text-destructive">
                                        <AlertCircle className="h-4 w-4" />
                                        <span className="text-sm">{dashboard.error}</span>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {/* Title and Role */}
                                        {dashboard.data?.title && (
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground">Vista</p>
                                                <p className="text-base font-semibold">{dashboard.data.title}</p>
                                            </div>
                                        )}

                                        {/* Focus Areas */}
                                        {dashboard.data?.focus && Array.isArray(dashboard.data.focus) && (
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground mb-2">Áreas de enfoque</p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {dashboard.data.focus.map((item: string, idx: number) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2 py-1 text-xs bg-muted rounded-md text-foreground"
                                                        >
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* KPIs */}
                                        {dashboard.data?.kpis && (
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground mb-2">KPIs</p>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {Object.entries(dashboard.data.kpis).map(([key, value]) => (
                                                        <div key={key} className="bg-muted/50 p-3 rounded-lg">
                                                            <p className="text-xs text-muted-foreground capitalize">
                                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                                            </p>
                                                            <p className="text-lg font-bold text-foreground mt-1">
                                                                {typeof value === 'number' ? value : String(value)}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Projects (CEO/CTO) */}
                                        {dashboard.data?.projects && Array.isArray(dashboard.data.projects) && (
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground mb-2">
                                                    Proyectos ({dashboard.data.projects.length})
                                                </p>
                                                <div className="text-xs text-muted-foreground">
                                                    {dashboard.data.projects.slice(0, 3).map((p: any) => p.name).join(', ')}
                                                    {dashboard.data.projects.length > 3 && ` +${dashboard.data.projects.length - 3} más`}
                                                </div>
                                            </div>
                                        )}

                                        {/* Tech Stack (CTO) */}
                                        {dashboard.data?.techStack && (
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground mb-2">Stack Tecnológico</p>
                                                <div className="space-y-2">
                                                    {Object.entries(dashboard.data.techStack).map(([category, items]: [string, any]) => (
                                                        <div key={category}>
                                                            <p className="text-xs font-medium capitalize text-muted-foreground">
                                                                {category}
                                                            </p>
                                                            <p className="text-xs text-foreground">
                                                                {Array.isArray(items) ? items.join(', ') : String(items)}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* API Endpoint */}
                                        <div className="pt-3 border-t border-border">
                                            <p className="text-xs text-muted-foreground font-mono">
                                                GET /api/csuite/{key}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Footer Note */}
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground text-center max-w-2xl">
                    💡 <strong>Nota:</strong> Esta es una vista básica de los datos disponibles en cada endpoint ejecutivo.
                    Los datos se actualizan en tiempo real desde la base de datos.
                    Pendiente: diseño UI completo, gráficas, filtros y acciones específicas por rol.
                </p>
            </div>
        </div>
    );
}
