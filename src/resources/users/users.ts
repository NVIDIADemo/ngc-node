// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as V2API from './v2/v2';

export class Users extends APIResource {
  v2: V2API.V2 = new V2API.V2(this._client);
}

export namespace Users {
  export import V2 = V2API.V2;
}
