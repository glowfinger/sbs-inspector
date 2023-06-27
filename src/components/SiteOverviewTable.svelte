<script lang="ts">
  import SiteCard from './siteCard/SiteCard.svelte';
  import type Site from '../lib/types/Site';

  export let sites: Array<Site>;
</script>

<div class="min-h-full">
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
    {#each sites as site}
      <SiteCard site={site} />
    {/each}
  </div>
</div>
