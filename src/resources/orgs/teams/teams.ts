// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as TeamsAPI from './teams';
import * as NcaInvitationsAPI from './nca-invitations';
import * as StarfleetIDsAPI from './starfleet-ids';
import * as UsersAPI from './users';
import { type PageNumberTeamsParams } from '../../../pagination';
import { TeamListResponsesPageNumberTeams } from '../../shared';

export class Teams extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  starfleetIds: StarfleetIDsAPI.StarfleetIDs = new StarfleetIDsAPI.StarfleetIDs(this._client);
  ncaInvitations: NcaInvitationsAPI.NcaInvitations = new NcaInvitationsAPI.NcaInvitations(this._client);

  /**
   * List all Teams
   */
  list(
    orgName: string,
    query?: TeamListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TeamListResponsesPageNumberTeams, TeamListResponse>;
  list(
    orgName: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TeamListResponsesPageNumberTeams, TeamListResponse>;
  list(
    orgName: string,
    query: TeamListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TeamListResponsesPageNumberTeams, TeamListResponse> {
    if (isRequestOptions(query)) {
      return this.list(orgName, {}, query);
    }
    return this._client.getAPIList(`/v2/org/${orgName}/teams`, TeamListResponsesPageNumberTeams, {
      query,
      ...options,
    });
  }
}

/**
 * details about one team
 */
export interface TeamResponse {
  requestStatus?: TeamResponse.RequestStatus;

  /**
   * Information about the team
   */
  team?: TeamResponse.Team;
}

export namespace TeamResponse {
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

/**
 * Information about the team
 */
export interface TeamListResponse {
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
  infinityManagerSettings?: TeamListResponse.InfinityManagerSettings;

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
  repoScanSettings?: TeamListResponse.RepoScanSettings;
}

export namespace TeamListResponse {
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

export interface TeamListParams extends PageNumberTeamsParams {}

export namespace Teams {
  export import TeamResponse = TeamsAPI.TeamResponse;
  export import TeamListResponse = TeamsAPI.TeamListResponse;
  export import TeamListParams = TeamsAPI.TeamListParams;
  export import Users = UsersAPI.Users;
  export import UserDeleteResponse = UsersAPI.UserDeleteResponse;
  export import UserDeleteParams = UsersAPI.UserDeleteParams;
  export import UserAddRoleParams = UsersAPI.UserAddRoleParams;
  export import UserRemoveRoleParams = UsersAPI.UserRemoveRoleParams;
  export import StarfleetIDs = StarfleetIDsAPI.StarfleetIDs;
  export import NcaInvitations = NcaInvitationsAPI.NcaInvitations;
  export import NcaInvitationCreateParams = NcaInvitationsAPI.NcaInvitationCreateParams;
}

export { TeamListResponsesPageNumberTeams };
