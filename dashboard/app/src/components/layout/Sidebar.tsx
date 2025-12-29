import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    FolderKanban,
    Briefcase,
    Server,
    Palette,
    Brain,
    Archive,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    LayoutTemplate,
} from 'lucide-react';
import { useUIStore } from '@/store/ui';
import { cn } from '@/lib/utils';
import VERSION from '@/version';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Proyectos', href: '/projects', icon: FolderKanban },
    { name: 'Negocios', href: '/businesses', icon: Briefcase },
    { name: 'Infraestructura', href: '/infrastructure', icon: Server },
    { name: 'Design Hub', href: '/design-hub', icon: Palette },
    { name: 'Memorias', href: '/memories', icon: Brain },
    { name: 'Oficina', href: '/office', icon: LayoutTemplate },
    { name: 'Archivo', href: '/projects/archived', icon: Archive },
];

const externalLinks = [
    {
        name: 'n8n Workflows',
        href: 'https://n8n.solaria.agency',
        icon: ExternalLink,
        color: 'text-orange-400'
    },
    {
        name: 'VibeSDK',
        href: 'https://docs.vibe-sdk.com',
        icon: ExternalLink,
        color: 'text-purple-400'
    },
];

export function Sidebar() {
    const { sidebarOpen, toggleSidebar } = useUIStore();

    return (
        <aside
            className={cn(
                'fixed left-0 top-0 z-40 h-screen border-r border-border bg-card transition-all duration-300 flex flex-col',
                sidebarOpen ? 'w-64' : 'w-16'
            )}
        >
            {/* Logo */}
            <div className={cn(
                "flex h-16 items-center border-b border-border px-4",
                sidebarOpen ? "justify-start" : "justify-center"
            )}>
                {sidebarOpen ? (
                    <div className="flex items-center gap-3">
                        <img
                            src="/solaria-logo.png"
                            alt="SOLARIA"
                            className="h-9 w-9"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                        <span className="font-bold text-lg solaria-text-gradient">SOLARIA</span>
                    </div>
                ) : (
                    <img
                        src="/solaria-logo.png"
                        alt="S"
                        className="h-8 w-8"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                )}
            </div>

            {/* Main Navigation */}
            <nav className="flex flex-col gap-1 p-2 flex-1">
                {/* Section Label */}
                {sidebarOpen && (
                    <div className="px-3 py-2 text-[10px] font-semibold uppercase text-muted-foreground tracking-wider">
                        Navegacion
                    </div>
                )}

                {navigation.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                            cn(
                                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                                isActive
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                            )
                        }
                    >
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        {sidebarOpen && <span>{item.name}</span>}
                    </NavLink>
                ))}

                {/* Divider */}
                {sidebarOpen && (
                    <div className="my-2 border-t border-border" />
                )}

                {/* External Links Section */}
                {sidebarOpen && (
                    <div className="px-3 py-2 text-[10px] font-semibold uppercase text-muted-foreground tracking-wider">
                        Enlaces
                    </div>
                )}

                {externalLinks.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                            'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                        )}
                    >
                        <item.icon className={cn('h-5 w-5 flex-shrink-0', item.color)} />
                        {sidebarOpen && (
                            <>
                                <span>{item.name}</span>
                                <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
                            </>
                        )}
                    </a>
                ))}
            </nav>

            {/* Footer */}
            <div className="border-t border-border">
                {sidebarOpen ? (
                    <div className="flex flex-col">
                        {/* Version info */}
                        <div className="p-4 pb-2">
                            <div className="rounded-lg bg-accent/50 p-3 text-center">
                                <div className="text-xs text-muted-foreground">
                                    <span className="solaria-text-gradient font-semibold">SOLARIA</span>
                                    <span> DFO</span>
                                </div>
                                <div className="mt-1 text-[10px] text-muted-foreground font-mono">
                                    {VERSION.full}
                                </div>
                            </div>
                        </div>
                        {/* Collapse button - same height as GlobalFooter */}
                        <div className="h-10 border-t border-border flex items-center px-4">
                            <button
                                onClick={toggleSidebar}
                                className="ml-auto flex items-center justify-center rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground p-1"
                                aria-label="Colapsar sidebar"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="h-10 flex items-center justify-center">
                        <button
                            onClick={toggleSidebar}
                            className="flex items-center justify-center p-1 rounded-lg hover:bg-accent transition-colors"
                            aria-label="Expandir sidebar"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                )}
            </div>
        </aside>
    );
}
