// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as UsersAPI from './users';
import * as Shared from '../../../shared';

export class Users extends APIResource {
  /**
   * Remove user role in team (if the last role is removed, the user is removed from
   * the team).
   */
  removeRole(
    orgName: string,
    teamName: string,
    id: string,
    params?: UserRemoveRoleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  removeRole(
    orgName: string,
    teamName: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  removeRole(
    orgName: string,
    teamName: string,
    id: string,
    params: UserRemoveRoleParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(params)) {
      return this.removeRole(orgName, teamName, id, {}, params);
    }
    const { roles } = params;
    return this._client.delete(`/v2/admin/org/${orgName}/team/${teamName}/users/${id}/remove-role`, {
      query: { roles },
      ...options,
    });
  }
}

export interface UserRemoveRoleParams {
  roles?: Array<string>;
}

export namespace Users {
  export import UserRemoveRoleParams = UsersAPI.UserRemoveRoleParams;
}
