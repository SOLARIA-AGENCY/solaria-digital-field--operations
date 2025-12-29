import { useState } from 'react';
import {
    LayoutGrid,
    List,
    Search,
    Tag,
    TrendingUp,
    Clock,
    Zap,
    Briefcase,
    Users,
    Target,
    AlertCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * PÁGINA PLANTILLA - OFICINA
 *
 * Esta página sirve como referencia visual de todos los elementos estándar
 * del diseño SOLARIA DFO. NO contiene datos reales.
 *
 * Elementos incluidos:
 * - Header Section (título, subtítulo, acciones)
 * - Stats Row (4 cards con iconos)
 * - Search & Filters Section
 * - View Toggle (Grid/List)
 * - Content Grid (cards de ejemplo)
 * - Content List (tabla de ejemplo)
 */

type ViewMode = 'grid' | 'list';

// Datos de ejemplo para plantilla
const EXAMPLE_STATS = [
    { icon: Briefcase, label: 'Total Items', value: '127', iconClass: 'projects' },
    { icon: Target, label: 'En Progreso', value: '45', iconClass: 'active' },
    { icon: Users, label: 'Asignados', value: '12', iconClass: 'agents' },
    { icon: TrendingUp, label: 'Completados', value: '82', iconClass: 'green' },
];

const EXAMPLE_TAGS = [
    { name: 'activo', count: 15, bg: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' },
    { name: 'pendiente', count: 8, bg: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' },
    { name: 'crítico', count: 3, bg: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' },
    { name: 'normal', count: 24, bg: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' },
    { name: 'bajo', count: 10, bg: 'rgba(100, 116, 139, 0.15)', color: '#64748b' },
];

const EXAMPLE_ITEMS = [
    {
        id: 1,
        title: 'Ejemplo de Item con Título Largo que Se Trunca en Dos Líneas Máximo',
        subtitle: 'ITEM-001',
        status: 'activo',
        importance: 85,
        description: 'Este es un ejemplo de descripción de contenido que muestra cómo se ve el texto en el card. La descripción se trunca a 3 líneas máximo para mantener un diseño limpio y consistente.',
        tags: ['activo', 'crítico'],
        stats: [
            { icon: Zap, value: '12 accesos' },
            { icon: Clock, value: 'hace 2h' },
        ],
    },
    {
        id: 2,
        title: 'Segundo Ejemplo de Item',
        subtitle: 'ITEM-002',
        status: 'pendiente',
        importance: 60,
        description: 'Otro ejemplo de card con diferente nivel de importancia y tags.',
        tags: ['pendiente', 'normal'],
        stats: [
            { icon: Zap, value: '5 accesos' },
            { icon: Clock, value: 'hace 1d' },
        ],
    },
    {
        id: 3,
        title: 'Tercer Item de Ejemplo',
        subtitle: 'ITEM-003',
        status: 'normal',
        importance: 40,
        description: 'Un ejemplo con importancia baja para mostrar los diferentes estados visuales.',
        tags: ['bajo'],
        stats: [
            { icon: Zap, value: '0 accesos' },
            { icon: Clock, value: 'hace 3d' },
        ],
    },
    {
        id: 4,
        title: 'Cuarto Ejemplo',
        subtitle: 'ITEM-004',
        status: 'activo',
        importance: 95,
        description: 'Item con importancia muy alta para demostrar el indicador verde.',
        tags: ['activo', 'crítico', 'pendiente'],
        stats: [
            { icon: Zap, value: '45 accesos' },
            { icon: Clock, value: 'hace 30m' },
        ],
    },
    {
        id: 5,
        title: 'Quinto Item',
        subtitle: 'ITEM-005',
        status: 'normal',
        importance: 50,
        description: 'Ejemplo con importancia media para mostrar el badge azul.',
        tags: ['normal'],
        stats: [
            { icon: Zap, value: '8 accesos' },
            { icon: Clock, value: 'hace 5h' },
        ],
    },
    {
        id: 6,
        title: 'Sexto Ejemplo de Item',
        subtitle: 'ITEM-006',
        status: 'bajo',
        importance: 25,
        description: 'Card con baja prioridad para completar la demostración de estados.',
        tags: ['bajo', 'normal'],
        stats: [
            { icon: Zap, value: '2 accesos' },
            { icon: Clock, value: 'hace 1w' },
        ],
    },
];

function ExampleCard({ item, onClick }: { item: typeof EXAMPLE_ITEMS[0]; onClick?: () => void }) {
    const importancePercent = item.importance;
    const importanceClass = importancePercent >= 70 ? 'high' : importancePercent >= 40 ? 'medium' : 'low';

    return (
        <div onClick={onClick} className="memory-card">
            {/* Header */}
            <div className="memory-header">
                <div className="memory-icon">
                    <Briefcase className="h-4 w-4" />
                </div>
                <div className="memory-title-group">
                    <h3 className="memory-title">{item.title}</h3>
                    <span className="memory-id">#{item.subtitle}</span>
                </div>
                <div className={cn('memory-importance', importanceClass)}>
                    <TrendingUp className="h-3 w-3" />
                    <span>{importancePercent}%</span>
                </div>
            </div>

            {/* Content preview */}
            <p className="memory-content">{item.description}</p>

            {/* Tags */}
            <div className="memory-tags">
                {item.tags.map((tag) => {
                    const config = EXAMPLE_TAGS.find(t => t.name === tag);
                    return (
                        <span
                            key={tag}
                            className="memory-tag"
                            style={{ backgroundColor: config?.bg, color: config?.color }}
                        >
                            {tag}
                        </span>
                    );
                })}
            </div>

            {/* Stats footer */}
            <div className="memory-stats">
                {item.stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div key={idx} className="memory-stat">
                            <Icon className="h-3 w-3" />
                            <span>{stat.value}</span>
                        </div>
                    );
                })}
                <div className="memory-stat created">
                    Item de ejemplo
                </div>
            </div>
        </div>
    );
}

function ExampleRow({ item, onClick }: { item: typeof EXAMPLE_ITEMS[0]; onClick?: () => void }) {
    const importancePercent = item.importance;

    return (
        <tr onClick={onClick} className="memory-row">
            <td>
                <div className="flex items-center gap-3">
                    <div className="memory-icon-sm">
                        <Briefcase className="h-4 w-4" />
                    </div>
                    <div>
                        <div className="memory-title-sm">{item.title}</div>
                        <div className="memory-id-sm">#{item.subtitle}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map((tag) => {
                        const config = EXAMPLE_TAGS.find(t => t.name === tag);
                        return (
                            <span
                                key={tag}
                                className="memory-tag-sm"
                                style={{ backgroundColor: config?.bg, color: config?.color }}
                            >
                                {tag}
                            </span>
                        );
                    })}
                </div>
            </td>
            <td className="text-center">
                <span className="stat-value-sm">{importancePercent}%</span>
            </td>
            <td className="text-center">
                <span className="stat-value-sm">{item.stats[0].value.split(' ')[0]}</span>
            </td>
            <td className="text-center text-muted-foreground text-sm">
                {item.stats[1].value}
            </td>
        </tr>
    );
}

