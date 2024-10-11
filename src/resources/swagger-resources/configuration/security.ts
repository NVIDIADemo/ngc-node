// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { type Response } from '../../../_shims/index';

export class Security extends APIResource {
  create(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post('/swagger-resources/configuration/security', {
      ...options,
      __binaryResponse: true,
    });
  }

  retrieve(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get('/swagger-resources/configuration/security', {
      ...options,
      __binaryResponse: true,
    });
  }

  update(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.patch('/swagger-resources/configuration/security', {
      ...options,
      __binaryResponse: true,
    });
  }

  delete(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.delete('/swagger-resources/configuration/security', {
      ...options,
      __binaryResponse: true,
    });
  }
}
