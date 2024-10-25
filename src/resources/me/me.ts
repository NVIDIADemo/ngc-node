// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as APIKeyAPI from './api-key';

export class Me extends APIResource {
  apiKey: APIKeyAPI.APIKey = new APIKeyAPI.APIKey(this._client);
}

export namespace Me {
  export import APIKey = APIKeyAPI.APIKey;
  export type UserKeyResponse = APIKeyAPI.UserKeyResponse;
  export type APIKeyRetrieveParams = APIKeyAPI.APIKeyRetrieveParams;
  export type APIKeyUpdateParams = APIKeyAPI.APIKeyUpdateParams;
}
