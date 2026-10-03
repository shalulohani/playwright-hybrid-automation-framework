import { request } from '@playwright/test';
import env from './env.json';
import apiConfig from './apiConfig.json';

export async function getAuthToken() {
  const context = await request.newContext();
  const response = await context.post(`${env.baseUrl}/login`, {
    data: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }
  });

  const data = await response.json();
  return data.token;
}
