# SOLARIA DFO - Estándares de Diseño UI

**Versión:** 1.0
**Fecha:** 2025-12-28
**Referencia:** MemoriesPage (diseño canónico)

---

## 1. Header Section

### Estructura HTML
```tsx
<div className="section-header">
    <div>
        <h1 className="section-title">Título de la Página</h1>
        <p className="section-subtitle">
            Descripción breve de la funcionalidad
        </p>
    </div>
    <div className="section-actions">
        {/* View Toggle */}
        <div className="view-toggle">
            <button className={cn('view-toggle-btn', viewMode === 'grid' && 'active')}>
                <LayoutGrid className="h-4 w-4" />
            </button>
            <button className={cn('view-toggle-btn', viewMode === 'list' && 'active')}>
                <List className="h-4 w-4" />
            </button>
        </div>
    </div>
</div>
```

### Medidas CSS
```css
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.section-title {
    font-size: 24px;
    font-weight: 700;
    color: var(--text-primary);
}

.section-subtitle {
    font-size: 13px;
    color: var(--text-muted);
    margin-top: 2px;
}

.section-actions {
    display: flex;
    gap: 12px;
    align-items: center;
}
```

---

## 2. Stats Row

### Estructura HTML
```tsx
<div className="dashboard-stats-row">
    <div className="stat-card">
        <div className="stat-icon projects">
            <IconComponent className="h-5 w-5" />
        </div>
        <div className="stat-content">
            <div className="stat-label">Label en Mayúsculas</div>
            <div className="stat-value">{formatNumber(value)}</div>
        </div>
    </div>
    {/* Repetir para cada stat */}
</div>
```

### Medidas CSS
```css
.dashboard-stats-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
}

.stat-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
}

.stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.stat-label {
    font-size: 11px;
    text-transform: uppercase;
    color: var(--text-muted);
    font-weight: 500;
}

.stat-value {
    font-size: 24px;
    font-weight: 700;
    color: var(--text-primary);
}
```

### Colores de Iconos Estándar
```css
.stat-icon.projects { background: rgba(59, 130, 246, 0.15); color: #60a5fa; }
.stat-icon.tasks { background: rgba(34, 197, 94, 0.15); color: #4ade80; }
.stat-icon.active { background: rgba(245, 158, 11, 0.15); color: #fbbf24; }
.stat-icon.agents { background: rgba(168, 85, 247, 0.15); color: #c084fc; }
.stat-icon.green { background: rgba(34, 197, 94, 0.15); color: #4ade80; }
.stat-icon.orange { background: rgba(245, 158, 11, 0.15); color: #fbbf24; }
```

---

## 3. Search & Filters Section

### Estructura HTML
```tsx
<div className="bg-card border border-border rounded-xl p-5">
    <div className="flex items-center gap-4 mb-4">
        <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
                type="text"
                placeholder="Buscar..."
                className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
        </div>
        <span className="text-sm text-muted-foreground">
            {count} items
        </span>
    </div>

    {/* Selectores/Tags */}
    <div className="flex items-center gap-2 flex-wrap">
        <Tag className="h-4 w-4 text-muted-foreground" />
        {/* Botones de filtro */}
    </div>
</div>
```

### Medidas
- **Padding del contenedor**: `p-5` (20px)
- **Gap entre elementos**: `gap-4` (16px)
- **Borde**: `border border-border`
- **Border radius**: `rounded-xl` (12px)
- **Input padding**: `pl-10 pr-4 py-2.5`
- **Icono search**: `h-4 w-4`, left-3

---

## 4. Content Cards (Grid View)

### Estructura HTML
```tsx
<div className="memory-card">
    {/* Header */}
    <div className="memory-header">
        <div className="memory-icon">
            <IconComponent className="h-4 w-4" />
        </div>
        <div className="memory-title-group">
            <h3 className="memory-title">Título del Item</h3>
            <span className="memory-id">#{id}</span>
        </div>
        <div className="memory-importance high">
            <TrendingUp className="h-3 w-3" />
            <span>95%</span>
        </div>
    </div>

    {/* Content preview */}
    <p className="memory-content">
        Contenido descriptivo del item...
    </p>

    {/* Tags */}
    <div className="memory-tags">
        <span className="memory-tag" style={{...}}>
            tag-name
        </span>
    </div>

    {/* Stats footer */}
    <div className="memory-stats">
        <div className="memory-stat">
            <Icon className="h-3 w-3" />
            <span>Valor</span>
        </div>
    </div>
</div>
```

