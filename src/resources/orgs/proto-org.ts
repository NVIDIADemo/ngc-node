// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ProtoOrgAPI from './proto-org';
import * as OrgsAPI from './orgs';

export class ProtoOrg extends APIResource {
  /**
   * Create a new organization based on the org info retrieved from the ProtoOrg.
   */
  create(params: ProtoOrgCreateParams, options?: Core.RequestOptions): Core.APIPromise<OrgsAPI.OrgResponse> {
    const { ncid, VisitorID, ...body } = params;
    return this._client.post('/v3/orgs/proto-org', { body, ...options });
  }
}

export interface ProtoOrgCreateParams {
  /**
   * Body param: user country
   */
  country?: string;

  /**
   * Body param: optional description of the organization
   */
  description?: string;

  /**
   * Body param: Name of the organization that will be shown to users.
   */
  displayName?: string;

  /**
   * Body param: Identify the initiator of the org request
   */
  initiator?: string;

  /**
   * Body param: Is NVIDIA internal org or not
   */
  isInternal?: boolean;

  /**
   * Body param: Organization name
   */
  name?: string;

  /**
   * Body param: NVIDIA Cloud Account Identifier
   */
  ncaId?: string;

  /**
   * Body param: NVIDIA Cloud Account Number
   */
  ncaNumber?: string;

  /**
   * Body param: Org owner.
   */
  orgOwner?: ProtoOrgCreateParams.OrgOwner;

  /**
   * Body param: product end customer name for enterprise(Fleet Command) product
   */
  pecName?: string;

  /**
   * Body param: product end customer salesforce.com Id (external customer Id) for
   * enterprise(Fleet Command) product
   */
  pecSfdcId?: string;

  /**
   * Body param:
   */
  productEnablements?: Array<ProtoOrgCreateParams.ProductEnablement>;

  /**
   * Body param: This should be deprecated, use productEnablements instead
   */
  productSubscriptions?: Array<ProtoOrgCreateParams.ProductSubscription>;

  /**
   * Body param: Proto org identifier
   */
  protoOrgId?: string;

  /**
   * Body param: Company or organization industry
   */
  salesforceAccountIndustry?: string;

  /**
   * Body param: Send email to org owner or not. Default is true
   */
  sendEmail?: boolean;

  /**
   * Body param:
   */
  type?: 'UNKNOWN' | 'CLOUD' | 'ENTERPRISE' | 'INDIVIDUAL';

  /**
   * Cookie param:
   */
  ncid?: string;

  /**
   * Cookie param:
   */
  VisitorID?: string;
}

export namespace ProtoOrgCreateParams {
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
    fullName?: string;

    /**
     * Identity Provider ID of the org owner.
     */
    idpId?: string;

    /**
     * Starfleet ID of the org owner.
     */
    starfleetId?: string;
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

export namespace ProtoOrg {
  export import ProtoOrgCreateParams = ProtoOrgAPI.ProtoOrgCreateParams;
}
