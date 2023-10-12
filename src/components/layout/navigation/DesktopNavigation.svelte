<script lang="ts">
  import { Link } from "svelte-routing";
  import navigationItems from '../../../lib/navigation/NavigationItems';
</script>

<div
  class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-primary-200 lg:bg-primary-900 lg:pb-4 lg:pt-5">
  <div class="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
    <nav class=" px-3">
      <ul class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul class="-mx-2 space-y-1">
            {#each navigationItems as item}
              <Link id={item.id} let:active to={item.to} class="">
                {#if active}
                  <li
                    class="bg-primary-800 text-white group flex gap-x-3 p-2 text-sm leading-6 font-semibold">
                    <svelte:component this={item.icon}
                                      class="h-6 w-6 shrink-0 group-hover:text-primary-900 fill-white" />
                    {item.title}
                  </li>
                {:else }
                  <li
                    class="text-white hover:text-white hover:bg-primary-800 group flex gap-x-3 p-2 text-sm leading-6 font-semibold">
                    <svelte:component this={item.icon}
                                      class="h-6 w-6 shrink-0 group-hover:text-primary-900 fill-white" />
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
</div>



