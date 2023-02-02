import type Location from "../types/Location";
import handleErrors from "./helpers/HandleError";
import handleJson from "./helpers/HandleJson";

export function createSiteLocation(location: Location, siteId: number) {
    return fetch(`http://localhost:8080/api/site/${siteId}/location`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(location)
    }).then(handleErrors)
      .then(handleJson);
  }

export function updateSiteLocation(location: Location, siteId: number, locationId: number) {
  return fetch(`http://localhost:8080/api/site/${siteId}/location/${locationId}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(location)
  }).then(handleErrors)
    .then(handleJson);
}

export function getSiteLocation(siteId: number, locationId: number) {
  return fetch(`http://localhost:8080/api/site/${siteId}/location/${locationId}`)
    .then(handleErrors)
    .then(handleJson);
}

export function getSiteLocations(siteId: number) {
  return fetch(`http://localhost:8080/api/site/${siteId}/location`)
    .then(handleErrors)
    .then(handleJson);
}

