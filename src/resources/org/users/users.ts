// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as UsersAPI from './users';
import * as Shared from '../../shared';
import * as InvitationsAPI from './invitations';

export class Users extends APIResource {
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);

  /**
   * Get User details in org context
   */
  retrieve(
    orgName: string,
    id: string,
    query?: UserRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  retrieve(orgName: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.User>;
  retrieve(
    orgName: string,
    id: string,
    query: UserRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(query)) {
      return this.retrieve(orgName, id, {}, query);
    }
    return this._client.get(`/v2/org/${orgName}/users/${id}`, { query, ...options });
  }

  /**
   * Add User Role in org.
   */
  addRole(
    orgName: string,
    id: string,
    params?: UserAddRoleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  addRole(orgName: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.User>;
  addRole(
    orgName: string,
    id: string,
    params: UserAddRoleParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(params)) {
      return this.addRole(orgName, id, {}, params);
    }
    const { roles } = params;
    return this._client.patch(`/v2/org/${orgName}/users/${id}/add-role`, { query: { roles }, ...options });
  }

  /**
   * Create a new invitation and send email to a user. This is used when a previously
   * sent invite email expired. (Org Admin privileges required)
   */
  invite(
    orgName: string,
    id: string,
    query?: UserInviteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  invite(orgName: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.User>;
  invite(
    orgName: string,
    id: string,
    query: UserInviteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(query)) {
      return this.invite(orgName, id, {}, query);
    }
    return this._client.get(`/v2/org/${orgName}/users/${id}/invite`, { query, ...options });
  }

  /**
   * Remove User from org. (User Admin Privileges Required)
   */
  remove(
    orgName: string,
    id: string,
    params?: UserRemoveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserRemoveResponse>;
  remove(orgName: string, id: string, options?: Core.RequestOptions): Core.APIPromise<UserRemoveResponse>;
  remove(
    orgName: string,
    id: string,
    params: UserRemoveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserRemoveResponse> {
    if (isRequestOptions(params)) {
      return this.remove(orgName, id, {}, params);
    }
    const { anonymize } = params;
    return this._client.delete(`/v2/org/${orgName}/users/${id}`, { query: { anonymize }, ...options });
  }

  /**
   * Remove User Role in org (if the last role is removed, the user is removed from
   * the org and org teams).
   */
  removeRole(
    orgName: string,
    id: string,
    params?: UserRemoveRoleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  removeRole(orgName: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.User>;
  removeRole(
    orgName: string,
    id: string,
    params: UserRemoveRoleParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(params)) {
      return this.removeRole(orgName, id, {}, params);
    }
    const { roles } = params;
    return this._client.delete(`/v2/org/${orgName}/users/${id}/remove-role`, {
      query: { roles },
      ...options,
    });
  }
}

export interface UserRemoveResponse {
  requestStatus?: UserRemoveResponse.RequestStatus;
}

export namespace UserRemoveResponse {
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

export interface UserRetrieveParams {
  /**
   * If the IDP ID is provided then it is used instead of the one configured for the
   * organization. If no IDP is configured for the organization, then IDP is guessed
   * based on the email domain
   */
  'idp-id'?: string;
}

export interface UserAddRoleParams {
  roles?: Array<string>;
}

export interface UserInviteParams {
  'send-email'?: boolean;
}

export interface UserRemoveParams {
  /**
   * If anonymize is true, then org owner permission is required.
   */
  anonymize?: boolean;
}

export interface UserRemoveRoleParams {
  roles?: Array<string>;
}

export namespace Users {
  export import UserRemoveResponse = UsersAPI.UserRemoveResponse;
  export import UserRetrieveParams = UsersAPI.UserRetrieveParams;
  export import UserAddRoleParams = UsersAPI.UserAddRoleParams;
  export import UserInviteParams = UsersAPI.UserInviteParams;
  export import UserRemoveParams = UsersAPI.UserRemoveParams;
  export import UserRemoveRoleParams = UsersAPI.UserRemoveRoleParams;
  export import Invitations = InvitationsAPI.Invitations;
  export import InvitationListResponse = InvitationsAPI.InvitationListResponse;
  export import InvitationDeleteResponse = InvitationsAPI.InvitationDeleteResponse;
  export import InvitationListParams = InvitationsAPI.InvitationListParams;
}
