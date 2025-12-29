import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { projectsApi, tasksApi, tagsApi, agentsApi, memoriesApi, dashboardApi, authApi, epicsApi, sprintsApi, documentsApi, } from '@/lib/api';
/**
 * Transform raw API project data to frontend Project type
 * Handles both snake_case (raw API) and camelCase (axios interceptor transformed) fields
 */
function transformProjectData(p) {
    const base = p;
    return {
        ...base,
        tasksTotal: (p.totalTasks ?? p.total_tasks ?? 0),
        tasksCompleted: (p.completedTasks ?? p.completed_tasks ?? 0),
        tasksPending: (p.pendingTasks ?? p.pending_tasks ?? 0),
        activeAgents: (p.agentsAssigned ?? p.agents_assigned ?? 0),
        // Prefer budgetAllocated, fallback to budget
        budgetAllocated: (p.budgetAllocated ?? p.budget ?? 0),
        budgetSpent: (p.actualCost ?? p.actual_cost ?? 0),
    };
}
// Auth hooks
export function useVerifyAuth() {
    return useQuery({
        queryKey: ['auth', 'verify'],
        queryFn: () => authApi.verify(),
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
}
// Dashboard hooks
export function useDashboardOverview() {
    return useQuery({
        queryKey: ['dashboard', 'overview'],
        queryFn: async () => {
            const { data } = await dashboardApi.getOverview();
            // API returns nested structure, transform to flat DashboardStats
            const raw = data.data || data;
            return {
                totalProjects: raw.projects?.total_projects || 0,
                activeProjects: raw.projects?.active_projects || 0,
                completedProjects: raw.projects?.completed_projects || 0,
                totalTasks: raw.tasks?.total_tasks || 0,
                completedTasks: raw.tasks?.completed_tasks || 0,
                pendingTasks: raw.tasks?.pending_tasks || 0,
                inProgressTasks: raw.tasks?.in_progress_tasks || 0,
                totalAgents: raw.agents?.total_agents || 0,
                activeAgents: raw.agents?.active_agents || 0,
                totalMemories: raw.memories?.total_memories || 0,
                criticalAlerts: raw.alerts?.critical_alerts || 0,
            };
        },
        refetchInterval: 30000, // Refresh every 30 seconds
    });
}
export function useDashboardAlerts() {
    return useQuery({
        queryKey: ['dashboard', 'alerts'],
        queryFn: async () => {
            const { data } = await dashboardApi.getAlerts();
            // API returns alerts array directly or wrapped - ensure always an array
            const result = data.data || data.alerts || data;
            return Array.isArray(result) ? result : [];
        },
        refetchInterval: 15000, // Refresh every 15 seconds
    });
}
// Projects hooks
export function useProjects() {
    return useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const { data } = await projectsApi.getAll();
            // API returns { projects: [...] } not { data: [...] }
            const projects = data.projects || data.data || [];
            // Map API fields to frontend types
            // Note: axios interceptor transforms snake_case to camelCase (total_tasks -> totalTasks)
            return projects.map((p) => transformProjectData(p));
        },
    });
}
export function useProject(id) {
    return useQuery({
        queryKey: ['projects', id],
        queryFn: async () => {
            const { data } = await projectsApi.getById(id);
            // API returns { project: {...}, tasks: [...] }
            const p = data.project || data.data || data;
            return transformProjectData(p);
        },
        enabled: !!id,
    });
}
export function useCreateProject() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data) => projectsApi.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] });
        },
    });
}
export function useUpdateProject() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }) => projectsApi.update(id, data),
        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries({ queryKey: ['projects'] });
            queryClient.invalidateQueries({ queryKey: ['projects', id] });
        },
    });
}
// Tasks hooks
export function useTasks(filters) {
    return useQuery({
        queryKey: ['tasks', filters],
        queryFn: async () => {
            const { data } = await tasksApi.getAll(filters);
            // API returns tasks array directly or wrapped
            return (data.tasks || data.data || data || []);
        },
    });
}
export function useTask(id) {
    return useQuery({
        queryKey: ['tasks', id],
        queryFn: async () => {
            const { data } = await tasksApi.getById(id);
            // API returns { task: {...} } or { data: {...} } or task directly
            return (data.task || data.data || data);
        },
        enabled: !!id && id > 0,
    });
}
export function useCreateTask() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data) => tasksApi.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
}
export function useUpdateTask() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }) => tasksApi.update(id, data),
        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            queryClient.invalidateQueries({ queryKey: ['tasks', id] });
        },
    });
}
export function useCompleteTask() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, notes }) => tasksApi.complete(id, notes),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            queryClient.invalidateQueries({ queryKey: ['dashboard'] });
        },
    });
}
// Agents hooks
export function useAgents() {
    return useQuery({
        queryKey: ['agents'],
        queryFn: async () => {
            const { data } = await agentsApi.getAll();
            // API returns agents array directly or wrapped
            return (data.agents || data.data || data || []);
        },
        refetchInterval: 10000, // Refresh every 10 seconds for real-time status
    });
}
export function useAgent(id) {
    return useQuery({
        queryKey: ['agents', id],
        queryFn: async () => {
            const { data } = await agentsApi.getById(id);
            // API returns { agent: {...} } or { data: {...} } or agent directly
            return (data.agent || data.data || data);
        },
        enabled: !!id && id > 0,
    });
}
export function useAgentTasks(agentId, status) {
    return useQuery({
        queryKey: ['agents', agentId, 'tasks', status],
        queryFn: async () => {
            const { data } = await agentsApi.getTasks(agentId, status);
            // API returns { tasks: [...] } or { data: [...] } or array directly
            return (data.tasks || data.data || data || []);
        },
        enabled: !!agentId && agentId > 0,
    });
}
// Memories hooks
export function useMemories(filters) {
    // Create stable queryKey - only include non-empty values
    const tagsKey = filters?.tags?.length ? filters.tags.join(',') : '';
    const projectId = filters?.projectId;
    return useQuery({
        queryKey: ['memories', { projectId, tags: tagsKey }],
        queryFn: async () => {
            // Only send params if they have values
            const params = {};
            if (projectId)
                params.projectId = projectId;
            if (tagsKey)
                params.tags = JSON.stringify(filters.tags);
            const { data } = await memoriesApi.getAll(Object.keys(params).length > 0 ? params : undefined);
            // API returns { memories: [...] }
            const memories = data?.memories || data?.data || data || [];
            return Array.isArray(memories) ? memories : [];
        },
    });
}
export function useMemory(id) {
    return useQuery({
        queryKey: ['memories', id],
        queryFn: async () => {
            const { data } = await memoriesApi.getById(id);
            // API returns { memory: {...} } or { data: {...} } or memory directly
            return (data.memory || data.data || data);
        },
        enabled: !!id && id > 0,
    });
}
export function useSearchMemories(query, tags) {
    return useQuery({
        queryKey: ['memories', 'search', query, tags],
        queryFn: async () => {
            const { data } = await memoriesApi.search(query, tags);
            // API returns { memories: [...] } or array directly
            return (data.memories || data.data || data || []);
        },
        enabled: query.length > 2,
    });
}
export function useMemoryTags() {
    return useQuery({
        queryKey: ['memories', 'tags'],
        queryFn: async () => {
            const { data } = await memoriesApi.getTags();
            // API returns { tags: [...] } or array directly
            return data.tags || data.data || data || [];
        },
    });
}
export function useMemoryStats() {
    return useQuery({
        queryKey: ['memories', 'stats'],
        queryFn: async () => {
            const { data } = await memoriesApi.getStats();
            // API returns stats object directly
            return data.data || data;
        },
    });
}
export function useCreateMemory() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data) => memoriesApi.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['memories'] });
        },
    });
}
export function useBoostMemory() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, amount }) => memoriesApi.boost(id, amount),
        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries({ queryKey: ['memories'] });
            queryClient.invalidateQueries({ queryKey: ['memories', id] });
        },
    });
}
export function useMemoryRelated(id) {
    return useQuery({
        queryKey: ['memories', id, 'related'],
        queryFn: async () => {
            const { data } = await memoriesApi.getRelated(id);
            // API returns { related: [...] } or array directly
            return (data.related || data.data || data || []);
        },
        enabled: !!id,
    });
}
// ============================================================
// TaskItems hooks (subtasks)
// ============================================================
export function useTaskItems(taskId) {
    return useQuery({
        queryKey: ['tasks', taskId, 'items'],
        queryFn: async () => {
            const { data } = await tasksApi.getItems(taskId);
            // API returns { items: [...] } or array directly
            return (data.items || data.data || data || []);
        },
        enabled: !!taskId,
    });
}
export function useCreateTaskItems() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ taskId, items }) => tasksApi.createItems(taskId, items),
        onSuccess: (_, { taskId }) => {
            // Invalidate task items list
            queryClient.invalidateQueries({ queryKey: ['tasks', taskId, 'items'] });
            // Invalidate parent task (progress recalc)
            queryClient.invalidateQueries({ queryKey: ['tasks', taskId] });
            // Invalidate tasks list (for card progress display)
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
}
export function useCompleteTaskItem() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ taskId, itemId, notes, actualMinutes, }) => tasksApi.completeItem(taskId, itemId, { notes, actual_minutes: actualMinutes }),
        onSuccess: (_, { taskId }) => {
            // Invalidate task items list
            queryClient.invalidateQueries({ queryKey: ['tasks', taskId, 'items'] });
            // Invalidate parent task (progress recalc)
            queryClient.invalidateQueries({ queryKey: ['tasks', taskId] });
            // Invalidate tasks list (for card progress display)
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            // Invalidate dashboard stats
            queryClient.invalidateQueries({ queryKey: ['dashboard'] });
        },
    });
}
// ============================================================
// Task Tags hooks
// ============================================================
export function useAllTags() {
    return useQuery({
        queryKey: ['tags'],
        queryFn: async () => {
            const { data } = await tagsApi.getAll();
            // API returns { tags: [...] }
            return (data.tags || data.data || data || []);
        },
        staleTime: 1000 * 60 * 5, // Tags change infrequently, cache for 5 min
    });
}
export function useTaskTags(taskId) {
    return useQuery({
        queryKey: ['tasks', taskId, 'tags'],
        queryFn: async () => {
            const { data } = await tasksApi.getTags(taskId);
            // API returns { task_id, tags: [...] }
            return (data.tags || data.data || data || []);
        },
        enabled: !!taskId,
    });
}
export function useAddTaskTag() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ taskId, tagId }) => tasksApi.addTag(taskId, tagId),
        onSuccess: (_, { taskId }) => {
            queryClient.invalidateQueries({ queryKey: ['tasks', taskId, 'tags'] });
            queryClient.invalidateQueries({ queryKey: ['tags'] }); // Update usage count
        },
    });
}
export function useAddTaskTagByName() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ taskId, tagName }) => tasksApi.addTagByName(taskId, tagName),
        onSuccess: (_, { taskId }) => {
            queryClient.invalidateQueries({ queryKey: ['tasks', taskId, 'tags'] });
            queryClient.invalidateQueries({ queryKey: ['tags'] }); // Update usage count
        },
    });
}
export function useRemoveTaskTag() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ taskId, tagId }) => tasksApi.removeTag(taskId, tagId),
        onSuccess: (_, { taskId }) => {
            queryClient.invalidateQueries({ queryKey: ['tasks', taskId, 'tags'] });
            queryClient.invalidateQueries({ queryKey: ['tags'] }); // Update usage count
        },
    });
}
export function useTasksByTag(tagName, enabled = true) {
    return useQuery({
        queryKey: ['tasks', 'by-tag', tagName],
        queryFn: async () => {
            const { data } = await tagsApi.getTasksByTag(tagName);
            return (data.tasks || data.data || data || []);
        },
        enabled: enabled && !!tagName,
    });
}
// ============================================================
// Activity hooks
// ============================================================
export function useActivityLogs(projectId, limit) {
    return useQuery({
        queryKey: ['activity', projectId, limit],
        queryFn: async () => {
            const params = { limit: limit || 50 };
            if (projectId)
                params.project_id = projectId;
            const { data } = await dashboardApi.getActivity(limit);
            // API returns { logs: [...] } or array directly
            return (data.logs || data.data || data || []);
        },
        refetchInterval: 30000, // Refresh every 30 seconds for live updates
    });
}
export function useProjectActivity(projectId, limit) {
    return useQuery({
        queryKey: ['projects', projectId, 'activity', limit],
        queryFn: async () => {
            const { data } = await dashboardApi.getActivity(limit);
            // Filter by project if API doesn't support param
            const logs = (data.logs || data.data || data || []);
            return logs.filter((log) => log.projectId === projectId);
        },
        enabled: !!projectId,
        refetchInterval: 15000, // Refresh every 15 seconds for project detail
    });
}
// ============================================================
// Project extended hooks
// ============================================================
export function useProjectTasks(projectId) {
    return useQuery({
        queryKey: ['projects', projectId, 'tasks'],
        queryFn: async () => {
            const { data } = await tasksApi.getAll({ project_id: projectId });
            return (data.tasks || data.data || data || []);
        },
        enabled: !!projectId,
        refetchInterval: 10000, // Refresh every 10 seconds for real-time
    });
}
export function useProjectAgents(projectId) {
    return useQuery({
        queryKey: ['projects', projectId, 'agents'],
        queryFn: async () => {
            const { data } = await agentsApi.getAll();
            // API might not filter by project, do client-side
            const agents = (data.agents || data.data || data || []);
            // TODO: Filter by project when API supports it
            return agents;
        },
        enabled: !!projectId,
        refetchInterval: 10000,
    });
}
// ============================================================
// Project Code Validation hooks
// ============================================================
export function useCheckProjectCode(code) {
    return useQuery({
        queryKey: ['projects', 'check-code', code],
        queryFn: async () => {
            const { data } = await projectsApi.checkCode(code);
            return data;
        },
        enabled: code.length === 3 && /^[A-Za-z]{3}$/.test(code),
        staleTime: 1000 * 30, // Cache for 30 seconds
    });
}
// ============================================================
// Epics hooks
// ============================================================
export function useProjectEpics(projectId) {
    return useQuery({
        queryKey: ['projects', projectId, 'epics'],
        queryFn: async () => {
            const { data } = await epicsApi.getByProject(projectId);
            return (data.epics || data.data || data || []);
        },
        enabled: !!projectId,
    });
}
export function useCreateEpic() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ projectId, data }) => epicsApi.create(projectId, data),
        onSuccess: (_, { projectId }) => {
            queryClient.invalidateQueries({ queryKey: ['projects', projectId, 'epics'] });
        },
    });
}
export function useUpdateEpic() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }) => epicsApi.update(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['projects', variables.projectId, 'epics'] });
        },
    });
}
export function useDeleteEpic() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id }) => epicsApi.delete(id),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['projects', variables.projectId, 'epics'] });
            queryClient.invalidateQueries({ queryKey: ['tasks'] }); // Tasks may have epic assignments
        },
    });
}
// Get single epic with tasks
export function useEpic(epicId) {
    return useQuery({
        queryKey: ['epics', epicId],
        queryFn: async () => {
            if (!epicId)
                return null;
            const { data } = await epicsApi.getById(epicId);
            return data;
        },
        enabled: !!epicId,
    });
}
// ============================================================
// Sprints hooks
// ============================================================
export function useProjectSprints(projectId) {
    return useQuery({
        queryKey: ['projects', projectId, 'sprints'],
        queryFn: async () => {
            const { data } = await sprintsApi.getByProject(projectId);
            return (data.sprints || data.data || data || []);
        },
        enabled: !!projectId,
    });
}
export function useCreateSprint() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ projectId, data }) => sprintsApi.create(projectId, data),
        onSuccess: (_, { projectId }) => {
            queryClient.invalidateQueries({ queryKey: ['projects', projectId, 'sprints'] });
        },
    });
}
export function useUpdateSprint() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }) => sprintsApi.update(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['projects', variables.projectId, 'sprints'] });
        },
    });
}
export function useDeleteSprint() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id }) => sprintsApi.delete(id),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['projects', variables.projectId, 'sprints'] });
            queryClient.invalidateQueries({ queryKey: ['tasks'] }); // Tasks may have sprint assignments
        },
    });
}
// Get single sprint with tasks
export function useSprint(sprintId) {
    return useQuery({
        queryKey: ['sprints', sprintId],
        queryFn: async () => {
            if (!sprintId)
                return null;
            const { data } = await sprintsApi.getById(sprintId);
            return data;
        },
        enabled: !!sprintId,
    });
}
export function useSprintFullHierarchy(sprintId) {
    return useQuery({
        queryKey: ['sprints', sprintId, 'full'],
        queryFn: async () => {
            if (!sprintId)
                return null;
            const { data } = await sprintsApi.getFullHierarchy(sprintId);
            return data;
        },
        enabled: !!sprintId,
    });
}
// ============================================================
// Inline Documents hooks
// ============================================================
export function useProjectInlineDocuments(projectId, type) {
    return useQuery({
        queryKey: ['projects', projectId, 'documents', 'inline', type],
        queryFn: async () => {
            const { data } = await documentsApi.getByProject(projectId, type);
            return (data.documents || data.data || data || []);
        },
        enabled: !!projectId,
    });
}
export function useInlineDocument(id) {
    return useQuery({
        queryKey: ['documents', 'inline', id],
        queryFn: async () => {
            const { data } = await documentsApi.getById(id);
            return (data.document || data.data || data);
        },
        enabled: !!id && id > 0,
    });
}
export function useCreateInlineDocument() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ projectId, data }) => documentsApi.create(projectId, data),
        onSuccess: (_, { projectId }) => {
            queryClient.invalidateQueries({ queryKey: ['projects', projectId, 'documents', 'inline'] });
        },
    });
}
export function useUpdateInlineDocument() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }) => documentsApi.update(id, data),
        onSuccess: (_, { id, projectId }) => {
            queryClient.invalidateQueries({ queryKey: ['documents', 'inline', id] });
            queryClient.invalidateQueries({ queryKey: ['projects', projectId, 'documents', 'inline'] });
        },
    });
}
export function useDeleteInlineDocument() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id }) => documentsApi.delete(id),
        onSuccess: (_, { projectId }) => {
            queryClient.invalidateQueries({ queryKey: ['projects', projectId, 'documents', 'inline'] });
        },
    });
}
export function useSearchInlineDocuments(query, projectId, type) {
    return useQuery({
        queryKey: ['documents', 'inline', 'search', query, projectId, type],
        queryFn: async () => {
            const { data } = await documentsApi.search(query, projectId, type);
            return (data.documents || data.data || data || []);
        },
        enabled: query.length > 2,
    });
}
//# sourceMappingURL=useApi.js.map