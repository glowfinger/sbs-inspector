<script lang="ts">
  import {Link, navigate} from "svelte-routing";
  import {createWorkResult, updateWorkResult} from "../../../../lib/apiServices/work/WorkResultApiService";
  import type WorkResult from "../../../../lib/types/WorkResult";
  import {onMount} from "svelte";
  import {getSiteWork} from "../../../../lib/apiServices/work/WorkApiService";
  import getResult from "../../../../lib/apiServices/helpers/results/GetResult";
  import failSafeIssueCheck from "../../../../lib/helpers/temperature/FailSafeIssueCheck";
  import Stringify from "../../../debug/Stringify.svelte";
  import type {Work} from "../../../../lib/types/Work.js";
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
    temperature: null,
    type: 'fail_safe',
    value: null
  };

  onMount(() => {
    getSiteWork(workId).then((response: Work) => {
      work = response;
      const found = getResult(response.results, 'fail_safe');
      if (found) {
        result = found;
      }
      loading = false;
    });
  });

  $: result.issue = failSafeIssueCheck(result.value);

  async function submit() {
    if (result.id) {
      await updateWorkResult(result.id, result);
    } else {
      await createWorkResult(workId, result);
    }
    navigate(`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action`);
  }
</script>

<nav aria-label="Breadcrumb" class="bg-white">
    <div class="items-start pb-4">
        <Link to={`/site/${siteId}/job/${jobId}/visit/${visitId}`} class="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-slate-900">
            <svg class="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
            </svg>
            <span>Visit</span>
        </Link>
    </div>
</nav>


<form class="space-y-4" on:submit|preventDefault={submit}>
    <div>
        <label class="text-base font-semibold leading-6 text-gray-900">Fail safe</label>
        <fieldset class="mt-4">
            <legend class="sr-only">Fail safe</legend>
            <div class="space-y-4">
                <div class="flex items-center">
                    <input id="yes" name="notification-method" type="radio"
                           bind:group={result.value}
                           value="yes"
                           class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="yes"
                           class="ml-3 block text-sm font-medium text-gray-700">Yes</label>
                </div>

                <div class="flex items-center">
                    <input id="no" name="notification-method"
                           type="radio"
                           value="no"
                           bind:group={result.value}
                           class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    <label for="no"
                           class="ml-3 block text-sm font-medium text-gray-700">No</label>
                </div>
            </div>
        </fieldset>
    </div>
    <div class="flex justify-end">
        <Link to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/result/cold`}
              class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Back to mixed
        </Link>
        <button type="submit"
                class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Save
        </button>
    </div>
</form>

{#if !loading}
    <ThermoResultTable results={work.results}/>
{/if}
