<script lang="ts">
  import { onMount } from 'svelte';
  import { getSiteById } from '../../lib/services/SiteApiService';
  import type Site from '../../lib/types/Site';
  import BreadcrumbFirstLink from '../links/BreadcrumbFirstLink.svelte';

  export let siteId: number;

  let site: Site;

  onMount(() => {
    getSiteById(siteId).then((data) => (site = data));
  });
</script>

<nav aria-label="Breadcrumb" class="mb-2 ">
  <div class="items-start">
    <BreadcrumbFirstLink to="/visits" text="Visits" />
  </div>
</nav>

{#if site}



  <div class="min-h-full">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="overflow-hidden bg-white shadow">
        <div class="border-t border-zinc-200 px-4 py-5 sm:px-6">
          <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-zinc-500">Site name</dt>
              <dd class="mt-1 text-sm text-zinc-900">{site.name}</dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-zinc-500">Address</dt>
              {#if site.address}
                <dd class="mt-1 text-sm text-zinc-900">{site.address.line1}</dd>
              {:else}
                <dd class="mt-1 text-sm text-zinc-900">-</dd>
              {/if}
            </div>

          </dl>
        </div>
      </div>
    </div>
  </div>
{:else}
  Loading
{/if}
