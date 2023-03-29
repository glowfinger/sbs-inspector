<script lang="ts">
  import type Location from "../../lib/types/Location";
  import type {Work} from "../../lib/types/Work";
  import type Job from "../../lib/types/Job";
  import type {Visit} from "../../lib/types/Visit";
  import WorkListCard from "./WorkListCard.svelte";
  import groupLocationsByFloor from "../../lib/mappers/GroupLocationsByFloor.js";

  export let job: Job;
  export let visit: Visit;
  export let locations: Location[] = [];
  export let siteId: number;
  export let jobId: number;
  export let visitId: number;

  function locationsForType(locations: Location[], type: string) {
    return locations.filter((location) => location.type === type);
  }


</script>

<div>
    <h1 class="text-md font-medium text-gray-900 mb-2">Work List</h1>
    {#each groupLocationsByFloor(locationsForType(locations, job.type)) as floor}
        <h2 class="my-4 text-decoration-line: underline">Floor: {floor.floor}</h2>
        <ul class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {#each floor.locations as location}
                <WorkListCard location={location} visit={visit} visitId={visitId} siteId={siteId} jobId={jobId}/>
            {/each}
        </ul>
    {/each}
</div>



