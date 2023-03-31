<script lang="ts">
  import type Location from "../../../lib/types/Location";
  import type { Site } from "../../../lib/types/Site";
  import type { Visit } from "../../../lib/types/Visit";
  import { onMount } from "svelte";
  import { getSiteLocations } from "../../../lib/apiServices/SiteLocationApiService";
  import { getVisitById } from "../../../lib/apiServices/VisitApiService";
  import { getJobById } from "../../../lib/apiServices/job/JobApiService";
  import { getSiteById } from "../../../lib/apiServices/SiteApiService";
  import type Job from "../../../lib/types/Job";
  import Stringify from "../../debug/Stringify.svelte";
  import hasWorksForLocation from "../../../lib/helpers/conditionals/work/HasWorksForLocation";
  import locationsForType from "../../../lib/helpers/conditionals/LocationsForType";
  import { completeVisit } from "../../../lib/apiServices/job/JobVisitApiService";

  export let siteId: number;
  export let jobId: number;
  export let visitId: number;

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
      getSiteById(siteId),
    ]);

    loaded = true;
  });

  function handleComplete() {
    completeVisit(visit.id).then(console.log).catch(console.log);
  }
</script>

<button on:click={handleComplete}>Complete</button>
{#if loaded}
  {hasWorksForLocation(locationsForType(locations, job.type), visit.works)
    .length}-/-{locationsForType(locations, job.type)
    .length}-/-{locations.length}
  <br />
  <Stringify
    obj={hasWorksForLocation(
      locationsForType(locations, job.type),
      visit.works
    )}
  />
{/if}