export function OfficePage() {
    const [search, setSearch] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [viewMode, setViewMode] = useState<ViewMode>('grid');

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    return (
        <div className="space-y-6">
            {/* Header Section */}
            <div className="section-header">
                <div>
                    <h1 className="section-title">Oficina - Plantilla de Diseño</h1>
                    <p className="section-subtitle">
                        Página de referencia con todos los elementos estándar del sistema
                    </p>
                </div>
                <div className="section-actions">
                    {/* View Toggle */}
                    <div className="view-toggle">
                        <button
                            className={cn('view-toggle-btn', viewMode === 'grid' && 'active')}
                            onClick={() => setViewMode('grid')}
                            title="Vista Grid"
                        >
                            <LayoutGrid className="h-4 w-4" />
                        </button>
                        <button
                            className={cn('view-toggle-btn', viewMode === 'list' && 'active')}
                            onClick={() => setViewMode('list')}
                            title="Vista Lista"
                        >
                            <List className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="dashboard-stats-row">
                {EXAMPLE_STATS.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div key={idx} className="stat-card">
                            <div className={cn('stat-icon', stat.iconClass)}>
                                <Icon className="h-5 w-5" />
                            </div>
                            <div className="stat-content">
                                <div className="stat-label">{stat.label}</div>
                                <div className="stat-value">{stat.value}</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Search and Filters */}
            <div className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-4 mb-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Buscar items (mínimo 3 caracteres)..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <span className="text-sm text-muted-foreground">
                        {EXAMPLE_ITEMS.length} items
                    </span>
                </div>

                {/* Tags filter */}
                <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    {EXAMPLE_TAGS.map((tag) => {
                        const isSelected = selectedTags.includes(tag.name);
                        return (
                            <button
                                key={tag.name}
                                onClick={() => toggleTag(tag.name)}
                                className={cn(
                                    'memory-tag-filter',
                                    isSelected && 'selected'
                                )}
                                style={
                                    isSelected
                                        ? { backgroundColor: tag.color, color: '#fff' }
                                        : { backgroundColor: tag.bg, color: tag.color }
                                }
                            >
                                {tag.name} ({tag.count})
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content Grid/List */}
            {viewMode === 'grid' ? (
                <div className="memories-grid">
                    {EXAMPLE_ITEMS.map((item) => (
                        <ExampleCard key={item.id} item={item} />
                    ))}
                </div>
            ) : (
                <div className="bg-card border border-border rounded-xl" style={{ padding: 0, overflow: 'hidden' }}>
                    <table className="list-table" style={{ width: '100%', tableLayout: 'fixed' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '35%' }}>Item</th>
                                <th style={{ width: '25%' }}>Tags</th>
                                <th style={{ width: '12%', textAlign: 'center' }}>Importancia</th>
                                <th style={{ width: '12%', textAlign: 'center' }}>Accesos</th>
                                <th style={{ width: '16%', textAlign: 'center' }}>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {EXAMPLE_ITEMS.map((item) => (
                                <ExampleRow key={item.id} item={item} />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Info Box */}
            <div className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-solaria flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <h3 className="font-semibold text-sm mb-2">Página Plantilla de Referencia</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Esta página muestra todos los elementos estándar del sistema de diseño SOLARIA DFO.
                            Incluye cards de estadísticas, barra de búsqueda, selectores de tags, vista Grid/List,
                            y todos los tamaños y espaciados estándar. Usa esta página como referencia visual
                            al implementar nuevas páginas en el dashboard.
                        </p>
                        <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                            <div>• Título: 24px, font-weight 700</div>
                            <div>• Subtítulo: 13px, color muted</div>
                            <div>• Card padding: 16px</div>
                            <div>• Icon size: 32x32px (cards), 48x48px (stats)</div>
                            <div>• Card title: 14px, font-weight 600</div>
                            <div>• Card content: 13px, line-clamp 3</div>
                            <div>• Tag padding: 3px 8px, font-size 11px</div>
                            <div>• Grid gap: 16px</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
