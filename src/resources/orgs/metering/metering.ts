// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MeteringAPI from './metering';
import * as Shared from '../../shared';
import * as GpupeakAPI from './gpupeak';

export class Metering extends APIResource {
  gpupeak: GpupeakAPI.Gpupeak = new GpupeakAPI.Gpupeak(this._client);

  /**
   * Returns Private Registry / EGX resources usage metering as measurement series.
   * Requires admin privileges for organization.
   */
  retrieveAll(
    orgName: string,
    query: MeteringRetrieveAllParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.MeteringResultList> {
    return this._client.get(`/v2/org/${orgName}/metering`, { query, ...options });
  }
}

export interface MeteringRetrieveAllParams {
  /**
   * request params for getting metering usage
   */
  q: MeteringRetrieveAllParams.Q;
}

export namespace MeteringRetrieveAllParams {
  /**
   * request params for getting metering usage
   */
  export interface Q {
    measurements?: Array<Q.Measurement>;
  }

  export namespace Q {
    /**
     * object used for sending metering query parameter request
     */
    export interface Measurement {
      /**
       * this replaces all null values in an output stream with a non-null value that is
       * provided.
       */
      fill?: number;

      /**
       * end time range for the data, in ISO formate, yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       */
      fromDate?: string;

      /**
       * group by specific tags
       */
      groupBy?: Array<string>;

      /**
       * time period to aggregate the data over with, in seconds. If none provided, raw
       * data will be returned.
       */
      periodInSeconds?: number;

      /**
       * start time range for the data, in ISO formate, yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
       */
      toDate?: string;

      type?:
        | 'EGX_GPU_UTILIZATION_DAILY'
        | 'FLEET_COMMAND_GPU_UTILIZATION_DAILY'
        | 'EGX_LOG_STORAGE_UTILIZATION_DAILY'
        | 'FLEET_COMMAND_LOG_STORAGE_UTILIZATION_DAILY'
        | 'REGISTRY_STORAGE_UTILIZATION_DAILY'
        | 'EGX_GPU_UTILIZATION_MONTHLY'
        | 'FLEET_COMMAND_GPU_UTILIZATION_MONTHLY'
        | 'EGX_LOG_STORAGE_UTILIZATION_MONTHLY'
        | 'FLEET_COMMAND_LOG_STORAGE_UTILIZATION_MONTHLY'
        | 'REGISTRY_STORAGE_UTILIZATION_MONTHLY';
    }
  }
}

export namespace Metering {
  export import MeteringRetrieveAllParams = MeteringAPI.MeteringRetrieveAllParams;
  export import Gpupeak = GpupeakAPI.Gpupeak;
  export import GpupeakRetrieveAllParams = GpupeakAPI.GpupeakRetrieveAllParams;
}
