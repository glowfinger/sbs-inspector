import type { Auth0Client } from "@auth0/auth0-spa-js";
import { writable, type Writable } from "svelte/store";
export const isAuthenticated: Writable<boolean> = writable(false);
export const user: Writable<object> = writable({});
export const error: Writable<any> = writable();
export const authClient: Writable<Auth0Client> = writable();
