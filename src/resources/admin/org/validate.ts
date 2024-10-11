// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ValidateAPI from './validate';
import * as OrgsAPI from '../../orgs/orgs';

export class Validate extends APIResource {
  /**
   * List all organizations that match the validate org params
   */
  retrieveAll(
    query: ValidateRetrieveAllParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrgsAPI.OrgList> {
    return this._client.get('/v2/admin/org/validate', { query, ...options });
  }
}

export interface ValidateRetrieveAllParams {
  /**
   * Validate Organization Parameters
   */
  q: ValidateRetrieveAllParams.Q;
}

export namespace ValidateRetrieveAllParams {
  /**
   * Validate Organization Parameters
   */
  export interface Q {
    /**
     * Org owner.
     */
    orgOwner: Q.OrgOwner;

    /**
     * Product end customer salesforce.com id (external customer id) for enterprise
     * product.
     */
    pecSfdcId: string;

    /**
     * Product Subscriptions.
     */
    productSubscriptions: Array<Q.ProductSubscription>;
  }

  export namespace Q {
    /**
     * Org owner.
     */
    export interface OrgOwner {
      /**
       * Email address of the org owner.
       */
      email: string;

      /**
       * Org owner name.
       */
      fullName: string;

      /**
       * Last time the org owner logged in.
       */
      lastLoginDate?: string;
    }

    /**
     * Product Subscription
     */
    export interface ProductSubscription {
      /**
       * Product Name (NVAIE, BASE_COMMAND, FleetCommand, REGISTRY, etc).
       */
      productName: string;

      /**
       * Unique entitlement identifier
       */
      id?: string;

      /**
       * EMS Subscription type. (options: EMS_EVAL, EMS_NFR and EMS_COMMERCIAL)
       */
      emsEntitlementType?: 'EMS_EVAL' | 'EMS_NFR' | 'EMS_COMMERICAL' | 'EMS_COMMERCIAL';

      /**
       * Date on which the subscription expires. The subscription is invalid after this
       * date. (yyyy-MM-dd)
       */
      expirationDate?: string;

      /**
       * Date on which the subscription becomes active. (yyyy-MM-dd)
       */
      startDate?: string;

      /**
       * Subscription type. (options: NGC_ADMIN_EVAL, NGC_ADMIN_NFR,
       * NGC_ADMIN_COMMERCIAL)
       */
      type?: 'NGC_ADMIN_EVAL' | 'NGC_ADMIN_NFR' | 'NGC_ADMIN_COMMERCIAL';
    }
  }
}

export namespace Validate {
  export import ValidateRetrieveAllParams = ValidateAPI.ValidateRetrieveAllParams;
}
