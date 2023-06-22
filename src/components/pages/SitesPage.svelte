<script lang="ts">
  import { onMount } from "svelte";
  import { getSiteWithActiveJobs } from "../../lib/services/SiteApiService";
  import type { Site } from "../../lib/types/Site";
  import SiteCard from "../siteCard/SiteCard.svelte";
  import EmptyList from "../EmptyList.svelte";

  let sites: Array<Site> = [];

  onMount(() => {
    getSiteWithActiveJobs().then((r) => (sites = r));
  });
</script>

{#if sites.length === 0}
  <EmptyList title="No sites loaded" message="Contact your administrator" />
{/if}

<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
  {#each sites as site}
    <SiteCard site={site} />
  {/each}
</div>

