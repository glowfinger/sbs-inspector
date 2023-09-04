<script lang="ts">
  import { onMount } from 'svelte';
  import Loader from '../layout/Loader.svelte';
  import EmptyList from '../EmptyList.svelte';
  import { getActiveJobs } from '../../lib/apiServices/job/JobApiService';
  import PageHeader from '../PageHeader.svelte';
  import Stringify from '../helpers/Stringify.svelte';

  let jobs: Array<any> = [];
  let loaded: boolean = false;

  onMount(() => {
    getActiveJobs().then((r) => {
      loaded = true;
      jobs = r;
    });
  });
</script>

<PageHeader title="Home dashboard" />

{#if jobs.length === 0 && loaded === false}
  <Loader />
{/if}

{#if jobs.length === 0 && loaded === true}
  <EmptyList title="No sites loaded" message="Contact your administrator" />
{/if}


{#if loaded}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
  {#each jobs as job}
  {/each}


    <Stringify obj={jobs}/>
  </div>
{/if}
