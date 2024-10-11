// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as MeAPI from './me';

export class UsersManagement extends APIResource {
  me: MeAPI.Me = new MeAPI.Me(this._client);
}

export namespace UsersManagement {
  export import Me = MeAPI.Me;
  export import MeRetrieveParams = MeAPI.MeRetrieveParams;
  export import MeUpdateParams = MeAPI.MeUpdateParams;
}
