import {DOMAIN, PROTOCOL} from "./ApiServiceConfig";
import apiError from "./ApiError";
import type {Site} from "../types/Site";

export function getSites() {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site`)
    .then(apiError)
    .then((x) => x.json())
}

export function getMySites() {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site`)
    .then(apiError)
    .then((x: Response): Promise<Array<Site>> => x.json())
}

export function getSiteById(siteId: number) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site/${siteId}`)
    .then(apiError)
    .then((x) => x.json())
}
