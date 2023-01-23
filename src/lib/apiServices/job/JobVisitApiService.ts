import handleErrors from "../../apiHelpers/HandleError";
import handleJson from "../../apiHelpers/HandleJson";
import type Visit from "../../types/Visit";

export function addVisit(body): Promise<Visit> {
  return fetch(`http://localhost:8080/api/visit`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(body)
  }).then(handleErrors)
    .then(handleJson);
}
