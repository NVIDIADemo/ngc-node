// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ngc from 'ngc';

const client = new Ngc({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orgStatus', () => {
  test('create: required and optional params', async () => {
    const response = await client.superAdminOrg.orgStatus.create('org-name', {
      createSubscription: true,
      productEnablement: {
        productName: 'productName',
        type: 'NGC_ADMIN_EVAL',
        expirationDate: 'expirationDate',
        poDetails: [
          { entitlementId: 'entitlementId', pkId: 'pkId' },
          { entitlementId: 'entitlementId', pkId: 'pkId' },
          { entitlementId: 'entitlementId', pkId: 'pkId' },
        ],
      },
    });
  });
});
