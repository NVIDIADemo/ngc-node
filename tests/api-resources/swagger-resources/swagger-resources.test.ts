// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ngc from 'ngc';

const client = new Ngc({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource swaggerResources', () => {
  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.swaggerResources.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Ngc.NotFoundError,
    );
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.swaggerResources.update({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Ngc.NotFoundError,
    );
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.swaggerResources.delete({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Ngc.NotFoundError,
    );
  });

  test('retrieveAll: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.swaggerResources.retrieveAll({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Ngc.NotFoundError,
    );
  });
});
