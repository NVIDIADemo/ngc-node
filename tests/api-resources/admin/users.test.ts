// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ngc from 'ngc';
import { Response } from 'node-fetch';

const client = new Ngc({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  test('retrieve', async () => {
    const responsePromise = client.admin.users.retrieve('id');
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
    await expect(client.admin.users.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Ngc.NotFoundError,
    );
  });

  test('invite: only required params', async () => {
    const responsePromise = client.admin.users.invite({ email: 'email' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('invite: required and optional params', async () => {
    const response = await client.admin.users.invite({ email: 'email', 'send-email': true });
  });

  test('me', async () => {
    const responsePromise = client.admin.users.me();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('me: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.admin.users.me({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Ngc.NotFoundError,
    );
  });

  test('me: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.users.me({ 'org-name': 'org-name' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('orgOwnerBackfill', async () => {
    const responsePromise = client.admin.users.orgOwnerBackfill(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('orgOwnerBackfill: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.users.orgOwnerBackfill(0, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });
});
