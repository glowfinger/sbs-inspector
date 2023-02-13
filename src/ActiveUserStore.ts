import { type Writable, writable } from "svelte/store";

export const activeUser: Writable<any> = writable({
  firstName: "Mike",
  lastName: "Stockley",
  initial: "MS",
});
