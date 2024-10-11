// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as OrgStatusAPI from './org-status';
import { type Response } from '../../_shims/index';

export class OrgStatus extends APIResource {
  /**
   * Create org product enablement
   */
  create(
    orgName: string,
    body: OrgStatusCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.post(`/v2/admin/org/${orgName}/enablement`, {
      body,
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface OrgStatusCreateParams {
  /**
   * False only if called by SbMS.
   */
  createSubscription: boolean;

  /**
   * Product Enablement
   */
  productEnablement: OrgStatusCreateParams.ProductEnablement;
}

export namespace OrgStatusCreateParams {
  /**
   * Product Enablement
   */
  export interface ProductEnablement {
    /**
     * Product Name (NVAIE, BASE_COMMAND, REGISTRY, etc)
     */
    productName: string;

    /**
     * Product Enablement Types
     */
    type:
      | 'NGC_ADMIN_EVAL'
      | 'NGC_ADMIN_NFR'
      | 'NGC_ADMIN_COMMERCIAL'
      | 'EMS_EVAL'
      | 'EMS_NFR'
      | 'EMS_COMMERCIAL'
      | 'NGC_ADMIN_DEVELOPER';

    /**
     * Date on which the subscription expires. The subscription is invalid after this
     * date. (yyyy-MM-dd)
     */
    expirationDate?: string;

    poDetails?: Array<ProductEnablement.PoDetail>;
  }

  export namespace ProductEnablement {
    /**
     * Purchase Order.
     */
    export interface PoDetail {
      /**
       * Entitlement identifier.
       */
      entitlementId?: string;

      /**
       * PAK (Product Activation Key) identifier.
       */
      pkId?: string;
    }
  }
}

export namespace OrgStatus {
  export import OrgStatusCreateParams = OrgStatusAPI.OrgStatusCreateParams;
}
