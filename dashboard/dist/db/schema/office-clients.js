"use strict";
/**
 * SOLARIA DFO - Office Clients Schema (Drizzle ORM)
 * CRM client management for Office portal
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.officePaymentsRelations = exports.officeClientContactsRelations = exports.officeClientsRelations = exports.officePayments = exports.officeClientContacts = exports.officeClients = exports.paymentTypeEnum = exports.paymentStatusEnum = exports.clientStatusEnum = exports.companySizeEnum = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
const drizzle_orm_1 = require("drizzle-orm");
const users_js_1 = require("./users.js");
const projects_js_1 = require("./projects.js");
// Company size enum
exports.companySizeEnum = (0, mysql_core_1.mysqlEnum)('company_size', [
    'startup',
    'small',
    'medium',
    'enterprise',
]);
// Client status enum
exports.clientStatusEnum = (0, mysql_core_1.mysqlEnum)('client_status', [
    'lead',
    'prospect',
    'active',
    'inactive',
    'churned',
]);
// Payment status enum
exports.paymentStatusEnum = (0, mysql_core_1.mysqlEnum)('payment_status', [
    'pending',
    'received',
    'cancelled',
    'refunded',
]);
// Payment type enum
exports.paymentTypeEnum = (0, mysql_core_1.mysqlEnum)('payment_type', [
    'deposit',
    'milestone',
    'final',
    'recurring',
    'other',
]);
// Office Clients table
exports.officeClients = (0, mysql_core_1.mysqlTable)('office_clients', {
    id: (0, mysql_core_1.int)('id').primaryKey().autoincrement(),
    name: (0, mysql_core_1.varchar)('name', { length: 200 }).notNull(),
    commercialName: (0, mysql_core_1.varchar)('commercial_name', { length: 200 }),
    industry: (0, mysql_core_1.varchar)('industry', { length: 100 }),
    companySize: exports.companySizeEnum.default('small'),
    status: exports.clientStatusEnum.default('lead'),
    // Contact Info
    primaryEmail: (0, mysql_core_1.varchar)('primary_email', { length: 255 }),
    primaryPhone: (0, mysql_core_1.varchar)('primary_phone', { length: 50 }),
    website: (0, mysql_core_1.varchar)('website', { length: 255 }),
    // Address
    addressLine1: (0, mysql_core_1.varchar)('address_line1', { length: 255 }),
    addressLine2: (0, mysql_core_1.varchar)('address_line2', { length: 255 }),
    city: (0, mysql_core_1.varchar)('city', { length: 100 }),
    state: (0, mysql_core_1.varchar)('state', { length: 100 }),
    postalCode: (0, mysql_core_1.varchar)('postal_code', { length: 20 }),
    country: (0, mysql_core_1.varchar)('country', { length: 100 }).default('Mexico'),
    // Business Info
    taxId: (0, mysql_core_1.varchar)('tax_id', { length: 50 }),
    fiscalName: (0, mysql_core_1.varchar)('fiscal_name', { length: 255 }),
    // Metrics
    lifetimeValue: (0, mysql_core_1.decimal)('lifetime_value', { precision: 15, scale: 2 }).default('0'),
    totalProjects: (0, mysql_core_1.int)('total_projects').default(0),
    // Logo
    logoUrl: (0, mysql_core_1.varchar)('logo_url', { length: 500 }),
    // Notes
    notes: (0, mysql_core_1.text)('notes'),
    // Audit
    createdAt: (0, mysql_core_1.timestamp)('created_at').defaultNow(),
    updatedAt: (0, mysql_core_1.timestamp)('updated_at').defaultNow().onUpdateNow(),
    createdBy: (0, mysql_core_1.int)('created_by').references(() => users_js_1.users.id, { onDelete: 'set null' }),
    assignedTo: (0, mysql_core_1.int)('assigned_to').references(() => users_js_1.users.id, { onDelete: 'set null' }),
});
// Office Client Contacts table
exports.officeClientContacts = (0, mysql_core_1.mysqlTable)('office_client_contacts', {
    id: (0, mysql_core_1.int)('id').primaryKey().autoincrement(),
    clientId: (0, mysql_core_1.int)('client_id').notNull().references(() => exports.officeClients.id, { onDelete: 'cascade' }),
    name: (0, mysql_core_1.varchar)('name', { length: 200 }).notNull(),
    title: (0, mysql_core_1.varchar)('title', { length: 100 }),
    email: (0, mysql_core_1.varchar)('email', { length: 255 }),
    phone: (0, mysql_core_1.varchar)('phone', { length: 50 }),
    isPrimary: (0, mysql_core_1.tinyint)('is_primary').default(0),
    notes: (0, mysql_core_1.text)('notes'),
    createdAt: (0, mysql_core_1.timestamp)('created_at').defaultNow(),
    updatedAt: (0, mysql_core_1.timestamp)('updated_at').defaultNow().onUpdateNow(),
});
// Office Payments table
exports.officePayments = (0, mysql_core_1.mysqlTable)('office_payments', {
    id: (0, mysql_core_1.int)('id').primaryKey().autoincrement(),
    clientId: (0, mysql_core_1.int)('client_id').references(() => exports.officeClients.id, { onDelete: 'set null' }),
    projectId: (0, mysql_core_1.int)('project_id').references(() => projects_js_1.projects.id, { onDelete: 'set null' }),
    amount: (0, mysql_core_1.decimal)('amount', { precision: 15, scale: 2 }).notNull(),
    currency: (0, mysql_core_1.varchar)('currency', { length: 3 }).default('MXN'),
    status: exports.paymentStatusEnum.default('pending'),
    paymentType: exports.paymentTypeEnum.default('milestone'),
    paymentDate: (0, mysql_core_1.date)('payment_date'),
    dueDate: (0, mysql_core_1.date)('due_date'),
    reference: (0, mysql_core_1.varchar)('reference', { length: 100 }),
    invoiceNumber: (0, mysql_core_1.varchar)('invoice_number', { length: 50 }),
    notes: (0, mysql_core_1.text)('notes'),
    createdAt: (0, mysql_core_1.timestamp)('created_at').defaultNow(),
    updatedAt: (0, mysql_core_1.timestamp)('updated_at').defaultNow().onUpdateNow(),
    createdBy: (0, mysql_core_1.int)('created_by').references(() => users_js_1.users.id, { onDelete: 'set null' }),
});
// Relations
exports.officeClientsRelations = (0, drizzle_orm_1.relations)(exports.officeClients, ({ one, many }) => ({
    createdByUser: one(users_js_1.users, {
        fields: [exports.officeClients.createdBy],
        references: [users_js_1.users.id],
        relationName: 'clientCreator',
    }),
    assignedToUser: one(users_js_1.users, {
        fields: [exports.officeClients.assignedTo],
        references: [users_js_1.users.id],
        relationName: 'clientManager',
    }),
    contacts: many(exports.officeClientContacts),
    payments: many(exports.officePayments),
}));
exports.officeClientContactsRelations = (0, drizzle_orm_1.relations)(exports.officeClientContacts, ({ one }) => ({
    client: one(exports.officeClients, {
        fields: [exports.officeClientContacts.clientId],
        references: [exports.officeClients.id],
    }),
}));
exports.officePaymentsRelations = (0, drizzle_orm_1.relations)(exports.officePayments, ({ one }) => ({
    client: one(exports.officeClients, {
        fields: [exports.officePayments.clientId],
        references: [exports.officeClients.id],
    }),
    project: one(projects_js_1.projects, {
        fields: [exports.officePayments.projectId],
        references: [projects_js_1.projects.id],
    }),
    createdByUser: one(users_js_1.users, {
        fields: [exports.officePayments.createdBy],
        references: [users_js_1.users.id],
    }),
}));
//# sourceMappingURL=office-clients.js.map