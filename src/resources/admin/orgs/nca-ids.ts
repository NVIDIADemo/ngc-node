// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as NcaIDsAPI from './nca-ids';
import { type Response } from '../../../_shims/index';

export class NcaIDs extends APIResource {
  /**
   * Get Organization by NCA ID or Org Name. (SuperAdmin privileges required)
   */
  create(body: NcaIDCreateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post('/v3/admin/orgs/ncaIds', { body, ...options, __binaryResponse: true });
  }
}

export interface NcaIDCreateParams {
  /**
   * List of nca Ids
   */
  ncaIds?: Array<string>;

  /**
   * List of org names
   */
  orgNames?: Array<string>;
}

export namespace NcaIDs {
  export import NcaIDCreateParams = NcaIDsAPI.NcaIDCreateParams;
}
