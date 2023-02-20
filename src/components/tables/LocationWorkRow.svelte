<script lang="ts">
  import type { Work } from "../../lib/types/Work";
  import type Location from "../../lib/types/Location";
  import type WorkResult from "../../lib/types/WorkResult";
  import TemperatureTd from "./TemperatureTd.svelte";
  import FailsafeTd from "./FailSafeTd.svelte";

  export let jobId: number;
  export let visitId: number;
  export let works: Work[] = [];
  export let location: Location;

  export let startWork;
  export let updateWork;

  function locationHasWork(location: Location, works): boolean {
    return works.find((w) => w.locationId === location.id);
  }

  function getWorkForLocation(location: Location, works) {
    return works.find((w) => w.locationId === location.id);
  }

  function getHotResult(location: Location, works: Work[]) {
    return getResult(getWorkForLocation(location, works).results, "hot");
  }

  function getColdResult(location: Location, works: Work[]) {
    return getResult(getWorkForLocation(location, works).results, "cold");
  }

  function getMixedResult(location: Location, works: Work[]) {
    return getResult(getWorkForLocation(location, works).results, "mixed");
  }

  function getFailSafeResult(location: Location, works: Work[]) {
    return getResult(getWorkForLocation(location, works).results, "fail_safe");
  }

  function getResult(results: WorkResult[], type: string) {
    return results.find((w) => w.type === type) ?? null;
  }
</script>

<td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
  <div class="flex items-center">
    <div class="ml-4">
      <div class="font-medium text-gray-900">{location.name}</div>
    </div>
  </div>
</td>
<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
  <div class="text-gray-500">Floor: {location.floor} {location.type}</div>
</td>
{#if locationHasWork(location, works)}
  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
    <span
      class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
      >{null}</span
    >
  </td>
  <TemperatureTd result={getHotResult(location, works)} />
  <TemperatureTd result={getColdResult(location, works)} />
  <TemperatureTd result={getMixedResult(location, works)} />
  <FailsafeTd result={getFailSafeResult(location, works)} />
  <td
    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
  >
    <button
      class="text-gray-600 hover:text-gray-900"
      on:click={() => updateWork(visitId, getWorkForLocation(location, works).id)}
      >update
    </button>
  </td>
{:else}
  <td
    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center bg-gray-100"
    colspan="4">Pending</td
  >
  <td
    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
  >
    <button
      class="text-gray-600 hover:text-gray-900"
      on:click={() => startWork(visitId, location.id)}
      >Start
    </button>
  </td>
{/if}
