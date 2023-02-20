<script lang="ts">
  import TemperatureInput from "../forms/inputs/TemperatureInput.svelte";
  import SelectInput from "../forms/inputs/SelectInput.svelte";
  import {
    hasColdIssue,
    hasFailSafeIssue,
    hasHotIssue,
    hasMixedIssue,
  } from "../../lib/helpers/conditionals/hasHotIssue";
  import {createWorkResult, updateWorkResult} from "../../lib/apiServices/work/WorkResultApiService";
  import {onMount} from "svelte";
  import type {Work} from "../../lib/types/Work";
  import type WorkResult from "../../lib/types/WorkResult";

  export let workId: number;
  export let work: Work;
  work.results = setupResults(work.results);

  export let nextPage = () => {
  };


  let loading: boolean = false;
  //
  // const results = {
  //   hot: {
  //     id: null,
  //     type: "hot",
  //     temperature: 0,
  //     issue: false,
  //   },
  //   cold: {
  //     id: null,
  //     type: "cold",
  //     temperature: 0,
  //     issue: false,
  //   },
  //   mixed: {
  //     id: null,
  //     type: "mixed",
  //     temperature: 0,
  //     issue: false,
  //   },
  //   failSafe: {
  //     id: null,
  //     type: "fail_safe",
  //     value: null,
  //     issue: false,
  //   },
  // };
  //
  // $: results.hot.issue = hasHotIssue(results.hot.temperature);
  // $: results.cold.issue = hasColdIssue(results.cold.temperature);
  // $: results.mixed.issue = hasMixedIssue(results.mixed.temperature);
  // $: results.failSafe.issue = hasFailSafeIssue(results.failSafe.value);

  async function submit() {
    loading = true;

    const requests = work.results.map((result) => {
      if (result.id) {
        return updateWorkResult(result.id, result,);
      } else {
        return createWorkResult(workId, result);
      }
    });

    await Promise.all(requests);

    nextPage();
  }


  function setupResults(results: WorkResult[]) {
    const order: string[] = ['hot', 'cold', 'mixed', 'fail_safe',];
    return order.map((i) => {
      const found = results.find((result) => result.type === i);
      const base: WorkResult = {id: null, issue: false, temperature: null, type: i, value: null};
      return found ?? base;
    });
  }
</script>

<form
        class="space-y-8 divide-y divide-gray-200"
        on:submit|preventDefault={submit}
>
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div class="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
            <div>
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Personal Information
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Use a permanent address where you can receive mail.
                </p>
            </div>
            <div class="space-y-6 sm:space-y-5">
                <TemperatureInput
                        id="hot-result"
                        name="Hot"
                        bind:value={work.results[0].temperature}
                />
                <TemperatureInput
                        id="cold-result"
                        name="Cold"
                        bind:value={work.results[1].temperature}
                />
                <TemperatureInput
                        id="mixed-result"
                        name="Mixed"
                        bind:value={work.results[2].temperature}
                />
                <SelectInput
                        id="fail-safe-result"
                        name="Fail safe"
                        bind:value={work.results[3].value}
                />
            </div>
        </div>
    </div>
    <div class="pt-5">
        <div class="flex justify-end">
            <button
                    type="button"
                    class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Cancel
            </button>
            <button
                    type="submit"
                    class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Save
            </button>
        </div>
    </div>
</form>
