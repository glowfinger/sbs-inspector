<script lang="ts">
  import type Site from '../../lib/types/Site';

  export let site: Site;
</script>

<div class="bg-primary-900 px-2 py-1 sm:px-4">
  <h3 class="text-lg font-medium text-white">{site.name}</h3>
  {#if site.address}
    <p class="truncate text-sm text-primary-200">
      {site.address.town} / {site.address.postcode}
    </p>
  {/if}
</div>
