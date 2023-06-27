<script lang="ts">
  import TemperatureInput from '../forms/inputs/TemperatureInput.svelte';
  import SelectInput from '../forms/inputs/SelectInput.svelte';
  import {
    hasColdIssue,
    hasFailSafeIssue,
    hasHotIssue,
    hasMixedIssue,
  } from '../../lib/helpers/conditionals/hasHotIssue';
  import { createWorkResult } from '../../lib/apiServices/work/WorkResultApiService';
  import { onMount } from 'svelte';
  import type { Work } from '../../lib/types/Work';

  export let workId: number;
  export let work: Work;
  export let nextPage = () => {};

  console.log(work.results);

  const results = {
    hot: {
      id: null,
      type: 'hot',
      temperature: 0,
      issue: false,
    },
    cold: {
      id: null,
      type: 'cold',
      temperature: 0,
      issue: false,
    },
    mixed: {
      id: null,
      type: 'mixed',
      temperature: 0,
      issue: false,
    },
    failSafe: {
      id: null,
      type: 'fail_safe',
      value: null,
      issue: false,
    },
  };

  $: results.hot.issue = hasHotIssue(results.hot.temperature);
  $: results.cold.issue = hasColdIssue(results.cold.temperature);
  $: results.mixed.issue = hasMixedIssue(results.mixed.temperature);
  $: results.failSafe.issue = hasFailSafeIssue(results.failSafe.value);

  async function submit() {
    [results.hot, results.cold, results.mixed, results.failSafe] =
      await Promise.all([
        createWorkResult(workId, results.hot),
        createWorkResult(workId, results.cold),
        createWorkResult(workId, results.mixed),
        createWorkResult(workId, results.failSafe),
      ]);

    nextPage();
  }

  onMount(async () => {});
</script>

<form
  class="space-y-8 divide-y divide-gray-200"
  on:submit|preventDefault={submit}>
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
          bind:value={results.hot.temperature} />
        <TemperatureInput
          id="cold-result"
          name="Cold"
          bind:value={results.cold.temperature} />
        <TemperatureInput
          id="mixed-result"
          name="Mixed"
          bind:value={results.mixed.temperature} />
        <SelectInput
          id="fail-safe-result"
          name="Fail safe"
          bind:value={results.failSafe.value} />
      </div>
    </div>
  </div>
  <div class="pt-5">
    <div class="flex justify-end">
      <button
        type="button"
        class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
        Cancel
      </button>
      <button
        type="submit"
        class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
        Save
      </button>
    </div>
  </div>
</form>
