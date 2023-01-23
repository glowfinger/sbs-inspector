import {Auth0Client, createAuth0Client} from "@auth0/auth0-spa-js";
import authConfig from "./AuthConfig";

function createClient(): Promise<Auth0Client> {
  return createAuth0Client({
    domain: authConfig.domain,
    clientId: authConfig.clientId,
    useRefreshTokens: true,
    cacheLocation: 'localstorage',
    authorizationParams: {
      redirect_uri: authConfig.redirectUri,
    },
  });
}

async function login(client: Auth0Client) {
  try {
    await client.loginWithRedirect();
  } catch (e) {
    console.error(e);
  } finally {
  }
}

function logout(client) {
  return client.logout();
}

export {
  createClient,
  login,
  logout
};
