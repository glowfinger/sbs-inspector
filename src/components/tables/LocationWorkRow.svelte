<script lang="ts">
  import type { Work } from "../../lib/types/Work";
  import type Location from "../../lib/types/Location";
  import type WorkResult from "../../lib/types/WorkResult";
  import TemperatureTd from "./TemperatureTd.svelte";
  import FailsafeTd from "./FailSafeTd.svelte";
  import {
    setWorkResolved,
    startSiteWork,
  } from "../../lib/apiServices/work/WorkApiService";
  import { navigate } from "svelte-routing";

  export let siteId: number;
  export let jobId: number;
  export let visitId: number;
  export let location: Location;
  export let work: Work;
  export let startWork: {};
  export let updateWork: {};

  function getHotResult(location: Location, work: Work) {
    return getResult(work.results, "hot");
  }

  function getColdResult(location: Location, work: Work) {
    return getResult(work.results, "cold");
  }

  function getMixedResult(location: Location, work: Work) {
    return getResult(work.results, "mixed");
  }

  function getFailSafeResult(location: Location, work: Work) {
    return getResult(work.results, "fail_safe");
  }

  function getResult(results: WorkResult[], type: string) {
    return results.find((w) => w.type === type) ?? null;
  }

  function notResolved(work: Work): boolean {
    return (
      work.completedAt !== null &&
      work.remediedAt === null &&
      work.resolvedAt === null
    );
  }

  function isNotRemedied(work: Work): boolean {
    return work.completedAt !== null && work.remediedAt === null;
  }

  async function resolveWork(siteId, visitId, workId, locationId) {
    await setWorkResolved(workId, { submittedAt: new Date() });
    const work = await startSiteWork({ results: [], visitId, locationId });
    navigate(
      `/site/${siteId}/job/${jobId}/visit/${visitId}/work/${work.id}/action`
    );
  }
</script>

<tr>
  <td class="whitespace-nowrap p-2 text-sm">{location.name}</td>
  <td class="whitespace-nowrap p-2 text-sm text-gray-500">{location.floor}</td>
  <td class="whitespace-nowrap p-2 text-sm text-gray-500">{location.area}</td>

  {#if work}
    <td class="whitespace-nowrap p-2 text-sm text-gray-500">{work.status}</td>
    <td class="whitespace-nowrap p-2 text-sm text-gray-500"
      >{work.outcome ?? "-"}</td
    >
    <TemperatureTd result={getHotResult(location, work)} />
    <TemperatureTd result={getColdResult(location, work)} />
    <TemperatureTd result={getMixedResult(location, work)} />
    <FailsafeTd result={getFailSafeResult(location, work)} />
    {#if !work.completedAt}
      <td
        class="relative whitespace-nowrap p-2 text-right text-sm font-medium sm:pr-6"
      >
        <button
          class="text-gray-600 hover:text-gray-900"
          on:click={() => updateWork(visitId, work.id)}
        >
          update
        </button>
      </td>
    {:else if notResolved(work)}
      <td
        class="relative whitespace-nowrap p-2 text-right text-sm font-medium sm:pr-6"
      >
        <button
          class="text-gray-600 hover:text-gray-900"
          on:click={() => resolveWork(siteId, visitId, work.id, location.id)}
        >
          Resolve
        </button>
      </td>
    {:else}
      <td
        class="relative whitespace-nowrap p-2 text-right text-sm font-medium sm:pr-6"
        >-</td
      >
    {/if}
  {:else}
    <td
      class="whitespace-nowrap bg-gray-100 p-2 text-center text-sm text-gray-500"
      colspan="6">Pending</td
    >
    <td
      class="relative whitespace-nowrap p-2 text-right text-sm font-medium sm:pr-6"
    >
      <button
        class="text-gray-600 hover:text-gray-900"
        on:click={() => startWork(visitId, location.id)}
        >Start
      </button>
    </td>
  {/if}
</tr>
