// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as EntitlementsAPI from './entitlements';
import { type Response } from '../../_shims/index';

export class Entitlements extends APIResource {
  /**
   * List all organizations with entitlements. (SuperAdmin, ECM and Billing
   * privileges required)
   */
  retrieveAll(query?: EntitlementRetrieveAllParams, options?: Core.RequestOptions): Core.APIPromise<Response>;
  retrieveAll(options?: Core.RequestOptions): Core.APIPromise<Response>;
  retrieveAll(
    query: EntitlementRetrieveAllParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(query)) {
      return this.retrieveAll({}, query);
    }
    return this._client.get('/v2/admin/entitlements', { query, ...options, __binaryResponse: true });
  }
}

export interface EntitlementRetrieveAllParams {
  /**
   * get is paid subscription entitlements
   */
  'is-paid-subscription'?: boolean;

  /**
   * filter by product-name
   */
  'product-name'?: string;
}

export namespace Entitlements {
  export import EntitlementRetrieveAllParams = EntitlementsAPI.EntitlementRetrieveAllParams;
}
