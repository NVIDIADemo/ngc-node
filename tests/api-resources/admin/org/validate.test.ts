// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ngc from 'ngc';

const client = new Ngc({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource validate', () => {
  test('retrieveAll: required and optional params', async () => {
    const response = await client.admin.org.validate.retrieveAll({
      q: {
        orgOwner: { email: 'email', fullName: 'x', lastLoginDate: 'lastLoginDate' },
        pecSfdcId: 'pecSfdcId',
        productSubscriptions: [
          {
            productName: 'productName',
            id: 'id',
            emsEntitlementType: 'EMS_EVAL',
            expirationDate: 'expirationDate',
            startDate: 'startDate',
            type: 'NGC_ADMIN_EVAL',
          },
          {
            productName: 'productName',
            id: 'id',
            emsEntitlementType: 'EMS_EVAL',
            expirationDate: 'expirationDate',
            startDate: 'startDate',
            type: 'NGC_ADMIN_EVAL',
          },
          {
            productName: 'productName',
            id: 'id',
            emsEntitlementType: 'EMS_EVAL',
            expirationDate: 'expirationDate',
            startDate: 'startDate',
            type: 'NGC_ADMIN_EVAL',
          },
        ],
      },
    });
  });
});
