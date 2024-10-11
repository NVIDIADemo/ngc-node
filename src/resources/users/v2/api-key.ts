// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as APIKeyAPI from './api-key';

export class APIKey extends APIResource {
  /**
   * Generate API Key
   */
  create(options?: Core.RequestOptions): Core.APIPromise<UserKeyResponse> {
    return this._client.post('/v2/users/me/api-key', options);
  }
}

/**
 * response to a request to access key such as docker token
 */
export interface UserKeyResponse {
  key: string;

  cloudNfsKey?: string;

  cloudNfsKeyPwd?: string;

  cloudNfsUserName?: string;

  requestStatus?: UserKeyResponse.RequestStatus;
}

export namespace UserKeyResponse {
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

export namespace APIKey {
  export import UserKeyResponse = APIKeyAPI.UserKeyResponse;
}
