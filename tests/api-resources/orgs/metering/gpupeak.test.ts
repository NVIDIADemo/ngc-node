// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ngc from 'ngc';
import { Response } from 'node-fetch';

const client = new Ngc({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gpupeak', () => {
  test('retrieveAll', async () => {
    const responsePromise = client.orgs.metering.gpupeak.retrieveAll('org-name');
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
      client.orgs.metering.gpupeak.retrieveAll('org-name', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('retrieveAll: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.orgs.metering.gpupeak.retrieveAll(
        'org-name',
        {
          "The to date in ISO 8601 format including time zone information (yyyy-MM-dd'T'HH:mm:ss": {
            'SSSZ)': '2019-12-27T18:11:19.117Z',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Ngc.NotFoundError);
  });
});
