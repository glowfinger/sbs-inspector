<script lang="ts">
  import { linear } from "svelte/easing";
  import { fade } from "svelte/transition";
  import Logo from "./Logo.svelte";
  import { Link } from "svelte-routing";

  export let isNavOpen;

  export let toggle;
</script>

{#if isNavOpen}
  <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
    {#if isNavOpen}
      <div
        class="fixed inset-0 bg-gray-600 bg-opacity-75"
        on:click={toggle}
        transition:fade={{ duration: 200, easing: linear }}
      />
    {/if}

    {#if isNavOpen}
      <div class="fixed inset-0 z-40 flex" transition:fade={{ duration: 200 }}>
        {#if isNavOpen}
          <div
            class="relative flex w-full max-w-xs flex-1 flex-col bg-white pb-4 pt-5"
            transition:fade={{ duration: 200, easing: linear }}
          >
            <div class="absolute right-0 top-0 -mr-12 pt-2">
              <button
                on:click={toggle}
                type="button"
                class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span class="sr-only">Close sidebar</span>
                <!-- Heroicon name: outline/x-mark -->
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div class="flex flex-shrink-0 items-center px-4 text-gray-900">
              <Logo />
            </div>
            <div class="mt-5 h-0 flex-1 overflow-y-auto">
              <nav class="px-2">
                <div class="space-y-1">
                  <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:text-gray-900 hover:bg-gray-50" -->
                  <Link
                    to={`/`}
                    class="group flex items-center rounded-md bg-gray-100 px-2 py-2 text-base font-medium leading-5 text-gray-900"
                    aria-current="page"
                  >
                    <!--
                                          Heroicon name: outline/home

                                          Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
                                        -->
                    <svg
                      class="mr-3 h-6 w-6 flex-shrink-0 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    Home
                  </Link>

                  <Link
                    to={`/sites`}
                    class="group flex items-center rounded-md px-2 py-2 text-base font-medium leading-5 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  >
                    <!-- Heroicon name: outline/bars-4 -->
                    <svg
                      class="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                      />
                    </svg>
                    My jobs
                  </Link>
                </div>
              </nav>
            </div>
          </div>
          <div class="w-14 flex-shrink-0" aria-hidden="true" />
        {/if}
      </div>
    {/if}
  </div>
{/if}
