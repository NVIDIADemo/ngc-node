// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class V3OrgsUsers extends APIResource {
  /**
   * Get info and role/invitation in an org by email or id
   */
  retrieve(
    orgName: string,
    userEmailOrId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    return this._client.get(`/v3/orgs/${orgName}/users/${userEmailOrId}`, options);
  }
}