import {writable} from 'svelte/store';

export const sites = writable([]);

export const loading = writable([]);

export const errors = writable([])

export const loaded = writable(false);

export const pageParams = writable({} )
