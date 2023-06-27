<script lang="ts">
  import type WorkResult from '../../lib/types/WorkResult';
  import TemperatureResult from './TemperatureResult.svelte';
  import FailSafeResult from './FailSafeResult.svelte';

  export let results: WorkResult[];

  function getHotResult(results: WorkResult[]): WorkResult {
    return getResult(results, 'hot');
  }

  function getColdResult(results: WorkResult[]): WorkResult {
    return getResult(results, 'cold');
  }

  function getMixedResult(results: WorkResult[]): WorkResult {
    return getResult(results, 'mixed');
  }

  function getFailSafeResult(results: WorkResult[]): WorkResult {
    return getResult(results, 'fail_safe');
  }

  function getResult(results: WorkResult[], type: string): WorkResult {
    return results.find((w) => w.type === type) ?? null;
  }
</script>

{#if results.length === 0}
  <div class="grid grid-cols-1 gap-1 px-2">
    <div>No results entered</div>
  </div>
{:else}
  <div class="flex justify-between">
    <TemperatureResult title="Hot" result={getHotResult(results)} />
    <TemperatureResult title="Cold" result={getColdResult(results)} />
    <TemperatureResult title="Mixed" result={getMixedResult(results)} />
    <FailSafeResult title="Fail safe" result={getFailSafeResult(results)} />
  </div>
{/if}
