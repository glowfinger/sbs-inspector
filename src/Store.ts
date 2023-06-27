import { writable, type Writable } from 'svelte/store';

export const isOnline: Writable<boolean> = writable(false);

export const sites: Writable<any[]> = writable([]);
