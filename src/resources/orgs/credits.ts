// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CreditsAPI from './credits';

export class Credits extends APIResource {
  /**
   * Get Organization credits
   */
  retrieve(orgName: string, options?: Core.RequestOptions): Core.APIPromise<CreditsHistory> {
    return this._client.get(`/v2/orgs/${orgName}/credits`, options);
  }
}

/**
 * showing credit balance
 */
export interface CreditsHistory {
  creditsHistory?: CreditsHistory.CreditsHistory;

  requestStatus?: CreditsHistory.RequestStatus;
}

export namespace CreditsHistory {
  export interface CreditsHistory {
    /**
     * Latest credit balance information
     */
    creditBalance?: number;
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

export namespace Credits {
  export import CreditsHistory = CreditsAPI.CreditsHistory;
}
