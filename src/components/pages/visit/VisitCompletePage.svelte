<script lang="ts">
  import type Location from "../../../lib/types/Location";
  import type {Site} from "../../../lib/types/Site";
  import type {Visit} from "../../../lib/types/Visit";
  import {onMount} from "svelte";
  import {getSiteLocations} from "../../../lib/apiServices/SiteLocationApiService";
  import {getVisitById} from "../../../lib/apiServices/VisitApiService";
  import {getJobById} from "../../../lib/apiServices/job/JobApiService";
  import {getSiteById} from "../../../lib/apiServices/SiteApiService";
  import type Job from "../../../lib/types/Job";

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
</script>
