<script lang="ts">
  import {Link, navigate} from 'svelte-routing'
  import {onMount} from "svelte";
  import {getVisitById} from "../lib/apiServices/VisitApiService";
  import Stringify from "../components/helpers/Stringify.svelte";
  import {getSiteLocations} from "../lib/apiServices/SiteLocationApiService";
  import {getJobById} from "../lib/apiServices/job/JobApiService";
  import type Location from "../lib/types/Location";
  import LocationWorkRow from "../components/tables/LocationWorkRow.svelte";
  import {startSiteWork} from "../lib/apiServices/work/WorkApiService";

  export let siteId
  export let jobId;
  export let visitId;

  let loaded = false;

  let locations = [];
  let site
  let job;
  let visit;

  onMount(async () => {
    [locations, visit, job] = await Promise.all([
      getSiteLocations(siteId),
      getVisitById(visitId),
      getJobById(jobId),
    ]);

    loaded = true;
  });

  function locationsForType(locations: Location[], type: string) {
    return locations.filter((location) => location.type === type)
  }

  async function startWork(visitId, locationId) {
    const work = await startSiteWork({visitId, locationId})
    navigate(`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${work.id}/results/add`);
  }


</script>

{#if loaded}
    <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Inspections</h1>
        </div>
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        Name
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Title
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Status
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Hot
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Cold
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Mixed
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Fail safe
                                    </th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                {#each locationsForType(locations, job.type) as location}
                                    <tr>
                                        <LocationWorkRow works={visit.works} location={location} jobId={jobId}
                                                         visitId={visitId}
                                                         startWork={startWork}/>
                                    </tr>
                                {/each}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
{/if}

