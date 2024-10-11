// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class StarfleetIDs extends APIResource {
  /**
   * Get User details in org by starfleet Id
   */
  retrieve(
    orgName: string,
    starfleetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    return this._client.get(`/v2/org/${orgName}/starfleetIds/${starfleetId}`, options);
  }
}
