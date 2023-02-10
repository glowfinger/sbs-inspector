import handleErrors from "../helpers/HandleError";
import handleJson from "../helpers/HandleJson";
import type Visit from "../../types/Visit";
import {getToken} from "../../auth/AuthService";

export async function addVisit(body): Promise<Visit> {
  return fetch(`http://localhost:8080/api/visit`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: "Bearer " + (await getToken()),

    },
    method: 'POST',
    body: JSON.stringify(body)
  }).then(handleErrors)
    .then(handleJson);
}
