// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as OrgsAPI from './orgs';
import * as UsersAPI from './users';
import * as TeamsAPI from './teams/teams';
import { type Response } from '../../../_shims/index';

export class Orgs extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  teams: TeamsAPI.Teams = new TeamsAPI.Teams(this._client);

  /**
   * Create a new organization. (SuperAdmin privileges required)
   */
  create(body: OrgCreateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post('/v2/admin/orgs', { body, ...options, __binaryResponse: true });
  }

  /**
   * Get organization or proto organization info. (SuperAdmin privileges required)
   */
  retrieve(orgName: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/v3/admin/org/${orgName}`, { ...options, __binaryResponse: true });
  }

  /**
   * Update org information and settings. Superadmin privileges required
   */
  update(orgName: string, body: OrgUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.patch(`/v3/admin/org/${orgName}`, { body, ...options, __binaryResponse: true });
  }

  /**
   * Backfill Orgs to Kratos
   */
  backfillOrgsToKratos(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post('/v2/admin/backfill-orgs-to-kratos', { ...options, __binaryResponse: true });
  }

  /**
   * Create org product enablement
   */
  enable(orgName: string, body: OrgEnableParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post(`/v2/admin/org/${orgName}/enablement`, {
      body,
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Backfill the org owner for users
   */
  orgOwnerBackfill(
    orgName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrgOrgOwnerBackfillResponse> {
    return this._client.post(`/v2/admin/org/${orgName}/org-owner-backfill`, options);
  }

  /**
   * Validate org creation from proto org
   */
  validate(query: OrgValidateParams, options?: Core.RequestOptions): Core.APIPromise<OrgValidateResponse> {
    return this._client.get('/v3/orgs/proto-org/validate', { query, ...options });
  }
}

export interface OrgOrgOwnerBackfillResponse {
  requestStatus?: OrgOrgOwnerBackfillResponse.RequestStatus;
}

export namespace OrgOrgOwnerBackfillResponse {
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
 * Invitation Validation Response.
 */
export interface OrgValidateResponse {
  /**
   * Org invitation to NGC
   */
  orgInvitation?: OrgValidateResponse.OrgInvitation;

  requestStatus?: OrgValidateResponse.RequestStatus;
}

export namespace OrgValidateResponse {
  /**
   * Org invitation to NGC
   */
  export interface OrgInvitation {
    /**
     * Email address of the user.
     */
    email?: string;

    /**
     * Proto Org identifier.
     */
    protoOrgId?: string;
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

export interface OrgCreateParams {
  /**
   * Org owner.
   */
  orgOwner: OrgCreateParams.OrgOwner;

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

  productEnablements?: Array<OrgCreateParams.ProductEnablement>;

  /**
   * This should be deprecated, use productEnablements instead
   */
  productSubscriptions?: Array<OrgCreateParams.ProductSubscription>;

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

export interface OrgEnableParams {
  /**
   * False only if called by SbMS.
   */
  createSubscription: boolean;

  /**
   * Product Enablement
   */
  productEnablement: OrgEnableParams.ProductEnablement;
}

export namespace OrgEnableParams {
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

export interface OrgValidateParams {
  /**
   * JWT that contains org owner email and proto org identifier
   */
  invitation_token: string;
}

export namespace Orgs {
  export import OrgOrgOwnerBackfillResponse = OrgsAPI.OrgOrgOwnerBackfillResponse;
  export import OrgValidateResponse = OrgsAPI.OrgValidateResponse;
  export import OrgCreateParams = OrgsAPI.OrgCreateParams;
  export import OrgUpdateParams = OrgsAPI.OrgUpdateParams;
  export import OrgEnableParams = OrgsAPI.OrgEnableParams;
  export import OrgValidateParams = OrgsAPI.OrgValidateParams;
  export import Users = UsersAPI.Users;
  export import UserRemoveResponse = UsersAPI.UserRemoveResponse;
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserAddParams = UsersAPI.UserAddParams;
  export import UserAddRoleParams = UsersAPI.UserAddRoleParams;
  export import UserGetEntitlementsParams = UsersAPI.UserGetEntitlementsParams;
  export import Teams = TeamsAPI.Teams;
}
