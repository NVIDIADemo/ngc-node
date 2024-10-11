// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as MeAPI from './me';
import * as Shared from '../shared';

export class Me extends APIResource {
  /**
   * What am I?
   */
  retrieve(query?: MeRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Shared.User>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<Shared.User>;
  retrieve(
    query: MeRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.User> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/v2/users/me', { query, ...options });
  }

  /**
   * Edit current user profile
   */
  update(body: MeUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.User> {
    return this._client.patch('/v2/users/me', { body, ...options });
  }
}

export interface MeRetrieveParams {
  'org-name'?: string;
}

export interface MeUpdateParams {
  /**
   * indicates if user has opt in to nvidia emails
   */
  hasEmailOptIn?: boolean;

  /**
   * indicates if user has accepted AI Foundry Partnerships End User License
   * Agreement.
   */
  hasSignedAiFoundryPartnershipsEULA?: boolean;

  /**
   * indicates if user has accepted Base Command EULA
   */
  hasSignedBaseCommandEULA?: boolean;

  /**
   * indicates if user has accepted Base Command Manager End User License Agreement.
   */
  hasSignedBaseCommandManagerEULA?: boolean;

  /**
   * indicates if user has accepted BioNeMo End User License Agreement.
   */
  hasSignedBioNeMoEULA?: boolean;

  /**
   * indicates if user has accepted container publishing eula
   */
  hasSignedContainerPublishingEULA?: boolean;

  /**
   * indicates if user has accepted CuOpt End User License Agreement.
   */
  hasSignedCuOptEULA?: boolean;

  /**
   * indicates if user has accepted Earth-2 End User License Agreement.
   */
  hasSignedEarth2EULA?: boolean;

  /**
   * indicates if user has accepted EGX EULA
   */
  hasSignedEgxEULA?: boolean;

  /**
   * indicates if user has accepted NGC EULA
   */
  hasSignedEULA?: boolean;

  /**
   * indicates if user has accepted Fleet Command End User License Agreement.
   */
  hasSignedFleetCommandEULA?: boolean;

  /**
   * indicates if user has accepted LLM End User License Agreement.
   */
  hasSignedLlmEULA?: boolean;

  /**
   * indicates if user has accepted Fleet Command End User License Agreement.
   */
  hasSignedNVAIEEULA?: boolean;

  /**
   * indicates if user has accepted NVIDIA EULA
   */
  hasSignedNvidiaEULA?: boolean;

  /**
   * indicates if user has accepted Nvidia Quantum Cloud End User License Agreement.
   */
  hasSignedNVQCEULA?: boolean;

  /**
   * indicates if user has accepted Omniverse End User License Agreement.
   */
  hasSignedOmniverseEULA?: boolean;

  /**
   * indicates if the user has signed the Privacy Policy
   */
  hasSignedPrivacyPolicy?: boolean;

  /**
   * indicates if user has consented to share their registration info with other
   * parties
   */
  hasSignedThirdPartyRegistryShareEULA?: boolean;

  /**
   * user name
   */
  name?: string;

  /**
   * Metadata information about the user.
   */
  userMetadata?: MeUpdateParams.UserMetadata;
}

export namespace MeUpdateParams {
  /**
   * Metadata information about the user.
   */
  export interface UserMetadata {
    /**
     * Name of the company
     */
    company?: string;

    /**
     * Company URL
     */
    companyUrl?: string;

    /**
     * Country of the user
     */
    country?: string;

    /**
     * User's first name
     */
    firstName?: string;

    /**
     * Industry segment
     */
    industry?: string;

    /**
     * List of development areas that user has interest
     */
    interest?: Array<string>;

    /**
     * User's last name
     */
    lastName?: string;

    /**
     * Role of the user in the company
     */
    role?: string;
  }
}

export namespace Me {
  export import MeRetrieveParams = MeAPI.MeRetrieveParams;
  export import MeUpdateParams = MeAPI.MeUpdateParams;
}
