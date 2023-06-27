<script lang="ts">
  import { Link, navigate } from "svelte-routing";
  import { setWorkReplaced } from "../../../lib/apiServices/work/WorkApiService";

  import { onMount } from "svelte";
  import loadWorkData from "../../../lib/services/PreloadHelper";
  import type Site from "../../../lib/types/Site";
  import type Job from "../../../lib/types/Job";
  import type Visit from "../../../lib/types/Visit";
  import PageHeader from "../../PageHeader.svelte";
  import BreadcrumbFirstLink from "../../links/BreadcrumbFirstLink.svelte";
  import WorkHeader from "./WorkHeader.svelte";
  import VisitHeader from "../../layout/headers/VisitHeader.svelte";

  export let siteId: number;
  export let jobId: number;
  export let visitId: number;
  export let workId: number;

  let loading = true;
  let loaded = false;

  const request = {
    comment: "",
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
    setWorkReplaced(workId, request).then(complete);

    function complete() {
      navigate(`/site/${siteId}/job/${jobId}/visit/${visitId}`);
    }
  }
</script>

<nav aria-label="Breadcrumb" class="mb-2 ">
  <div class="items-start">
    <BreadcrumbFirstLink
      to={`/site/${siteId}/job/${jobId}/visit/${visitId}`}
      text="Visit"
    />
  </div>
</nav>

{#if loaded}
  <VisitHeader site={site} job={job} />
  <PageHeader text="Inspection overview" />
  <WorkHeader location={location} />
{/if}

<form
  class="space-y-8 divide-y divide-gray-200"
  on:submit|preventDefault={submit}
>
  <div class="space-y-8 divide-y divide-gray-200">
    <div>
      <div>
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          Replaced units
        </h3>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
        <div class="sm:col-span-6">
          <label for="about" class="block text-sm font-medium text-gray-700"
            >Please enter a reason</label
          >
          <div class="mt-1">
            <textarea
              id="about"
              name="about"
              rows="3"
              bind:value={request.comment}
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pt-5">
    <div class="flex justify-end">
      <Link
        to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action`}
        class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Back to actions
      </Link>
      <button
        type="submit"
        class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Save
      </button>
    </div>
  </div>
</form>
