import { test, expect } from '@playwright/test';
import apiConfig from './config/apiConfig.json' with { type: 'json' };
import env from './config/env.json' with { type: 'json' };

test('Create user with reusable token', async ({ request }) => {
  const baseUrl = env.baseUrl;
  if (!baseUrl) throw new Error('baseUrl missing in env.json');

  const response = await request.post(`${baseUrl}${apiConfig.endpoints.createUser}`, {
    headers: {
      'Content-Type': apiConfig.headers.contentType
    },
    data: {
      name: 'Nakshatra',
      job: 'QA Automation Engineer'
    }
  });

  expect(response.status()).toBe(201);

  const userData = await response.json();
  expect(userData.name).toBe('Nakshatra');
});
