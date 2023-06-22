<script lang="ts">
  import { onMount } from "svelte";
  import { getVisitById } from "../../../lib/apiServices/VisitApiService";
  import { getSiteLocations } from "../../../lib/apiServices/SiteLocationApiService";
  import { getJobById } from "../../../lib/apiServices/job/JobApiService";
  import type Location from "../../../lib/types/Location";
  import { getSiteById } from "../../../lib/apiServices/SiteApiService";
  import type { Visit } from "../../../lib/types/Visit";
  import type Job from "../../../lib/types/Job";
  import WorkList from "../../work/WorkList.svelte";
  import type { Site } from "../../../lib/types/Site";
  import VisitPageHeading from "./VisitPageHeading.svelte";
  import BreadcrumbFirstLink from "../../links/BreadcrumbFirstLink.svelte";
  import PageHeader from "../../PageHeader.svelte";
  import SectionHeader from "../../SectionHeader.svelte";
  import SecondaryButtonLink from "../../links/SecondaryButtonLink.svelte";
  import PrimaryButtonLink from "../../links/PrimaryButtonLink.svelte";

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
      getSiteById(siteId)
    ]);

    loaded = true;
  });

  const addLocationLink: string = `/site/${siteId}/job/${jobId}/visit/${visitId}/location/add`;
  const completeVisitLink: string = `/site/${siteId}/job/${jobId}/visit/${visitId}/review`;
</script>

<nav aria-label="Breadcrumb" class="mb-2 ">
  <div class="items-start">
    <BreadcrumbFirstLink to="/visits" text="Visits" />
  </div>
</nav>

{#if loaded}
  <PageHeader text="Visit" />
  <VisitPageHeading site={site} visit={visit} job={job} locations={locations} />

  {#if !visit.completedAt === null}
    <div class="mt-4 flex">
    <span>
      <PrimaryButtonLink to={completeVisitLink} text="Review visit" />
    </span>
      <span class="ml-2">
      <SecondaryButtonLink to={addLocationLink} text="Add location" />
  </span>
    </div>

    <SectionHeader text="Work list" />
    <div class="flex flex-col space-y-2 ">
      <WorkList
        job={job}
        visit={visit}
        locations={locations}
        visitId={visitId}
        siteId={siteId}
        jobId={jobId}
      />
    </div>
  {/if}
{/if}
