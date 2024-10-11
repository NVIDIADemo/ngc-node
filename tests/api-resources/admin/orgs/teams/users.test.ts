// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ngc from 'ngc';
import { Response } from 'node-fetch';

const client = new Ngc({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  test('create: only required params', async () => {
    const responsePromise = client.admin.orgs.teams.users.create('org-name', 'team-name', {
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
    const response = await client.admin.orgs.teams.users.create('org-name', 'team-name', {
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
    });
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.orgs.teams.users.retrieve('org-name', 'team-name', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('add', async () => {
    const responsePromise = client.admin.orgs.teams.users.add('org-name', 'team-name', 'id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('add: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.orgs.teams.users.add('org-name', 'team-name', 'id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('add: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.orgs.teams.users.add(
        'org-name',
        'team-name',
        'id',
        { 'user role, defaults to REGISTRY_READ': 'user role, defaults to REGISTRY_READ' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('addRole', async () => {
    const responsePromise = client.admin.orgs.teams.users.addRole('org-name', 'team-name', 'id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addRole: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.orgs.teams.users.addRole('org-name', 'team-name', 'id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('addRole: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.orgs.teams.users.addRole(
        'org-name',
        'team-name',
        'id',
        { roles: ['string', 'string', 'string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Ngc.NotFoundError);
  });
});
