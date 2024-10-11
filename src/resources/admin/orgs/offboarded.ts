// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as OffboardedAPI from './offboarded';
import { type PageNumberOrganizationsParams } from '../../../pagination';
import { OffboardedListResponsesPageNumberOrganizations } from '../../orgs/orgs';

export class Offboarded extends APIResource {
  /**
   * List all Offboarded organizations.
   */
  list(
    query?: OffboardedListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OffboardedListResponsesPageNumberOrganizations, OffboardedListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<OffboardedListResponsesPageNumberOrganizations, OffboardedListResponse>;
  list(
    query: OffboardedListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OffboardedListResponsesPageNumberOrganizations, OffboardedListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList(
      '/v2/admin/orgs/offboarded',
      OffboardedListResponsesPageNumberOrganizations,
      { query, ...options },
    );
  }
}

/**
 * Information about the Organization
 */
export interface OffboardedListResponse {
  /**
   * Unique Id of this team.
   */
  id?: number;

  /**
   * Org Owner Alternate Contact
   */
  alternateContact?: OffboardedListResponse.AlternateContact;

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
  infinityManagerSettings?: OffboardedListResponse.InfinityManagerSettings;

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
  orgOwner?: OffboardedListResponse.OrgOwner;

  /**
   * Org owners
   */
  orgOwners?: Array<OffboardedListResponse.OrgOwner>;

  /**
   * Product end customer salesforce.com Id (external customer Id). pecSfdcId is for
   * EMS (entitlement management service) to track external paid customer.
   */
  pecSfdcId?: string;

  productEnablements?: Array<OffboardedListResponse.ProductEnablement>;

  productSubscriptions?: Array<OffboardedListResponse.ProductSubscription>;

  /**
   * Repo scan setting definition
   */
  repoScanSettings?: OffboardedListResponse.RepoScanSettings;

  type?: 'UNKNOWN' | 'CLOUD' | 'ENTERPRISE' | 'INDIVIDUAL';

  /**
   * Users information.
   */
  usersInfo?: OffboardedListResponse.UsersInfo;
}

export namespace OffboardedListResponse {
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

export interface OffboardedListParams extends PageNumberOrganizationsParams {}

export namespace Offboarded {
  export import OffboardedListResponse = OffboardedAPI.OffboardedListResponse;
  export import OffboardedListParams = OffboardedAPI.OffboardedListParams;
}

export { OffboardedListResponsesPageNumberOrganizations };
