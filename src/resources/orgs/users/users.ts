// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as UsersAPI from './users';
import * as Shared from '../../shared';
import { UserListResponsesPageNumberUsers } from '../../shared';
import * as NcaInvitationsAPI from './nca-invitations';
import { type PageNumberUsersParams } from '../../../pagination';

export class Users extends APIResource {
  ncaInvitations: NcaInvitationsAPI.NcaInvitations = new NcaInvitationsAPI.NcaInvitations(this._client);

  /**
   * Creates a User
   */
  create(
    orgName: string,
    params: UserCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    const { 'idp-id': idpId, 'send-email': sendEmail, ...body } = params;
    return this._client.post(`/v2/org/${orgName}/users`, {
      query: { 'idp-id': idpId, 'send-email': sendEmail },
      body,
      ...options,
    });
  }

  /**
   * Get list of users in organization. (User Admin in org privileges required)
   */
  list(
    orgName: string,
    query?: UserListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UserListResponsesPageNumberUsers, UserListResponse>;
  list(
    orgName: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UserListResponsesPageNumberUsers, UserListResponse>;
  list(
    orgName: string,
    query: UserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<UserListResponsesPageNumberUsers, UserListResponse> {
    if (isRequestOptions(query)) {
      return this.list(orgName, {}, query);
    }
    return this._client.getAPIList(`/v2/org/${orgName}/users`, UserListResponsesPageNumberUsers, {
      query,
      ...options,
    });
  }

  /**
   * Remove User from org.
   */
  delete(
    orgName: string,
    id: string,
    params?: UserDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserDeleteResponse>;
  delete(orgName: string, id: string, options?: Core.RequestOptions): Core.APIPromise<UserDeleteResponse>;
  delete(
    orgName: string,
    id: string,
    params: UserDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(orgName, id, {}, params);
    }
    const { anonymize } = params;
    return this._client.delete(`/v3/orgs/${orgName}/users/${id}`, { query: { anonymize }, ...options });
  }

  /**
   * Invite if user does not exist, otherwise add role in org
   */
  addRole(
    orgName: string,
    userEmailOrId: string,
    params: UserAddRoleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    const { roles } = params;
    return this._client.patch(`/v3/orgs/${orgName}/users/${userEmailOrId}/add-role`, {
      query: { roles },
      ...options,
    });
  }

  /**
   * Remove role in org if user exists, otherwise remove invitation
   */
  removeRole(
    orgName: string,
    userEmailOrId: string,
    params?: UserRemoveRoleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  removeRole(
    orgName: string,
    userEmailOrId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  removeRole(
    orgName: string,
    userEmailOrId: string,
    params: UserRemoveRoleParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(params)) {
      return this.removeRole(orgName, userEmailOrId, {}, params);
    }
    const { roles } = params;
    return this._client.delete(`/v3/orgs/${orgName}/users/${userEmailOrId}/remove-role`, {
      query: { roles },
      ...options,
    });
  }

  /**
   * Update User Role in org
   */
  updateRole(
    orgName: string,
    id: string,
    params?: UserUpdateRoleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User>;
  updateRole(orgName: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.User>;
  updateRole(
    orgName: string,
    id: string,
    params: UserUpdateRoleParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(params)) {
      return this.updateRole(orgName, id, {}, params);
    }
    const { roles } = params;
    return this._client.patch(`/v2/org/${orgName}/users/${id}/update-role`, { query: { roles }, ...options });
  }
}

/**
 * information about the user
 */
export interface UserListResponse {
  /**
   * unique Id of this user.
   */
  id?: number;

  /**
   * unique auth client id of this user.
   */
  clientId?: string;

  /**
   * Created date for this user
   */
  createdDate?: string;

  /**
   * Email address of the user. This should be unique.
   */
  email?: string;

  /**
   * Last time the user logged in
   */
  firstLoginDate?: string;

  /**
   * Determines if the user has beta access
   */
  hasBetaAccess?: boolean;

  /**
   * indicate if user profile has been completed.
   */
  hasProfile?: boolean;

  /**
   * indicates if user has accepted AI Foundry Partnerships eula
   */
  hasSignedAiFoundryPartnershipsEULA?: boolean;

  /**
   * indicates if user has accepted Base Command End User License Agreement.
   */
  hasSignedBaseCommandEULA?: boolean;

  /**
   * indicates if user has accepted Base Command Manager End User License Agreement.
   */
  hasSignedBaseCommandManagerEULA?: boolean;

  /**
   * indicates if user has accepted BioNeMo End User License Agreement.
   */
  hasSignedBioNeMoEULA?: boolean;

  /**
   * indicates if user has accepted container publishing eula
   */
  hasSignedContainerPublishingEULA?: boolean;

  /**
   * indicates if user has accepted CuOpt eula
   */
  hasSignedCuOptEULA?: boolean;

  /**
   * indicates if user has accepted Earth-2 eula
   */
  hasSignedEarth2EULA?: boolean;

  /**
   * [Deprecated] indicates if user has accepted EGX End User License Agreement.
   */
  hasSignedEgxEULA?: boolean;

  /**
   * Determines if the user has signed the NGC End User License Agreement.
   */
  hasSignedEULA?: boolean;

  /**
   * indicates if user has accepted Fleet Command End User License Agreement.
   */
  hasSignedFleetCommandEULA?: boolean;

  /**
   * indicates if user has accepted LLM End User License Agreement.
   */
  hasSignedLlmEULA?: boolean;

  /**
   * indicates if user has accepted Fleet Command End User License Agreement.
   */
  hasSignedNVAIEEULA?: boolean;

  /**
   * Determines if the user has signed the NVIDIA End User License Agreement.
   */
  hasSignedNvidiaEULA?: boolean;

  /**
   * indicates if user has accepted Nvidia Quantum Cloud End User License Agreement.
   */
  hasSignedNVQCEULA?: boolean;

  /**
   * indicates if user has accepted Omniverse End User License Agreement.
   */
  hasSignedOmniverseEULA?: boolean;

  /**
   * Determines if the user has signed the Privacy Policy.
   */
  hasSignedPrivacyPolicy?: boolean;

  /**
   * indicates if user has consented to share their registration info with other
   * parties
   */
  hasSignedThirdPartyRegistryShareEULA?: boolean;

  /**
   * Determines if the user has opted in email subscription.
   */
  hasSubscribedToEmail?: boolean;

  /**
   * Type of IDP, Identity Provider. Used for login.
   */
  idpType?: 'NVIDIA' | 'ENTERPRISE';

  /**
   * Determines if the user is active or not.
   */
  isActive?: boolean;

  /**
   * Indicates if user was deleted from the system.
   */
  isDeleted?: boolean;

  /**
   * Determines if the user is a SAML account or not.
   */
  isSAML?: boolean;

  /**
   * Title of user's job position.
   */
  jobPositionTitle?: string;

  /**
   * Last time the user logged in
   */
  lastLoginDate?: string;

  /**
   * user name
   */
  name?: string;

  /**
   * List of roles that the user have
   */
  roles?: Array<UserListResponse.Role>;

  /**
   * unique starfleet id of this user.
   */
  starfleetId?: string;

  /**
   * Storage quota for this user.
   */
  storageQuota?: Array<UserListResponse.StorageQuota>;

  /**
   * Updated date for this user
   */
  updatedDate?: string;

  /**
   * Metadata information about the user.
   */
  userMetadata?: UserListResponse.UserMetadata;
}

export namespace UserListResponse {
  /**
   * List of roles that the user have
   */
  export interface Role {
    /**
     * Information about the Organization
     */
    org?: Role.Org;

    /**
     * List of org role types that the user have
     */
    orgRoles?: Array<string>;

    /**
     * DEPRECATED - List of role types that the user have
     */
    roleTypes?: Array<string>;

    /**
     * Information about the user who is attempting to run the job
     */
    targetSystemUserIdentifier?: Role.TargetSystemUserIdentifier;

    /**
     * Information about the team
     */
    team?: Role.Team;

    /**
     * List of team role types that the user have
     */
    teamRoles?: Array<string>;
  }

  export namespace Role {
    /**
     * Information about the Organization
     */
    export interface Org {
      /**
       * Unique Id of this team.
       */
      id?: number;

      /**
       * Org Owner Alternate Contact
       */
      alternateContact?: Org.AlternateContact;

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
      infinityManagerSettings?: Org.InfinityManagerSettings;

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
      orgOwner?: Org.OrgOwner;

      /**
       * Org owners
       */
      orgOwners?: Array<Org.OrgOwner>;

      /**
       * Product end customer salesforce.com Id (external customer Id). pecSfdcId is for
       * EMS (entitlement management service) to track external paid customer.
       */
      pecSfdcId?: string;

      productEnablements?: Array<Org.ProductEnablement>;

      productSubscriptions?: Array<Org.ProductSubscription>;

      /**
       * Repo scan setting definition
       */
      repoScanSettings?: Org.RepoScanSettings;

      type?: 'UNKNOWN' | 'CLOUD' | 'ENTERPRISE' | 'INDIVIDUAL';

      /**
       * Users information.
       */
      usersInfo?: Org.UsersInfo;
    }

    export namespace Org {
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
     * Information about the user who is attempting to run the job
     */
    export interface TargetSystemUserIdentifier {
      /**
       * gid of the user on this team
       */
      gid?: number;

      /**
       * Org context for the job
       */
      orgName?: string;

      /**
       * Starfleet ID of the user creating the job.
       */
      starfleetId?: string;

      /**
       * Team context for the job
       */
      teamName?: string;

      /**
       * uid of the user on this team
       */
      uid?: number;

      /**
       * Unique ID of the user who submitted the job
       */
      userId?: number;
    }

    /**
     * Information about the team
     */
    export interface Team {
      /**
       * unique Id of this team.
       */
      id?: number;

      /**
       * description of the team
       */
      description?: string;

      /**
       * Infinity manager setting definition
       */
      infinityManagerSettings?: Team.InfinityManagerSettings;

      /**
       * indicates if the team is deleted or not
       */
      isDeleted?: boolean;

      /**
       * team name
       */
      name?: string;

      /**
       * Repo scan setting definition
       */
      repoScanSettings?: Team.RepoScanSettings;
    }

    export namespace Team {
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
  }

  /**
   * represents user storage quota for a given ace and available unused storage
   */
  export interface StorageQuota {
    /**
     * id of the ace
     */
    aceId?: number;

    /**
     * name of the ace
     */
    aceName?: string;

    /**
     * Available space in bytes
     */
    available?: number;

    /**
     * Number of datasets that are a part of user's used storage
     */
    datasetCount?: number;

    /**
     * Space used by datasets in bytes
     */
    datasetsUsage?: number;

    /**
     * The org name that this user quota tied to. This is needed for analytics
     */
    orgName?: string;

    /**
     * Assigned quota in bytes
     */
    quota?: number;

    /**
     * Number of resultsets that are a part of user's used storage
     */
    resultsetCount?: number;

    /**
     * Space used by resultsets in bytes
     */
    resultsetsUsage?: number;

    /**
     * Description of this storage cluster
     */
    storageClusterDescription?: string;

    /**
     * Name of storage cluster
     */
    storageClusterName?: string;

    /**
     * Identifier to this storage cluster
     */
    storageClusterUuid?: string;

    /**
     * Number of workspaces that are a part of user's used storage
     */
    workspacesCount?: number;

    /**
     * Space used by workspaces in bytes
     */
    workspacesUsage?: number;
  }

  /**
   * Metadata information about the user.
   */
  export interface UserMetadata {
    /**
     * Name of the company
     */
    company?: string;

    /**
     * Company URL
     */
    companyUrl?: string;

    /**
     * Country of the user
     */
    country?: string;

    /**
     * User's first name
     */
    firstName?: string;

    /**
     * Industry segment
     */
    industry?: string;

    /**
     * List of development areas that user has interest
     */
    interest?: Array<string>;

    /**
     * User's last name
     */
    lastName?: string;

    /**
     * Role of the user in the company
     */
    role?: string;
  }
}

export interface UserDeleteResponse {
  requestStatus?: UserDeleteResponse.RequestStatus;
}

export namespace UserDeleteResponse {
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

export interface UserCreateParams {
  /**
   * Body param: Email address of the user. This should be unique.
   */
  email: string;

  /**
   * Query param: If the IDP ID is provided then it is used instead of the one
   * configured for the organization
   */
  'idp-id'?: string;

  /**
   * Query param:
   */
  'send-email'?: boolean;

  /**
   * Body param: indicates if user has opt in to nvidia emails
   */
  emailOptIn?: boolean;

  /**
   * Body param: indicates if user has accepted EULA
   */
  eulaAccepted?: boolean;

  /**
   * Body param: user name
   */
  name?: string;

  /**
   * Body param: DEPRECATED - use roleTypes which allows multiple roles
   */
  roleType?: string;

  /**
   * Body param: feature roles to give to the user
   */
  roleTypes?: Array<string>;

  /**
   * Body param: user job role
   */
  salesforceContactJobRole?: string;

  /**
   * Body param: Metadata information about the user.
   */
  userMetadata?: UserCreateParams.UserMetadata;
}

export namespace UserCreateParams {
  /**
   * Metadata information about the user.
   */
  export interface UserMetadata {
    /**
     * Name of the company
     */
    company?: string;

    /**
     * Company URL
     */
    companyUrl?: string;

    /**
     * Country of the user
     */
    country?: string;

    /**
     * User's first name
     */
    firstName?: string;

    /**
     * Industry segment
     */
    industry?: string;

    /**
     * List of development areas that user has interest
     */
    interest?: Array<string>;

    /**
     * User's last name
     */
    lastName?: string;

    /**
     * Role of the user in the company
     */
    role?: string;
  }
}

export interface UserListParams extends PageNumberUsersParams {
  /**
   * Name of team to exclude members from
   */
  'exclude-from-team'?: string;

  /**
   * User Search Parameters. Only 'filters' and 'orderBy' for 'name' and 'email' are
   * implemented
   */
  q?: UserListParams.Q;
}

export namespace UserListParams {
  /**
   * User Search Parameters. Only 'filters' and 'orderBy' for 'name' and 'email' are
   * implemented
   */
  export interface Q {
    fields?: Array<string>;

    filters?: Array<Q.Filter>;

    groupBy?: string;

    orderBy?: Array<Q.OrderBy>;

    page?: number;

    pageSize?: number;

    query?: string;

    queryFields?: Array<string>;

    scoredSize?: number;
  }

  export namespace Q {
    export interface Filter {
      field?: string;

      value?: string;
    }

    export interface OrderBy {
      field?: string;

      value?: 'ASC' | 'DESC';
    }
  }
}

export interface UserDeleteParams {
  /**
   * If anonymize is true, then org owner permission is required.
   */
  anonymize?: boolean;
}

export interface UserAddRoleParams {
  roles: Array<string>;
}

export interface UserRemoveRoleParams {
  roles?: Array<string>;
}

export interface UserUpdateRoleParams {
  roles?: Array<string>;
}

export namespace Users {
  export import UserListResponse = UsersAPI.UserListResponse;
  export import UserDeleteResponse = UsersAPI.UserDeleteResponse;
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserListParams = UsersAPI.UserListParams;
  export import UserDeleteParams = UsersAPI.UserDeleteParams;
  export import UserAddRoleParams = UsersAPI.UserAddRoleParams;
  export import UserRemoveRoleParams = UsersAPI.UserRemoveRoleParams;
  export import UserUpdateRoleParams = UsersAPI.UserUpdateRoleParams;
  export import NcaInvitations = NcaInvitationsAPI.NcaInvitations;
  export import NcaInvitationCreateParams = NcaInvitationsAPI.NcaInvitationCreateParams;
}

export { UserListResponsesPageNumberUsers };
