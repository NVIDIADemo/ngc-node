// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as UsersAPI from './users';
import * as Shared from '../../shared';

export class Users extends APIResource {
  /**
   * Add User Role in team.
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
    return this._client.patch(`/v2/org/${orgName}/team/${teamName}/users/${id}/add-role`, {
      query: { roles },
      ...options,
    });
  }

  /**
   * Update User Role in team
   */
  updateRole(
    orgName: string,
    teamName: string,
    id: string,
    params?: UserUpdateRoleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  updateRole(
    orgName: string,
    teamName: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  updateRole(
    orgName: string,
    teamName: string,
    id: string,
    params: UserUpdateRoleParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(params)) {
      return this.updateRole(orgName, teamName, id, {}, params);
    }
    const { roles } = params;
    return this._client.patch(`/v2/org/${orgName}/team/${teamName}/users/${id}/update-role`, {
      query: { roles },
      ...options,
    });
  }
}

export interface UserAddRoleParams {
  roles?: Array<string>;
}

export interface UserUpdateRoleParams {
  roles?: Array<string>;
}

export namespace Users {
  export import UserAddRoleParams = UsersAPI.UserAddRoleParams;
  export import UserUpdateRoleParams = UsersAPI.UserUpdateRoleParams;
}
