// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as UsersAPI from './users';
import * as Shared from '../../shared';

export class Users extends APIResource {
  /**
   * Create an user in an Organization (Super Admin privileges required)
   */
  create(
    orgName: string,
    params: UserCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    const { 'idp-id': idpId, 'send-email': sendEmail, ncid, VisitorID, ...body } = params;
    return this._client.post(`/v2/admin/org/${orgName}/users`, {
      query: { 'idp-id': idpId, 'send-email': sendEmail },
      body,
      ...options,
    });
  }

  /**
   * Add existing User to an Org
   */
  add(
    orgName: string,
    id: string,
    params?: UserAddParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  add(orgName: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.User>;
  add(
    orgName: string,
    id: string,
    params: UserAddParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(params)) {
      return this.add(orgName, id, {}, params);
    }
    const {
      'user role, defaults to REGISTRY_READ': userRoleDefaultsToRegistryRead,
      ncid,
      VisitorID,
    } = params;
    return this._client.post(`/v2/admin/org/${orgName}/users/${id}`, {
      query: { 'user role, defaults to REGISTRY_READ': userRoleDefaultsToRegistryRead },
      ...options,
    });
  }

  /**
   * Remove User from org.
   */
  remove(orgName: string, id: string, options?: Core.RequestOptions): Core.APIPromise<UserRemoveResponse> {
    return this._client.delete(`/v2/admin/org/${orgName}/users/${id}`, options);
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

export interface UserCreateParams {
  /**
   * Body param: Email address of the user. This should be unique.
   */
  email: string;

  /**
   * Query param: If the IDP ID is provided then it is used instead of the one
   * configured for the organization
   */
  'idp-id'?: string;

  /**
   * Query param: Boolean to send email notification, default is true
   */
  'send-email'?: boolean;

  /**
   * Body param: indicates if user has opt in to nvidia emails
   */
  emailOptIn?: boolean;

  /**
   * Body param: indicates if user has accepted EULA
   */
  eulaAccepted?: boolean;

  /**
   * Body param: user name
   */
  name?: string;

  /**
   * Body param: DEPRECATED - use roleTypes which allows multiple roles
   */
  roleType?: string;

  /**
   * Body param: feature roles to give to the user
   */
  roleTypes?: Array<string>;

  /**
   * Body param: user job role
   */
  salesforceContactJobRole?: string;

  /**
   * Body param: Metadata information about the user.
   */
  userMetadata?: UserCreateParams.UserMetadata;

  /**
   * Cookie param:
   */
  ncid?: string;

  /**
   * Cookie param:
   */
  VisitorID?: string;
}

export namespace UserCreateParams {
  /**
   * Metadata information about the user.
   */
  export interface UserMetadata {
    /**
     * Name of the company
     */
    company?: string;

    /**
     * Company URL
     */
    companyUrl?: string;

    /**
     * Country of the user
     */
    country?: string;

    /**
     * User's first name
     */
    firstName?: string;

    /**
     * Industry segment
     */
    industry?: string;

    /**
     * List of development areas that user has interest
     */
    interest?: Array<string>;

    /**
     * User's last name
     */
    lastName?: string;

    /**
     * Role of the user in the company
     */
    role?: string;
  }
}

export interface UserAddParams {
  /**
   * Query param:
   */
  'user role, defaults to REGISTRY_READ'?: string;

  /**
   * Cookie param:
   */
  ncid?: string;

  /**
   * Cookie param:
   */
  VisitorID?: string;
}

export namespace Users {
  export import UserRemoveResponse = UsersAPI.UserRemoveResponse;
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserAddParams = UsersAPI.UserAddParams;
}
