// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AuditLogsAPI from './audit-logs';

export class AuditLogs extends APIResource {
  /**
   * Get downloable link for audit logs
   */
  retrieve(
    orgName: string,
    logId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuditLogsPresignedURL> {
    return this._client.get(`/v2/org/${orgName}/auditLogs/${logId}`, options);
  }
}

/**
 * List of audit logs object
 */
export interface AuditLogsPresignedURL {
  /**
   * Presign url for user to download audit logs
   */
  auditLogsPresignedUrl?: string;

  requestStatus?: AuditLogsPresignedURL.RequestStatus;
}

export namespace AuditLogsPresignedURL {
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

export namespace AuditLogs {
  export import AuditLogsPresignedURL = AuditLogsAPI.AuditLogsPresignedURL;
}
