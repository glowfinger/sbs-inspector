<script lang="ts">
  import {onMount} from "svelte";
  import {getSiteLocations} from "../lib/apiServices/SiteLocationApiService";
  import {getVisitById} from "../lib/apiServices/VisitApiService";
  import {getJobById} from "../lib/apiServices/job/JobApiService";
  import type Location from "../lib/types/Location";
  import type Job from "../lib/types/Job";
  import type Visit from "../lib/types/Visit";
  import LoadedShell from "../layout/LoaderShell.svelte";
  import WorkResultsForm from "../components/work/WorkResultsForm.svelte";
  import {navigate} from "svelte-routing";

  export let siteId
  export let jobId;
  export let visitId;
  export let workId;

  let loaded = false;
  let locations: Location[] = [];
  let job: Job;
  let visit: Visit;

  onMount(async () => {
    loaded = true;
  });


  function nextPage() {
    goToWorkView(siteId, jobId, visitId);
  }

  function goToWorkView(siteId: number, jobId: number, visitId: number) {
    navigate(`/site/${siteId}/job/${jobId}/visit/${visitId}`);
  }
</script>

<LoadedShell loaded={loaded}>
    <WorkResultsForm workId={workId} nextPage={nextPage}/>
</LoadedShell>
