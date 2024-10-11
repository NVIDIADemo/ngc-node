// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as TeamsAPI from './teams';
import { type PageNumberTeamsParams } from '../../../pagination';
import { TeamListResponsesPageNumberTeams } from '../../shared';

export class Teams extends APIResource {
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
    return this._client.getAPIList(`/v2/admin/org/${orgName}/teams`, TeamListResponsesPageNumberTeams, {
      query,
      ...options,
    });
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

export interface TeamListParams extends PageNumberTeamsParams {
  /**
   * Get all team that has scan allow override only
   */
  'scan-allow-override'?: boolean;

  /**
   * Get all team that has scan by default only
   */
  'scan-by-default'?: boolean;

  /**
   * Get all team that has scan show results only
   */
  'scan-show-results'?: boolean;

  /**
   * Team name to search
   */
  'team-name'?: string;
}

export namespace Teams {
  export import TeamListResponse = TeamsAPI.TeamListResponse;
  export import TeamListParams = TeamsAPI.TeamListParams;
}

export { TeamListResponsesPageNumberTeams };
