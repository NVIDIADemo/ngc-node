// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as InvitationsAPI from './invitations';
import * as Shared from '../../../shared';
import { InvitationListResponsesPageNumberInvitations } from '../../../shared';
import { type PageNumberInvitationsParams } from '../../../../pagination';

export class Invitations extends APIResource {
  /**
   * List invitations in a team. (Team User Admin privileges required)
   */
  list(
    orgName: string,
    teamName: string,
    query?: InvitationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvitationListResponsesPageNumberInvitations, InvitationListResponse>;
  list(
    orgName: string,
    teamName: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvitationListResponsesPageNumberInvitations, InvitationListResponse>;
  list(
    orgName: string,
    teamName: string,
    query: InvitationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvitationListResponsesPageNumberInvitations, InvitationListResponse> {
    if (isRequestOptions(query)) {
      return this.list(orgName, teamName, {}, query);
    }
    return this._client.getAPIList(
      `/v2/org/${orgName}/team/${teamName}/users/invitations`,
      InvitationListResponsesPageNumberInvitations,
      { query, ...options },
    );
  }

  /**
   * Delete a specific invitation in an team. (Org Admin or Team User Admin
   * privileges required)
   */
  delete(
    orgName: string,
    teamName: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvitationDeleteResponse> {
    return this._client.delete(`/v2/org/${orgName}/team/${teamName}/users/invitations/${id}`, options);
  }

  /**
   * Resend email of a specific invitation in a team (Org or Team User Admin
   * privileges required).
   */
  inviteResend(
    orgName: string,
    teamName: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    return this._client.get(
      `/v2/org/${orgName}/team/${teamName}/users/invitations/${id}/resend-invitation-email`,
      options,
    );
  }
}

/**
 * User invitation to an NGC org or team
 */
export interface InvitationListResponse {
  /**
   * Unique invitation ID
   */
  id?: string;

  /**
   * Date on which the invitation was created. (ISO-8601 format)
   */
  createdDate?: string;

  /**
   * Email address of the user.
   */
  email?: string;

  /**
   * Flag indicating if the invitation has already been accepted by the user.
   */
  isProcessed?: boolean;

  /**
   * user name
   */
  name?: string;

  /**
   * Org to which a user was invited.
   */
  org?: string;

  /**
   * List of roles that the user have.
   */
  roles?: Array<string>;

  /**
   * Team to which a user was invited.
   */
  team?: string;

  /**
   * Type of invitation. The invitation is either to an organization or to a team
   * within organization.
   */
  type?: 'ORGANIZATION' | 'TEAM';
}

export interface InvitationDeleteResponse {
  requestStatus?: InvitationDeleteResponse.RequestStatus;
}

export namespace InvitationDeleteResponse {
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

export interface InvitationListParams extends PageNumberInvitationsParams {
  orderBy?: 'NAME_ASC' | 'NAME_DESC';

  /**
   * User Search Parameters
   */
  q?: InvitationListParams.Q;
}

export namespace InvitationListParams {
  /**
   * User Search Parameters
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

export namespace Invitations {
  export import InvitationListResponse = InvitationsAPI.InvitationListResponse;
  export import InvitationDeleteResponse = InvitationsAPI.InvitationDeleteResponse;
  export import InvitationListParams = InvitationsAPI.InvitationListParams;
}

export { InvitationListResponsesPageNumberInvitations };
