import { getToken } from '../../auth/AuthService';
import { DOMAIN, PROTOCOL } from '../../services/ApiServiceConfig';
import type Visit from '../../types/Visit';
import handleErrors from '../helpers/HandleError';
import handleJson from '../helpers/HandleJson';

export async function addVisit(body): Promise<Visit> {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/visit`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + (await getToken()),
    },
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then(handleErrors)
    .then(handleJson);
}

export async function completeVisit(visitId): Promise<Visit> {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/visit/${visitId}/complete`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + (await getToken()),
    },
    method: 'PUT',
  })
    .then(handleErrors)
    .then(handleJson);
}
