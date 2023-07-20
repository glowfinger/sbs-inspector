import { getToken } from '../auth/TokenManager';
import { DOMAIN, PROTOCOL } from '../services/ApiServiceConfig';
import type Site from '../types/Site';
import handleErrors from './helpers/HandleError';
import handleJson from './helpers/HandleJson';

export async function getSiteById(siteId): Promise<Site> {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site/${siteId}`, {
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

export async function getSites() {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site`, {
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

export async function createSite(site) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getToken(),
    },
    method: 'POST',
    body: JSON.stringify(site),
  })
    .then(handleErrors)
    .then(handleJson);
}
