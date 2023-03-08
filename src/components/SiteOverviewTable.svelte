<script lang="ts">
  import type { Site } from "../lib/types/Site";
  import SiteCard from "./siteCard/SiteCard.svelte";

  export let sites: Array<Site>;
</script>

<div class="min-h-full">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
      {#each sites as site}
        <SiteCard {site} />
      {/each}
    </div>
</div>
