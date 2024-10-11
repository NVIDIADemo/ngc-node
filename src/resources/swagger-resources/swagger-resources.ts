// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ConfigurationAPI from './configuration/configuration';
import { type Response } from '../../_shims/index';

export class SwaggerResources extends APIResource {
  configuration: ConfigurationAPI.Configuration = new ConfigurationAPI.Configuration(this._client);

  create(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post('/swagger-resources', { ...options, __binaryResponse: true });
  }

  update(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.patch('/swagger-resources', { ...options, __binaryResponse: true });
  }

  delete(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.delete('/swagger-resources', { ...options, __binaryResponse: true });
  }

  retrieveAll(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get('/swagger-resources', { ...options, __binaryResponse: true });
  }
}

export namespace SwaggerResources {
  export import Configuration = ConfigurationAPI.Configuration;
}
