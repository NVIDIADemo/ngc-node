// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as OffboardedAPI from './offboarded';
import { type Response } from '../../../_shims/index';

export class Offboarded extends APIResource {
  /**
   * List all Offboarded organizations.
   */
  list(query?: OffboardedListParams, options?: Core.RequestOptions): Core.APIPromise<Response>;
  list(options?: Core.RequestOptions): Core.APIPromise<Response>;
  list(
    query: OffboardedListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v2/admin/orgs/offboarded', { query, ...options, __binaryResponse: true });
  }
}

export interface OffboardedListParams {
  /**
   * The page number of result
   */
  'page-number'?: number;

  /**
   * The page size of result
   */
  'page-size'?: number;
}

export namespace Offboarded {
  export import OffboardedListParams = OffboardedAPI.OffboardedListParams;
}
