import {type Writable, writable} from 'svelte/store';

export const isOnline: Writable<boolean> = writable(false);

export const sites: Writable<any[]> = writable([]);
