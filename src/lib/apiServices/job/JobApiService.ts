import { getToken } from '../../auth/TokenManager';
import { DOMAIN, PROTOCOL } from '../../services/ApiServiceConfig';
import type Job from '../../types/Job';
import handleErrors from '../helpers/HandleError';
import handleJson from '../helpers/HandleJson';

export async function getJobById(jobId: number): Promise<Job> {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/job/${jobId}`, {
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
export async function getJobBySiteId(siteId: number) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site/${siteId}/job`, {
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

export async function addJob(body): Promise<Job> {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/job`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getToken(),
    },
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then(handleErrors)
    .then(handleJson);
}
