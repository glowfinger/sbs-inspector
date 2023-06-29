import { getToken } from '../../auth/TokenManager';
import { DOMAIN, PROTOCOL } from '../../services/ApiServiceConfig';
import type WorkResult from '../../types/WorkResult';
import handleErrors from '../helpers/HandleError';
import handleJson from '../helpers/HandleJson';

export async function createWorkResult(workId: number, result) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/work/${workId}/result`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getToken()
    },
    method: 'POST',
    body: JSON.stringify(result),
  })
    .then(handleErrors)
    .then(handleJson);
}

export async function updateWorkResult(resultId: number, result: WorkResult) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/result/${resultId}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getToken()
    },
    method: 'PUT',
    body: JSON.stringify(result),
  })
    .then(handleErrors)
    .then(handleJson);
}
