import {DOMAIN, PROTOCOL} from "./ApiServiceConfig";
import apiError from "./ApiError";
import type {Site} from "../types/Site";
import {get} from "svelte/store";
import {authClient} from "../stores/AuthStore";

export async function getMySites() {
  const accessToken = await get(authClient).getTokenSilently();
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site`, {
    headers: {
      'authorization': 'Bearer ' + accessToken
    }})
    .then(apiError)
    .then((x: Response): Promise<Array<Site>> => x.json())
}

export function getSiteById(siteId: number) {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site/${siteId}`)
    .then(apiError)
    .then((x) => x.json())
}
