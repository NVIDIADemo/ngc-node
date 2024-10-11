// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ngc from 'ngc';

const client = new Ngc({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metering', () => {
  test('downsample: required and optional params', async () => {
    const response = await client.admin.org.registry.metering.downsample('org-name', {
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
