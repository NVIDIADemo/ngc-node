// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SuperAdminOrgAPI from './super-admin-org';
import * as OrgStatusAPI from './org-status';
import { type Response } from '../../_shims/index';

export class SuperAdminOrg extends APIResource {
  orgStatus: OrgStatusAPI.OrgStatus = new OrgStatusAPI.OrgStatus(this._client);

  /**
   * Create a new organization. (SuperAdmin privileges required)
   */
  create(body: SuperAdminOrgCreateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post('/v2/admin/orgs', { body, ...options, __binaryResponse: true });
  }
}

export interface SuperAdminOrgCreateParams {
  /**
   * Org owner.
   */
  orgOwner: SuperAdminOrgCreateParams.OrgOwner;

  /**
   * user country
   */
  country?: string;

  /**
   * optional description of the organization
   */
  description?: string;

  /**
   * Name of the organization that will be shown to users.
   */
  displayName?: string;

  /**
   * Identity Provider ID.
   */
  idpId?: string;

  /**
   * Is NVIDIA internal org or not
   */
  isInternal?: boolean;

  /**
   * Organization name
   */
  name?: string;

  /**
   * product end customer name for enterprise(Fleet Command) product
   */
  pecName?: string;

  /**
   * product end customer salesforce.com Id (external customer Id) for
   * enterprise(Fleet Command) product
   */
  pecSfdcId?: string;

  productEnablements?: Array<SuperAdminOrgCreateParams.ProductEnablement>;

  /**
   * This should be deprecated, use productEnablements instead
   */
  productSubscriptions?: Array<SuperAdminOrgCreateParams.ProductSubscription>;

  /**
   * Company or organization industry
   */
  salesforceAccountIndustry?: string;

  /**
   * Send email to org owner or not. Default is true
   */
  sendEmail?: boolean;

  type?: 'UNKNOWN' | 'CLOUD' | 'ENTERPRISE' | 'INDIVIDUAL';
}

export namespace SuperAdminOrgCreateParams {
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

export namespace SuperAdminOrg {
  export import SuperAdminOrgCreateParams = SuperAdminOrgAPI.SuperAdminOrgCreateParams;
  export import OrgStatus = OrgStatusAPI.OrgStatus;
  export import OrgStatusCreateParams = OrgStatusAPI.OrgStatusCreateParams;
}
