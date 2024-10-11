// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as V2AdminOrgEntitlementsAPI from './v2-admin-org-entitlements';
import { type Response } from '../_shims/index';

export class V2AdminOrgEntitlements extends APIResource {
  /**
   * List all organizations with entitlements. (SuperAdmin, ECM and Billing
   * privileges required)
   */
  retrieveAll(
    orgName: string,
    query?: V2AdminOrgEntitlementRetrieveAllParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response>;
  retrieveAll(orgName: string, options?: Core.RequestOptions): Core.APIPromise<Response>;
  retrieveAll(
    orgName: string,
    query: V2AdminOrgEntitlementRetrieveAllParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(query)) {
      return this.retrieveAll(orgName, {}, query);
    }
    return this._client.get(`/v2/admin/org/${orgName}/entitlements`, {
      query,
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface V2AdminOrgEntitlementRetrieveAllParams {
  /**
   * get is paid subscription entitlements
   */
  'is-paid-subscription'?: boolean;

  /**
   * filter by product-name
   */
  'product-name'?: string;
}

export namespace V2AdminOrgEntitlements {
  export import V2AdminOrgEntitlementRetrieveAllParams = V2AdminOrgEntitlementsAPI.V2AdminOrgEntitlementRetrieveAllParams;
}
