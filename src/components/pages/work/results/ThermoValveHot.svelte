<script lang="ts">
  import { Link, navigate } from 'svelte-routing';
  import TemperatureInput from '../../../forms/inputs/TemperatureInput.svelte';
  import { hot } from '../../../../lib/helpers/temperature/TemperatureRanges';
  import temperatureIssueCheck from '../../../../lib/helpers/temperature/TemperatureIssueCheck';
  import { onMount } from 'svelte';
  import { getSiteWork } from '../../../../lib/apiServices/work/WorkApiService';
  import getResult from '../../../../lib/apiServices/helpers/results/GetResult';
  import {
    createWorkResult,
    updateWorkResult,
  } from '../../../../lib/apiServices/work/WorkResultApiService';
  import type { Work } from '../../../../lib/types/Work';
  import type WorkResult from '../../../../lib/types/WorkResult';
  import { getSiteLocation } from '../../../../lib/apiServices/SiteLocationApiService';
  import type SiteLocation from '../../../../lib/types/SiteLocation';
  import WorkHeader from '../WorkHeader.svelte';

  export let siteId: number;
  export let jobId: number;
  export let visitId: number;
  export let workId: number;

  let loading = true;

  let work: Work;
  let location: SiteLocation;

  let result: WorkResult = {
    id: null,
    issue: false,
    temperature: 0,
    type: 'hot',
    value: null,
  };

  onMount(() => {
    getSiteWork(workId).then((response: Work) => {
      getSiteLocation(siteId, response.locationId).then((l) => (location = l));
      work = response;
      const found = getResult(response.results, 'hot');
      if (found) {
        result = found;
      }
      loading = false;
    });
  });

  $: result.issue = temperatureIssueCheck(result.temperature, hot);

  async function submit() {
    if (result.id) {
      await updateWorkResult(result.id, result);
    } else {
      await createWorkResult(workId, result);
    }
    navigate(
      `/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/result/cold`
    );
  }
</script>

<nav aria-label="Breadcrumb" class="bg-white">
  <div class="items-start pb-4">
    <Link
      to={`/site/${siteId}/job/${jobId}/visit/${visitId}`}
      class="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-slate-900">
      <svg
        class="h-5 w-5 text-slate-400"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
          clip-rule="evenodd" />
      </svg>
      <span>Visit</span>
    </Link>
  </div>
</nav>

<WorkHeader location={location} action="Hot result" />

<form class="space-y-4" on:submit|preventDefault={submit}>
  <TemperatureInput
    id="hot-temperature"
    name="Temperature"
    bind:value={result.temperature} />
  <p>{hot.low} - {hot.high}</p>
  <div class="flex justify-end">
    <Link
      to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action`}
      class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
      Back
    </Link>
    <button
      type="submit"
      class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
      Save
    </button>
  </div>
</form>
