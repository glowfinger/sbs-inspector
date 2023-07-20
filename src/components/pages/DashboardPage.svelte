<script lang="ts">
  import type Site from '../../lib/types/Site';
  import { onMount } from 'svelte';
  import { getSiteWithActiveJobs } from '../../lib/services/SiteApiService';
  import Stringify from '../debug/Stringify.svelte';
  import Loader from '../layout/Loader.svelte';
  import EmptyList from '../EmptyList.svelte';
  import ThermoValveIcon from '../icons/ThermoValveIcon.svelte';
  import ShowerHeadIcon from '../icons/ShowerHeadIcon.svelte';
  import SiteCard from '../siteCard/SiteCard.svelte';

  let sites: Array<any> = [];

  let loaded: boolean = false;

  onMount(() => {
    getSiteWithActiveJobs().then((r) => {
      loaded = true;
      sites = r.map(siteJobVisitMapper);
    });
  });

  function siteJobVisitMapper(site) {
    delete site.locations;

    return site;
  }
</script>

{#if sites.length === 0 && loaded === false}
  <Loader />
{/if}

{#if sites.length === 0 && loaded === true}
  <EmptyList title="No sites loaded" message="Contact your administrator" />
{/if}

{#if loaded}
  {#each sites as site}
    {#each site.jobs as job}
      <div class="col-span-1 mb-4 flex border border-zinc-300 bg-white shadow">
        {#if job.type === 'shower_head'}
          <div
            class="flex w-16 flex-shrink-0 items-center justify-center bg-primary-700 text-sm font-medium text-white">
            <ShowerHeadIcon class="h-10 w-10 fill-white" />
          </div>
        {:else if job.type === 'thermo_valve'}
          <div
            class="flex w-16 flex-shrink-0 items-center justify-center bg-green-400 text-sm font-medium text-white">
            <ThermoValveIcon class="h-10 w-10 fill-white" />
          </div>
        {/if}
        <div class="flex flex-1 items-center justify-between truncate bg-white">
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <p class="text-sm font-bold text-zinc-900">{site.name}</p>
            <p class="truncate text-sm text-zinc-500">
              ({site.code}) / {job.type}
              {job.task}
            </p>
          </div>
        </div>
      </div>
    {/each}
  {/each}
  <Stringify obj={sites} />
{/if}
