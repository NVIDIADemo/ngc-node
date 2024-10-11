// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as OrgsAPI from './orgs';
import * as UsersAPI from './users';
import * as TeamsAPI from './teams/teams';

export class Orgs extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  teams: TeamsAPI.Teams = new TeamsAPI.Teams(this._client);

  /**
   * Backfill the org owner for users
   */
  orgOwnerBackfill(
    orgName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrgOrgOwnerBackfillResponse> {
    return this._client.post(`/v2/admin/org/${orgName}/org-owner-backfill`, options);
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

export namespace Orgs {
  export import OrgOrgOwnerBackfillResponse = OrgsAPI.OrgOrgOwnerBackfillResponse;
  export import Users = UsersAPI.Users;
  export import UserRemoveResponse = UsersAPI.UserRemoveResponse;
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserAddParams = UsersAPI.UserAddParams;
  export import Teams = TeamsAPI.Teams;
}
