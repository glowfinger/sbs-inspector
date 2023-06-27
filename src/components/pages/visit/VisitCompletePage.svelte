<script lang="ts">
  import type Location from "../../../lib/types/Location";
  import type Site from "../../../lib/types/Site";
  import type Visit from "../../../lib/types/Visit";
  import type { Work } from "../../../lib/types/Work";
  import type Job from "../../../lib/types/Job";
  import { onMount } from "svelte";
  import { getSiteLocations } from "../../../lib/apiServices/SiteLocationApiService";
  import { getVisitById } from "../../../lib/apiServices/VisitApiService";
  import { getJobById } from "../../../lib/apiServices/job/JobApiService";
  import { getSiteById } from "../../../lib/apiServices/SiteApiService";
  import locationsForType from "../../../lib/helpers/conditionals/LocationsForType";
  import { completeVisit } from "../../../lib/apiServices/job/JobVisitApiService";
  import PageHeader from "../../PageHeader.svelte";
  import BreadcrumbFirstLink from "../../links/BreadcrumbFirstLink.svelte";
  import VisitPageHeading from "./VisitPageHeading.svelte";
  import PrimaryButtonLink from "../../links/PrimaryButtonLink.svelte";
  import LocationInfoList from "./LocationInfoList.svelte";
  import { navigate } from "svelte-routing";
  import SecondaryButtonLink from "../../links/SecondaryButtonLink.svelte";
  import VisitCompleteModal from "../../VisitCompleteModal.svelte";
  import Stringify from "../../debug/Stringify.svelte";
  import VisitIssueModal from "../../VisitIssueModal.svelte";
  import VisitHeader from "../../layout/headers/VisitHeader.svelte";

  export let siteId: number;
  export let jobId: number;
  export let visitId: number;

  let loaded = false;
  let saving = false;
  let locations: Location[] = [];
  let completeLocations: Location[] = [];
  let incompleteLocations: Location[] = [];
  let site: Site;
  let job: Job;
  let visit: Visit;
  let works: Work[] = [];

  onMount(async () => {
    [locations, visit, job, site] = await Promise.all([
      getSiteLocations(siteId),
      getVisitById(visitId),
      getJobById(jobId),
      getSiteById(siteId),
    ]);

    works = visit.works;
    locations = locationsForType(locations, job.type);
    incompleteLocations = getIncompleteLocations(locations, works);
    completeLocations = getCompleteLocations(locations, works);

    loaded = true;
  });

  const reviewLink: string = `/site/${siteId}/job/${jobId}/visit/${visitId}/review`;
  const visitLink: string = `/site/${siteId}/job/${jobId}/visit/${visitId}`;

  function allLocationsActioned(): boolean {
    return incompleteLocations.length === 0;
  }

  function getCompleteLocations(locations: Location[], works: Work[]) {
    return locations.filter((location) => hasCompletedWork(location, works));
  }

  function getIncompleteLocations(locations: Location[], works: Work[]) {
    return locations.filter((location) => !hasCompletedWork(location, works));
  }

  function hasCompletedWork(location: Location, works: Work[]) {
    return works.some(
      (work) => work.locationId === location.id && work.completedAt !== null
    );
  }

  function proceed() {
    saving = true;
    completeVisit(visitId)
      .then(() => {
        navigate(visitLink);
      })
      .catch(() => {
        saving = false;
      });
  }

  function cancel() {
    navigate(reviewLink);
  }
</script>

<nav aria-label="Breadcrumb" class="mb-2 ">
  <div class="items-start">
    <BreadcrumbFirstLink to={reviewLink} text="Visit" />
  </div>
</nav>
{#if loaded}
  <VisitHeader site={site} job={job} />
  <PageHeader text="Review visit" />
  <VisitPageHeading site={site} visit={visit} job={job} locations={locations} />
  {#if incompleteLocations.length > 0}
    <VisitIssueModal
      cancelLink={reviewLink}
      proceed={proceed}
      cancel={cancel}
      disabled={saving}
    />
  {:else}
    <VisitCompleteModal
      cancelLink={reviewLink}
      proceed={proceed}
      cancel={cancel}
      disabled={saving}
    />
  {/if}
{/if}
