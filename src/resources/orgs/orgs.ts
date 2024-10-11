// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as OrgsAPI from './orgs';
import * as AuditLogsAPI from './audit-logs';
import * as CreditsAPI from './credits';
import * as ProtoOrgAPI from './proto-org';
import * as StarfleetIDsAPI from './starfleet-ids';
import * as MeteringAPI from './metering/metering';
import * as TeamsAPI from './teams/teams';
import * as UsersAPI from './users/users';
import { PageNumberOrganizations, type PageNumberOrganizationsParams } from '../../pagination';

export class Orgs extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  teams: TeamsAPI.Teams = new TeamsAPI.Teams(this._client);
  protoOrg: ProtoOrgAPI.ProtoOrg = new ProtoOrgAPI.ProtoOrg(this._client);
  credits: CreditsAPI.Credits = new CreditsAPI.Credits(this._client);
  starfleetIds: StarfleetIDsAPI.StarfleetIDs = new StarfleetIDsAPI.StarfleetIDs(this._client);
  metering: MeteringAPI.Metering = new MeteringAPI.Metering(this._client);
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);

  /**
   * Create a new organization based on the org info provided in the request.
   */
  create(params: OrgCreateParams, options?: Core.RequestOptions): Core.APIPromise<OrgResponse> {
    const { ncid, VisitorID, ...body } = params;
    return this._client.post('/v3/orgs', { body, ...options });
  }

  /**
   * Get organization information
   */
  retrieve(orgName: string, options?: Core.RequestOptions): Core.APIPromise<OrgResponse> {
    return this._client.get(`/v2/orgs/${orgName}`, options);
  }

  /**
   * Update organization information
   */
  update(
    orgName: string,
    body: OrgUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrgResponse> {
    return this._client.patch(`/v2/orgs/${orgName}`, { body, ...options });
  }

  /**
   * List all organizations of the user
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
    return this._client.getAPIList('/v2/orgs', OrgListResponsesPageNumberOrganizations, {
      query,
      ...options,
    });
  }
}

export class OrgListResponsesPageNumberOrganizations extends PageNumberOrganizations<OrgListResponse> {}

/**
 * List of organizations.
 */
export interface OrgList {
  organizations?: Array<OrgList.Organization>;

  /**
   * object that describes the pagination information
   */
  paginationInfo?: OrgList.PaginationInfo;

  requestStatus?: OrgList.RequestStatus;
}

export namespace OrgList {
  /**
   * Information about the Organization
   */
  export interface Organization {
    /**
     * Unique Id of this team.
     */
    id?: number;

    /**
     * Org Owner Alternate Contact
     */
    alternateContact?: Organization.AlternateContact;

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
    infinityManagerSettings?: Organization.InfinityManagerSettings;

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
    orgOwner?: Organization.OrgOwner;

    /**
     * Org owners
     */
    orgOwners?: Array<Organization.OrgOwner>;

    /**
     * Product end customer salesforce.com Id (external customer Id). pecSfdcId is for
     * EMS (entitlement management service) to track external paid customer.
     */
    pecSfdcId?: string;

    productEnablements?: Array<Organization.ProductEnablement>;

    productSubscriptions?: Array<Organization.ProductSubscription>;

    /**
     * Repo scan setting definition
     */
    repoScanSettings?: Organization.RepoScanSettings;

    type?: 'UNKNOWN' | 'CLOUD' | 'ENTERPRISE' | 'INDIVIDUAL';

    /**
     * Users information.
     */
    usersInfo?: Organization.UsersInfo;
  }

  export namespace Organization {
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

  /**
   * object that describes the pagination information
   */
  export interface PaginationInfo {
    /**
     * Page index of results
     */
    index?: number;

    /**
     * Serialized pointer to the next results page. Should be used for fetching next
     * page. Can be empty
     */
    nextPage?: string;

    /**
     * Number of results in page
     */
    size?: number;

    /**
     * Total number of pages available
     */
    totalPages?: number;

    /**
     * Total number of results available
     */
    totalResults?: number;
  }

  export interface RequestStatus {
    requestId?: string;

    serverId?: string;

    /**
     * Describes response status reported by the server.
     */
    statusCode?:
      | 'UNKNOWN'
      | 'SUCCESS'
      | 'UNAUTHORIZED'
      | 'PAYMENT_REQUIRED'
      | 'FORBIDDEN'
      | 'TIMEOUT'
      | 'EXISTS'
      | 'NOT_FOUND'
      | 'INTERNAL_ERROR'
      | 'INVALID_REQUEST'
      | 'INVALID_REQUEST_VERSION'
      | 'INVALID_REQUEST_DATA'
      | 'METHOD_NOT_ALLOWED'
      | 'CONFLICT'
      | 'UNPROCESSABLE_ENTITY'
      | 'TOO_MANY_REQUESTS'
      | 'INSUFFICIENT_STORAGE'
      | 'SERVICE_UNAVAILABLE'
      | 'PAYLOAD_TOO_LARGE'
      | 'NOT_ACCEPTABLE'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'BAD_GATEWAY';

    statusDescription?: string;
  }
}

/**
 * info about an organizations
 */
export interface OrgResponse {
  /**
   * Information about the Organization
   */
  organizations?: OrgResponse.Organizations;

  requestStatus?: OrgResponse.RequestStatus;
}

export namespace OrgResponse {
  /**
   * Information about the Organization
   */
  export interface Organizations {
    /**
     * Unique Id of this team.
     */
    id?: number;

    /**
     * Org Owner Alternate Contact
     */
    alternateContact?: Organizations.AlternateContact;

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
    infinityManagerSettings?: Organizations.InfinityManagerSettings;

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
    orgOwner?: Organizations.OrgOwner;

    /**
     * Org owners
     */
    orgOwners?: Array<Organizations.OrgOwner>;

    /**
     * Product end customer salesforce.com Id (external customer Id). pecSfdcId is for
     * EMS (entitlement management service) to track external paid customer.
     */
    pecSfdcId?: string;

    productEnablements?: Array<Organizations.ProductEnablement>;

    productSubscriptions?: Array<Organizations.ProductSubscription>;

    /**
     * Repo scan setting definition
     */
    repoScanSettings?: Organizations.RepoScanSettings;

    type?: 'UNKNOWN' | 'CLOUD' | 'ENTERPRISE' | 'INDIVIDUAL';

    /**
     * Users information.
     */
    usersInfo?: Organizations.UsersInfo;
  }

  export namespace Organizations {
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

  export interface RequestStatus {
    requestId?: string;

    serverId?: string;

    /**
     * Describes response status reported by the server.
     */
    statusCode?:
      | 'UNKNOWN'
      | 'SUCCESS'
      | 'UNAUTHORIZED'
      | 'PAYMENT_REQUIRED'
      | 'FORBIDDEN'
      | 'TIMEOUT'
      | 'EXISTS'
      | 'NOT_FOUND'
      | 'INTERNAL_ERROR'
      | 'INVALID_REQUEST'
      | 'INVALID_REQUEST_VERSION'
      | 'INVALID_REQUEST_DATA'
      | 'METHOD_NOT_ALLOWED'
      | 'CONFLICT'
      | 'UNPROCESSABLE_ENTITY'
      | 'TOO_MANY_REQUESTS'
      | 'INSUFFICIENT_STORAGE'
      | 'SERVICE_UNAVAILABLE'
      | 'PAYLOAD_TOO_LARGE'
      | 'NOT_ACCEPTABLE'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'BAD_GATEWAY';

    statusDescription?: string;
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

export interface OrgUpdateParams {
  /**
   * optional description of the organization
   */
  description?: string;

  /**
   * Name of the organization that will be shown to users
   */
  displayName?: string;
}

export interface OrgListParams extends PageNumberOrganizationsParams {
  'Filter using org display name'?: string;

  'Filter using org name'?: string;

  'Filter using org owner email'?: string;

  'Filter using org owner name'?: string;

  'Filter using PEC ID'?: string;
}

export namespace Orgs {
  export import OrgList = OrgsAPI.OrgList;
  export import OrgResponse = OrgsAPI.OrgResponse;
  export import OrgListResponse = OrgsAPI.OrgListResponse;
  export import OrgListResponsesPageNumberOrganizations = OrgsAPI.OrgListResponsesPageNumberOrganizations;
  export import OrgCreateParams = OrgsAPI.OrgCreateParams;
  export import OrgUpdateParams = OrgsAPI.OrgUpdateParams;
  export import OrgListParams = OrgsAPI.OrgListParams;
  export import Users = UsersAPI.Users;
  export import UserListResponse = UsersAPI.UserListResponse;
  export import UserDeleteResponse = UsersAPI.UserDeleteResponse;
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserListParams = UsersAPI.UserListParams;
  export import UserDeleteParams = UsersAPI.UserDeleteParams;
  export import UserAddRoleParams = UsersAPI.UserAddRoleParams;
  export import UserRemoveRoleParams = UsersAPI.UserRemoveRoleParams;
  export import UserUpdateRoleParams = UsersAPI.UserUpdateRoleParams;
  export import Teams = TeamsAPI.Teams;
  export import TeamResponse = TeamsAPI.TeamResponse;
  export import TeamListResponse = TeamsAPI.TeamListResponse;
  export import TeamListParams = TeamsAPI.TeamListParams;
  export import ProtoOrg = ProtoOrgAPI.ProtoOrg;
  export import ProtoOrgCreateParams = ProtoOrgAPI.ProtoOrgCreateParams;
  export import Credits = CreditsAPI.Credits;
  export import CreditsHistory = CreditsAPI.CreditsHistory;
  export import StarfleetIDs = StarfleetIDsAPI.StarfleetIDs;
  export import Metering = MeteringAPI.Metering;
  export import MeteringRetrieveAllParams = MeteringAPI.MeteringRetrieveAllParams;
  export import AuditLogs = AuditLogsAPI.AuditLogs;
  export import AuditLogsPresignedURL = AuditLogsAPI.AuditLogsPresignedURL;
}
