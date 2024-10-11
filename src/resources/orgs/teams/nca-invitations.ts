// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as NcaInvitationsAPI from './nca-invitations';
import * as Shared from '../../shared';

export class NcaInvitations extends APIResource {
  /**
   * Invites and creates a User in team
   */
  create(
    orgName: string,
    teamName: string,
    body: NcaInvitationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    return this._client.post(`/v3/orgs/${orgName}/teams/${teamName}/users/nca-invitations`, {
      body,
      ...options,
    });
  }
}

export interface NcaInvitationCreateParams {
  /**
   * Is the user email
   */
  email?: string;

  /**
   * Is the numbers of days the invitation will expire
   */
  invitationExpirationIn?: number;

  /**
   * Nca allow users to be invited as Admin and as Member
   */
  inviteAs?: 'ADMIN' | 'MEMBER';

  /**
   * Is a message to the new user
   */
  message?: string;
}

export namespace NcaInvitations {
  export import NcaInvitationCreateParams = NcaInvitationsAPI.NcaInvitationCreateParams;
}
