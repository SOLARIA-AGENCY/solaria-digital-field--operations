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
// ============================================================================
// Response Builder Class
// ============================================================================
export class ResponseBuilder {
    startTime;
    requestId;
    version;
    constructor(options = {}) {
        this.startTime = Date.now();
        this.requestId = options.requestId || this.generateRequestId();
        this.version = options.version || '1.0.0';
    }
    /**
     * Build a successful response
     */
    success(data, options = {}) {
        const { format = 'json', formatted, includeMetadata = true } = options;
        const response = {
            success: true,
            data,
        };
        if (includeMetadata) {
            response.metadata = {
                timestamp: new Date().toISOString(),
                request_id: this.requestId,
                execution_time_ms: Date.now() - this.startTime,
                version: this.version,
            };
        }
        if (format === 'human' && formatted) {
            response.format = 'human';
            response.formatted = formatted;
        }
        return response;
    }
    /**
     * Build an error response
     */
    error(error, options = {}) {
        const { includeMetadata = true } = options;
        const errorObj = typeof error === 'string'
            ? { code: 'UNKNOWN_ERROR', message: error }
            : error;
        const response = {
            success: false,
            error: errorObj,
        };
        if (includeMetadata) {
            response.metadata = {
                timestamp: new Date().toISOString(),
                request_id: this.requestId,
            };
        }
        return response;
    }
    /**
     * Build error from exception
     */
    errorFromException(error, defaultCode = 'INTERNAL_ERROR') {
        // Handle custom errors with code property
        if (error.code && error.message) {
            return this.error({
                code: error.code,
                message: error.message,
                details: error.details,
            });
        }
        // Handle Zod validation errors
        if (error.name === 'ZodError') {
            return this.error({
                code: 'VALIDATION_ERROR',
                message: 'Input validation failed',
                details: error.errors,
                suggestion: 'Check the input parameters and try again',
            });
        }
        // Handle database errors
        if (error.code?.startsWith('ER_')) {
            return this.error({
                code: 'DATABASE_ERROR',
                message: 'Database operation failed',
                details: { sqlError: error.code, message: error.message },
                suggestion: 'Check database connectivity and query syntax',
            });
        }
        // Generic error
        return this.error({
            code: defaultCode,
            message: error.message || 'An unexpected error occurred',
            details: { error: error.toString() },
        });
    }
    /**
     * Generate unique request ID
     */
    generateRequestId() {
        return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
}
// ============================================================================
// Helper Functions
// ============================================================================
/**
 * Quick success response builder
 */
export function successResponse(data, options) {
    const builder = new ResponseBuilder();
    return builder.success(data, options);
}
/**
 * Quick error response builder
 */
export function errorResponse(code, message, details) {
    const builder = new ResponseBuilder();
    return builder.error({ code, message, details });
}
/**
 * Wrap async endpoint execution with standard error handling
 */
export async function wrapEndpoint(executor, options = {}) {
    const builder = new ResponseBuilder({ version: options.version });
    try {
        const data = await executor();
        const formatted = options.format === 'human' && options.formatter
            ? options.formatter(data)
            : undefined;
        return builder.success(data, {
            format: options.format,
            formatted,
        });
    }
    catch (error) {
        return builder.errorFromException(error);
    }
}
// ============================================================================
// Common Error Builders
// ============================================================================
export const CommonErrors = {
    notFound: (entity, id) => ({
        code: `${entity.toUpperCase()}_NOT_FOUND`,
        message: `${entity} with ID ${id} not found`,
        details: { entity, id },
        suggestion: `Verify the ${entity} ID exists and try again`,
    }),
    duplicate: (entity, field, value) => ({
        code: `DUPLICATE_${entity.toUpperCase()}`,
        message: `${entity} with ${field} '${value}' already exists`,
        details: { entity, field, value },
        suggestion: 'Use a different value or enable upsert mode',
    }),
    invalidInput: (field, reason) => ({
        code: 'INVALID_INPUT',
        message: `Invalid ${field}: ${reason}`,
        field,
        suggestion: 'Check the input format and try again',
    }),
    permissionDenied: (action, resource) => ({
        code: 'PERMISSION_DENIED',
        message: `You don't have permission to ${action} ${resource}`,
        details: { action, resource },
        suggestion: 'Contact your administrator to request access',
    }),
    databaseError: (operation) => ({
        code: 'DATABASE_ERROR',
        message: `Database ${operation} failed`,
        suggestion: 'Check database connectivity and try again later',
    }),
};
// ============================================================================
// Response Validation
// ============================================================================
const StandardResponseSchema = z.discriminatedUnion('success', [
    z.object({
        success: z.literal(true),
        data: z.any(),
        metadata: z.object({
            timestamp: z.string().datetime().optional(),
            request_id: z.string().optional(),
            execution_time_ms: z.number().min(0).optional(),
            version: z.string().regex(/^[0-9]+\.[0-9]+\.[0-9]+$/).optional(),
        }).optional(),
        format: z.enum(['json', 'human']).optional(),
        formatted: z.string().optional(),
    }),
    z.object({
        success: z.literal(false),
        error: z.object({
            code: z.string().min(1),
            message: z.string().min(1),
            details: z.any().optional(),
            field: z.string().optional(),
            suggestion: z.string().optional(),
        }),
        metadata: z.object({
            timestamp: z.string().datetime().optional(),
            request_id: z.string().optional(),
        }).optional(),
    }),
]);
/**
 * Validate a response against the standard schema
 */
export function validateResponse(response) {
    try {
        StandardResponseSchema.parse(response);
        return { valid: true };
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            return { valid: false, errors: error };
        }
        return { valid: false };
    }
}
/**
 * Assert response is valid (throws if not)
 */
export function assertValidResponse(response) {
    const result = validateResponse(response);
    if (!result.valid) {
        throw new Error(`Invalid response format: ${JSON.stringify(result.errors)}`);
    }
}
//# sourceMappingURL=response-builder.js.map