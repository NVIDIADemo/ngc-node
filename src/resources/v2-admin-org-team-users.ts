// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as V2AdminOrgTeamUsersAPI from './v2-admin-org-team-users';
import * as Shared from './shared';

export class V2AdminOrgTeamUsers extends APIResource {
  /**
   * Add user role in team.
   */
  addRole(
    orgName: string,
    teamName: string,
    id: string,
    params?: V2AdminOrgTeamUserAddRoleParams,
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
    params: V2AdminOrgTeamUserAddRoleParams | Core.RequestOptions = {},
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
}

export interface V2AdminOrgTeamUserAddRoleParams {
  roles?: Array<string>;
}

export namespace V2AdminOrgTeamUsers {
  export import V2AdminOrgTeamUserAddRoleParams = V2AdminOrgTeamUsersAPI.V2AdminOrgTeamUserAddRoleParams;
}
