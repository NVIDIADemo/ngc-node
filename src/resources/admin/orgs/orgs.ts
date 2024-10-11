// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as OrgsAPI from './orgs';
import * as NcaIDsAPI from './nca-ids';
import * as OffboardedAPI from './offboarded';
import * as TeamsAPI from './teams';
import * as UsersAPI from './users';
import { type PageNumberOrganizationsParams } from '../../../pagination';
import { type Response } from '../../../_shims/index';
import { OrgListResponsesPageNumberOrganizations } from '../../orgs/orgs';

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
  list(
    query?: OrgListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrgListResponsesPageNumberOrganizations, OrgListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrgListResponsesPageNumberOrganizations, OrgListResponse>;
  list(
    query: OrgListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrgListResponsesPageNumberOrganizations, OrgListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v2/admin/org', OrgListResponsesPageNumberOrganizations, {
      query,
      ...options,
    });
  }
}

/**
 * Information about the Organization
 */
export interface OrgListResponse {
  /**
   * Unique Id of this team.
   */
  id?: number;

  /**
   * Org Owner Alternate Contact
   */
  alternateContact?: OrgListResponse.AlternateContact;

  /**
   * Billing account ID.
   */
  billingAccountId?: string;

  /**
   * Identifies if the org can be reused.
   */
  canAddOn?: boolean;

  /**
   * ISO country code of the organization.
   */
  country?: string;

  /**
   * Optional description of the organization.
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
   * Industry of the organization.
   */
  industry?: string;

  /**
   * Infinity manager setting definition
   */
  infinityManagerSettings?: OrgListResponse.InfinityManagerSettings;

  /**
   * Dataset Service enable flag for an organization
   */
  isDatasetServiceEnabled?: boolean;

  /**
   * Is NVIDIA internal org or not
   */
  isInternal?: boolean;

  /**
   * Indicates when the org is a proto org
   */
  isProto?: boolean;

  /**
   * Quick Start enable flag for an organization
   */
  isQuickStartEnabled?: boolean;

  /**
   * If a server side encryption is enabled for private registry (models, resources)
   */
  isRegistrySSEEnabled?: boolean;

  /**
   * Secrets Manager Service enable flag for an organization
   */
  isSecretsManagerServiceEnabled?: boolean;

  /**
   * Secure Credential Sharing Service enable flag for an organization
   */
  isSecureCredentialSharingServiceEnabled?: boolean;

  /**
   * If a separate influx db used for an organization in BCP for job telemetry
   */
  isSeparateInfluxDbUsed?: boolean;

  /**
   * Organization name.
   */
  name?: string;

  /**
   * NVIDIA Cloud Account Number.
   */
  nan?: string;

  /**
   * Org owner.
   */
  orgOwner?: OrgListResponse.OrgOwner;

  /**
   * Org owners
   */
  orgOwners?: Array<OrgListResponse.OrgOwner>;

  /**
   * Product end customer salesforce.com Id (external customer Id). pecSfdcId is for
   * EMS (entitlement management service) to track external paid customer.
   */
  pecSfdcId?: string;

  productEnablements?: Array<OrgListResponse.ProductEnablement>;

  productSubscriptions?: Array<OrgListResponse.ProductSubscription>;

  /**
   * Repo scan setting definition
   */
  repoScanSettings?: OrgListResponse.RepoScanSettings;

  type?: 'UNKNOWN' | 'CLOUD' | 'ENTERPRISE' | 'INDIVIDUAL';

  /**
   * Users information.
   */
  usersInfo?: OrgListResponse.UsersInfo;
}

export namespace OrgListResponse {
  /**
   * Org Owner Alternate Contact
   */
  export interface AlternateContact {
    /**
     * Alternate contact's email.
     */
    email?: string;

    /**
     * Full name of the alternate contact.
     */
    fullName?: string;
  }

  /**
   * Infinity manager setting definition
   */
  export interface InfinityManagerSettings {
    /**
     * Enable the infinity manager or not. Used both in org and team level object
     */
    infinityManagerEnabled?: boolean;

    /**
     * Allow override settings at team level. Only used in org level object
     */
    infinityManagerEnableTeamOverride?: boolean;
  }

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

  /**
   * Repo scan setting definition
   */
  export interface RepoScanSettings {
    /**
     * Allow org admin to override the org level repo scan settings
     */
    repoScanAllowOverride?: boolean;

    /**
     * Allow repository scanning by default
     */
    repoScanByDefault?: boolean;

    /**
     * Enable the repository scan or not. Only used in org level object
     */
    repoScanEnabled?: boolean;

    /**
     * Sends notification to end user after scanning is done
     */
    repoScanEnableNotifications?: boolean;

    /**
     * Allow override settings at team level. Only used in org level object
     */
    repoScanEnableTeamOverride?: boolean;

    /**
     * Allow showing scan results to CLI or UI
     */
    repoScanShowResults?: boolean;
  }

  /**
   * Users information.
   */
  export interface UsersInfo {
    /**
     * Total number of users.
     */
    totalUsers?: number;
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

export interface OrgListParams extends PageNumberOrganizationsParams {
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
  export import OrgListResponse = OrgsAPI.OrgListResponse;
  export import OrgCreateParams = OrgsAPI.OrgCreateParams;
  export import OrgListParams = OrgsAPI.OrgListParams;
  export import NcaIDs = NcaIDsAPI.NcaIDs;
  export import NcaIDCreateParams = NcaIDsAPI.NcaIDCreateParams;
  export import Offboarded = OffboardedAPI.Offboarded;
  export import OffboardedListResponse = OffboardedAPI.OffboardedListResponse;
  export import OffboardedListParams = OffboardedAPI.OffboardedListParams;
  export import Teams = TeamsAPI.Teams;
  export import TeamListResponse = TeamsAPI.TeamListResponse;
  export import TeamListParams = TeamsAPI.TeamListParams;
  export import Users = UsersAPI.Users;
}

export { OrgListResponsesPageNumberOrganizations };
