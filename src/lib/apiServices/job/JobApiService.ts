import handleErrors from "../helpers/HandleError";
import handleJson from "../helpers/HandleJson";
import type Job from "../../types/Job";
import { getToken } from "../../auth/AuthService";
import {DOMAIN, PROTOCOL} from "../../services/ApiServiceConfig";

export async function getJobById(jobId: number) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/job/${jobId}`, {
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
export async function getJobBySiteId(siteId: number) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site/${siteId}/job`, {
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

export async function addJob(body): Promise<Job> {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/job`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + (await getToken()),
    },
    method: "POST",
    body: JSON.stringify(body),
  })
    .then(handleErrors)
    .then(handleJson);
}
