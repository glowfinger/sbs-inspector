import { writable, type Writable } from 'svelte/store';

export const isAuthenticated: Writable<boolean> = writable(false);
export const user: Writable<any> = writable({
  firstname: '',
  lastname: ''
});
export const error: Writable<any> = writable();
