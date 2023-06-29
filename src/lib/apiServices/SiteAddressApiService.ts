import { getToken } from '../auth/TokenManager';
import { DOMAIN, PROTOCOL } from '../services/ApiServiceConfig';
import type Address from '../types/Address';
import handleErrors from './helpers/HandleError';
import handleJson from './helpers/HandleJson';

export async function createSiteAddress(address: Address, siteId: number) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site/${siteId}/address`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getToken()
    },
    method: 'POST',
    body: JSON.stringify(address),
  })
    .then(handleErrors)
    .then(handleJson);
}

export async function getSiteAddress(siteId: number, addressId: number) {
  return fetch(
    `${PROTOCOL}://${DOMAIN}/api/site/${siteId}/address/${addressId}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + getToken(),
      },
      method: 'GET',
    }
  )
    .then(handleErrors)
    .then(handleJson);
}
