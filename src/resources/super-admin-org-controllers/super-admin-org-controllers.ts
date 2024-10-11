// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as OrgAPI from './org';
import { type Response } from '../../_shims/index';

export class SuperAdminOrgControllers extends APIResource {
  org: OrgAPI.Org = new OrgAPI.Org(this._client);

  /**
   * Backfill Orgs to Kratos
   */
  backfillOrgsToKratos(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post('/v2/admin/backfill-orgs-to-kratos', { ...options, __binaryResponse: true });
  }
}

export namespace SuperAdminOrgControllers {
  export import Org = OrgAPI.Org;
  export import OrgUpdateParams = OrgAPI.OrgUpdateParams;
}
