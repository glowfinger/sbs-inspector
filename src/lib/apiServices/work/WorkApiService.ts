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

export async function getSiteWork(siteId: number, workId: number) {
  return fetch(`http://localhost:8080/api/site/${siteId}/work/${workId}`, {
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
