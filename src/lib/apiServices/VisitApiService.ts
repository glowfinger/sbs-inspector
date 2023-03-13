import handleErrors from "./helpers/HandleError";
import handleJson from "./helpers/HandleJson";
import { getToken } from "../auth/AuthService";
import {DOMAIN, PROTOCOL } from "../services/ApiServiceConfig";

export async function getVisitById(visitId) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/visit/${visitId}`, {
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
