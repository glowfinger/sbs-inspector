<script lang="ts">
  import { Link, navigate } from 'svelte-routing';
  import {
    createWorkResult,
    updateWorkResult,
  } from '../../../../lib/apiServices/work/WorkResultApiService';
  import type WorkResult from '../../../../lib/types/WorkResult';
  import { onMount } from 'svelte';
  import { getSiteWork } from '../../../../lib/apiServices/work/WorkApiService';
  import getResult from '../../../../lib/apiServices/helpers/results/GetResult';
  import failSafeIssueCheck from '../../../../lib/helpers/temperature/FailSafeIssueCheck';
  import type { Work } from '../../../../lib/types/Work.js';
  import { getSiteLocation } from '../../../../lib/apiServices/SiteLocationApiService';
  import type SiteLocation from '../../../../lib/types/SiteLocation';
  import WorkHeader from '../WorkHeader.svelte';
  import BreadcrumbFirstLink from '../../../links/BreadcrumbFirstLink.svelte';
  import type Site from '../../../../lib/types/Site';
  import type Job from '../../../../lib/types/Job';
  import type Visit from '../../../../lib/types/Visit';
  import loadWorkData from '../../../../lib/services/PreloadHelper';
  import VisitHeader from '../../../layout/headers/VisitHeader.svelte';
  import SubmitButton from '../../../buttons/SubmitButton.svelte';
  import SecondaryButtonLink from '../../../links/SecondaryButtonLink.svelte';

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
    temperature: null,
    type: 'fail_safe',
    value: null,
  };

  let site: Site;
  let job: Job;
  let visit: Visit;

  let loaded = false;

  onMount(async () => {
    [visit, job, site] = await loadWorkData(siteId, jobId, visitId);

    loaded = true;
    getSiteWork(workId).then((response: Work) => {
      getSiteLocation(siteId, response.locationId).then((l) => (location = l));
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
    navigate(
      `/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action`
    );
  }
</script>

<BreadcrumbFirstLink
  to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action`}
  text="Action" />

{#if loaded}
  <VisitHeader site={site} job={job} />
  <WorkHeader location={location} />
{/if}

<form class="space-y-4" on:submit|preventDefault={submit}>
  <div>
    <label class="text-base font-semibold leading-6 text-zinc-900"
      >Fail safe</label>
    <fieldset class="mt-4">
      <legend class="sr-only">Fail safe</legend>
      <div class="space-y-4">
        <div class="flex items-center">
          <input
            id="yes"
            name="notification-method"
            type="radio"
            bind:group={result.value}
            value="yes"
            class="h-4 w-4 border-zinc-300 text-primary-600 focus:ring-zinc-500" />
          <label for="yes" class="ml-3 block text-sm font-medium text-zinc-700"
            >Yes</label>
        </div>

        <div class="flex items-center">
          <input
            id="no"
            name="notification-method"
            type="radio"
            value="no"
            bind:group={result.value}
            class="h-4 w-4 border-zinc-300 text-primary-600 focus:ring-zinc-500" />
          <label for="no" class="ml-3 block text-sm font-medium text-zinc-700"
            >No</label>
        </div>
      </div>
    </fieldset>
  </div>

  <div class="mt-5 space-y-2 sm:mt-4 sm:flex sm:flex-row-reverse">
    <SubmitButton />
    <SecondaryButtonLink
      to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/result/mixed`}
      text="Back" />
  </div>
</form>

<!-- {#if !loading}
    <ThermoResultTable results={work.results}/>
{/if} -->
