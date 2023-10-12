import { writable, type Writable } from "svelte/store";

export const isSideNavOpen: Writable<boolean> = writable(false);
export const isDropdownOpen: Writable<boolean> = writable(false);
export const pageTitle: Writable<string> = writable("");
