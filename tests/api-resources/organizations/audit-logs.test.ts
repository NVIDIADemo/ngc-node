// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ngc from 'ngc';
import { Response } from 'node-fetch';

const client = new Ngc({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auditLogs', () => {
  test('delete: only required params', async () => {
    const responsePromise = client.organizations.auditLogs.delete('org-name', {
      logIds: ['string', 'string', 'string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.organizations.auditLogs.delete('org-name', {
      logIds: ['string', 'string', 'string'],
    });
  });

  test('request: only required params', async () => {
    const responsePromise = client.organizations.auditLogs.request('org-name', {
      auditLogsFrom: 'auditLogsFrom',
      auditLogsTo: 'auditLogsTo',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('request: required and optional params', async () => {
    const response = await client.organizations.auditLogs.request('org-name', {
      auditLogsFrom: 'auditLogsFrom',
      auditLogsTo: 'auditLogsTo',
    });
  });

  test('retrieveAll', async () => {
    const responsePromise = client.organizations.auditLogs.retrieveAll('org-name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveAll: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.auditLogs.retrieveAll('org-name', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });
});
