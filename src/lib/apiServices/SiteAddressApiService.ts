import type Address from "../types/Address";
import handleErrors from "../apiHelpers/HandleError";
import handleJson from "../apiHelpers/HandleJson";

export function createSiteAddress(address: Address, siteId: number) {
  return fetch(`http://localhost:8080/api/site/${siteId}/address`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(address)
  }).then(handleErrors)
    .then(handleJson);
}

export function getSiteAddress(siteId: number, addressId: number) {
  return fetch(`http://localhost:8080/api/site/${siteId}/address/${addressId}`)
    .then(handleErrors)
    .then(handleJson);
}
