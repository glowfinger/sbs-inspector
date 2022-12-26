<script lang="ts">
  import {scale} from 'svelte/transition';

  export let toggle
  let isOpen: boolean = false;

  function toggleIsOpen() {
    isOpen = !isOpen;
  }
</script>

<div class="flex flex-col lg:pl-64">
    <!-- Search header -->
    <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden">
        <!-- Sidebar toggle, controls the 'sidebarOpen' sidebar state. -->
        <button on:click={toggle}

                type="button"
                class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 lg:hidden">
            <span class="sr-only">Open sidebar</span>
            <!-- Heroicon name: outline/bars-3-center-left -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"/>
            </svg>
        </button>
        <div class="flex flex-1 justify-between px-4 sm:px-6 lg:px-8">
            <div class="flex flex-1">
                <form class="flex w-full md:ml-0" action="#" method="GET">
                    <label for="search-field" class="sr-only">Search</label>
                    <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                            <!-- Heroicon name: mini/magnifying-glass -->
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <input id="search-field" name="search-field"
                               class="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                               placeholder="Search" type="search">
                    </div>
                </form>
            </div>
            <div class="flex items-center">
                <!-- Profile dropdown -->
                <div class="relative ml-3">
                    <div>
                        <button on:click={toggleIsOpen}
                                type="button"
                                class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span class="sr-only">Open user menu</span>
                            <span class="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100">
                                <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                                </svg>
                            </span>
                        </button>
                    </div>

                    {#if isOpen}
                        <div in:scale={{start: 0.95, duration: 75, opacity: 0}} out:scale={{start: 0.95, duration: 100, opacity: 0}}
                                class="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                             role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                            <div class="py-1" role="none">
                                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                                   id="user-menu-item-0">View profile</a>
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                                   id="user-menu-item-1">Settings</a>
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                                   id="user-menu-item-2">Notifications</a>
                            </div>
                            <div class="py-1" role="none">
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                                   id="user-menu-item-5">Logout</a>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>
