"use strict";
/**
 * SOLARIA DFO - Permissions Schema (Drizzle ORM)
 * RBAC permission system for Office portal
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PERMISSION_CODES = exports.userPreferencesRelations = exports.rolePermissionsRelations = exports.permissionsRelations = exports.userPreferences = exports.rolePermissions = exports.permissions = exports.defaultViewEnum = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
const drizzle_orm_1 = require("drizzle-orm");
const users_js_1 = require("./users.js");
// Default view enum
exports.defaultViewEnum = (0, mysql_core_1.mysqlEnum)('default_view', ['list', 'cards', 'kanban']);
// Permissions table
exports.permissions = (0, mysql_core_1.mysqlTable)('permissions', {
    id: (0, mysql_core_1.int)('id').primaryKey().autoincrement(),
    code: (0, mysql_core_1.varchar)('code', { length: 50 }).notNull().unique(),
    name: (0, mysql_core_1.varchar)('name', { length: 100 }).notNull(),
    description: (0, mysql_core_1.text)('description'),
    category: (0, mysql_core_1.varchar)('category', { length: 50 }),
    createdAt: (0, mysql_core_1.timestamp)('created_at').defaultNow(),
});
// Role Permissions table (many-to-many)
exports.rolePermissions = (0, mysql_core_1.mysqlTable)('role_permissions', {
    role: (0, mysql_core_1.varchar)('role', { length: 20 }).notNull(),
    permissionId: (0, mysql_core_1.int)('permission_id').notNull().references(() => exports.permissions.id, { onDelete: 'cascade' }),
    createdAt: (0, mysql_core_1.timestamp)('created_at').defaultNow(),
}, (table) => ({
    pk: (0, mysql_core_1.primaryKey)({ columns: [table.role, table.permissionId] }),
}));
// User Preferences table
exports.userPreferences = (0, mysql_core_1.mysqlTable)('user_preferences', {
    userId: (0, mysql_core_1.int)('user_id').primaryKey().references(() => users_js_1.users.id, { onDelete: 'cascade' }),
    defaultView: exports.defaultViewEnum.default('cards'),
    sidebarCollapsed: (0, mysql_core_1.tinyint)('sidebar_collapsed').default(0),
    theme: (0, mysql_core_1.varchar)('theme', { length: 20 }).default('light'),
    notificationsEnabled: (0, mysql_core_1.tinyint)('notifications_enabled').default(1),
    emailNotifications: (0, mysql_core_1.tinyint)('email_notifications').default(1),
    dashboardWidgets: (0, mysql_core_1.json)('dashboard_widgets').$type(),
    createdAt: (0, mysql_core_1.timestamp)('created_at').defaultNow(),
    updatedAt: (0, mysql_core_1.timestamp)('updated_at').defaultNow().onUpdateNow(),
});
// Relations
exports.permissionsRelations = (0, drizzle_orm_1.relations)(exports.permissions, ({ many }) => ({
    rolePermissions: many(exports.rolePermissions),
}));
exports.rolePermissionsRelations = (0, drizzle_orm_1.relations)(exports.rolePermissions, ({ one }) => ({
    permission: one(exports.permissions, {
        fields: [exports.rolePermissions.permissionId],
        references: [exports.permissions.id],
    }),
}));
exports.userPreferencesRelations = (0, drizzle_orm_1.relations)(exports.userPreferences, ({ one }) => ({
    user: one(users_js_1.users, {
        fields: [exports.userPreferences.userId],
        references: [users_js_1.users.id],
    }),
}));
// Permission code constants for type safety
exports.PERMISSION_CODES = {
    // Projects
    PROJECTS_VIEW: 'projects.view',
    PROJECTS_CREATE: 'projects.create',
    PROJECTS_EDIT: 'projects.edit',
    PROJECTS_DELETE: 'projects.delete',
    PROJECTS_MANAGE_TEAM: 'projects.manage_team',
    // Clients
    CLIENTS_VIEW: 'clients.view',
    CLIENTS_CREATE: 'clients.create',
    CLIENTS_EDIT: 'clients.edit',
    CLIENTS_DELETE: 'clients.delete',
    // Tasks
    TASKS_VIEW: 'tasks.view',
    TASKS_CREATE: 'tasks.create',
    TASKS_EDIT: 'tasks.edit',
    TASKS_DELETE: 'tasks.delete',
    TASKS_ASSIGN: 'tasks.assign',
    // Agents
    AGENTS_VIEW: 'agents.view',
    AGENTS_MANAGE: 'agents.manage',
    // Analytics
    ANALYTICS_VIEW: 'analytics.view',
    ANALYTICS_EXPORT: 'analytics.export',
    // Reports
    REPORTS_VIEW: 'reports.view',
    REPORTS_CREATE: 'reports.create',
    REPORTS_EXPORT: 'reports.export',
    // Payments
    PAYMENTS_VIEW: 'payments.view',
    PAYMENTS_CREATE: 'payments.create',
    PAYMENTS_EDIT: 'payments.edit',
    // Settings
    SETTINGS_VIEW: 'settings.view',
    SETTINGS_EDIT: 'settings.edit',
    // Admin
    ADMIN_USERS: 'admin.users',
    ADMIN_ROLES: 'admin.roles',
    ADMIN_SYSTEM: 'admin.system',
};
//# sourceMappingURL=permissions.js.map