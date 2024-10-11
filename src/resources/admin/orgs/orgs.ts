// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as OrgsAPI from './orgs';
import * as NcaIDsAPI from './nca-ids';
import * as OffboardedAPI from './offboarded';
import * as TeamsAPI from './teams';
import * as UsersAPI from './users';
import { type Response } from '../../../_shims/index';

export class Orgs extends APIResource {
  ncaIds: NcaIDsAPI.NcaIDs = new NcaIDsAPI.NcaIDs(this._client);
  offboarded: OffboardedAPI.Offboarded = new OffboardedAPI.Offboarded(this._client);
  teams: TeamsAPI.Teams = new TeamsAPI.Teams(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * OrgCreateRequest is used to create the organization or when no nca_id is
   * provided upfront, the OrgCreateRequest is stored as proto org, and proto org
   * flow initiates (SuperAdmin privileges required)
   */
  create(params: OrgCreateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    const { ncid, VisitorID, ...body } = params;
    return this._client.post('/v3/admin/orgs', { body, ...options, __binaryResponse: true });
  }

  /**
   * List all organizations. (SuperAdmin privileges required)
   */
  list(query?: OrgListParams, options?: Core.RequestOptions): Core.APIPromise<Response>;
  list(options?: Core.RequestOptions): Core.APIPromise<Response>;
  list(
    query: OrgListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v2/admin/org', { query, ...options, __binaryResponse: true });
  }
}

export interface OrgCreateParams {
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
  orgOwner?: OrgCreateParams.OrgOwner;

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
  productEnablements?: Array<OrgCreateParams.ProductEnablement>;

  /**
   * Body param: This should be deprecated, use productEnablements instead
   */
  productSubscriptions?: Array<OrgCreateParams.ProductSubscription>;

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

export namespace OrgCreateParams {
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

export interface OrgListParams {
  'Filter using org display name'?: string;

  'Filter using org owner email'?: OrgListParams.FilterUsingOrgOwnerEmail;

  'Filter using org owner name'?: string;

  /**
   * Org description to search
   */
  'org-desc'?: string;

  /**
   * Org name to search
   */
  'org-name'?: string;

  /**
   * Org Type to search
   */
  'org-type'?: 'UNKNOWN' | 'CLOUD' | 'ENTERPRISE' | 'INDIVIDUAL';

  /**
   * The page number of result
   */
  'page-number'?: number;

  /**
   * The page size of result
   */
  'page-size'?: number;

  /**
   * PEC ID to search
   */
  'pec-id'?: string;
}

export namespace OrgListParams {
  export interface FilterUsingOrgOwnerEmail {
    ' Email should be base-64-encoded'?: string;
  }
}

export namespace Orgs {
  export import OrgCreateParams = OrgsAPI.OrgCreateParams;
  export import OrgListParams = OrgsAPI.OrgListParams;
  export import NcaIDs = NcaIDsAPI.NcaIDs;
  export import NcaIDCreateParams = NcaIDsAPI.NcaIDCreateParams;
  export import Offboarded = OffboardedAPI.Offboarded;
  export import OffboardedListParams = OffboardedAPI.OffboardedListParams;
  export import Teams = TeamsAPI.Teams;
  export import TeamListParams = TeamsAPI.TeamListParams;
  export import Users = UsersAPI.Users;
}
