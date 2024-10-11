// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as PublicKeysAPI from './public-keys';

export class PublicKeys extends APIResource {
  /**
   * Used to check the health status of the web service only
   */
  retrieveAll(options?: Core.RequestOptions): Core.APIPromise<PublicKeyRetrieveAllResponse> {
    return this._client.get('/public-keys', options);
  }
}

export type PublicKeyRetrieveAllResponse = Array<string>;

export namespace PublicKeys {
  export import PublicKeyRetrieveAllResponse = PublicKeysAPI.PublicKeyRetrieveAllResponse;
}
