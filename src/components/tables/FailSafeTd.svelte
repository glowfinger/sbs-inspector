<script lang="ts">
  import type WorkResult from "../../lib/types/WorkResult";

  export let result: WorkResult;
</script>

{#if result}
  {#if result.issue}
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900 bg-red-100"
      >{result.value}</td
    >
  {:else}
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900"
      >{result.value}</td
    >
  {/if}
{:else}
  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">-</td>
{/if}
