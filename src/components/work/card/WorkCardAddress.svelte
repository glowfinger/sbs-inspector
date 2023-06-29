<script lang="ts">
  import type { SiteAddress } from '../../../lib/types/SiteAddress';

  let address: SiteAddress;
</script>

{#if address}
  <p class="truncate text-sm text-zinc-500">
    {address.town} / {address.postcode}
  </p>
{:else}
  <p class="truncate text-sm text-zinc-500">Address not set</p>
{/if}
