// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as V2AdminOrgTeamsAPI from './v2-admin-org-teams';
import { type Response } from '../_shims/index';

export class V2AdminOrgTeams extends APIResource {
  /**
   * Get one team
   */
  retrieve(orgName: string, teamName: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/v2/admin/org/${orgName}/teams/${teamName}`, {
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Edit a Team
   */
  update(
    orgName: string,
    teamName: string,
    body: V2AdminOrgTeamUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.patch(`/v2/admin/org/${orgName}/teams/${teamName}`, {
      body,
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface V2AdminOrgTeamUpdateParams {
  /**
   * description of the team
   */
  description?: string;

  /**
   * Infinity manager setting definition
   */
  infinityManagerSettings?: V2AdminOrgTeamUpdateParams.InfinityManagerSettings;

  /**
   * Repo scan setting definition
   */
  repoScanSettings?: V2AdminOrgTeamUpdateParams.RepoScanSettings;
}

export namespace V2AdminOrgTeamUpdateParams {
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

export namespace V2AdminOrgTeams {
  export import V2AdminOrgTeamUpdateParams = V2AdminOrgTeamsAPI.V2AdminOrgTeamUpdateParams;
}
