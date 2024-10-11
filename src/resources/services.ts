// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ServicesAPI from './services';

export class Services extends APIResource {
  /**
   * Used to get the latest version number of a given package.
   */
  version(
    query?: ServiceVersionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceVersionResponse>;
  version(options?: Core.RequestOptions): Core.APIPromise<ServiceVersionResponse>;
  version(
    query: ServiceVersionParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceVersionResponse> {
    if (isRequestOptions(query)) {
      return this.version({}, query);
    }
    return this._client.get('/version', { query, ...options });
  }
}

/**
 * an array of versions
 */
export interface ServiceVersionResponse {
  requestStatus?: ServiceVersionResponse.RequestStatus;

  versions?: Array<ServiceVersionResponse.Version>;
}

export namespace ServiceVersionResponse {
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

  /**
   * Latest version information for a specific package
   */
  export interface Version {
    /**
     * The creation date of the version
     */
    createdAt?: string;

    /**
     * Human readable description of the package
     */
    description?: string;

    /**
     * The name of the package
     */
    name?: string;

    /**
     * The version number
     */
    version?: string;
  }
}

export interface ServiceVersionParams {
  /**
   * name of package
   */
  package?: string;

  /**
   * repository of package
   */
  repo?: string;
}

export namespace Services {
  export import ServiceVersionResponse = ServicesAPI.ServiceVersionResponse;
  export import ServiceVersionParams = ServicesAPI.ServiceVersionParams;
}
