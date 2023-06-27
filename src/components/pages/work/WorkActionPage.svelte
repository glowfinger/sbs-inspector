<script lang="ts">
  import { Link } from "svelte-routing";
  import { onMount } from "svelte";
  import { getSiteWork } from "../../../lib/apiServices/work/WorkApiService";
  import type { Work } from "../../../lib/types/Work";
  import ThermoResultTable from "./results/ThermoResultTable.svelte";
  import WorkHeader from "./WorkHeader.svelte";
  import { getSiteLocation } from "../../../lib/apiServices/SiteLocationApiService";
  import type SiteLocation from "../../../lib/types/SiteLocation";
  import RequestUnit from "./RequestUnit.svelte";
  import ServicedUnit from "./ServicedUnit.svelte";
  import ReplacedUnit from "./ReplacedUnit.svelte";
  import VisitHeader from "../../layout/headers/VisitHeader.svelte";
  import PageHeader from "../../PageHeader.svelte";
  import BreadcrumbFirstLink from "../../links/BreadcrumbFirstLink.svelte";
  import type Job from "../../../lib/types/Job";
  import type Site  from "../../../lib/types/Site";
  import type Visit  from "../../../lib/types/Visit";
  import ShowerHeadActions from "../../work/actions/ShowerHeadActions.svelte";
  import loadWorkData from "../../../lib/services/PreloadHelper";

  export let siteId: number;
  export let jobId: number;
  export let visitId: number;
  export let workId: number;

  let loading = true;
  let loaded = false;

  let work: Work;

  let location: SiteLocation;

  const hotLink = `/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/result/hot`;

  let site: Site;
  let job: Job;
  let visit: Visit;

  onMount(async () => {

    [visit, job, site] = await loadWorkData(siteId, jobId, visitId);

    loaded = true;

    getSiteWork(workId).then((response: Work) => {
      getSiteLocation(siteId, response.locationId).then((l) => (location = l));
      work = response;
      loading = false;
    });
  });
</script>


<nav aria-label="Breadcrumb" class="mb-2 ">
  <div class="items-start">
    <BreadcrumbFirstLink to={`/site/${siteId}/job/${jobId}/visit/${visitId}`} text="Visit" />
  </div>
</nav>
{#if loaded}
  <VisitHeader site={site} job={job} />
  <PageHeader text="Inspection actions" />
  <WorkHeader location={location} />

{/if}

{#if !loading}


  {#if job.type === 'shower_head'}
    <ShowerHeadActions visitId={visitId}
                       siteId={siteId}
                       jobId={jobId}
                       workId={workId} />
  {/if}


  {#if job.type === 'thermo_valve'}
    <ThermoResultTable results={work.results} />
    <ul class="mt-6 divide-y divide-gray-200 border-b border-t border-gray-200">
      <li>
        <div class="group relative flex items-start space-x-3 py-4">
          <div class="flex-shrink-0">
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-400"
          >
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
              />
            </svg>
          </span>
          </div>
          <div class="min-w-0 flex-1">
            <div class="text-sm font-medium text-gray-900">
              <Link to={hotLink}>
                <span class="absolute inset-0" aria-hidden="true" />
                Add temperature
              </Link>
            </div>
            <p class="text-sm text-gray-500">Added Thermo valve temperature</p>
          </div>
          <div class="flex-shrink-0 self-center">
            <svg
              class="h-5 w-5 text-gray-400 group-hover:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </li>

      <li>
        <div class="group relative flex items-start space-x-3 py-4">
          <div class="flex-shrink-0">
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-500"
          >
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </span>
          </div>
          <div class="min-w-0 flex-1">
            <div class="text-sm font-medium text-gray-900">
              <Link
                to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action/inaccessible`}
              >
                <span class="absolute inset-0" aria-hidden="true" />
                Inaccessible
              </Link>
            </div>
            <p class="text-sm text-gray-500">
              Location was inaccessible at the time of service
            </p>
          </div>
          <div class="flex-shrink-0 self-center">
            <svg
              class="h-5 w-5 text-gray-400 group-hover:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </li>
      <RequestUnit
        results={work.results}
        url={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action/request`}
      />
      <ServicedUnit
        results={work.results}
        url={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action/serviced`}
      />
      <ReplacedUnit
        results={work.results}
        url={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action/replaced`}
      />
    </ul>
  {/if}
{/if}
