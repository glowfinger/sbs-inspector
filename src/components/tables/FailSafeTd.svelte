<script lang="ts">
  import type WorkResult from '../../lib/types/WorkResult';

  export let result: WorkResult;
</script>

{#if result}
  {#if result.issue}
    <td class="whitespace-nowrap bg-red-100 p-2 text-sm text-zinc-900"
      >{result.value}</td>
  {:else}
    <td class="whitespace-nowrap p-2 text-sm text-zinc-900">{result.value}</td>
  {/if}
{:else}
  <td class="whitespace-nowrap p-2 text-sm text-zinc-500">-</td>
{/if}
