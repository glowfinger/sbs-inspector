import type Work from "../types/Work";
import handleErrors from "./helpers/HandleError";
import handleJson from "./helpers/HandleJson";

export function createSiteWork(work: Work, siteId: number) {
    return fetch(`http://localhost:8080/api/site/${siteId}/work`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(work)
    }).then(handleErrors)
      .then(handleJson);
  }

export function getSiteWork(siteId: number, workId: number) {
  return fetch(`http://localhost:8080/api/site/${siteId}/work/${workId}`)
    .then(handleErrors)
    .then(handleJson);
}
