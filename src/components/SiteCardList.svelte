<script lang="ts">
  import SiteCard from "./siteCard/SiteCard.svelte";
  export let sites = [];
</script>

<ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {#each sites as site}
    <SiteCard site="{site}" />
  {/each}
</ul>
