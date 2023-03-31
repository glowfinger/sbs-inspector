import { getToken } from "../../auth/AuthService";
import { DOMAIN, PROTOCOL } from "../../services/ApiServiceConfig";
import type { Work } from "../../types/Work";
import handleErrors from "../helpers/HandleError";
import handleJson from "../helpers/HandleJson";

export async function startSiteWork(work: Work): Promise<Work> {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/work`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + (await getToken()),
    },

    method: "POST",
    body: JSON.stringify(work),
  })
    .then(handleErrors)
    .then(handleJson);
}

export async function setWorkRequest(workId: number, work) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/work/${workId}/request`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + (await getToken()),
    },
    method: "PUT",
    body: JSON.stringify(work),
  })
    .then(handleErrors)
    .then(handleJson);
}
export async function setWorkInaccessible(workId: number, work) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/work/${workId}/inaccessible`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + (await getToken()),
    },
    method: "PUT",
    body: JSON.stringify(work),
  })
    .then(handleErrors)
    .then(handleJson);
}

export async function setWorkReplaced(workId: number, work) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/work/${workId}/replace`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + (await getToken()),
    },
    method: "PUT",
    body: JSON.stringify(work),
  })
    .then(handleErrors)
    .then(handleJson);
}

export async function getSiteWork(workId: number) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/work/${workId}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + (await getToken()),
    },
    method: "GET",
  })
    .then(handleErrors)
    .then(handleJson);
}

export async function setWorkResolved(workId: number, work) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/work/${workId}/resolve`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + (await getToken()),
    },
    method: "PUT",
    body: JSON.stringify(work),
  })
    .then(handleErrors)
    .then(handleJson);
}

export async function setWorkServiced(workId: number, work) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/work/${workId}/service`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + (await getToken()),
    },
    method: "PUT",
    body: JSON.stringify(work),
  })
    .then(handleErrors)
    .then(handleJson);
}
