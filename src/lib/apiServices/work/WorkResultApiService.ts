import {getToken} from '../../auth/AuthService';
import handleErrors from '../helpers/HandleError';
import handleJson from '../helpers/HandleJson';
import type WorkResult from '../../types/WorkResult';

export async function createWorkResult(workId: number, result) {
  return fetch(`http://localhost:8080/api/work/${workId}/result`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + (await getToken()),
    },
    method: 'POST',
    body: JSON.stringify(result),
  })
    .then(handleErrors)
    .then(handleJson);
}

export async function updateWorkResult(resultId: number, result: WorkResult) {
  return fetch(`http://localhost:8080/api/result/${resultId}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + (await getToken()),
    },
    method: 'PUT',
    body: JSON.stringify(result),
  })
    .then(handleErrors)
    .then(handleJson);
}
