<script lang="ts">
  import {Link, navigate} from "svelte-routing";
  import TemperatureInput from "../../../forms/inputs/TemperatureInput.svelte";
  import {hot} from "../../../../lib/helpers/temperature/TemperatureRanges";
  import temperatureIssueCheck from "../../../../lib/helpers/temperature/TemperatureIssueCheck";
  import {onMount} from "svelte";
  import {getSiteWork} from "../../../../lib/apiServices/work/WorkApiService";
  import getResult from "../../../../lib/apiServices/helpers/results/GetResult";
  import {createWorkResult, updateWorkResult} from "../../../../lib/apiServices/work/WorkResultApiService";
  import type {Work} from "../../../../lib/types/Work";
  import type {WorkResult} from "../../../../lib/types/WorkResult";
  import ThermoResultTable from "./ThermoResultTable.svelte";

  export let siteId;
  export let jobId;
  export let visitId;
  export let workId;

  let loading = true;

  let work: Work;

  let result: WorkResult = {
    id: null,
    issue: false,
    temperature: 0,
    type: 'hot',
    value: null
  };

  onMount(() => {
    getSiteWork(workId).then((response: Work) => {
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
    navigate(`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/result/cold`);
  }
</script>

{#if !loading}
    <ThermoResultTable results={work.results}/>
{/if}

<form class="space-y-4" on:submit|preventDefault={submit}>
    <TemperatureInput id="hot-temperature" name="Hot temperature" bind:value={result.temperature}/>
    <p>{hot.low} - {hot.high}</p>
    <div class="flex justify-end">
        <Link to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action`}
              class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Back
        </Link>
        <button type="submit"
                class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Save
        </button>
    </div>
</form>
