// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as APIKeyAPI from './api-key';

export class V2 extends APIResource {
  apiKey: APIKeyAPI.APIKey = new APIKeyAPI.APIKey(this._client);
}

export namespace V2 {
  export import APIKey = APIKeyAPI.APIKey;
  export import UserKeyResponse = APIKeyAPI.UserKeyResponse;
}
