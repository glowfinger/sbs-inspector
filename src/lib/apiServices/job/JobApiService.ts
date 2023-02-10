import handleErrors from "../helpers/HandleError";
import handleJson from "../helpers/HandleJson";
import type Job from "../../types/Job";
import {getToken} from "../../auth/AuthService";


export async function getJobById(jobId: number) {
  return fetch(`http://localhost:8080/api/job/${jobId}`, {
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
export async function getJobBySiteId(siteId: number) {
  return fetch(`http://localhost:8080/api/site/${siteId}/job`, {
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

export async function addJob(body): Promise<Job> {
  return fetch(`http://localhost:8080/api/job`, {
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
