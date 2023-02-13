import type Address from "../types/Address";
import handleErrors from "./helpers/HandleError";
import handleJson from "./helpers/HandleJson";
import { getToken } from "../auth/AuthService";

export async function createSiteAddress(address: Address, siteId: number) {
  return fetch(`http://localhost:8080/api/site/${siteId}/address`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + (await getToken()),
    },
    method: "POST",
    body: JSON.stringify(address),
  })
    .then(handleErrors)
    .then(handleJson);
}

export async function getSiteAddress(siteId: number, addressId: number) {
  return fetch(
    `http://localhost:8080/api/site/${siteId}/address/${addressId}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + (await getToken()),
      },
      method: "GET",
    }
  )
    .then(handleErrors)
    .then(handleJson);
}
