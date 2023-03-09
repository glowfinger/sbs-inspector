<script lang="ts">
  import {Link, navigate} from "svelte-routing";
  import {onMount} from "svelte";
  import TemperatureTd from "../../tables/TemperatureTd.svelte";
  import FailSafeTd from "../../tables/FailSafeTd.svelte";
  import getResult from "../../../lib/apiServices/helpers/results/GetResult.js";
  import {getSiteWork} from "../../../lib/apiServices/work/WorkApiService";
  import type {Work} from "../../../lib/types/Work";
  import ThermoResultTable from "./results/ThermoResultTable.svelte";
  import WorkHeader from "./WorkHeader.svelte";
  import {getSiteLocation} from "../../../lib/apiServices/SiteLocationApiService";
  import type SiteLocation from "../../../lib/types/SiteLocation";

  export let siteId;
  export let jobId;
  export let visitId;
  export let workId;

  let loading = true;

  let work: Work;

  let location: SiteLocation;


  const hotLink = `/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/result/hot`;

  onMount(() => {
    getSiteWork(workId).then((response: Work) => {
      getSiteLocation(siteId, response.locationId).then(l => location = l)
      work = response;
      loading = false;
    });
  })
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

<WorkHeader location={location} action="Fail-safe result"/>

{#if !loading}
    <ThermoResultTable results={work.results}/>
{/if}

<ul role="list" class="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200">
    <li>
        <div class="group relative flex items-start space-x-3 py-4">
            <div class="flex-shrink-0">
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                 aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"/>
            </svg>
          </span>
            </div>
            <div class="min-w-0 flex-1">
                <div class="text-sm font-medium text-gray-900">
                    <Link to={hotLink}>
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        Add temperature
                    </Link>
                </div>
                <p class="text-sm text-gray-500">Added Thermo valve temperature </p>
            </div>
            <div class="flex-shrink-0 self-center">
                <svg class="h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor"
                     aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"/>
                </svg>
            </div>
        </div>
    </li>

    <li>
        <div class="group relative flex items-start space-x-3 py-4">
            <div class="flex-shrink-0">
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                 aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"/>
            </svg>
          </span>
            </div>
            <div class="min-w-0 flex-1">
                <div class="text-sm font-medium text-gray-900">
                    <Link to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action/inaccessible`}>
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        Inaccessible
                    </Link>
                </div>
                <p class="text-sm text-gray-500">Location was inaccessible at the time of service</p>
            </div>
            <div class="flex-shrink-0 self-center">
                <svg class="h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor"
                     aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"/>
                </svg>
            </div>
        </div>
    </li>

    <li>
        <div class="group relative flex items-start space-x-3 py-4">
            <div class="flex-shrink-0">
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                 aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
            </svg>
          </span>
            </div>
            <div class="min-w-0 flex-1">
                <div class="text-sm font-medium text-gray-900">
                    <Link to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action/request`}>
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        Request replacement
                    </Link>
                </div>
                <p class="text-sm text-gray-500">Request a replacement unit</p>
            </div>
            <div class="flex-shrink-0 self-center">
                <svg class="h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor"
                     aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"/>
                </svg>
            </div>
        </div>
    </li>
    <li>
        <div class="group relative flex items-start space-x-3 py-4">
            <div class="flex-shrink-0">
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                 aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
            </svg>
          </span>
            </div>
            <div class="min-w-0 flex-1">
                <div class="text-sm font-medium text-gray-900">
                    <Link to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action/serviced`}>
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        Serviced
                    </Link>
                </div>
                <p class="text-sm text-gray-500">Completed unit service</p>
            </div>
            <div class="flex-shrink-0 self-center">
                <svg class="h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor"
                     aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"/>
                </svg>
            </div>
        </div>
    </li>
    <li>
        <div class="group relative flex items-start space-x-3 py-4">
            <div class="flex-shrink-0">
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                 aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
            </svg>
          </span>
            </div>
            <div class="min-w-0 flex-1">
                <div class="text-sm font-medium text-gray-900">
                    <Link to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action/replace`}>
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        Replace
                    </Link>
                </div>
                <p class="text-sm text-gray-500">Replaced unit</p>
            </div>
            <div class="flex-shrink-0 self-center">
                <svg class="h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor"
                     aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clip-rule="evenodd"/>
                </svg>
            </div>
        </div>
    </li>
</ul>

