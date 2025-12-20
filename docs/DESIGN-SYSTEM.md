# SOLARIA Design System v3.2.0

**Unified Design System for DFO and OFFICE Dashboards**
Last Updated: 2025-12-20

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Icons](#icons)
7. [Animations](#animations)
8. [CSS Variables Reference](#css-variables-reference)

---

## Brand Identity

### Logo

- **Primary Logo**: `solaria-logo.png` (PNG with transparency)
- **Dimensions**: 32x32px (sidebar), scalable SVG available
- **Usage**: Always displayed with "SOLARIA" text and product badge (DFO/OFFICE)

### Product Badges

| Product | Badge Text | Context |
|---------|------------|---------|
| DFO | `DFO` | Digital Field Operations - Technical dashboard |
| OFFICE | `OFFICE` | Project & Account Management - Business dashboard |

### Brand Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| SOLARIA Orange | `#f6921d` | `--accent` | Primary accent, CTAs, highlights |
| Orange Dark | `#e07d0a` | `--accent-dark` | Hover states, emphasis |
| Orange Light | `rgba(246, 146, 29, 0.12)` | `--accent-bg` | Backgrounds, subtle highlights |

---

## Color Palette

### Background Colors

| Name | Light Mode | Dark Mode | CSS Variable |
|------|------------|-----------|--------------|
| Primary BG | `#f6f6f8` | `#0a0a0f` | `--bg-primary` |
| Secondary BG | `#ffffff` | `#12121a` | `--bg-secondary` |
| Card BG | `#ffffff` | `#1a1a24` | `--bg-card` |
| Sidebar BG | `#ffffff` | `#0f0f14` | `--bg-sidebar` |
| Header BG | `#ffffff` | `#12121a` | `--bg-header` |

### Text Colors

| Name | Light Mode | Dark Mode | CSS Variable |
|------|------------|-----------|--------------|
| Primary | `#111827` | `#f1f5f9` | `--text-primary` |
| Secondary | `#6b7280` | `#94a3b8` | `--text-secondary` |
| Muted | `#9ca3af` | `#64748b` | `--text-muted` |

### Semantic Colors (Tailwind 500 Shades)

| Name | Color | Background | CSS Variables |
|------|-------|------------|---------------|
| Positive/Success | `#22c55e` | `rgba(34, 197, 94, 0.12)` | `--color-positive`, `--color-positive-bg` |
| Negative/Error | `#ef4444` | `rgba(239, 68, 68, 0.12)` | `--color-negative`, `--color-negative-bg` |
| Warning | `#f59e0b` | `rgba(245, 158, 11, 0.12)` | `--color-warning`, `--color-warning-bg` |
| Info | `#3b82f6` | `rgba(59, 130, 246, 0.12)` | `--color-info`, `--color-info-bg` |
| Neutral | `#6b7280` | - | `--color-neutral` |

### Phase Colors

| Phase | Color | CSS Variable |
|-------|-------|--------------|
| Planning | `#8b5cf6` (Purple) | `--phase-planning` |
| Development | `#3b82f6` (Blue) | `--phase-development` |
| Testing | `#f59e0b` (Amber) | `--phase-testing` |
| Production | `#22c55e` (Green) | `--phase-production` |

### Status Colors

| Status | Color | Background | Usage |
|--------|-------|------------|-------|
| In Progress | `#3b82f6` | `rgba(59, 130, 246, 0.12)` | Active tasks/projects |
| At Risk | `#ef4444` | `rgba(239, 68, 68, 0.12)` | Delayed/problematic items |
| Paused | `#f59e0b` | `rgba(245, 158, 11, 0.12)` | On hold items |
| Completed | `#22c55e` | `rgba(34, 197, 94, 0.12)` | Finished items |

---

## Typography

### Font Family

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale

| Element | Size | Weight | Line Height | CSS Class |
|---------|------|--------|-------------|-----------|
| H1 | 32px | 700 | 1.2 | `.heading-1` |
| H2 | 24px | 600 | 1.3 | `.heading-2` |
| H3 | 18px | 600 | 1.4 | `.heading-3` |
| Body | 14px | 400 | 1.5 | `.body-text` |
| Small | 12px | 500 | 1.4 | `.text-small` |
| Caption | 11px | 400 | 1.3 | `.text-caption` |
| Label | 10px | 600 | 1.2 | `.text-label` (uppercase) |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, descriptions |
| Medium | 500 | Secondary text, captions |
| Semibold | 600 | Headings H2-H3, emphasis |
| Bold | 700 | H1, strong emphasis |

---

## Spacing & Layout

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px | Tight spacing, badge padding |
| `--space-sm` | 8px | Component internal spacing |
| `--space-md` | 16px | Card padding, gaps |
| `--space-lg` | 24px | Section spacing |
| `--space-xl` | 32px | Page margins |
| `--space-2xl` | 48px | Large section gaps |

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│ Header (height: 64px, fixed)                            │
├──────────────┬──────────────────────────────────────────┤
│              │                                          │
│   Sidebar    │         Content Area                     │
│  (260px)     │    (flex: 1, padding: 24px)             │
│              │                                          │
│              │                                          │
├──────────────┴──────────────────────────────────────────┤
│ Footer (height: 48px, status bar)                       │
└─────────────────────────────────────────────────────────┘
```

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Badges, small elements |
| `--radius-md` | 8px | Buttons, inputs |
| `--radius-lg` | 12px | Cards, modals |
| `--radius-xl` | 16px | Large containers |
| `--radius-full` | 9999px | Pills, avatars |

---

## Components

### Buttons

```css
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s ease;
}
```

| Variant | Background | Text | Border |
|---------|------------|------|--------|
| Primary | `--accent` | white | none |
| Secondary | transparent | `--text-primary` | `--border` |
| Disabled | `--bg-secondary` | `--text-muted` | none |

### Status Badges

```css
.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
}
```

| Status | Background | Text |
|--------|------------|------|
| `.status-progress` | `rgba(59, 130, 246, 0.12)` | `#3b82f6` |
| `.status-risk` | `rgba(239, 68, 68, 0.12)` | `#ef4444` |
| `.status-paused` | `rgba(245, 158, 11, 0.12)` | `#f59e0b` |
| `.status-completed` | `rgba(34, 197, 94, 0.12)` | `#22c55e` |

### Priority Badges

```css
.priority-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
}
```

| Priority | Background | Text |
|----------|------------|------|
| Critical | `rgba(239, 68, 68, 0.12)` | `#ef4444` |
| High | `rgba(245, 158, 11, 0.12)` | `#f59e0b` |
| Medium | `rgba(59, 130, 246, 0.12)` | `#3b82f6` |
| Low | `rgba(107, 114, 128, 0.12)` | `#6b7280` |

### Cards

```css
.card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
}

.card-title {
    font-size: 12px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 6px;
}
```

### Tags

```css
.tag {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 500;
    background: var(--bg-secondary);
    color: var(--text-secondary);
}
```

| Tag Category | Background | Text |
|--------------|------------|------|
| Tech Stack | `rgba(139, 92, 246, 0.12)` | `#8b5cf6` |
| Industry | `rgba(59, 130, 246, 0.12)` | `#3b82f6` |
| Type | `rgba(34, 197, 94, 0.12)` | `#22c55e` |

### Progress Bars

```css
.progress-bar {
    height: 6px;
    background: var(--bg-secondary);
    border-radius: 3px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    border-radius: 3px;
    transition: width 0.3s ease;
}
```

### Tables

```css
.data-table {
    width: 100%;
    border-collapse: collapse;
}

.data-table th {
    text-align: left;
    padding: 12px 16px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--text-muted);
    border-bottom: 1px solid var(--border);
}

.data-table td {
    padding: 14px 16px;
    font-size: 13px;
    border-bottom: 1px solid var(--border);
}

.data-table tr:hover {
    background: var(--bg-secondary);
}
```

### Mini Trello (Equalizer)

Visual representation of task distribution across phases:

```
┌────┐ ┌────┐ ┌────┐ ┌────┐
│ BL │ │ TD │ │ DO │ │ DN │
│████│ │████│ │████│ │████│
│████│ │████│ │    │ │████│
│████│ │    │ │    │ │████│
│  3 │ │  5 │ │  2 │ │  7 │
└────┘ └────┘ └────┘ └────┘
```

| Column | Label | Color |
|--------|-------|-------|
| Backlog | BL | `#8b5cf6` |
| To Do | TD | `#3b82f6` |
| Doing | DO | `#f59e0b` |
| Done | DN | `#22c55e` |

---

## Icons

### Icon System

- **Library**: Lucide Icons (https://lucide.dev)
- **Size**: 16px (inline), 20px (navigation), 24px (headers)
- **Stroke**: 1.5px

### Common Icons

| Icon | Usage | Code |
|------|-------|------|
| Dashboard | Navigation | `<i class="icon">📊</i>` |
| Projects | Navigation | `<i class="icon">📁</i>` |
| Clients | Navigation | `<i class="icon">👥</i>` |
| Agents | Navigation | `<i class="icon">🤖</i>` |
| Design | Navigation | `<i class="icon">🎨</i>` |
| Reports | Navigation | `<i class="icon">📈</i>` |
| Settings | Actions | `<i class="icon">⚙️</i>` |
| Notifications | Header | `<i class="icon">🔔</i>` |

---

## Animations

### Transitions

```css
:root {
    --transition-fast: 0.15s ease;
    --transition-normal: 0.2s ease;
    --transition-slow: 0.3s ease;
}
```

### Common Animations

```css
/* Fade In */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
    from { transform: translateY(10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

/* Pulse (for loading states) */
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* Skeleton Loading */
@keyframes skeleton {
    0% { background-position: -200px 0; }
    100% { background-position: calc(200px + 100%) 0; }
}
```

### Hover States

- Buttons: `background-color` transition
- Cards: `box-shadow` and `transform: translateY(-2px)`
- Table rows: `background-color` change
- Links: `color` transition

---

## CSS Variables Reference

### Complete Variable List

```css
:root {
    /* Brand */
    --accent: #f6921d;
    --accent-dark: #e07d0a;
    --accent-bg: rgba(246, 146, 29, 0.12);

    /* Backgrounds (Light Mode) */
    --bg-primary: #f6f6f8;
    --bg-secondary: #ffffff;
    --bg-card: #ffffff;
    --bg-sidebar: #ffffff;
    --bg-header: #ffffff;

    /* Text */
    --text-primary: #111827;
    --text-secondary: #6b7280;
    --text-muted: #9ca3af;

    /* Borders */
    --border: #e6e8ef;
    --border-light: #f1f5f9;

    /* Semantic Colors */
    --color-positive: #22c55e;
    --color-positive-bg: rgba(34, 197, 94, 0.12);
    --color-negative: #ef4444;
    --color-negative-bg: rgba(239, 68, 68, 0.12);
    --color-warning: #f59e0b;
    --color-warning-bg: rgba(245, 158, 11, 0.12);
    --color-info: #3b82f6;
    --color-info-bg: rgba(59, 130, 246, 0.12);
    --color-neutral: #6b7280;

    /* Phase Colors */
    --phase-planning: #8b5cf6;
    --phase-development: #3b82f6;
    --phase-testing: #f59e0b;
    --phase-production: #22c55e;

    /* Spacing */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-2xl: 48px;

    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-full: 9999px;

    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.2s ease;
    --transition-slow: 0.3s ease;

    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}

/* Dark Mode Overrides (DFO Default) */
@media (prefers-color-scheme: dark) {
    :root {
        /* Backgrounds (Dark Mode) */
        --bg-primary: #0a0a0f;
        --bg-secondary: #12121a;
        --bg-tertiary: #1a1a24;
        --bg-card: #1a1a24;
        --bg-sidebar: #0f0f14;
        --bg-header: #12121a;

        /* Text (Dark Mode) */
        --text-primary: #f1f5f9;
        --text-secondary: #94a3b8;
        --text-muted: #64748b;

        /* Borders (Dark Mode) */
        --border: #2d2d3d;
        --border-light: #1f1f2e;
        --border-color: #2d2d3d;

        /* Shadows (Dark Mode) */
        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
        --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
        --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5);
    }
}

/* Manual Dark Mode Class (.dark-mode) */
.dark-mode {
    --bg-primary: #0a0a0f;
    --bg-secondary: #12121a;
    --bg-tertiary: #1a1a24;
    --bg-card: #1a1a24;
    --bg-sidebar: #0f0f14;
    --bg-header: #12121a;
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
    --border: #2d2d3d;
    --border-light: #1f1f2e;
    --border-color: #2d2d3d;
}
```

---

## Usage Guidelines

### DFO vs OFFICE

| Aspect | DFO | OFFICE |
|--------|-----|--------|
| Theme | Dark mode default | Light mode only |
| Badge | "DFO" | "OFFICE" |
| Audience | Technical teams | Project/Account managers |
| Features | Full C-Suite views | Simplified client-focused |

### Accessibility

- Minimum contrast ratio: 4.5:1 for text
- Interactive elements: 44x44px minimum touch target
- Focus states: Visible outline on all interactive elements
- Screen reader: Semantic HTML, ARIA labels where needed

### Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Mobile | < 768px | Single column, collapsed sidebar |
| Tablet | 768px - 1024px | Reduced sidebar, 2-column grid |
| Desktop | > 1024px | Full layout, 3-4 column grids |

---

**SOLARIA Design System v3.2.0**
**SOLARIA Agency - Digital Field Operations**
