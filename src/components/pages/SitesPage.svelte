<script lang="ts">
  import { onMount } from "svelte";
  import { getSiteWithActiveJobs } from "../../lib/services/SiteApiService";
  import type { Site } from "../../lib/types/Site";
  import SiteCard from "../siteCard/SiteCard.svelte";

  let sites: Array<Site> = [];

  onMount(() => {
    getSiteWithActiveJobs().then((r) => (sites = r));
  });
</script>

<ul
  role="list"
  class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2"
>
  {#each sites as site}
    <SiteCard {site} />
  {/each}
</ul>
