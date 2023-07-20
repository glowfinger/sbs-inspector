<script lang="ts">
  import { onMount } from 'svelte';
  import { getVisitById } from '../../../lib/apiServices/VisitApiService';
  import { getSiteLocations } from '../../../lib/apiServices/SiteLocationApiService';
  import { getJobById } from '../../../lib/apiServices/job/JobApiService';
  import type Location from '../../../lib/types/Location';
  import { getSiteById } from '../../../lib/apiServices/SiteApiService';
  import type Visit from '../../../lib/types/Visit';
  import type Job from '../../../lib/types/Job';
  import WorkList from '../../work/WorkList.svelte';
  import type Site from '../../../lib/types/Site';
  import VisitPageHeading from './VisitPageHeading.svelte';
  import BreadcrumbFirstLink from '../../links/BreadcrumbFirstLink.svelte';
  import PageHeader from '../../PageHeader.svelte';
  import SectionHeader from '../../SectionHeader.svelte';
  import SecondaryButtonLink from '../../links/SecondaryButtonLink.svelte';
  import PrimaryButtonLink from '../../links/PrimaryButtonLink.svelte';
  import VisitHeader from '../../layout/headers/VisitHeader.svelte';

  export let siteId: number;
  export let jobId: number;
  export let visitId: number;

  let loaded = false;

  let locations: Location[] = [];
  let site: Site;
  let job: Job;
  let visit: Visit;
  const completeVisitLink: string = `/site/${siteId}/job/${jobId}/visit/${visitId}/review`;
  let addLocationLink: string;

  onMount(async () => {
    [locations, visit, job, site] = await Promise.all([
      getSiteLocations(siteId),
      getVisitById(visitId),
      getJobById(jobId),
      getSiteById(siteId),
    ]);

    addLocationLink = `/site/${siteId}/job/${jobId}/visit/${visitId}/location/add/${job.type}`;

    loaded = true;
  });
</script>

<BreadcrumbFirstLink to="/visits" text="Visits" />

{#if loaded}
  <VisitHeader site={site} job={job} />
  <PageHeader text="Visit" />

  {#if visit.completedAt === null}
    <div
      class="mt-4 flex flex-col gap-2 sm:ml-10 sm:mt-4 sm:flex sm:flex-row sm:pl-4">
      <PrimaryButtonLink to={completeVisitLink} text="Review visit" />
      <SecondaryButtonLink to={addLocationLink} text="Add location" />
    </div>

    <!--    <VisitPageHeading site={site} visit={visit} job={job} locations={locations} />-->

    <SectionHeader text="Work list" />

    <div
      class="mt-4 flex flex-col gap-2 sm:ml-10 sm:mt-4 sm:flex sm:flex-row sm:pl-4">
      <span class="isolate inline-flex shadow-sm">
        <button
          type="button"
          class=" relative inline-flex w-1/3 items-end bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >To do
          <span
            class="ml-1 inline-flex items-center bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10"
            >2</span>
        </button>
        <button
          type="button"
          class=" relative -ml-px inline-flex w-1/3 items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >Done
          <span
            class="ml-1 inline-flex items-center bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10"
            >10</span>
        </button>
        <button
          type="button"
          class="relative -ml-px inline-flex w-1/3 items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >All
          <span
            class="ml-1 inline-flex items-center bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10"
            >12</span
          ></button>
      </span>
    </div>
    <div>
      <h4 class="sr-only">Status</h4>
      <div class="my-2" aria-hidden="true">
        <div class="overflow-hidden bg-gray-200">
          <div class="h-2 bg-primary-900" style="width: 37.5%" />
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-2">
      <WorkList
        job={job}
        visit={visit}
        locations={locations}
        visitId={visitId}
        siteId={siteId}
        jobId={jobId} />
    </div>
  {/if}
{/if}
