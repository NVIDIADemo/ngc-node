// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ngc from 'ngc';
import { Response } from 'node-fetch';

const client = new Ngc({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orgs', () => {
  test('create: required and optional params', async () => {
    const response = await client.admin.orgs.create({
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

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.orgs.retrieve('org-name', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('backfillOrgsToKratos: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.orgs.backfillOrgsToKratos({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('enable: required and optional params', async () => {
    const response = await client.admin.orgs.enable('org-name', {
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

  test('orgOwnerBackfill', async () => {
    const responsePromise = client.admin.orgs.orgOwnerBackfill('org-name');
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
      client.admin.orgs.orgOwnerBackfill('org-name', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Ngc.NotFoundError);
  });

  test('validate: only required params', async () => {
    const responsePromise = client.admin.orgs.validate({ invitation_token: 'invitation_token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('validate: required and optional params', async () => {
    const response = await client.admin.orgs.validate({ invitation_token: 'invitation_token' });
  });
});
