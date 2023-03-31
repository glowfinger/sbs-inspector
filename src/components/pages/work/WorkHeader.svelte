<script lang="ts">
  import type Location from "../../../lib/types/Location";

  export let action: string;
  export let location: Location;
</script>

{#if location}
  <div class="pb-2">
    <h3 class="text-xl font-semibold text-gray-900">{action}</h3>
    <p class="mt-1 max-w-2xl text-sm text-gray-500">
      Floor: {location.floor}, Area: {location.area}, Name: {location.name}
    </p>
  </div>
{/if}
