// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UsersAPI from './users';
import * as Shared from '../shared';

export class Users extends APIResource {
  /**
   * Sync crm id with user email (Super Admin privileges required)
   */
  crmSync(id: number, options?: Core.RequestOptions): Core.APIPromise<UserCRMSyncResponse> {
    return this._client.post(`/v2/admin/users/${id}/crm-sync`, options);
  }

  /**
   * Migrate User Deprecated Roles.
   */
  migrateDeprecatedRoles(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.User> {
    return this._client.post(`/v2/admin/users/${id}/migrate-deprecated-roles`, options);
  }
}

export interface UserCRMSyncResponse {
  requestStatus?: UserCRMSyncResponse.RequestStatus;
}

export namespace UserCRMSyncResponse {
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

export namespace Users {
  export import UserCRMSyncResponse = UsersAPI.UserCRMSyncResponse;
}
