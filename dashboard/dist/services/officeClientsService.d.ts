/**
 * SOLARIA DFO - Office Clients Service
 * CRM client management for Office portal
 */
import type { Connection } from 'mysql2/promise';
export interface OfficeClient {
    id: number;
    name: string;
    commercial_name: string | null;
    industry: string | null;
    company_size: 'startup' | 'small' | 'medium' | 'enterprise';
    status: 'lead' | 'prospect' | 'active' | 'inactive' | 'churned';
    primary_email: string | null;
    primary_phone: string | null;
    website: string | null;
    address_line1: string | null;
    address_line2: string | null;
    city: string | null;
    state: string | null;
    postal_code: string | null;
    country: string;
    tax_id: string | null;
    fiscal_name: string | null;
    lifetime_value: number;
    total_projects: number;
    logo_url: string | null;
    notes: string | null;
    created_at: Date;
    updated_at: Date;
    created_by: number | null;
    assigned_to: number | null;
}
export interface OfficeClientWithDetails extends OfficeClient {
    created_by_name?: string;
    assigned_to_name?: string;
    contacts_count?: number;
    active_projects_count?: number;
}
export interface OfficeClientContact {
    id: number;
    client_id: number;
    name: string;
    title: string | null;
    email: string | null;
    phone: string | null;
    is_primary: boolean;
    notes: string | null;
    created_at: Date;
    updated_at: Date;
}
export interface OfficePayment {
    id: number;
    client_id: number | null;
    project_id: number | null;
    amount: number;
    currency: string;
    status: 'pending' | 'received' | 'cancelled' | 'refunded';
    payment_type: 'deposit' | 'milestone' | 'final' | 'recurring' | 'other';
    payment_date: Date | null;
    due_date: Date | null;
    reference: string | null;
    invoice_number: string | null;
    notes: string | null;
    created_at: Date;
    updated_at: Date;
    created_by: number | null;
}
export interface ClientFilters {
    status?: string;
    industry?: string;
    company_size?: string;
    assigned_to?: number;
    search?: string;
    limit?: number;
    offset?: number;
}
export declare class OfficeClientsService {
    private db;
    constructor(db: Connection);
    /**
     * Get all clients with optional filters
     */
    getClients(filters?: ClientFilters): Promise<{
        clients: OfficeClientWithDetails[];
        total: number;
    }>;
    /**
     * Get a single client by ID
     */
    getClient(id: number): Promise<OfficeClientWithDetails | null>;
    /**
     * Create a new client
     */
    createClient(data: Partial<OfficeClient>): Promise<number>;
    /**
     * Update a client
     */
    updateClient(id: number, data: Partial<OfficeClient>): Promise<boolean>;
    /**
     * Delete a client (soft delete by setting status to 'churned')
     */
    deleteClient(id: number): Promise<boolean>;
    /**
     * Get all contacts for a client
     */
    getClientContacts(clientId: number): Promise<OfficeClientContact[]>;
    /**
     * Get a single contact
     */
    getContact(contactId: number): Promise<OfficeClientContact | null>;
    /**
     * Create a contact
     */
    createContact(clientId: number, data: Partial<OfficeClientContact>): Promise<number>;
    /**
     * Update a contact
     */
    updateContact(contactId: number, data: Partial<OfficeClientContact>): Promise<boolean>;
    /**
     * Delete a contact
     */
    deleteContact(contactId: number): Promise<boolean>;
    /**
     * Get projects for a client
     */
    getClientProjects(clientId: number): Promise<any[]>;
    /**
     * Assign a project to a client
     */
    assignProjectToClient(clientId: number, projectId: number): Promise<boolean>;
    /**
     * Remove project from client
     */
    removeProjectFromClient(projectId: number): Promise<boolean>;
    /**
     * Update client's total projects count
     */
    private updateClientProjectCount;
    /**
     * Get payments for a client
     */
    getClientPayments(clientId: number): Promise<OfficePayment[]>;
    /**
     * Create a payment
     */
    createPayment(data: Partial<OfficePayment>): Promise<number>;
    /**
     * Update a payment
     */
    updatePayment(paymentId: number, data: Partial<OfficePayment>): Promise<boolean>;
    /**
     * Update client's lifetime value based on received payments
     */
    private updateClientLifetimeValue;
    /**
     * Get client statistics
     */
    getClientStats(): Promise<{
        total: number;
        by_status: Record<string, number>;
        by_size: Record<string, number>;
        total_lifetime_value: number;
    }>;
    /**
     * Get industries list
     */
    getIndustries(): Promise<string[]>;
}
export default OfficeClientsService;
