import { writable, type Writable } from 'svelte/store';
export const isAuthenticated: Writable<boolean> = writable(false);
export const user: Writable<object> = writable({});
export const error: Writable<any> = writable();
