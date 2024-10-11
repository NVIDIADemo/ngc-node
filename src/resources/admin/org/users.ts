// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as UsersAPI from './users';
import * as Shared from '../../shared';

export class Users extends APIResource {
  /**
   * Remove user role in org (if the last role is removed, the user is removed from
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
    return this._client.delete(`/v2/admin/org/${orgName}/users/${id}/remove-role`, {
      query: { roles },
      ...options,
    });
  }

  /**
   * Update User Role in org
   */
  updateRole(
    orgName: string,
    id: string,
    params?: UserUpdateRoleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  updateRole(orgName: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.User>;
  updateRole(
    orgName: string,
    id: string,
    params: UserUpdateRoleParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(params)) {
      return this.updateRole(orgName, id, {}, params);
    }
    const { roles } = params;
    return this._client.patch(`/v2/admin/org/${orgName}/users/${id}/update-role`, {
      query: { roles },
      ...options,
    });
  }
}

export interface UserRemoveRoleParams {
  roles?: Array<string>;
}

export interface UserUpdateRoleParams {
  roles?: Array<string>;
}

export namespace Users {
  export import UserRemoveRoleParams = UsersAPI.UserRemoveRoleParams;
  export import UserUpdateRoleParams = UsersAPI.UserUpdateRoleParams;
}
