<script lang="ts">
  import type {Site} from "../../lib/types/Site";

  export let site: Site;
</script>
<div class="bg-gray-700 px-2 py-2 sm:px-4">
    <h3 class="text-lg font-medium text-white">{site.name}</h3>
    {#if site.address}
        <p class="truncate text-sm text-gray-500">{site.address.town} / {site.address.postcode}</p>
    {/if}
</div>
