// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['NVCF_AUTH_TOKEN'].
   */
  authToken?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['NGC_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Ngc API.
 */
export class Ngc extends Core.APIClient {
  authToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Ngc API.
   *
   * @param {string | undefined} [opts.authToken=process.env['NVCF_AUTH_TOKEN'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['NGC_BASE_URL'] ?? https://api.ngc.nvidia.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('NGC_BASE_URL'),
    authToken = Core.readEnv('NVCF_AUTH_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (authToken === undefined) {
      throw new Errors.NgcError(
        "The NVCF_AUTH_TOKEN environment variable is missing or empty; either provide it, or instantiate the Ngc client with an authToken option, like new Ngc({ authToken: 'My Auth Token' }).",
      );
    }

    const options: ClientOptions = {
      authToken,
      ...opts,
      baseURL: baseURL || `https://api.ngc.nvidia.com`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.authToken = authToken;
  }

  orgs: API.Orgs = new API.Orgs(this);
  me: API.Me = new API.Me(this);
  admin: API.Admin = new API.Admin(this);
  usersManagement: API.UsersManagement = new API.UsersManagement(this);
  services: API.Services = new API.Services(this);
  roles: API.Roles = new API.Roles(this);
  publicKeys: API.PublicKeys = new API.PublicKeys(this);
  health: API.Health = new API.Health(this);
  swaggerResources: API.SwaggerResources = new API.SwaggerResources(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.authToken}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Ngc = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static NgcError = Errors.NgcError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  NgcError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Ngc {
  export import RequestOptions = Core.RequestOptions;

  export import PageNumberOrganizations = Pagination.PageNumberOrganizations;
  export import PageNumberOrganizationsParams = Pagination.PageNumberOrganizationsParams;
  export import PageNumberOrganizationsResponse = Pagination.PageNumberOrganizationsResponse;

  export import PageNumberUsers = Pagination.PageNumberUsers;
  export import PageNumberUsersParams = Pagination.PageNumberUsersParams;
  export import PageNumberUsersResponse = Pagination.PageNumberUsersResponse;

  export import PageNumberTeams = Pagination.PageNumberTeams;
  export import PageNumberTeamsParams = Pagination.PageNumberTeamsParams;
  export import PageNumberTeamsResponse = Pagination.PageNumberTeamsResponse;

  export import PageNumberInvitations = Pagination.PageNumberInvitations;
  export import PageNumberInvitationsParams = Pagination.PageNumberInvitationsParams;
  export import PageNumberInvitationsResponse = Pagination.PageNumberInvitationsResponse;

  export import Orgs = API.Orgs;
  export import OrgList = API.OrgList;
  export import OrgResponse = API.OrgResponse;
  export import OrgListResponse = API.OrgListResponse;
  export import OrgListResponsesPageNumberOrganizations = API.OrgListResponsesPageNumberOrganizations;
  export import OrgCreateParams = API.OrgCreateParams;
  export import OrgUpdateParams = API.OrgUpdateParams;
  export import OrgListParams = API.OrgListParams;

  export import Me = API.Me;

  export import Admin = API.Admin;

  export import UsersManagement = API.UsersManagement;

  export import Services = API.Services;
  export import ServiceVersionResponse = API.ServiceVersionResponse;
  export import ServiceVersionParams = API.ServiceVersionParams;

  export import Roles = API.Roles;
  export import UserRoleDefinitions = API.UserRoleDefinitions;
  export import RoleRetrieveAllParams = API.RoleRetrieveAllParams;

  export import PublicKeys = API.PublicKeys;
  export import PublicKeyRetrieveAllResponse = API.PublicKeyRetrieveAllResponse;

  export import Health = API.Health;

  export import SwaggerResources = API.SwaggerResources;

  export import Health = API.Health;
  export import MeteringResultList = API.MeteringResultList;
  export import Team = API.Team;
  export import TeamList = API.TeamList;
  export import User = API.User;
  export import UserInvitationList = API.UserInvitationList;
  export import UserList = API.UserList;
}

export default Ngc;
