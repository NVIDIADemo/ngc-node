// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ngc from 'ngc';
import { Response } from 'node-fetch';

const client = new Ngc({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orgs', () => {
  test('list', async () => {
    const responsePromise = client.admin.orgs.list();
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
    await expect(client.admin.orgs.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Ngc.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.orgs.list(
        {
          'Filter using org display name': 'Filter using org display name',
          'Filter using org owner email': {
            ' Email should be base-64-encoded': ' Email should be base-64-encoded',
          },
          'Filter using org owner name': 'Filter using org owner name',
          'org-desc': 'org-desc',
          'org-name': 'org-name',
          'org-type': 'UNKNOWN',
          'page-number': 0,
          'page-size': 0,
          'pec-id': 'pec-id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Ngc.NotFoundError);
  });
});
