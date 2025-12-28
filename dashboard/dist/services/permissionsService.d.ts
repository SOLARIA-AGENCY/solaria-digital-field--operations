/**
 * SOLARIA DFO - Permissions Service
 * RBAC permission management for Office portal
 */
import type { Connection } from 'mysql2/promise';
export declare const PERMISSION_CODES: {
    readonly PROJECTS_VIEW: "projects.view";
    readonly PROJECTS_CREATE: "projects.create";
    readonly PROJECTS_EDIT: "projects.edit";
    readonly PROJECTS_DELETE: "projects.delete";
    readonly PROJECTS_MANAGE_TEAM: "projects.manage_team";
    readonly CLIENTS_VIEW: "clients.view";
    readonly CLIENTS_CREATE: "clients.create";
    readonly CLIENTS_EDIT: "clients.edit";
    readonly CLIENTS_DELETE: "clients.delete";
    readonly TASKS_VIEW: "tasks.view";
    readonly TASKS_CREATE: "tasks.create";
    readonly TASKS_EDIT: "tasks.edit";
    readonly TASKS_DELETE: "tasks.delete";
    readonly TASKS_ASSIGN: "tasks.assign";
    readonly AGENTS_VIEW: "agents.view";
    readonly AGENTS_MANAGE: "agents.manage";
    readonly ANALYTICS_VIEW: "analytics.view";
    readonly ANALYTICS_EXPORT: "analytics.export";
    readonly REPORTS_VIEW: "reports.view";
    readonly REPORTS_CREATE: "reports.create";
    readonly REPORTS_EXPORT: "reports.export";
    readonly PAYMENTS_VIEW: "payments.view";
    readonly PAYMENTS_CREATE: "payments.create";
    readonly PAYMENTS_EDIT: "payments.edit";
    readonly SETTINGS_VIEW: "settings.view";
    readonly SETTINGS_EDIT: "settings.edit";
    readonly ADMIN_USERS: "admin.users";
    readonly ADMIN_ROLES: "admin.roles";
    readonly ADMIN_SYSTEM: "admin.system";
};
export type PermissionCode = typeof PERMISSION_CODES[keyof typeof PERMISSION_CODES];
export interface Permission {
    id: number;
    code: string;
    name: string;
    description: string | null;
    category: string | null;
}
export interface RolePermission {
    role: string;
    permission_id: number;
    permission_code?: string;
}
export interface UserPreference {
    user_id: number;
    default_view: 'list' | 'cards' | 'kanban';
    sidebar_collapsed: boolean;
    theme: string;
    notifications_enabled: boolean;
    email_notifications: boolean;
    dashboard_widgets: Record<string, unknown> | null;
}
export declare class PermissionsService {
    private db;
    constructor(db: Connection);
    /**
     * Check if a role has a specific permission
     */
    hasPermission(role: string, permissionCode: string): Promise<boolean>;
    /**
     * Check if a role has any of the specified permissions
     */
    hasAnyPermission(role: string, permissionCodes: string[]): Promise<boolean>;
    /**
     * Check if a role has all of the specified permissions
     */
    hasAllPermissions(role: string, permissionCodes: string[]): Promise<boolean>;
    /**
     * Get all permissions for a role (cached)
     */
    getRolePermissions(role: string): Promise<Set<string>>;
    /**
     * Refresh the permissions cache
     */
    refreshCache(): Promise<void>;
    /**
     * Get all permissions
     */
    getAllPermissions(): Promise<Permission[]>;
    /**
     * Get permissions by category
     */
    getPermissionsByCategory(category: string): Promise<Permission[]>;
    /**
     * Get all role-permission mappings for a role
     */
    getRolePermissionMappings(role: string): Promise<RolePermission[]>;
    /**
     * Update role permissions (replace all)
     */
    updateRolePermissions(role: string, permissionIds: number[]): Promise<void>;
    /**
     * Add a permission to a role
     */
    addRolePermission(role: string, permissionId: number): Promise<void>;
    /**
     * Remove a permission from a role
     */
    removeRolePermission(role: string, permissionId: number): Promise<void>;
    /**
     * Get user preferences
     */
    getUserPreferences(userId: number): Promise<UserPreference | null>;
    /**
     * Update or create user preferences
     */
    updateUserPreferences(userId: number, preferences: Partial<UserPreference>): Promise<void>;
}
/**
 * Express middleware factory for requiring permissions
 */
export declare function createRequirePermission(db: Connection): (...permissions: string[]) => (req: any, res: any, next: any) => Promise<any>;
export default PermissionsService;
