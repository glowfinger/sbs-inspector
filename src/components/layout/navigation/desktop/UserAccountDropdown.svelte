<script lang="ts">
  import { scale } from 'svelte/transition';
  import { Link } from 'svelte-routing';
  import { user } from '../../../../lib/stores/AuthStore.js';

  let isOpen: boolean = false;

  function toggleIsOpen() {
    isOpen = !isOpen;
  }
</script>

<div class="relative inline-block px-3 text-left">
  <div>
    <button
      type="button"
      on:click={toggleIsOpen}
      class="group w-full bg-zinc-100 px-3.5 py-2 text-left text-sm font-medium text-zinc-700 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 focus:ring-offset-zinc-100"
      id="options-menu-button"
      aria-expanded="false"
      aria-haspopup="true">
      <span class="flex w-full items-center justify-between">
        <span class="flex min-w-0 items-center justify-between space-x-3">
          <span
            class="inline-block h-10 w-10 overflow-hidden rounded-full bg-zinc-100">
            <img src={$user.picture} alt="Avatar" />
          </span>
          <span class="flex min-w-0 flex-1 flex-col">
            <span class="truncate text-sm font-medium text-zinc-900"
              >{$user.nickname}</span>
            <span class="truncate text-sm text-zinc-500">{$user.email}</span>
          </span>
        </span>
        <!-- Heroicon name: mini/chevron-up-down -->
        <svg
          class="h-5 w-5 flex-shrink-0 text-zinc-400 group-hover:text-zinc-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </button>
  </div>
  {#if isOpen}
    <div
      in:scale={{ start: 0.95, duration: 75, opacity: 0 }}
      out:scale={{ start: 0.95, duration: 100, opacity: 0 }}
      class="absolute left-0 right-0 z-10 mx-3 mt-1 origin-top divide-y divide-zinc-200 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu-button"
      tabindex="-1">
      <div class="py-1" role="none">
        <Link
          to={`/logout`}
          class="block px-4 py-2 text-sm text-zinc-700"
          role="menuitem"
          tabindex="-1"
          id="options-menu-item-5">Logout</Link>
      </div>
    </div>
  {/if}
</div>
