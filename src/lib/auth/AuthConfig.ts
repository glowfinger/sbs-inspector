const config = {
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  redirectUri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
  audience: import.meta.env.VITE_AUTH0_AUDIENCE,
};

export default config;
