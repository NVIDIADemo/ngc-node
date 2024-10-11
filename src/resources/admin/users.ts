// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as UsersAPI from './users';
import * as Shared from '../shared';

export class Users extends APIResource {
  /**
   * Get User details
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.User> {
    return this._client.get(`/v2/admin/users/${id}`, options);
  }

  /**
   * Invite an existing user again (Super Admin privileges required)
   */
  invite(params: UserInviteParams, options?: Core.RequestOptions): Core.APIPromise<Shared.User> {
    const { email, 'send-email': sendEmail } = params;
    return this._client.patch('/v2/admin/users/invite', {
      query: { email, 'send-email': sendEmail },
      ...options,
    });
  }

  /**
   * What am I? Admin version, shows more info than regular endpoint
   */
  me(query?: UserMeParams, options?: Core.RequestOptions): Core.APIPromise<Shared.User>;
  me(options?: Core.RequestOptions): Core.APIPromise<Shared.User>;
  me(
    query: UserMeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(query)) {
      return this.me({}, query);
    }
    return this._client.get('/v2/admin/users/me', { query, ...options });
  }

  /**
   * Backfill the org owner for individual users
   */
  orgOwnerBackfill(
    userId: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserOrgOwnerBackfillResponse> {
    return this._client.post(`/v2/admin/users/${userId}/org-owner-backfill`, options);
  }
}

export interface UserOrgOwnerBackfillResponse {
  requestStatus?: UserOrgOwnerBackfillResponse.RequestStatus;
}

export namespace UserOrgOwnerBackfillResponse {
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

export interface UserInviteParams {
  email: string;

  /**
   * Boolean to send email notification, default is true
   */
  'send-email'?: boolean;
}

export interface UserMeParams {
  'org-name'?: string;
}

export namespace Users {
  export import UserOrgOwnerBackfillResponse = UsersAPI.UserOrgOwnerBackfillResponse;
  export import UserInviteParams = UsersAPI.UserInviteParams;
  export import UserMeParams = UsersAPI.UserMeParams;
}
