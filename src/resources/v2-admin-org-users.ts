// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as V2AdminOrgUsersAPI from './v2-admin-org-users';
import * as Shared from './shared';

export class V2AdminOrgUsers extends APIResource {
  /**
   * Add user role in org.
   */
  addRole(
    orgName: string,
    id: string,
    params?: V2AdminOrgUserAddRoleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  addRole(orgName: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.User>;
  addRole(
    orgName: string,
    id: string,
    params: V2AdminOrgUserAddRoleParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(params)) {
      return this.addRole(orgName, id, {}, params);
    }
    const { roles } = params;
    return this._client.patch(`/v2/admin/org/${orgName}/users/${id}/add-role`, {
      query: { roles },
      ...options,
    });
  }
}

export interface V2AdminOrgUserAddRoleParams {
  roles?: Array<string>;
}

export namespace V2AdminOrgUsers {
  export import V2AdminOrgUserAddRoleParams = V2AdminOrgUsersAPI.V2AdminOrgUserAddRoleParams;
}
