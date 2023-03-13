<script lang="ts">
  import {Link, navigate} from "svelte-routing";
  import {onMount} from "svelte";
  import {getVisitById} from "../../lib/apiServices/VisitApiService";
  import {getSiteLocations} from "../../lib/apiServices/SiteLocationApiService";
  import {getJobById} from "../../lib/apiServices/job/JobApiService";
  import type Location from "../../lib/types/Location";
  import LocationWorkRow from "../tables/LocationWorkRow.svelte";
  import {startSiteWork} from "../../lib/apiServices/work/WorkApiService";
  import VisitTHead from "../tables/visits/VisitTHead.svelte";
  import type {Work} from "../../lib/types/Work";
  import {getSiteById} from "../../lib/apiServices/SiteApiService";
  import type {Visit} from "../../lib/types/Visit";
  import type Job from "../../lib/types/Job";
  import Site from "./Site.svelte";
  import SiteHeader from "../site/header/SiteHeader.svelte";
  import PrimaryButtonLink from "../links/PrimaryButtonLink.svelte";
  import SecondaryButtonLink from "../links/SecondaryButtonLink.svelte";

  export let siteId;
  export let jobId;
  export let visitId;

  let loaded = false;

  let locations: Location[] = [];
  let site: Site;
  let job: Job;
  let visit: Visit;

  onMount(async () => {
    [locations, visit, job, site] = await Promise.all([
      getSiteLocations(siteId),
      getVisitById(visitId),
      getJobById(jobId),
      getSiteById(siteId,)
    ]);

    loaded = true;
  });

  function locationsForType(locations: Location[], type: string) {
    return locations.filter((location) => location.type === type);
  }

  async function startWork(visitId, locationId) {
    const work = await startSiteWork({results: [], visitId, locationId});
    navigate(
      `/site/${siteId}/job/${jobId}/visit/${visitId}/work/${work.id}/action`
    );
  }

  async function updateWork(visitId, workId) {
    navigate(
      `/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action`
    );
  }

  function getWorkForLocation(location: Location, works) {
    return works.find((w) => w.locationId === location.id);
  }

  function getWorksForLocation(location: Location, works: Work[]): Work[] {
    return works.filter((w) => w.locationId === location.id);
  }


</script>

{#if loaded}
    <SiteHeader site={site}>
        <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
            <SecondaryButtonLink to={`/site/${siteId}/job/${jobId}/visit/${visitId}/location/add`} text="Add location"/>
            <PrimaryButtonLink to={`/site/${siteId}/job/${jobId}/visit/${visitId}/complete`} text="Complete visit"/>
        </div>
    </SiteHeader>
    <div class="mt-8 flex flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-300">
                        <VisitTHead/>
                        <tbody class="divide-y divide-gray-200 bg-white">
                        {#each locationsForType(locations, job.type) as location}
                            {#if getWorksForLocation(location, visit.works).length === 0}
                                <LocationWorkRow work={null}
                                                 {siteId}
                                                 location={location}
                                                 {jobId}
                                                 {visitId}
                                                 {startWork}
                                                 {updateWork}/>
                            {:else }
                                {#each getWorksForLocation(location, visit.works) as work}
                                    <LocationWorkRow work={work}
                                                     {siteId}
                                                     location={location}
                                                     {jobId}
                                                     {visitId}
                                                     {startWork}
                                                     {updateWork}
                                    />
                                {/each}
                            {/if}
                        {/each}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
{/if}
