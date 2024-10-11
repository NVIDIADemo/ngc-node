// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as TeamsAPI from './teams';
import { type Response } from '../../../_shims/index';

export class Teams extends APIResource {
  /**
   * List all Teams
   */
  list(orgName: string, query?: TeamListParams, options?: Core.RequestOptions): Core.APIPromise<Response>;
  list(orgName: string, options?: Core.RequestOptions): Core.APIPromise<Response>;
  list(
    orgName: string,
    query: TeamListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(query)) {
      return this.list(orgName, {}, query);
    }
    return this._client.get(`/v2/admin/org/${orgName}/teams`, { query, ...options, __binaryResponse: true });
  }
}

export interface TeamListParams {
  /**
   * The page number of result
   */
  'page-number'?: number;

  /**
   * The page size of result
   */
  'page-size'?: number;

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
  export import TeamListParams = TeamsAPI.TeamListParams;
}
