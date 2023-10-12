<script lang="ts">
  import { linear } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { Link } from "svelte-routing";
  import LogoIcon from "../../components/common/icons/LogoIcon.svelte";
  import { useLocation } from "svelte-routing";
  import { isDropdownOpen, isSideNavOpen } from '../stores/NavigationStore';
  import navigationItems from './NavigationItems';

  export let isNavOpen;

  export let toggle;

  const location = useLocation();

  $: {
    closeSideNavigation($location.pathname);
  }

  function closeSideNavigation(pathname) {
    $isSideNavOpen = false;
    $isDropdownOpen = false;
  }
</script>

{#if isNavOpen}
  <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
    {#if isNavOpen}
      <div
        class="fixed inset-0 bg-zinc-600 bg-opacity-75"
        on:click={toggle}
        transition:fade={{ duration: 200, easing: linear }}></div>
    {/if}

    {#if isNavOpen}
      <div class="fixed inset-0 z-40 flex" transition:fade={{ duration: 200 }}>
        <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-primary-900 px-6 pb-2 ring-1 ring-white/10">
          <div class="flex h-16 shrink-0 items-center">
            <LogoIcon class="h-8 w-auto" />
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-1">
                  {#each navigationItems as item}
                    <Link id={item.id} let:active to={item.to}>
                      {#if active}
                        <li
                          class="bg-primary-800 text-white group flex gap-x-3 p-2 text-sm leading-6 font-semibold">
                          <svelte:component this={item.icon}
                                            class="mr-2 h-6 w-6 flex-shrink-0 group-hover:text-white fill-white" />
                          {item.title}
                        </li>
                      {:else }
                        <li
                          class="text-white hover:text-white hover:bg-primary-800 group flex gap-x-3 p-2 text-sm leading-6 font-semibold">

                          <svelte:component this={item.icon}
                                            class="mr-2 h-6 w-6 flex-shrink-0 group-hover:text-white fill-white" />
                          {item.title}
                        </li>
                      {/if}
                    </Link>
                  {/each}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div
          class="w-14 flex-shrink-0"
          aria-hidden="true"
          on:click|self={toggle}></div>
      </div>
    {/if}
  </div>
{/if}



