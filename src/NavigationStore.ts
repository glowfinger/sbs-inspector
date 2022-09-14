import {type Writable, writable} from 'svelte/store';

export const isOpen: Writable<boolean> = writable(false);
