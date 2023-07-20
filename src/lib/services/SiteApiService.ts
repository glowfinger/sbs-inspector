import { getToken } from '../auth/TokenManager';
import type Site from '../types/Site';
import apiError from './ApiError';
import { DOMAIN, PROTOCOL } from './ApiServiceConfig';

export async function getMySites() {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site`, {
    headers: {
      authorization: 'Bearer ' + getToken(),
    },
  })
    .then(apiError)
    .then((x: Response): Promise<Array<Site>> => x.json());
}

export async function getSiteWithActiveJobs() {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site/filter/active-jobs`, {
    headers: {
      authorization: 'Bearer ' + getToken(),
    },
  })
    .then(apiError)
    .then((x: Response): Promise<Array<Site>> => x.json());
}

export async function getSiteById(siteId: number) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site/${siteId}`, {
    headers: {
      authorization: 'Bearer ' + getToken(),
    },
  })
    .then(apiError)
    .then((x) => x.json());
}
