// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface PageNumberOrganizationsResponse<Item> {
  organizations: Array<Item>;
}

export interface PageNumberOrganizationsParams {
  'page-number'?: number;

  'page-size'?: number;
}

export class PageNumberOrganizations<Item>
  extends AbstractPage<Item>
  implements PageNumberOrganizationsResponse<Item>
{
  organizations: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: PageNumberOrganizationsResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.organizations = body.organizations || [];
  }

  getPaginatedItems(): Item[] {
    return this.organizations ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageNumberOrganizationsParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const query = this.options.query as PageNumberOrganizationsParams;
    const currentPage = query?.['page-number'] ?? 1;

    return { params: { 'page-number': currentPage + 1 } };
  }
}

export interface PageNumberUsersResponse<Item> {
  users: Array<Item>;
}

export interface PageNumberUsersParams {
  'page-number'?: number;

  'page-size'?: number;
}

export class PageNumberUsers<Item> extends AbstractPage<Item> implements PageNumberUsersResponse<Item> {
  users: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: PageNumberUsersResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.users = body.users || [];
  }

  getPaginatedItems(): Item[] {
    return this.users ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageNumberUsersParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const query = this.options.query as PageNumberUsersParams;
    const currentPage = query?.['page-number'] ?? 1;

    return { params: { 'page-number': currentPage + 1 } };
  }
}

export interface PageNumberTeamsResponse<Item> {
  teams: Array<Item>;
}

export interface PageNumberTeamsParams {
  'page-number'?: number;

  'page-size'?: number;
}

export class PageNumberTeams<Item> extends AbstractPage<Item> implements PageNumberTeamsResponse<Item> {
  teams: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: PageNumberTeamsResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.teams = body.teams || [];
  }

  getPaginatedItems(): Item[] {
    return this.teams ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageNumberTeamsParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const query = this.options.query as PageNumberTeamsParams;
    const currentPage = query?.['page-number'] ?? 1;

    return { params: { 'page-number': currentPage + 1 } };
  }
}

export interface PageNumberInvitationsResponse<Item> {
  invitations: Array<Item>;
}

export interface PageNumberInvitationsParams {
  'page-number'?: number;

  'page-size'?: number;
}

export class PageNumberInvitations<Item>
  extends AbstractPage<Item>
  implements PageNumberInvitationsResponse<Item>
{
  invitations: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: PageNumberInvitationsResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.invitations = body.invitations || [];
  }

  getPaginatedItems(): Item[] {
    return this.invitations ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageNumberInvitationsParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const query = this.options.query as PageNumberInvitationsParams;
    const currentPage = query?.['page-number'] ?? 1;

    return { params: { 'page-number': currentPage + 1 } };
  }
}