### Medidas CSS
```css
.memory-card {
    background: hsl(var(--card));
    border: 1px solid hsl(var(--border));
    border-radius: var(--radius);
    padding: 16px;
    cursor: pointer;
}

.memory-header {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 12px;
}

.memory-icon {
    width: 32px;
    height: 32px;
    border-radius: var(--radius);
    background: hsl(var(--muted));
    display: flex;
    align-items: center;
    justify-content: center;
}

.memory-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.memory-id {
    font-size: 11px;
    color: var(--text-muted);
    font-family: 'SF Mono', 'Fira Code', monospace;
}

.memory-content {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 12px;
}

.memory-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 12px;
}

.memory-tag {
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 500;
}

.memory-stats {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--border-color);
}

.memory-stat {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    color: var(--text-muted);
}
```

---

## 5. List View (Tabla)

### Estructura HTML
```tsx
<div className="bg-card border border-border rounded-xl" style={{ padding: 0, overflow: 'hidden' }}>
    <table className="list-table" style={{ width: '100%', tableLayout: 'fixed' }}>
        <thead>
            <tr>
                <th style={{ width: '35%' }}>Columna 1</th>
                <th style={{ width: '25%' }}>Columna 2</th>
                <th style={{ width: '12%', textAlign: 'center' }}>Col 3</th>
                {/* Total width = 100% */}
            </tr>
        </thead>
        <tbody>
            <tr className="memory-row">
                <td>{/* Contenido */}</td>
            </tr>
        </tbody>
    </table>
</div>
```

### Medidas
- **Table layout**: `fixed` con width 100%
- **Columnas**: Usar porcentajes que sumen 100%
- **Padding wrapper**: `0` (sin padding en el contenedor)
- **Overflow**: `hidden` en wrapper
- **Row hover**: Aplicar clase `memory-row` o similar

---

## 6. View Toggle Component

### Estructura
```tsx
<div className="view-toggle">
    <button
        className={cn('view-toggle-btn', viewMode === 'grid' && 'active')}
        onClick={() => setViewMode('grid')}
    >
        <LayoutGrid className="h-4 w-4" />
    </button>
    <button
        className={cn('view-toggle-btn', viewMode === 'list' && 'active')}
        onClick={() => setViewMode('list')}
    >
        <List className="h-4 w-4" />
    </button>
</div>
```

### Implementación TypeScript
```tsx
type ViewMode = 'grid' | 'list';
const [viewMode, setViewMode] = useState<ViewMode>('grid');
```

---

## 7. Responsive Grid

### Grid de Cards
```css
.memories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 16px;
}
```

### Stats Row Responsive
```css
@media (max-width: 1024px) {
    .dashboard-stats-row {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 640px) {
    .dashboard-stats-row {
        grid-template-columns: 1fr;
    }
}
```

---

## 8. Colores de Tags/Badges

### Paleta Estándar
```tsx
const TAG_COLORS: Record<string, { bg: string; color: string }> = {
    decision: { bg: 'rgba(168, 85, 247, 0.15)', color: '#a855f7' },
    learning: { bg: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' },
    context: { bg: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' },
    requirement: { bg: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' },
    bug: { bg: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' },
    solution: { bg: 'rgba(16, 185, 129, 0.15)', color: '#10b981' },
    pattern: { bg: 'rgba(99, 102, 241, 0.15)', color: '#6366f1' },
    config: { bg: 'rgba(249, 115, 22, 0.15)', color: '#f97316' },
};
```

---

## 9. Espaciado Vertical Estándar

```tsx
<div className="space-y-6">
    {/* Header Section */}
    {/* Stats Row */}
    {/* Search/Filters */}
    {/* Content Grid/List */}
</div>
```

**Gap entre secciones principales**: `space-y-6` (24px)

---

## 10. Importaciones Estándar de Lucide

```tsx
import {
    LayoutGrid,
    List,
    Search,
    Tag,
    TrendingUp,
    Clock,
    Zap,
    Link2,
    Loader2,
    AlertCircle,
} from 'lucide-react';
```

---

## Resumen de Medidas Clave

| Elemento | Medida |
|----------|--------|
| **Section Title** | 24px, font-weight 700 |
| **Section Subtitle** | 13px, color muted |
| **Stat Card Padding** | 16px |
| **Stat Icon** | 48x48px, border-radius 12px |
| **Stat Label** | 11px, uppercase |
| **Stat Value** | 24px, font-weight 700 |
| **Card Padding** | 16px |
| **Card Icon** | 32x32px |
| **Card Title** | 14px, font-weight 600 |
| **Card Content** | 13px, line-clamp 3 |
| **Tag Padding** | 3px 8px |
| **Tag Font** | 11px, font-weight 500 |
| **Stats Footer Gap** | 12px |
| **Grid Gap** | 16px |
| **Section Spacing** | 24px (space-y-6) |

---

**Notas:**
- Todas las páginas del dashboard deben seguir esta estructura
- Los colores de iconos y tags deben ser consistentes
- El comportamiento hover debe aplicarse a todos los cards
- El toggle Grid/List debe estar presente en todas las páginas de listado
