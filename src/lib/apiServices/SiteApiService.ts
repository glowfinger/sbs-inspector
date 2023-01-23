import handleErrors from "../apiHelpers/HandleError";
import handleJson from "../apiHelpers/HandleJson";

export function getSiteById(siteId) {
  return fetch(`http://localhost:8080/api/site/${siteId}`)
    .then(handleErrors)
    .then(handleJson);
}

export function getSites() {
  return fetch(`http://localhost:8080/api/site`)
    .then(handleErrors)
    .then(handleJson);
}

export function createSite(site) {
  return fetch(`http://localhost:8080/api/site`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(site)
  }).then(handleErrors)
    .then(handleJson);
}
