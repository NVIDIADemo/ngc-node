// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as GpupeakAPI from './gpupeak';
import * as Shared from '../../shared';

export class Gpupeak extends APIResource {
  /**
   * Returns GPU Peak Usage as measurement series. Requires admin privileges for
   * organization.
   */
  retrieveAll(
    orgName: string,
    query?: GpupeakRetrieveAllParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.MeteringResultList>;
  retrieveAll(orgName: string, options?: Core.RequestOptions): Core.APIPromise<Shared.MeteringResultList>;
  retrieveAll(
    orgName: string,
    query: GpupeakRetrieveAllParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.MeteringResultList> {
    if (isRequestOptions(query)) {
      return this.retrieveAll(orgName, {}, query);
    }
    return this._client.get(`/v2/org/${orgName}/meterings/gpupeak`, { query, ...options });
  }
}

export interface GpupeakRetrieveAllParams {
  "The to date in ISO 8601 format including time zone information (yyyy-MM-dd'T'HH:mm:ss"?: GpupeakRetrieveAllParams.TheToDateInISO8601FormatIncludingTimeZoneInformationYyyyMmDdTHhMmSS;
}

export namespace GpupeakRetrieveAllParams {
  export interface TheToDateInISO8601FormatIncludingTimeZoneInformationYyyyMmDdTHhMmSS {
    'SSSZ)'?: string;
  }
}

export namespace Gpupeak {
  export import GpupeakRetrieveAllParams = GpupeakAPI.GpupeakRetrieveAllParams;
}
