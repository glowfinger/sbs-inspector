import handleErrors from "./helpers/HandleError";
import handleJson from "./helpers/HandleJson";
import {getToken} from "../auth/AuthService";

export async function getVisitById(visitId) {
  return fetch(`http://localhost:8080/api/visit/${visitId}`,{
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

