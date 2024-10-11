// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ngc from 'ngc';

const client = new Ngc({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource superAdminOrg', () => {
  test('create: required and optional params', async () => {
    const response = await client.superAdminOrg.create({
      orgOwner: { email: 'email', fullName: 'x', lastLoginDate: 'lastLoginDate' },
      country: 'country',
      description: 'description',
      displayName: 'x',
      idpId: 'idpId',
      isInternal: true,
      name: 'xx',
      pecName: 'pecName',
      pecSfdcId: 'pecSfdcId',
      productEnablements: [
        {
          productName: 'productName',
          type: 'NGC_ADMIN_EVAL',
          expirationDate: 'expirationDate',
          poDetails: [
            { entitlementId: 'entitlementId', pkId: 'pkId' },
            { entitlementId: 'entitlementId', pkId: 'pkId' },
            { entitlementId: 'entitlementId', pkId: 'pkId' },
          ],
        },
        {
          productName: 'productName',
          type: 'NGC_ADMIN_EVAL',
          expirationDate: 'expirationDate',
          poDetails: [
            { entitlementId: 'entitlementId', pkId: 'pkId' },
            { entitlementId: 'entitlementId', pkId: 'pkId' },
            { entitlementId: 'entitlementId', pkId: 'pkId' },
          ],
        },
        {
          productName: 'productName',
          type: 'NGC_ADMIN_EVAL',
          expirationDate: 'expirationDate',
          poDetails: [
            { entitlementId: 'entitlementId', pkId: 'pkId' },
            { entitlementId: 'entitlementId', pkId: 'pkId' },
            { entitlementId: 'entitlementId', pkId: 'pkId' },
          ],
        },
      ],
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
      salesforceAccountIndustry: 'salesforceAccountIndustry',
      sendEmail: true,
      type: 'UNKNOWN',
    });
  });
});
