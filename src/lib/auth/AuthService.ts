import {Auth0Client, createAuth0Client} from "@auth0/auth0-spa-js";
import authConfig from "./AuthConfig";
import {get} from "svelte/store";
import {authClient} from "../stores/AuthStore";

async function createClient(): Promise<void> {
  authClient.set( await createAuth0Client({
    domain: authConfig.domain,
    clientId: authConfig.clientId,
    cacheLocation: 'localstorage',
    authorizationParams: {
      audience: authConfig.audience,
    },
  }));
}

async function login() {
  try {
    await get(authClient).loginWithRedirect({
      authorizationParams: {
        redirect_uri: authConfig.redirectUri,
      }
    });
  } catch (e) {
    console.error(e);
  } finally {
  }
}

async function logout() {
  return await get(authClient).logout();
}

async function getToken() {
  return await get(authClient).getTokenSilently();
}

export {
  createClient,
  login,
  logout,
  getToken
};
