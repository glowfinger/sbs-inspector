import handleErrors from "./helpers/HandleError";
import handleJson from "./helpers/HandleJson";
import {getToken} from "../auth/AuthService";

export async function getSiteById(siteId) {
  return fetch(`http://localhost:8080/api/site/${siteId}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: "Bearer " + (await getToken()),
    },
    method: 'GET',
  })
    .then(handleErrors)
    .then(handleJson);
}

export async function getSites() {
  return fetch(`http://localhost:8080/api/site`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: "Bearer " + (await getToken()),
    },
    method: 'GET',
  })
    .then(handleErrors)
    .then(handleJson);
}

export async function createSite(site) {
  return fetch(`http://localhost:8080/api/site`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: "Bearer " + (await getToken()),
    },
    method: 'POST',
    body: JSON.stringify(site)
  }).then(handleErrors)
    .then(handleJson);
}
