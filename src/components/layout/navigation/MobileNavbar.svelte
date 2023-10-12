<script lang="ts">
  import MobileNavbarDropdown from "./MobileNavbarDropdown.svelte";
  import { isDropdownOpen, pageTitle } from '../../../lib/stores/NavigationStore';
  import { isAuthenticated, user } from '../../../lib/stores/AuthStore';
  import MenuIcon from '../../common/icons/MenuIcon.svelte';

  export let toggle;

  function toggleIsOpen() {
    $isDropdownOpen = !$isDropdownOpen;
  }
</script>

<div class="flex flex-col lg:pl-64">
  <div
    class="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-primary-900 bg-primary-700 lg:hidden">
    <button
      on:click={toggle}
      type="button"
      class="border-r border-primary-200 px-4 text-primary-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden">
      <span class="sr-only">Open sidebar</span>
      <MenuIcon class="h-6 w-6 text-white" />
    </button>
    <div class="flex flex-1 justify-between px-4 sm:px-6 lg:px-8">
      <div class="flex flex-1">
        <div class=" w-full text-primary-900 flex items-center">
          <span class="text-lg font-semibold text-white">{$pageTitle}</span>
        </div>
      </div>
      <div class="flex items-center">
        <!-- Profile dropdown -->
        <div class="relative ml-3">
          <div>
            <button
              on:click={toggleIsOpen}
              type="button"
              class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <span
                class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-700">
                {#if $isAuthenticated}
                  <span class="text-sm font-medium leading-none text-white">
                    {$user.firstname.charAt(0)}{$user.lastname.charAt(0)}
                  </span>
                {/if}
              </span>
            </button>
          </div>

          {#if $isDropdownOpen}
            <MobileNavbarDropdown />
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
