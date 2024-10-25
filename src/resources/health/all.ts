// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AllAPI from './all';
import * as Shared from '../shared';

export class All extends APIResource {
  /**
   * Used to get health status of all services
   */
  retrieveAll(query?: AllRetrieveAllParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Health>;
  retrieveAll(options?: Core.RequestOptions): Core.APIPromise<Shared.Health>;
  retrieveAll(
    query: AllRetrieveAllParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Health> {
    if (isRequestOptions(query)) {
      return this.retrieveAll({}, query);
    }
    return this._client.get('/health/all', { query, ...options });
  }
}

export interface AllRetrieveAllParams {
  /**
   * secret value that validates the call in order to show details
   */
  secret?: string;

  /**
   * boolean value to indicating to show details or not
   */
  showDetails?: boolean;
}

export namespace All {
  export import AllRetrieveAllParams = AllAPI.AllRetrieveAllParams;
}
