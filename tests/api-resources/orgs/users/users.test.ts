// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ngc from 'ngc';
import { Response } from 'node-fetch';

const client = new Ngc({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  test('create: only required params', async () => {
    const responsePromise = client.orgs.users.create('org-name', { email: 'xxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.orgs.users.create('org-name', {
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

  test('list', async () => {
    const responsePromise = client.orgs.users.list('org-name');
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
    await expect(client.orgs.users.list('org-name', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Ngc.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.orgs.users.list(
        'org-name',
        {
          'exclude-from-team': 'exclude-from-team',
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
    const responsePromise = client.orgs.users.delete('org-name', 'id');
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
      client.orgs.users.delete('org-name', 'id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.orgs.users.delete('org-name', 'id', { anonymize: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('addRole: only required params', async () => {
    const responsePromise = client.orgs.users.addRole('org-name', 'user-email-or-id', {
      roles: ['string', 'string', 'string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addRole: required and optional params', async () => {
    const response = await client.orgs.users.addRole('org-name', 'user-email-or-id', {
      roles: ['string', 'string', 'string'],
      ncid: 'ncid',
      VisitorID: 'VisitorID',
    });
  });

  test('removeRole', async () => {
    const responsePromise = client.orgs.users.removeRole('org-name', 'user-email-or-id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeRole: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.orgs.users.removeRole('org-name', 'user-email-or-id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('removeRole: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.orgs.users.removeRole(
        'org-name',
        'user-email-or-id',
        { roles: ['string', 'string', 'string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('updateRole', async () => {
    const responsePromise = client.orgs.users.updateRole('org-name', 'id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateRole: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.orgs.users.updateRole('org-name', 'id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('updateRole: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.orgs.users.updateRole(
        'org-name',
        'id',
        { roles: ['string', 'string', 'string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Ngc.NotFoundError);
  });
});
