// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as OrgAPI from './org';
import * as UsersAPI from './users';
import * as ValidateAPI from './validate';
import * as RegistryAPI from './registry/registry';
import * as TeamAPI from './team/team';
import { type PageNumberOrganizationsParams } from '../../../pagination';
import { type Response } from '../../../_shims/index';
import { OrgListResponsesPageNumberOrganizations } from '../../orgs/orgs';

export class Org extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  registry: RegistryAPI.Registry = new RegistryAPI.Registry(this._client);
  validate: ValidateAPI.Validate = new ValidateAPI.Validate(this._client);
  team: TeamAPI.Team = new TeamAPI.Team(this._client);

  /**
   * Get organization info. (SuperAdmin privileges required)
   */
  retrieve(orgName: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/v2/admin/org/${orgName}`, { ...options, __binaryResponse: true });
  }

  /**
   * Update org information and settings. Superadmin privileges required
   */
  update(orgName: string, body: OrgUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.patch(`/v2/admin/org/${orgName}`, { body, ...options, __binaryResponse: true });
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
    return this._client.getAPIList('/v3/admin/org', OrgListResponsesPageNumberOrganizations, {
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

export interface OrgUpdateParams {
  /**
   * Org Owner Alternate Contact
   */
  alternateContact?: OrgUpdateParams.AlternateContact;

  /**
   * Name of the company
   */
  companyName?: string;

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
   * Infinity manager setting definition
   */
  infinityManagerSettings?: OrgUpdateParams.InfinityManagerSettings;

  /**
   * Dataset Service enable flag for an organization
   */
  isDatasetServiceEnabled?: boolean;

  /**
   * Is NVIDIA internal org or not
   */
  isInternal?: boolean;

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
   * If a separate influx db used for an organization in Base Command Platform job
   * telemetry
   */
  isSeparateInfluxDbUsed?: boolean;

  /**
   * Org owner.
   */
  orgOwner?: OrgUpdateParams.OrgOwner;

  /**
   * Org owners
   */
  orgOwners?: Array<OrgUpdateParams.OrgOwner>;

  /**
   * product end customer name for enterprise(Fleet Command) product
   */
  pecName?: string;

  /**
   * product end customer salesforce.com Id (external customer Id) for
   * enterprise(Fleet Command) product
   */
  pecSfdcId?: string;

  productEnablements?: Array<OrgUpdateParams.ProductEnablement>;

  productSubscriptions?: Array<OrgUpdateParams.ProductSubscription>;

  /**
   * Repo scan setting definition
   */
  repoScanSettings?: OrgUpdateParams.RepoScanSettings;

  type?: 'UNKNOWN' | 'CLOUD' | 'ENTERPRISE' | 'INDIVIDUAL';
}

export namespace OrgUpdateParams {
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

export namespace Org {
  export import OrgListResponse = OrgAPI.OrgListResponse;
  export import OrgUpdateParams = OrgAPI.OrgUpdateParams;
  export import OrgListParams = OrgAPI.OrgListParams;
  export import Users = UsersAPI.Users;
  export import UserRemoveRoleParams = UsersAPI.UserRemoveRoleParams;
  export import UserUpdateRoleParams = UsersAPI.UserUpdateRoleParams;
  export import Registry = RegistryAPI.Registry;
  export import Validate = ValidateAPI.Validate;
  export import ValidateRetrieveAllParams = ValidateAPI.ValidateRetrieveAllParams;
  export import Team = TeamAPI.Team;
}

export { OrgListResponsesPageNumberOrganizations };
