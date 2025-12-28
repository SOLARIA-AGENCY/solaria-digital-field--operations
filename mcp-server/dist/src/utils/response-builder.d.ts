/**
 * Standard Response Builder Utilities
 *
 * @author ECO-Lambda | DFO Enhancement Plan
 * @date 2025-12-27
 * @task DFN-002
 *
 * Utilities for building consistent JSON responses across all DFO endpoints
 */
import { z } from 'zod';
export interface ResponseMetadata {
    timestamp?: string;
    request_id?: string;
    execution_time_ms?: number;
    version?: string;
}
export interface StandardSuccessResponse<T = any> {
    success: true;
    data: T;
    metadata?: ResponseMetadata;
    format?: 'json' | 'human';
    formatted?: string;
}
export interface ErrorObject {
    code: string;
    message: string;
    details?: any;
    field?: string;
    suggestion?: string;
}
export interface StandardErrorResponse {
    success: false;
    error: ErrorObject;
    metadata?: ResponseMetadata;
}
export type StandardResponse<T = any> = StandardSuccessResponse<T> | StandardErrorResponse;
export declare class ResponseBuilder {
    private startTime;
    private requestId?;
    private version;
    constructor(options?: {
        requestId?: string;
        version?: string;
    });
    /**
     * Build a successful response
     */
    success<T>(data: T, options?: {
        format?: 'json' | 'human';
        formatted?: string;
        includeMetadata?: boolean;
    }): StandardSuccessResponse<T>;
    /**
     * Build an error response
     */
    error(error: ErrorObject | string, options?: {
        includeMetadata?: boolean;
    }): StandardErrorResponse;
    /**
     * Build error from exception
     */
    errorFromException(error: any, defaultCode?: string): StandardErrorResponse;
    /**
     * Generate unique request ID
     */
    private generateRequestId;
}
/**
 * Quick success response builder
 */
export declare function successResponse<T>(data: T, options?: {
    format?: 'json' | 'human';
    formatted?: string;
}): StandardSuccessResponse<T>;
/**
 * Quick error response builder
 */
export declare function errorResponse(code: string, message: string, details?: any): StandardErrorResponse;
/**
 * Wrap async endpoint execution with standard error handling
 */
export declare function wrapEndpoint<T>(executor: () => Promise<T>, options?: {
    format?: 'json' | 'human';
    formatter?: (data: T) => string;
    version?: string;
}): Promise<StandardResponse<T>>;
export declare const CommonErrors: {
    notFound: (entity: string, id: number | string) => ErrorObject;
    duplicate: (entity: string, field: string, value: any) => ErrorObject;
    invalidInput: (field: string, reason: string) => ErrorObject;
    permissionDenied: (action: string, resource: string) => ErrorObject;
    databaseError: (operation: string) => ErrorObject;
};
/**
 * Validate a response against the standard schema
 */
export declare function validateResponse(response: unknown): {
    valid: boolean;
    errors?: z.ZodError;
};
/**
 * Assert response is valid (throws if not)
 */
export declare function assertValidResponse(response: unknown): asserts response is StandardResponse;
