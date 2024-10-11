// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as APIKeyAPI from './api-key';
import * as Shared from '../shared';

export class APIKey extends APIResource {
  /**
   * What am I?
   */
  retrieve(query?: APIKeyRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Shared.User>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<Shared.User>;
  retrieve(
    query: APIKeyRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/v2/users/me', { query, ...options });
  }

  /**
   * Edit current user profile
   */
  update(body: APIKeyUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.User> {
    return this._client.patch('/v2/users/me', { body, ...options });
  }

  /**
   * Generate API Key
   */
  createAPIKey(options?: Core.RequestOptions): Core.APIPromise<UserKeyResponse> {
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

export interface APIKeyRetrieveParams {
  'org-name'?: string;
}

export interface APIKeyUpdateParams {
  /**
   * indicates if user has opt in to nvidia emails
   */
  hasEmailOptIn?: boolean;

  /**
   * indicates if user has accepted AI Foundry Partnerships End User License
   * Agreement.
   */
  hasSignedAiFoundryPartnershipsEULA?: boolean;

  /**
   * indicates if user has accepted Base Command EULA
   */
  hasSignedBaseCommandEULA?: boolean;

  /**
   * indicates if user has accepted Base Command Manager End User License Agreement.
   */
  hasSignedBaseCommandManagerEULA?: boolean;

  /**
   * indicates if user has accepted BioNeMo End User License Agreement.
   */
  hasSignedBioNeMoEULA?: boolean;

  /**
   * indicates if user has accepted container publishing eula
   */
  hasSignedContainerPublishingEULA?: boolean;

  /**
   * indicates if user has accepted CuOpt End User License Agreement.
   */
  hasSignedCuOptEULA?: boolean;

  /**
   * indicates if user has accepted Earth-2 End User License Agreement.
   */
  hasSignedEarth2EULA?: boolean;

  /**
   * indicates if user has accepted EGX EULA
   */
  hasSignedEgxEULA?: boolean;

  /**
   * indicates if user has accepted NGC EULA
   */
  hasSignedEULA?: boolean;

  /**
   * indicates if user has accepted Fleet Command End User License Agreement.
   */
  hasSignedFleetCommandEULA?: boolean;

  /**
   * indicates if user has accepted LLM End User License Agreement.
   */
  hasSignedLlmEULA?: boolean;

  /**
   * indicates if user has accepted Fleet Command End User License Agreement.
   */
  hasSignedNVAIEEULA?: boolean;

  /**
   * indicates if user has accepted NVIDIA EULA
   */
  hasSignedNvidiaEULA?: boolean;

  /**
   * indicates if user has accepted Nvidia Quantum Cloud End User License Agreement.
   */
  hasSignedNVQCEULA?: boolean;

  /**
   * indicates if user has accepted Omniverse End User License Agreement.
   */
  hasSignedOmniverseEULA?: boolean;

  /**
   * indicates if the user has signed the Privacy Policy
   */
  hasSignedPrivacyPolicy?: boolean;

  /**
   * indicates if user has consented to share their registration info with other
   * parties
   */
  hasSignedThirdPartyRegistryShareEULA?: boolean;

  /**
   * user name
   */
  name?: string;

  /**
   * Metadata information about the user.
   */
  userMetadata?: APIKeyUpdateParams.UserMetadata;
}

export namespace APIKeyUpdateParams {
  /**
   * Metadata information about the user.
   */
  export interface UserMetadata {
    /**
     * Name of the company
     */
    company?: string;

    /**
     * Company URL
     */
    companyUrl?: string;

    /**
     * Country of the user
     */
    country?: string;

    /**
     * User's first name
     */
    firstName?: string;

    /**
     * Industry segment
     */
    industry?: string;

    /**
     * List of development areas that user has interest
     */
    interest?: Array<string>;

    /**
     * User's last name
     */
    lastName?: string;

    /**
     * Role of the user in the company
     */
    role?: string;
  }
}

export namespace APIKey {
  export import UserKeyResponse = APIKeyAPI.UserKeyResponse;
  export import APIKeyRetrieveParams = APIKeyAPI.APIKeyRetrieveParams;
  export import APIKeyUpdateParams = APIKeyAPI.APIKeyUpdateParams;
}
