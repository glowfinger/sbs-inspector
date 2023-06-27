import { getToken } from '../auth/AuthService';
import { DOMAIN, PROTOCOL } from '../services/ApiServiceConfig';
import type Location from '../types/Location';
import handleErrors from './helpers/HandleError';
import handleJson from './helpers/HandleJson';

export async function createSiteLocation(
  location: Location,
  siteId: number
): Promise<Location> {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site/${siteId}/location`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + (await getToken()),
    },
    method: 'POST',
    body: JSON.stringify(location),
  })
    .then(handleErrors)
    .then(handleJson);
}

export async function updateSiteLocation(
  location: Location,
  siteId: number,
  locationId: number
): Promise<Location> {
  return fetch(
    `${PROTOCOL}://${DOMAIN}/api/site/${siteId}/location/${locationId}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + (await getToken()),
      },

      method: 'PUT',
      body: JSON.stringify(location),
    }
  )
    .then(handleErrors)
    .then(handleJson);
}

export async function getSiteLocation(
  siteId: number,
  locationId: number
): Promise<Location> {
  return fetch(
    `${PROTOCOL}://${DOMAIN}/api/site/${siteId}/location/${locationId}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + (await getToken()),
      },
      method: 'GET',
    }
  )
    .then(handleErrors)
    .then(handleJson);
}

export async function getSiteLocations(siteId: number): Promise<Location[]> {
  return (
    fetch(`${PROTOCOL}://${DOMAIN}/api/site/${siteId}/location`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + (await getToken()),
      },
      method: 'GET',
    })
      .then(handleErrors)
      // .then(x => new Promise(resolve => setTimeout(() => resolve(x), 3000)))
      .then(handleJson)
  );
}
