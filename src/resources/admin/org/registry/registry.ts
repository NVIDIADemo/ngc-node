// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as MeteringAPI from './metering';

export class Registry extends APIResource {
  metering: MeteringAPI.Metering = new MeteringAPI.Metering(this._client);
}

export namespace Registry {
  export import Metering = MeteringAPI.Metering;
  export import MeteringDownsampleParams = MeteringAPI.MeteringDownsampleParams;
}
