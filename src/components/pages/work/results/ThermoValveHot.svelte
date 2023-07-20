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
    temperature: 0,
    type: 'hot',
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

<BreadcrumbFirstLink
  to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action`}
  text="Action" />

{#if loaded}
  <VisitHeader site={site} job={job} />
  <WorkHeader location={location} />
{/if}

<form class="space-y-4" on:submit|preventDefault={submit}>
  <TemperatureInput
    id="hot-temperature"
    name="Temperature"
    bind:value={result.temperature} />
  <p>{hot.low} - {hot.high}</p>

  <div class="mt-5 space-y-2 sm:mt-4 sm:flex sm:flex-row-reverse">
    <SubmitButton />
    <SecondaryButtonLink
      to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/result/action`}
      text="Back" />
  </div>
</form>
