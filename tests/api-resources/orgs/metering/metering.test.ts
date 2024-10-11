// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ngc from 'ngc';
import { Response } from 'node-fetch';

const client = new Ngc({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metering', () => {
  test('retrieveAll: only required params', async () => {
    const responsePromise = client.orgs.metering.retrieveAll('org-name', { q: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveAll: required and optional params', async () => {
    const response = await client.orgs.metering.retrieveAll('org-name', {
      q: {
        measurements: [
          {
            fill: 0,
            fromDate: 'fromDate',
            groupBy: ['string', 'string', 'string'],
            periodInSeconds: 0,
            toDate: 'toDate',
            type: 'EGX_GPU_UTILIZATION_DAILY',
          },
          {
            fill: 0,
            fromDate: 'fromDate',
            groupBy: ['string', 'string', 'string'],
            periodInSeconds: 0,
            toDate: 'toDate',
            type: 'EGX_GPU_UTILIZATION_DAILY',
          },
          {
            fill: 0,
            fromDate: 'fromDate',
            groupBy: ['string', 'string', 'string'],
            periodInSeconds: 0,
            toDate: 'toDate',
            type: 'EGX_GPU_UTILIZATION_DAILY',
          },
        ],
      },
    });
  });
});
