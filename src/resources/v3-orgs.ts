// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as V3OrgsAPI from './v3-orgs';

export class V3Orgs extends APIResource {
  /**
   * Validate org creation from proto org
   */
  validate(query: V3OrgValidateParams, options?: Core.RequestOptions): Core.APIPromise<OrgInvitation> {
    return this._client.get('/v3/orgs/proto-org/validate', { query, ...options });
  }
}

/**
 * Invitation Validation Response.
 */
export interface OrgInvitation {
  /**
   * Org invitation to NGC
   */
  orgInvitation?: OrgInvitation.OrgInvitation;

  requestStatus?: OrgInvitation.RequestStatus;
}

export namespace OrgInvitation {
  /**
   * Org invitation to NGC
   */
  export interface OrgInvitation {
    /**
     * Email address of the user.
     */
    email?: string;

    /**
     * Proto Org identifier.
     */
    protoOrgId?: string;
  }

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

export interface V3OrgValidateParams {
  /**
   * JWT that contains org owner email and proto org identifier
   */
  invitation_token: string;
}

export namespace V3Orgs {
  export import OrgInvitation = V3OrgsAPI.OrgInvitation;
  export import V3OrgValidateParams = V3OrgsAPI.V3OrgValidateParams;
}
