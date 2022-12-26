<script lang="ts">
  import {scale} from 'svelte/transition';

  let isOpen: boolean = false;

  function toggleIsOpen() {
    isOpen = !isOpen;
  }

</script>

<div class="relative inline-block px-3 text-left">
    <div>
        <button type="button" on:click={toggleIsOpen}
                class="group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-100"
                id="options-menu-button" aria-expanded="false" aria-haspopup="true">
            <span class="flex w-full items-center justify-between">
              <span class="flex min-w-0 items-center justify-between space-x-3">
                <span class="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                    <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                </span>
                <span class="flex min-w-0 flex-1 flex-col">
                  <span class="truncate text-sm font-medium text-gray-900">Full name</span>
                  <span class="truncate text-sm text-gray-500">username</span>
                </span>
              </span>
                <!-- Heroicon name: mini/chevron-up-down -->
              <svg class="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      clip-rule="evenodd"/>
              </svg>
            </span>
        </button>
    </div>

    {#if isOpen}
        <div in:scale={{start: 0.95, duration: 75, opacity: 0}} out:scale={{start: 0.95, duration: 100, opacity: 0}}
             class="absolute right-0 left-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
             role="menu" aria-orientation="vertical" aria-labelledby="options-menu-button" tabindex="-1">
            <div class="py-1" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                   id="options-menu-item-0">View profile</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                   id="options-menu-item-1">Settings</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                   id="options-menu-item-2">Notifications</a>
            </div>
            <div class="py-1" role="none">
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                   id="options-menu-item-5">Logout</a>
            </div>
        </div>
    {/if}
</div>
