// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as SecurityAPI from './security';
import * as UiAPI from './ui';

export class Configuration extends APIResource {
  ui: UiAPI.Ui = new UiAPI.Ui(this._client);
  security: SecurityAPI.Security = new SecurityAPI.Security(this._client);
}

export namespace Configuration {
  export import Ui = UiAPI.Ui;
  export import Security = SecurityAPI.Security;
}
