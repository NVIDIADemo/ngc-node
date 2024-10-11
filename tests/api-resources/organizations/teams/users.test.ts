// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ngc from 'ngc';
import { Response } from 'node-fetch';

const client = new Ngc({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  test('create: only required params', async () => {
    const responsePromise = client.organizations.teams.users.create('org-name', 'team-name', {
      email: 'xxxxxx',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.organizations.teams.users.create('org-name', 'team-name', {
      email: 'xxxxxx',
      'idp-id': 'idp-id',
      'send-email': true,
      emailOptIn: true,
      eulaAccepted: true,
      name: 'x',
      roleType: 'roleType',
      roleTypes: ['string', 'string', 'string'],
      salesforceContactJobRole: 'salesforceContactJobRole',
      userMetadata: {
        company: 'company',
        companyUrl: 'companyUrl',
        country: 'country',
        firstName: 'firstName',
        industry: 'industry',
        interest: ['string', 'string', 'string'],
        lastName: 'lastName',
        role: 'role',
      },
      ncid: 'ncid',
      VisitorID: 'VisitorID',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.organizations.teams.users.retrieve('org-name', 'team-name', 'id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.teams.users.retrieve('org-name', 'team-name', 'id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.teams.users.retrieve(
        'org-name',
        'team-name',
        'id',
        { 'idp-id': 'idp-id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.organizations.teams.users.list('org-name', 'team-name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.teams.users.list('org-name', 'team-name', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.teams.users.list(
        'org-name',
        'team-name',
        {
          'page-number': 0,
          'page-size': 0,
          q: {
            fields: ['string', 'string', 'string'],
            filters: [
              { field: 'field', value: 'value' },
              { field: 'field', value: 'value' },
              { field: 'field', value: 'value' },
            ],
            groupBy: 'groupBy',
            orderBy: [
              { field: 'field', value: 'ASC' },
              { field: 'field', value: 'ASC' },
              { field: 'field', value: 'ASC' },
            ],
            page: 0,
            pageSize: 0,
            query: 'query',
            queryFields: ['string', 'string', 'string'],
            scoredSize: 0,
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.organizations.teams.users.delete('org-name', 'team-name', 'id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.teams.users.delete('org-name', 'team-name', 'id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });
});
