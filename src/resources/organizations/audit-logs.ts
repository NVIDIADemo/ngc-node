// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AuditLogsAPI from './audit-logs';

export class AuditLogs extends APIResource {
  /**
   * Delete audit logs
   */
  delete(
    orgName: string,
    params: AuditLogDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuditLogDeleteResponse> {
    const { logIds } = params;
    return this._client.delete(`/v2/org/${orgName}/auditLogs`, { query: { logIds }, ...options });
  }

  /**
   * Request audit logs
   */
  request(
    orgName: string,
    body: AuditLogRequestParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuditLogRequestResponse> {
    return this._client.post(`/v2/org/${orgName}/auditLogs`, { body, ...options });
  }

  /**
   * List audit logs
   */
  retrieveAll(orgName: string, options?: Core.RequestOptions): Core.APIPromise<AuditLogsResponse> {
    return this._client.get(`/v2/org/${orgName}/auditLogs`, options);
  }
}

/**
 * List of audit logs object
 */
export interface AuditLogsResponse {
  /**
   * Array of auditLogs object
   */
  auditLogsList?: Array<AuditLogsResponse.AuditLogsList>;

  requestStatus?: AuditLogsResponse.RequestStatus;
}

export namespace AuditLogsResponse {
  /**
   * Object of audit logs
   */
  export interface AuditLogsList {
    /**
     * Audit logs from date
     */
    auditLogsFrom?: string;

    /**
     * Unique Id of audit logs
     */
    auditLogsId?: string;

    /**
     * Status of audit logs
     */
    auditLogsStatus?: 'UNKNOWN' | 'REQUESTED' | 'READY';

    /**
     * Audit logs to date
     */
    auditLogsTo?: string;

    /**
     * Audit logs requested date
     */
    requestedDate?: string;

    /**
     * Audit logs requester email
     */
    requesterEmail?: string;

    /**
     * Audit logs requester name
     */
    requesterName?: string;

    /**
     * [DEPRECATED] Audit logs requester email
     */
    requsterEmail?: string;

    /**
     * [DEPRECATED] Audit logs requester name
     */
    requsterName?: string;
  }

  export interface RequestStatus {
    requestId?: string;

    serverId?: string;

    /**
     * Describes response status reported by the server.
     */
    statusCode?:
      | 'UNKNOWN'
      | 'SUCCESS'
      | 'UNAUTHORIZED'
      | 'PAYMENT_REQUIRED'
      | 'FORBIDDEN'
      | 'TIMEOUT'
      | 'EXISTS'
      | 'NOT_FOUND'
      | 'INTERNAL_ERROR'
      | 'INVALID_REQUEST'
      | 'INVALID_REQUEST_VERSION'
      | 'INVALID_REQUEST_DATA'
      | 'METHOD_NOT_ALLOWED'
      | 'CONFLICT'
      | 'UNPROCESSABLE_ENTITY'
      | 'TOO_MANY_REQUESTS'
      | 'INSUFFICIENT_STORAGE'
      | 'SERVICE_UNAVAILABLE'
      | 'PAYLOAD_TOO_LARGE'
      | 'NOT_ACCEPTABLE'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'BAD_GATEWAY';

    statusDescription?: string;
  }
}

export interface AuditLogDeleteResponse {
  requestStatus?: AuditLogDeleteResponse.RequestStatus;
}

export namespace AuditLogDeleteResponse {
  export interface RequestStatus {
    requestId?: string;

    serverId?: string;

    /**
     * Describes response status reported by the server.
     */
    statusCode?:
      | 'UNKNOWN'
      | 'SUCCESS'
      | 'UNAUTHORIZED'
      | 'PAYMENT_REQUIRED'
      | 'FORBIDDEN'
      | 'TIMEOUT'
      | 'EXISTS'
      | 'NOT_FOUND'
      | 'INTERNAL_ERROR'
      | 'INVALID_REQUEST'
      | 'INVALID_REQUEST_VERSION'
      | 'INVALID_REQUEST_DATA'
      | 'METHOD_NOT_ALLOWED'
      | 'CONFLICT'
      | 'UNPROCESSABLE_ENTITY'
      | 'TOO_MANY_REQUESTS'
      | 'INSUFFICIENT_STORAGE'
      | 'SERVICE_UNAVAILABLE'
      | 'PAYLOAD_TOO_LARGE'
      | 'NOT_ACCEPTABLE'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'BAD_GATEWAY';

    statusDescription?: string;
  }
}

export interface AuditLogRequestResponse {
  requestStatus?: AuditLogRequestResponse.RequestStatus;
}

export namespace AuditLogRequestResponse {
  export interface RequestStatus {
    requestId?: string;

    serverId?: string;

    /**
     * Describes response status reported by the server.
     */
    statusCode?:
      | 'UNKNOWN'
      | 'SUCCESS'
      | 'UNAUTHORIZED'
      | 'PAYMENT_REQUIRED'
      | 'FORBIDDEN'
      | 'TIMEOUT'
      | 'EXISTS'
      | 'NOT_FOUND'
      | 'INTERNAL_ERROR'
      | 'INVALID_REQUEST'
      | 'INVALID_REQUEST_VERSION'
      | 'INVALID_REQUEST_DATA'
      | 'METHOD_NOT_ALLOWED'
      | 'CONFLICT'
      | 'UNPROCESSABLE_ENTITY'
      | 'TOO_MANY_REQUESTS'
      | 'INSUFFICIENT_STORAGE'
      | 'SERVICE_UNAVAILABLE'
      | 'PAYLOAD_TOO_LARGE'
      | 'NOT_ACCEPTABLE'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'BAD_GATEWAY';

    statusDescription?: string;
  }
}

export interface AuditLogDeleteParams {
  logIds: Array<string>;
}

export interface AuditLogRequestParams {
  /**
   * Audit logs from date in ISO-8601 format
   */
  auditLogsFrom: string;

  /**
   * Audit logs to date in ISO-8601 format
   */
  auditLogsTo: string;
}

export namespace AuditLogs {
  export import AuditLogsResponse = AuditLogsAPI.AuditLogsResponse;
  export import AuditLogDeleteResponse = AuditLogsAPI.AuditLogDeleteResponse;
  export import AuditLogRequestResponse = AuditLogsAPI.AuditLogRequestResponse;
  export import AuditLogDeleteParams = AuditLogsAPI.AuditLogDeleteParams;
  export import AuditLogRequestParams = AuditLogsAPI.AuditLogRequestParams;
}
