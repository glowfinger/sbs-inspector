<script lang="ts">
  import type WorkResult from '../../lib/types/WorkResult';
  export let title: string;
  export let result: WorkResult;
</script>

{#if result}
  {#if result.issue}
    <div class="whitespace-nowrap bg-red-100 p-2 text-sm text-gray-900">
      {title}: {result.temperature}&#8451
    </div>
  {:else}
    <div class="whitespace-nowrap p-2 text-sm text-gray-900">
      {title}: {result.temperature}&#8451
    </div>
  {/if}
{:else}
  <div class="whitespace-nowrap p-2 text-sm text-gray-500">{title}: -</div>
{/if}
