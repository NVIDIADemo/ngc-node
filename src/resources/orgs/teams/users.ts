// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as UsersAPI from './users';
import * as Shared from '../../shared';

export class Users extends APIResource {
  /**
   * Remove User from team.
   */
  delete(
    orgName: string,
    teamName: string,
    id: string,
    params?: UserDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserDeleteResponse>;
  delete(
    orgName: string,
    teamName: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserDeleteResponse>;
  delete(
    orgName: string,
    teamName: string,
    id: string,
    params: UserDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(orgName, teamName, id, {}, params);
    }
    const { anonymize } = params;
    return this._client.delete(`/v3/orgs/${orgName}/teams/${teamName}/users/${id}`, {
      query: { anonymize },
      ...options,
    });
  }

  /**
   * Invite if user does not exist, otherwise add role in team
   */
  addRole(
    orgName: string,
    teamName: string,
    userEmailOrId: string,
    params: UserAddRoleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    const { roles, ncid, VisitorID } = params;
    return this._client.patch(`/v3/orgs/${orgName}/teams/${teamName}/users/${userEmailOrId}/add-role`, {
      query: { roles },
      ...options,
    });
  }

  /**
   * Remove role in team if user exists, otherwise remove invitation
   */
  removeRole(
    orgName: string,
    teamName: string,
    userEmailOrId: string,
    params?: UserRemoveRoleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  removeRole(
    orgName: string,
    teamName: string,
    userEmailOrId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  removeRole(
    orgName: string,
    teamName: string,
    userEmailOrId: string,
    params: UserRemoveRoleParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(params)) {
      return this.removeRole(orgName, teamName, userEmailOrId, {}, params);
    }
    const { roles } = params;
    return this._client.delete(`/v3/orgs/${orgName}/teams/${teamName}/users/${userEmailOrId}/remove-role`, {
      query: { roles },
      ...options,
    });
  }
}

export interface UserDeleteResponse {
  requestStatus?: UserDeleteResponse.RequestStatus;
}

export namespace UserDeleteResponse {
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

export interface UserDeleteParams {
  /**
   * If anonymize is true, then org owner permission is required.
   */
  anonymize?: boolean;
}

export interface UserAddRoleParams {
  /**
   * Query param:
   */
  roles: Array<string>;

  /**
   * Cookie param:
   */
  ncid?: string;

  /**
   * Cookie param:
   */
  VisitorID?: string;
}

export interface UserRemoveRoleParams {
  roles?: Array<string>;
}

export namespace Users {
  export import UserDeleteResponse = UsersAPI.UserDeleteResponse;
  export import UserDeleteParams = UsersAPI.UserDeleteParams;
  export import UserAddRoleParams = UsersAPI.UserAddRoleParams;
  export import UserRemoveRoleParams = UsersAPI.UserRemoveRoleParams;
}
