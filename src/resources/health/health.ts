// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as AllAPI from './all';

export class Health extends APIResource {
  all: AllAPI.All = new AllAPI.All(this._client);

  /**
   * Used to check the health status of the web service only
   */
  retrieveAll(options?: Core.RequestOptions): Core.APIPromise<Shared.Health> {
    return this._client.get('/health', options);
  }
}

export namespace Health {
  export import All = AllAPI.All;
  export import AllRetrieveAllParams = AllAPI.AllRetrieveAllParams;
}
