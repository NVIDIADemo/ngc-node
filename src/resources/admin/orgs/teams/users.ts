// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as UsersAPI from './users';
import * as Shared from '../../../shared';
import { type Response } from '../../../../_shims/index';

export class Users extends APIResource {
  /**
   * Create an Org-Admin User (Super Admin privileges required)
   */
  create(
    orgName: string,
    teamName: string,
    params: UserCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    const { 'idp-id': idpId, 'send-email': sendEmail, ...body } = params;
    return this._client.post(`/v2/admin/org/${orgName}/team/${teamName}/users`, {
      query: { 'idp-id': idpId, 'send-email': sendEmail },
      body,
      ...options,
    });
  }

  /**
   * Get one team
   */
  retrieve(orgName: string, teamName: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/v2/admin/org/${orgName}/teams/${teamName}`, {
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Edit a Team
   */
  update(
    orgName: string,
    teamName: string,
    body: UserUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.patch(`/v2/admin/org/${orgName}/teams/${teamName}`, {
      body,
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Add existing User to an Team
   */
  add(
    orgName: string,
    teamName: string,
    id: string,
    params?: UserAddParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  add(
    orgName: string,
    teamName: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  add(
    orgName: string,
    teamName: string,
    id: string,
    params: UserAddParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(params)) {
      return this.add(orgName, teamName, id, {}, params);
    }
    const { 'user role, defaults to REGISTRY_READ': userRoleDefaultsToRegistryRead } = params;
    return this._client.post(`/v2/admin/org/${orgName}/team/${teamName}/users/${id}`, {
      query: { 'user role, defaults to REGISTRY_READ': userRoleDefaultsToRegistryRead },
      ...options,
    });
  }

  /**
   * Add user role in team.
   */
  addRole(
    orgName: string,
    teamName: string,
    id: string,
    params?: UserAddRoleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  addRole(
    orgName: string,
    teamName: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  addRole(
    orgName: string,
    teamName: string,
    id: string,
    params: UserAddRoleParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(params)) {
      return this.addRole(orgName, teamName, id, {}, params);
    }
    const { roles } = params;
    return this._client.patch(`/v2/admin/org/${orgName}/team/${teamName}/users/${id}/add-role`, {
      query: { roles },
      ...options,
    });
  }

  /**
   * Get info and role/invitation in a team by email or id
   */
  retrieveUser(
    orgName: string,
    teamName: string,
    userEmailOrId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    return this._client.get(`/v3/orgs/${orgName}/teams/${teamName}/users/${userEmailOrId}`, options);
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

export interface UserUpdateParams {
  /**
   * description of the team
   */
  description?: string;

  /**
   * Infinity manager setting definition
   */
  infinityManagerSettings?: UserUpdateParams.InfinityManagerSettings;

  /**
   * Repo scan setting definition
   */
  repoScanSettings?: UserUpdateParams.RepoScanSettings;
}

export namespace UserUpdateParams {
  /**
   * Infinity manager setting definition
   */
  export interface InfinityManagerSettings {
    /**
     * Enable the infinity manager or not. Used both in org and team level object
     */
    infinityManagerEnabled?: boolean;

    /**
     * Allow override settings at team level. Only used in org level object
     */
    infinityManagerEnableTeamOverride?: boolean;
  }

  /**
   * Repo scan setting definition
   */
  export interface RepoScanSettings {
    /**
     * Allow org admin to override the org level repo scan settings
     */
    repoScanAllowOverride?: boolean;

    /**
     * Allow repository scanning by default
     */
    repoScanByDefault?: boolean;

    /**
     * Enable the repository scan or not. Only used in org level object
     */
    repoScanEnabled?: boolean;

    /**
     * Sends notification to end user after scanning is done
     */
    repoScanEnableNotifications?: boolean;

    /**
     * Allow override settings at team level. Only used in org level object
     */
    repoScanEnableTeamOverride?: boolean;

    /**
     * Allow showing scan results to CLI or UI
     */
    repoScanShowResults?: boolean;
  }
}

export interface UserAddParams {
  'user role, defaults to REGISTRY_READ'?: string;
}

export interface UserAddRoleParams {
  roles?: Array<string>;
}

export namespace Users {
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserUpdateParams = UsersAPI.UserUpdateParams;
  export import UserAddParams = UsersAPI.UserAddParams;
  export import UserAddRoleParams = UsersAPI.UserAddRoleParams;
}
