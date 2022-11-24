import {DOMAIN, PROTOCOL} from "./ApiServiceConfig";
import apiError from "./ApiError";

function getSites() {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site`)
    .then(apiError)
    .then((x) => x.json())
}

function getMySites() {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site`)
    .then(apiError)
    .then((x) => x.json())
}

export {
  getSites,
  getMySites,
}


