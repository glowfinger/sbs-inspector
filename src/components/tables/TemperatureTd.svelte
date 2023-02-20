<script lang="ts">
  import type WorkResult from "../../lib/types/WorkResult";

  export let result: WorkResult;
</script>

{#if result}
  {#if result.issue}
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900 bg-red-100"
      >{result.temperature}&#8451</td
    >
  {:else}
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900"
      >{result.temperature}&#8451</td
    >
  {/if}
{:else}
  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">-</td>
{/if}
