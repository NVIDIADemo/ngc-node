// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as TeamsAPI from './teams';
import * as Shared from '../../shared';
import { TeamsPageNumberTeams } from '../../shared';
import * as NcaInvitationsAPI from './nca-invitations';
import * as StarfleetIDsAPI from './starfleet-ids';
import * as UsersAPI from './users';
import { type PageNumberTeamsParams } from '../../../pagination';

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
  ): Core.PagePromise<TeamsPageNumberTeams, Shared.Team>;
  list(orgName: string, options?: Core.RequestOptions): Core.PagePromise<TeamsPageNumberTeams, Shared.Team>;
  list(
    orgName: string,
    query: TeamListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TeamsPageNumberTeams, Shared.Team> {
    if (isRequestOptions(query)) {
      return this.list(orgName, {}, query);
    }
    return this._client.getAPIList(`/v2/org/${orgName}/teams`, TeamsPageNumberTeams, { query, ...options });
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
  team?: Shared.Team;
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
}

export interface TeamListParams extends PageNumberTeamsParams {}

export namespace Teams {
  export import TeamResponse = TeamsAPI.TeamResponse;
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

export { TeamsPageNumberTeams };
