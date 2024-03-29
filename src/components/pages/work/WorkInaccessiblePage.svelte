<script lang="ts">
  import { Link, navigate } from 'svelte-routing';
  import { setWorkInaccessible } from '../../../lib/apiServices/work/WorkApiService';
  import type Site from '../../../lib/types/Site';
  import type Job from '../../../lib/types/Job';
  import type Visit from '../../../lib/types/Visit';
  import { onMount } from 'svelte';
  import loadWorkData from '../../../lib/services/PreloadHelper';
  import PageHeader from '../../PageHeader.svelte';
  import BreadcrumbFirstLink from '../../links/BreadcrumbFirstLink.svelte';
  import WorkHeader from './WorkHeader.svelte';
  import VisitHeader from '../../layout/headers/VisitHeader.svelte';

  export let siteId: number;
  export let jobId: number;
  export let visitId: number;
  export let workId: number;

  let loading = true;
  let loaded = false;

  const request = {
    comment: '',
    submittedAt: new Date(),
  };

  let site: Site;
  let job: Job;
  let visit: Visit;

  onMount(async () => {
    [visit, job, site] = await loadWorkData(siteId, jobId, visitId);
    loaded = true;
  });

  function submit() {
    loading = false;

    request.submittedAt = new Date();
    setWorkInaccessible(workId, request).then(complete);

    function complete() {
      navigate(`/site/${siteId}/job/${jobId}/visit/${visitId}`);
    }
  }
</script>

<BreadcrumbFirstLink
  to={`/site/${siteId}/job/${jobId}/visit/${visitId}`}
  text="Visit" />

{#if loaded}
  <VisitHeader site={site} job={job} />
  <PageHeader text="Inspection overview" />
  <WorkHeader location={location} />
{/if}

<form
  class="space-y-8 divide-y divide-zinc-200"
  on:submit|preventDefault={submit}>
  <div class="space-y-8 divide-y divide-zinc-200">
    <div>
      <div>
        <h3 class="text-lg font-medium leading-6 text-zinc-900">
          Location inaccessible
        </h3>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
        <div class="sm:col-span-6">
          <label for="about" class="block text-sm font-medium text-zinc-700"
            >Please enter a reason</label>
          <div class="mt-1">
            <textarea
              id="about"
              name="about"
              rows="3"
              bind:value={request.comment}
              class="block w-full border-zinc-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pt-5">
    <div class="flex justify-end">
      <Link
        to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action`}
        class="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
        Back to actions
      </Link>
      <button
        type="submit"
        class="ml-3 inline-flex justify-center border border-transparent bg-zinc-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2">
        Save
      </button>
    </div>
  </div>
</form>
