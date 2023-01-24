import handleErrors from "../helpers/HandleError";
import handleJson from "../helpers/HandleJson";
import type Job from "../../types/Job";


export function getJobById(jobId: number) {
  return fetch(`http://localhost:8080/api/job/${jobId}`)
    .then(handleErrors)
    .then(handleJson);
}
export function getJobBySiteId(siteId: number) {
  return fetch(`http://localhost:8080/api/site/${siteId}/job`)
    .then(handleErrors)
    .then(handleJson);
}

export function addJob(body): Promise<Job> {
  return fetch(`http://localhost:8080/api/job`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(body)
  }).then(handleErrors)
    .then(handleJson);
}
