// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as RolesAPI from './roles';

export class Roles extends APIResource {
  /**
   * List of roles in NGC and their scopes
   */
  retrieveAll(
    query?: RoleRetrieveAllParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserRoleDefinitions>;
  retrieveAll(options?: Core.RequestOptions): Core.APIPromise<UserRoleDefinitions>;
  retrieveAll(
    query: RoleRetrieveAllParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserRoleDefinitions> {
    if (isRequestOptions(query)) {
      return this.retrieveAll({}, query);
    }
    return this._client.get('/roles', { query, ...options });
  }
}

/**
 * Response containing all the roles defined in NGC and their allowed actions
 */
export interface UserRoleDefinitions {
  requestStatus?: UserRoleDefinitions.RequestStatus;

  /**
   * List of roles
   */
  roles?: Array<UserRoleDefinitions.Role>;
}

export namespace UserRoleDefinitions {
  export interface RequestStatus {
    requestId?: string;

    serverId?: string;

    /**
     * Describes response status reported by the server.
     */
    statusCode?:
      | 'UNKNOWN'
      | 'SUCCESS'
      | 'UNAUTHORIZED'
      | 'PAYMENT_REQUIRED'
      | 'FORBIDDEN'
      | 'TIMEOUT'
      | 'EXISTS'
      | 'NOT_FOUND'
      | 'INTERNAL_ERROR'
      | 'INVALID_REQUEST'
      | 'INVALID_REQUEST_VERSION'
      | 'INVALID_REQUEST_DATA'
      | 'METHOD_NOT_ALLOWED'
      | 'CONFLICT'
      | 'UNPROCESSABLE_ENTITY'
      | 'TOO_MANY_REQUESTS'
      | 'INSUFFICIENT_STORAGE'
      | 'SERVICE_UNAVAILABLE'
      | 'PAYLOAD_TOO_LARGE'
      | 'NOT_ACCEPTABLE'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'BAD_GATEWAY';

    statusDescription?: string;
  }

  /**
   * List of roles
   */
  export interface Role {
    /**
     * List of actions that this role allows
     */
    allowedActions?: Array<Role.AllowedAction>;

    /**
     * Display Name of the role
     */
    displayName?: string;

    /**
     * Name of the role
     */
    name?: string;

    /**
     * Product information of the role
     */
    product?: Role.Product;

    /**
     * Short Display Name of the role
     */
    shortDisplayName?: string;
  }

  export namespace Role {
    /**
     * List of actions that this role allows
     */
    export interface AllowedAction {
      /**
       * List of access levels that this role allows
       */
      accessLevels?: Array<string>;

      /**
       * Service that this role allows
       */
      service?: string;
    }

    /**
     * Product information of the role
     */
    export interface Product {
      /**
       * Display Name of the product from the product catalog to which this role is
       * associated with
       */
      displayName?: string;

      /**
       * Name of the product from the product catalog to which this role is associated
       * with
       */
      name?: string;
    }
  }
}

export interface RoleRetrieveAllParams {
  /**
   * flag indicate if hidden roles should be included
   */
  'show-hidden'?: boolean;
}

export namespace Roles {
  export import UserRoleDefinitions = RolesAPI.UserRoleDefinitions;
  export import RoleRetrieveAllParams = RolesAPI.RoleRetrieveAllParams;
}
