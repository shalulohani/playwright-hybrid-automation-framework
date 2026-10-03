import { test, expect, request } from '@playwright/test';

test('GET Users API returns 200', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users');
  expect(response.status()).toBe(200);
});
