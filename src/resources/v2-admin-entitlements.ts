// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as V2AdminEntitlementsAPI from './v2-admin-entitlements';
import { type Response } from '../_shims/index';

export class V2AdminEntitlements extends APIResource {
  /**
   * List all organizations with entitlements. (SuperAdmin, ECM and Billing
   * privileges required)
   */
  retrieveAll(
    query?: V2AdminEntitlementRetrieveAllParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response>;
  retrieveAll(options?: Core.RequestOptions): Core.APIPromise<Response>;
  retrieveAll(
    query: V2AdminEntitlementRetrieveAllParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(query)) {
      return this.retrieveAll({}, query);
    }
    return this._client.get('/v2/admin/entitlements', { query, ...options, __binaryResponse: true });
  }
}

export interface V2AdminEntitlementRetrieveAllParams {
  /**
   * get is paid subscription entitlements
   */
  'is-paid-subscription'?: boolean;

  /**
   * filter by product-name
   */
  'product-name'?: string;
}

export namespace V2AdminEntitlements {
  export import V2AdminEntitlementRetrieveAllParams = V2AdminEntitlementsAPI.V2AdminEntitlementRetrieveAllParams;
}
