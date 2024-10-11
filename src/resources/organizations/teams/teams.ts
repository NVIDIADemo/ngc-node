// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as TeamsAPI from './teams';
import * as UsersAPI from './users';

export class Teams extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Create team in org. (Org Admin Privileges Required)
   */
  create(
    orgName: string,
    body: TeamCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TeamCreateResponse> {
    return this._client.post(`/v2/org/${orgName}/teams`, { body, ...options });
  }
}

/**
 * response to an team creation request, includes unique team id
 */
export interface TeamCreateResponse {
  requestStatus?: TeamCreateResponse.RequestStatus;

  /**
   * Information about the team
   */
  team?: TeamCreateResponse.Team;
}

export namespace TeamCreateResponse {
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

export interface TeamCreateParams {
  /**
   * team name
   */
  name: string;

  /**
   * description of the team
   */
  description?: string;
}

export namespace Teams {
  export import TeamCreateResponse = TeamsAPI.TeamCreateResponse;
  export import TeamCreateParams = TeamsAPI.TeamCreateParams;
  export import Users = UsersAPI.Users;
  export import UserListResponse = UsersAPI.UserListResponse;
  export import UserDeleteResponse = UsersAPI.UserDeleteResponse;
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserRetrieveParams = UsersAPI.UserRetrieveParams;
  export import UserListParams = UsersAPI.UserListParams;
}
