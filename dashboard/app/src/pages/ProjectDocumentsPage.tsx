import { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import {
    ArrowLeft,
    FileText,
    Plus,
    Search,
    Book,
    FileCode,
    FileSpreadsheet,
    ScrollText,
    Map,
    Shield,
    File,
    Edit,
    Trash2,
    Save,
    X,
    Eye,
    Code,
    Loader2,
} from 'lucide-react';
import {
    useProject,
    useProjectInlineDocuments,
    useInlineDocument,
    useCreateInlineDocument,
    useUpdateInlineDocument,
    useDeleteInlineDocument,
} from '@/hooks/useApi';
import type { InlineDocument } from '@/types';
import { Modal } from '@/components/common/Modal';
import { cn } from '@/lib/utils';

const typeOptions = [
    { value: 'plan', label: 'Plan de Desarrollo', icon: Map, color: 'text-blue-400 bg-blue-500/10' },
    { value: 'spec', label: 'Especificacion', icon: FileCode, color: 'text-purple-400 bg-purple-500/10' },
    { value: 'report', label: 'Reporte', icon: FileSpreadsheet, color: 'text-green-400 bg-green-500/10' },
    { value: 'manual', label: 'Manual', icon: Book, color: 'text-orange-400 bg-orange-500/10' },
    { value: 'adr', label: 'Decision de Arquitectura (ADR)', icon: ScrollText, color: 'text-yellow-400 bg-yellow-500/10' },
    { value: 'roadmap', label: 'Roadmap', icon: Map, color: 'text-cyan-400 bg-cyan-500/10' },
    { value: 'audit', label: 'Auditoria', icon: Shield, color: 'text-red-400 bg-red-500/10' },
    { value: 'other', label: 'Otro', icon: File, color: 'text-gray-400 bg-gray-500/10' },
];

const typeIcons: Record<string, React.ElementType> = {
    plan: Map,
    spec: FileCode,
    report: FileSpreadsheet,
    manual: Book,
    adr: ScrollText,
    roadmap: Map,
    audit: Shield,
    other: File,
};

function DocumentEditor({
    isOpen,
    onClose,
    projectId,
    document,
    onSave,
}: {
    isOpen: boolean;
    onClose: () => void;
    projectId: number;
    document?: InlineDocument | null;
    onSave: () => void;
}) {
    const [name, setName] = useState('');
    const [type, setType] = useState<string>('plan');
    const [content, setContent] = useState('');
    const [changeSummary, setChangeSummary] = useState('');
    const [isPreview, setIsPreview] = useState(false);

    const createMutation = useCreateInlineDocument();
    const updateMutation = useUpdateInlineDocument();

    useEffect(() => {
        if (document) {
            setName(document.name);
            setType(document.type);
            setContent(document.contentMd || '');
        } else {
            setName('');
            setType('plan');
            setContent('# Nuevo Documento\n\n');
            setChangeSummary('');
        }
    }, [document, isOpen]);

    const handleSave = async () => {
        if (!name.trim() || !content.trim()) return;

        try {
            if (document) {
                await updateMutation.mutateAsync({
                    id: document.id,
                    projectId,
                    data: {
                        name,
                        type: type as InlineDocument['type'],
                        contentMd: content,
                        changeSummary: changeSummary || undefined,
                    },
                });
            } else {
                await createMutation.mutateAsync({
                    projectId,
                    data: {
                        name,
                        type: type as InlineDocument['type'],
                        contentMd: content,
                    },
                });
            }
            onSave();
            onClose();
        } catch (error) {
            console.error('Error saving document:', error);
        }
    };

    const isLoading = createMutation.isPending || updateMutation.isPending;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={document ? 'Editar Documento' : 'Nuevo Documento'} maxWidth="max-w-3xl" className="!max-w-[90vw] !max-h-[90vh]">
            <div className="flex flex-col h-[80vh]">
                {/* Header */}
                <div className="flex items-center gap-4 p-4 border-b border-border">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nombre del documento..."
                        className="flex-1 bg-transparent text-lg font-semibold focus:outline-none"
                    />

                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="bg-secondary border border-border rounded-lg px-3 py-1.5 text-sm"
                    >
                        {typeOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>

                    <div className="flex items-center gap-2 border-l border-border pl-4">
                        <button
                            onClick={() => setIsPreview(false)}
                            className={cn(
                                'p-2 rounded transition-colors',
                                !isPreview ? 'bg-solaria text-white' : 'text-muted-foreground hover:text-foreground'
                            )}
                            title="Editor"
                        >
                            <Code className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => setIsPreview(true)}
                            className={cn(
                                'p-2 rounded transition-colors',
                                isPreview ? 'bg-solaria text-white' : 'text-muted-foreground hover:text-foreground'
                            )}
                            title="Vista previa"
                        >
                            <Eye className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Editor / Preview */}
                <div className="flex-1 overflow-hidden">
                    {isPreview ? (
                        <div
                            className="h-full overflow-auto p-6 prose prose-invert max-w-none whitespace-pre-wrap"
                        >
                            {document?.contentMd || 'Vista previa no disponible'}
                        </div>
                    ) : (
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full h-full p-4 bg-background font-mono text-sm resize-none focus:outline-none"
                            placeholder="Escribe en Markdown..."
                        />
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between p-4 border-t border-border">
                    {document && (
                        <input
                            type="text"
                            value={changeSummary}
                            onChange={(e) => setChangeSummary(e.target.value)}
                            placeholder="Resumen de cambios (opcional)..."
                            className="flex-1 bg-secondary border border-border rounded-lg px-3 py-2 text-sm mr-4"
                        />
                    )}
                    <div className="flex items-center gap-2 ml-auto">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={isLoading || !name.trim() || !content.trim()}
                            className="px-4 py-2 bg-solaria text-white rounded-lg text-sm font-medium hover:bg-solaria/90 transition-colors disabled:opacity-50 flex items-center gap-2"
                        >
                            {isLoading ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                                <Save className="h-4 w-4" />
                            )}
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

function DocumentPreview({
    document,
    onEdit,
    onDelete,
    onClose,
}: {
    document: InlineDocument;
    onEdit: () => void;
    onDelete: () => void;
    onClose: () => void;
}) {
    const Icon = typeIcons[document.type] || File;
    const typeOption = typeOptions.find((t) => t.value === document.type);

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-3">
                    <div className={cn('p-2 rounded-lg', typeOption?.color || 'bg-gray-500/10')}>
                        <Icon className="h-5 w-5" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">{document.name}</h2>
                        <p className="text-xs text-muted-foreground">
                            Version {document.version} - Actualizado {new Date(document.updatedAt).toLocaleDateString('es-ES')}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={onEdit}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        title="Editar"
                    >
                        <Edit className="h-4 w-4" />
                    </button>
                    <button
                        onClick={onDelete}
                        className="p-2 text-muted-foreground hover:text-red-400 transition-colors"
                        title="Eliminar"
                    >
                        <Trash2 className="h-4 w-4" />
                    </button>
                    <button
                        onClick={onClose}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        title="Cerrar"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div
                className="flex-1 overflow-auto p-6 prose prose-invert max-w-none
                    prose-headings:text-foreground prose-p:text-muted-foreground
                    prose-strong:text-foreground prose-a:text-solaria
                    prose-code:bg-secondary prose-code:px-1 prose-code:rounded
                    prose-pre:bg-secondary prose-pre:border prose-pre:border-border whitespace-pre-wrap"
            >
                {document.contentMd || 'Sin contenido'}
            </div>
        </div>
    );
}

export function ProjectDocumentsPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const projectId = Number(id);

    const [searchQuery, setSearchQuery] = useState('');
    const [typeFilter, setTypeFilter] = useState<string>('');
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [editingDocument, setEditingDocument] = useState<InlineDocument | null>(null);

    const { data: project, isLoading: projectLoading } = useProject(projectId);
    const { data: docsData, isLoading: docsLoading, refetch } = useProjectInlineDocuments(projectId, typeFilter || undefined);

    const selectedDocId = searchParams.get('doc') ? Number(searchParams.get('doc')) : null;
    const { data: selectedDocument } = useInlineDocument(selectedDocId || 0);

    const deleteMutation = useDeleteInlineDocument();

    // Handle ?new=true URL param
    useEffect(() => {
        if (searchParams.get('new') === 'true') {
            setIsEditorOpen(true);
            setEditingDocument(null);
            searchParams.delete('new');
            setSearchParams(searchParams);
        }
    }, [searchParams, setSearchParams]);

    const documents = docsData || [];
    const filteredDocs = searchQuery
        ? documents.filter((d: InlineDocument) => d.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : documents;

    const handleSelectDocument = (docId: number) => {
        searchParams.set('doc', String(docId));
        setSearchParams(searchParams);
    };

    const handleClosePreview = () => {
        searchParams.delete('doc');
        setSearchParams(searchParams);
    };

    const handleEdit = () => {
        if (selectedDocument) {
            setEditingDocument(selectedDocument);
            setIsEditorOpen(true);
        }
    };

    const handleDelete = async () => {
        if (!selectedDocument) return;
        if (!confirm(`¿Eliminar "${selectedDocument.name}"? Esta accion no se puede deshacer.`)) return;

        try {
            await deleteMutation.mutateAsync({ id: selectedDocument.id, projectId });
            handleClosePreview();
            refetch();
        } catch (error) {
            console.error('Error deleting document:', error);
        }
    };

    const handleNewDocument = () => {
        setEditingDocument(null);
        setIsEditorOpen(true);
    };

    if (projectLoading) {
        return (
            <div className="flex items-center justify-center h-full">
                <Loader2 className="h-8 w-8 animate-spin text-solaria" />
            </div>
        );
    }

    if (!project) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Proyecto no encontrado</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-card">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(`/projects/${projectId}`)}
                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                    <div>
                        <h1 className="text-xl font-bold flex items-center gap-2">
                            <FileText className="h-5 w-5 text-solaria" />
                            Documentacion
                        </h1>
                        <p className="text-sm text-muted-foreground">{project.name}</p>
                    </div>
                </div>

                <button
                    onClick={handleNewDocument}
                    className="px-4 py-2 bg-solaria text-white rounded-lg text-sm font-medium hover:bg-solaria/90 transition-colors flex items-center gap-2"
                >
                    <Plus className="h-4 w-4" />
                    Nuevo Documento
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar - Document List */}
                <div className="w-80 border-r border-border flex flex-col bg-card">
                    {/* Search and Filter */}
                    <div className="p-3 space-y-2 border-b border-border">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Buscar documentos..."
                                className="w-full pl-9 pr-3 py-2 bg-secondary border border-border rounded-lg text-sm"
                            />
                        </div>
                        <select
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                            className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-sm"
                        >
                            <option value="">Todos los tipos</option>
                            {typeOptions.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Document List */}
                    <div className="flex-1 overflow-auto p-2">
                        {docsLoading ? (
                            <div className="flex items-center justify-center py-8">
                                <Loader2 className="h-6 w-6 animate-spin text-solaria" />
                            </div>
                        ) : filteredDocs.length === 0 ? (
                            <div className="text-center py-8">
                                <FileText className="h-12 w-12 mx-auto text-muted-foreground/30 mb-2" />
                                <p className="text-sm text-muted-foreground">Sin documentos</p>
                                <button
                                    onClick={handleNewDocument}
                                    className="text-xs text-solaria hover:underline mt-2"
                                >
                                    Crear primer documento
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-1">
                                {filteredDocs.map((doc: InlineDocument) => {
                                    const Icon = typeIcons[doc.type] || File;
                                    const typeOpt = typeOptions.find((t) => t.value === doc.type);
                                    const isSelected = selectedDocId === doc.id;

                                    return (
                                        <button
                                            key={doc.id}
                                            onClick={() => handleSelectDocument(doc.id)}
                                            className={cn(
                                                'w-full p-3 rounded-lg text-left transition-colors',
                                                isSelected ? 'bg-solaria/20 border border-solaria/50' : 'hover:bg-secondary'
                                            )}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className={cn('p-1.5 rounded', typeOpt?.color || 'bg-gray-500/10')}>
                                                    <Icon className="h-4 w-4" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-medium text-sm truncate">{doc.name}</p>
                                                    <p className="text-xs text-muted-foreground mt-0.5">
                                                        v{doc.version} - {new Date(doc.updatedAt).toLocaleDateString('es-ES')}
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>

                {/* Content Area - Document Preview */}
                <div className="flex-1 bg-background">
                    {selectedDocument ? (
                        <DocumentPreview
                            document={selectedDocument}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            onClose={handleClosePreview}
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                            <FileText className="h-16 w-16 mb-4 opacity-30" />
                            <p className="text-lg">Selecciona un documento para ver su contenido</p>
                            <p className="text-sm mt-1">o crea uno nuevo</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Editor Modal */}
            <DocumentEditor
                isOpen={isEditorOpen}
                onClose={() => {
                    setIsEditorOpen(false);
                    setEditingDocument(null);
                }}
                projectId={projectId}
                document={editingDocument}
                onSave={refetch}
            />
        </div>
    );
}
