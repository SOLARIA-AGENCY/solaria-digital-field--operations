import { useNavigate } from 'react-router-dom';
import {
    FileText,
    ChevronRight,
    Book,
    FileCode,
    FileSpreadsheet,
    ScrollText,
    Map,
    Shield,
    File,
    Plus,
} from 'lucide-react';
import { useProjectInlineDocuments } from '@/hooks/useApi';
import type { InlineDocument } from '@/types';

interface DocumentsCardProps {
    projectId: number;
    onDocumentClick?: (docId: number) => void;
}

const typeIcons: Record<InlineDocument['type'], React.ElementType> = {
    plan: Map,
    spec: FileCode,
    report: FileSpreadsheet,
    manual: Book,
    adr: ScrollText,
    roadmap: Map,
    audit: Shield,
    other: File,
};

const typeLabels: Record<InlineDocument['type'], string> = {
    plan: 'Plan',
    spec: 'Spec',
    report: 'Reporte',
    manual: 'Manual',
    adr: 'ADR',
    roadmap: 'Roadmap',
    audit: 'Auditoria',
    other: 'Otro',
};

const typeColors: Record<InlineDocument['type'], string> = {
    plan: 'text-blue-400 bg-blue-500/10',
    spec: 'text-purple-400 bg-purple-500/10',
    report: 'text-green-400 bg-green-500/10',
    manual: 'text-orange-400 bg-orange-500/10',
    adr: 'text-yellow-400 bg-yellow-500/10',
    roadmap: 'text-cyan-400 bg-cyan-500/10',
    audit: 'text-red-400 bg-red-500/10',
    other: 'text-gray-400 bg-gray-500/10',
};

export function DocumentsCard({ projectId, onDocumentClick }: DocumentsCardProps) {
    const navigate = useNavigate();
    const { data, isLoading } = useProjectInlineDocuments(projectId);

    const documents = data || [];

    // Get the development plan (type: 'plan') as main document
    const mainPlan = documents.find((d: InlineDocument) => d.type === 'plan');
    const otherDocs = documents.filter((d: InlineDocument) => d.type !== 'plan').slice(0, 3);

    return (
        <div className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <FileText className="h-4 w-4 text-solaria" />
                    Documentacion
                </h4>
                <button
                    onClick={() => navigate(`/projects/${projectId}/docs`)}
                    className="text-xs text-muted-foreground hover:text-solaria transition-colors flex items-center gap-1"
                >
                    Ver todo
                    <ChevronRight className="h-3 w-3" />
                </button>
            </div>

            {isLoading ? (
                <div className="flex items-center justify-center py-4">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-solaria border-t-transparent" />
                </div>
            ) : documents.length === 0 ? (
                <div className="text-center py-4">
                    <p className="text-sm text-muted-foreground mb-2">
                        Sin documentos
                    </p>
                    <button
                        onClick={() => navigate(`/projects/${projectId}/docs?new=true`)}
                        className="text-xs text-solaria hover:underline flex items-center gap-1 mx-auto"
                    >
                        <Plus className="h-3 w-3" />
                        Crear plan de desarrollo
                    </button>
                </div>
            ) : (
                <div className="space-y-2">
                    {/* Main Development Plan */}
                    {mainPlan && (
                        <div
                            onClick={() => onDocumentClick?.(mainPlan.id) || navigate(`/projects/${projectId}/docs?doc=${mainPlan.id}`)}
                            className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 cursor-pointer hover:bg-blue-500/20 transition-colors"
                        >
                            <div className="flex items-center gap-2">
                                <Map className="h-4 w-4 text-blue-400" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-foreground truncate">
                                        {mainPlan.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        v{mainPlan.version} - Plan de desarrollo
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Other Documents */}
                    {otherDocs.length > 0 && (
                        <div className="space-y-1.5">
                            {otherDocs.map((doc: InlineDocument) => {
                                const Icon = typeIcons[doc.type];
                                const colorClass = typeColors[doc.type];
                                return (
                                    <div
                                        key={doc.id}
                                        onClick={() => onDocumentClick?.(doc.id) || navigate(`/projects/${projectId}/docs?doc=${doc.id}`)}
                                        className="flex items-center gap-2 p-1.5 rounded bg-secondary/50 cursor-pointer hover:bg-secondary transition-colors"
                                    >
                                        <div className={`p-1 rounded ${colorClass}`}>
                                            <Icon className="h-3 w-3" />
                                        </div>
                                        <span className="text-xs text-foreground truncate flex-1">
                                            {doc.name}
                                        </span>
                                        <span className="text-[10px] text-muted-foreground">
                                            {typeLabels[doc.type]}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Show count if more documents exist */}
                    {documents.length > 4 && (
                        <button
                            onClick={() => navigate(`/projects/${projectId}/docs`)}
                            className="w-full text-center text-xs text-muted-foreground hover:text-solaria py-1"
                        >
                            +{documents.length - 4} documentos mas
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
