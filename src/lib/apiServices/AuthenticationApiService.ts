import { getToken } from '../auth/TokenManager';
import { DOMAIN, PROTOCOL } from '../services/ApiServiceConfig';
import handleErrors from './helpers/HandleError';
import handleJson from './helpers/HandleJson';

export async function authenticate(email: string, password: string) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/v1/authenticate`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
    .then(handleErrors)
    .then(handleJson);
}

export async function getCurrentUser(): Promise<any> {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/v1/current`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getToken(),
    },
    method: 'GET',
  })
    .then(handleErrors)
    .then(handleJson);
}
