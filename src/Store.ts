import {type Writable, writable} from 'svelte/store';
import type {List} from "postcss/lib/list";

export const isOnline: Writable<boolean> = writable(false);

export const sites: Writable<any[]> = writable([]);
