// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ngc from 'ngc';
import { Response } from 'node-fetch';

const client = new Ngc({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource validate', () => {
  test('retrieveAll: only required params', async () => {
    const responsePromise = client.admin.org.validate.retrieveAll({
      q: {
        orgOwner: { email: 'email', fullName: 'x' },
        pecSfdcId: 'pecSfdcId',
        productSubscriptions: [
          { productName: 'productName' },
          { productName: 'productName' },
          { productName: 'productName' },
        ],
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

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
