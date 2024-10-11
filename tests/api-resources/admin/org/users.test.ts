// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ngc from 'ngc';
import { Response } from 'node-fetch';

const client = new Ngc({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  test('removeRole', async () => {
    const responsePromise = client.admin.org.users.removeRole('org-name', 'id');
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
      client.admin.org.users.removeRole('org-name', 'id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('removeRole: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.org.users.removeRole(
        'org-name',
        'id',
        { roles: ['string', 'string', 'string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('updateRole', async () => {
    const responsePromise = client.admin.org.users.updateRole('org-name', 'id');
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
      client.admin.org.users.updateRole('org-name', 'id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('updateRole: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.org.users.updateRole(
        'org-name',
        'id',
        { roles: ['string', 'string', 'string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Ngc.NotFoundError);
  });
});
