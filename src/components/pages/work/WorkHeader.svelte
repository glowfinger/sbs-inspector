<script lang="ts">
  import type Location from '../../../lib/types/Location';

  export let location: Location;
</script>

{#if location}
  <div class="pb-2">
    <p class="mt-1 max-w-2xl text-sm text-zinc-500">
      Floor: {location.floor}, Area: {location.area}, Name: {location.name}
    </p>
  </div>
{/if}
