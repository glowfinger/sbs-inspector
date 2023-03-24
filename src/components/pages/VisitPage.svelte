<script lang="ts">
  import { Link, navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import { getVisitById } from "../../lib/apiServices/VisitApiService";
  import { getSiteLocations } from "../../lib/apiServices/SiteLocationApiService";
  import { getJobById } from "../../lib/apiServices/job/JobApiService";
  import type Location from "../../lib/types/Location";
  import LocationWorkRow from "../tables/LocationWorkRow.svelte";
  import { startSiteWork } from "../../lib/apiServices/work/WorkApiService";
  import VisitTHead from "../tables/visits/VisitTHead.svelte";
  import type { Work } from "../../lib/types/Work";
  import { getSiteById } from "../../lib/apiServices/SiteApiService";
  import type { Visit } from "../../lib/types/Visit";
  import type Job from "../../lib/types/Job";
  import SiteHeader from "../site/header/SiteHeader.svelte";
  import PrimaryButtonLink from "../links/PrimaryButtonLink.svelte";
  import SecondaryButtonLink from "../links/SecondaryButtonLink.svelte";
  import WorkList from "../work/WorkList.svelte";
  import WorkMetricHeader from "../work/WorkMetricHeader.svelte";
  import type { Site } from "../../lib/types/Site";

  export let siteId: number;
  export let jobId: number;
  export let visitId: number;

  let loaded = false;

  let locations: Location[] = [];
  let site: Site;
  let job: Job;
  let visit: Visit;
  let status: string;

  onMount(async () => {
    [locations, visit, job, site] = await Promise.all([
      getSiteLocations(siteId),
      getVisitById(visitId),
      getJobById(jobId),
      getSiteById(siteId),
    ]);

    loaded = true;
  });

  const addLocationLink: string = `/site/${siteId}/job/${jobId}/visit/${visitId}/location/add`;
  const completeVisitLink: string = `/site/${siteId}/job/${jobId}/visit/${visitId}/complete`;
</script>

{#if loaded}
  <div class="flex flex-col space-y-4">
    <div class="flex justify-between">
      <SiteHeader {site} />
    </div>
    <div class="flex space-x-1">
      <SecondaryButtonLink to={addLocationLink} text="Add location" />
    </div>
    <div class="flex space-x-1">
      <PrimaryButtonLink to={completeVisitLink} text="Complete visit" />
    </div>
    <!--        <WorkMetricHeader visitId={visitId} siteId={siteId} jobId={jobId}/>-->
    <WorkList {job} {visit} {locations} {visitId} {siteId} {jobId} />
  </div>
{/if}
