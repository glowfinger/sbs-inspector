import type Location from "../types/Location";
import handleErrors from "./helpers/HandleError";
import handleJson from "./helpers/HandleJson";
import {getToken} from "../auth/AuthService";

export async function createSiteLocation(location: Location, siteId: number) {
  return fetch(`http://localhost:8080/api/site/${siteId}/location`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: "Bearer " + (await getToken()),
    },
    method: 'POST',
    body: JSON.stringify(location)
  }).then(handleErrors)
    .then(handleJson);
}

export async function updateSiteLocation(location: Location, siteId: number, locationId: number) {
  return fetch(`http://localhost:8080/api/site/${siteId}/location/${locationId}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: "Bearer " + (await getToken()),
    },

    method: 'PUT',
    body: JSON.stringify(location)
  }).then(handleErrors)
    .then(handleJson);
}

export async function getSiteLocation(siteId: number, locationId: number) {
  return fetch(`http://localhost:8080/api/site/${siteId}/location/${locationId}`, {
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

export async function getSiteLocations(siteId: number) {
  return fetch(`http://localhost:8080/api/site/${siteId}/location`, {
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

