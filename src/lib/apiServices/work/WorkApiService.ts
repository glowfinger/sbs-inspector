import type { Work } from "../../types/Work";
import handleErrors from "../helpers/HandleError";
import handleJson from "../helpers/HandleJson";
import { getToken } from "../../auth/AuthService";

export async function startSiteWork(work: Work) {
  return fetch(`http://localhost:8080/api/work`, {
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

export async function setWorkOrdered(workId: number,work) {
  return fetch(`http://localhost:8080/api/work/${workId}/ordered`, {
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
export async function setWorkInaccessible(workId: number,work) {
  return fetch(`http://localhost:8080/api/work/${workId}/inaccessible`, {
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
  return fetch(`http://localhost:8080/api/work/${workId}`, {
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

export async function setWorkResolved(workId: number,work) {
  return fetch(`http://localhost:8080/api/work/${workId}/resolve`, {
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

export async function setWorkServiced(workId: number,work) {
  return fetch(`http://localhost:8080/api/work/${workId}/service`, {
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
