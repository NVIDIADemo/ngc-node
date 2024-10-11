// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as TeamsAPI from './teams';
import * as UsersAPI from './users';
import * as TeamsTeamsAPI from '../../orgs/teams/teams';

export class Teams extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Get Team by name
   */
  retrieve(
    orgName: string,
    teamName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TeamsTeamsAPI.TeamResponse> {
    return this._client.get(`/v2/org/${orgName}/teams/${teamName}`, options);
  }

  /**
   * Edit a Team
   */
  update(
    orgName: string,
    teamName: string,
    body: TeamUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TeamsTeamsAPI.TeamResponse> {
    return this._client.patch(`/v2/org/${orgName}/teams/${teamName}`, { body, ...options });
  }

  /**
   * Delete a Team
   */
  delete(
    orgName: string,
    teamName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TeamDeleteResponse> {
    return this._client.delete(`/v2/org/${orgName}/teams/${teamName}`, options);
  }
}

export interface TeamDeleteResponse {
  requestStatus?: TeamDeleteResponse.RequestStatus;
}

export namespace TeamDeleteResponse {
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

export interface TeamUpdateParams {
  /**
   * description of the team
   */
  description?: string;

  /**
   * Infinity manager setting definition
   */
  infinityManagerSettings?: TeamUpdateParams.InfinityManagerSettings;

  /**
   * Repo scan setting definition
   */
  repoScanSettings?: TeamUpdateParams.RepoScanSettings;
}

export namespace TeamUpdateParams {
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

export namespace Teams {
  export import TeamDeleteResponse = TeamsAPI.TeamDeleteResponse;
  export import TeamUpdateParams = TeamsAPI.TeamUpdateParams;
  export import Users = UsersAPI.Users;
  export import UserAddRoleParams = UsersAPI.UserAddRoleParams;
  export import UserUpdateRoleParams = UsersAPI.UserUpdateRoleParams;
}
