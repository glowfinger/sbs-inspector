<script lang="ts">
  import type Location from "../../lib/types/Location";
  import type Job from "../../lib/types/Job";
  import type { Visit } from "../../lib/types/Visit";
  import WorkListCard from "./WorkListCard.svelte";
  import groupLocationsByFloor from "../../lib/mappers/GroupLocationsByFloor";
  import locationsForType from "../../lib/helpers/conditionals/LocationsForType";

  export let job: Job;
  export let visit: Visit;
  export let locations: Location[] = [];
  export let siteId: number;
  export let jobId: number;
  export let visitId: number;
</script>

<div>
  <h1 class="text-md mb-2 font-medium text-gray-900">Work List</h1>
  {#each groupLocationsByFloor(locationsForType(locations, job.type)) as floor}
    <h2 class="text-decoration-line: my-4 underline">Floor: {floor.floor}</h2>
    <ul
      class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
    >
      {#each floor.locations as location}
        <WorkListCard {location} {visit} {visitId} {siteId} {jobId} />
      {/each}
    </ul>
  {/each}
</div>
