<script lang="ts">
  import { user } from '../../../../lib/stores/AuthStore.js';
  import MobileNavbarDropdown from './MobileNavbarDropdown.svelte';

  export let toggle;
  let isOpen: boolean = false;

  function toggleIsOpen() {
    isOpen = !isOpen;
  }
</script>

<div class="flex flex-col lg:pl-64">
  <!-- Search header -->
  <div
    class="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-zinc-200 bg-white lg:hidden">
    <!-- Sidebar toggle, controls the 'sidebarOpen' sidebar state. -->
    <button
      on:click={toggle}
      type="button"
      class="border-r border-zinc-200 px-4 text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-500 lg:hidden">
      <span class="sr-only">Open sidebar</span>
      <!-- Heroicon name: outline/bars-3-center-left -->
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
      </svg>
    </button>
    <div class="flex flex-1 justify-between px-4 sm:px-6 lg:px-8">
      <div class="flex flex-1">
        <!--        <form class="flex w-full md:ml-0" action="#" method="GET">-->
        <!--          <label for="search-field" class="sr-only">Search</label>-->
        <!--          <div class="relative w-full text-zinc-400 focus-within:text-zinc-600">-->
        <!--            <div-->
        <!--              class="pointer-events-none absolute inset-y-0 left-0 flex items-center">-->
        <!--              &lt;!&ndash; Heroicon name: mini/magnifying-glass &ndash;&gt;-->
        <!--              <svg-->
        <!--                class="h-5 w-5"-->
        <!--                xmlns="http://www.w3.org/2000/svg"-->
        <!--                viewBox="0 0 20 20"-->
        <!--                fill="currentColor"-->
        <!--                aria-hidden="true">-->
        <!--                <path-->
        <!--                  fill-rule="evenodd"-->
        <!--                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"-->
        <!--                  clip-rule="evenodd" />-->
        <!--              </svg>-->
        <!--            </div>-->
        <!--            <input-->
        <!--              id="search-field"-->
        <!--              name="search-field"-->
        <!--              class="block h-full w-full border-transparent py-2 pl-8 pr-3 text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:placeholder-zinc-400 focus:outline-none focus:ring-0 sm:text-sm"-->
        <!--              placeholder="Search"-->
        <!--              type="search" />-->
        <!--          </div>-->
        <!--        </form>-->
      </div>
      <div class="flex items-center">
        <!-- Profile dropdown -->
        <div class="relative ml-3">
          <div>
            <button
              on:click={toggleIsOpen}
              type="button"
              class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <span
                class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-900">
                {#if $user.hasOwnProperty('firstname')}
                  <span class="text-sm font-medium leading-none text-white">
                    {$user.firstname.charAt(0)}{$user.lastname.charAt(0)}
                  </span>
                {/if}
              </span>
            </button>
          </div>

          {#if isOpen}
            <MobileNavbarDropdown />
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
