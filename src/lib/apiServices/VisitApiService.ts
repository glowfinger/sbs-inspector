import { getToken } from '../auth/TokenManager';
import { DOMAIN, PROTOCOL } from '../services/ApiServiceConfig';
import type Visit from '../types/Visit';
import handleErrors from './helpers/HandleError';
import handleJson from './helpers/HandleJson';

export async function getVisitById(visitId): Promise<Visit> {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/visit/${visitId}`, {
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
