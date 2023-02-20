<script lang="ts">
  import {onMount} from "svelte";
  import {getSiteLocations} from "../../lib/apiServices/SiteLocationApiService";
  import {getVisitById} from "../../lib/apiServices/VisitApiService";
  import {getJobById} from "../../lib/apiServices/job/JobApiService";
  import type Location from "../../lib/types/Location";
  import type Job from "../../lib/types/Job";
  import type Visit from "../../lib/types/Visit";
  import LoadedShell from "../../layout/LoaderShell.svelte";
  import WorkResultsForm from "../work/WorkResultsForm.svelte";
  import {navigate} from "svelte-routing";
  import type {Work} from "../../lib/types/Work";

  export let siteId;
  export let jobId;
  export let visitId;
  export let workId;

  let loaded = false;
  let locations: Location[] = [];
  let job: Job;
  let work: Work;
  let visit: Visit;

  onMount(async () => {
    visit = await getVisitById(visitId);
    work = visit.works.find((work) => work.id === workId)
    loaded = true;
  });

  function nextPage() {
    goToWorkView(siteId, jobId, visitId);
  }

  function goToWorkView(siteId: number, jobId: number, visitId: number) {
    navigate(`/site/${siteId}/job/${jobId}/visit/${visitId}`);
  }
</script>

<LoadedShell {loaded}>
    <WorkResultsForm {workId} {nextPage} {work}/>
</LoadedShell>
