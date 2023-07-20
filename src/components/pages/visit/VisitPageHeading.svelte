<script lang="ts">
  import type Visit from '../../../lib/types/Visit';
  import type Site from '../../../lib/types/Site';
  import type Job from '../../../lib/types/Job';
  import locationsForType from '../../../lib/helpers/conditionals/LocationsForType.js';
  import type Location from '../../../lib/types/Location';
  import type { Work } from '../../../lib/types/Work';

  export let site: Site;
  export let visit: Visit;
  export let job: Job;
  export let locations: Location[];

  const addLocationLink: string = `/site/${site.id}/job/${visit.jobId}/visit/${visit.id}/location/add/${job.type}`;
  const completeVisitLink: string = `/site/${site.id}/job/${visit.jobId}/visit/${visit.id}/complete`;

  let works: Work[] = visit.works;
  const completeLocations: Location[] = ([] = getCompleteLocations(
    locations,
    works
  ));

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
</script>

<div class="bg-primary-900-900">
  <div class="mx-auto max-w-7xl">
    <div class="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
      <div class=" px-4 py-6 sm:px-6 lg:px-8">
        <p class="text-sm font-medium leading-6 text-zinc-400">
          Total locations
        </p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight text-white"
            >{locationsForType(locations, job.type).length}</span>
        </p>
      </div>
      <div class="px-4 py-6 sm:px-6 lg:px-8">
        <p class="text-sm font-medium leading-6 text-white/80">
          Average deploy time
        </p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight text-white"
            >3.65</span>
          <span class="text-sm text-white">mins</span>
        </p>
      </div>
      <div class=" px-4 py-6 sm:px-6 lg:px-8">
        <p class="text-sm font-medium leading-6 text-zinc-400">
          Number of servers
        </p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight text-white"
            >3</span>
        </p>
      </div>
      <div class=" px-4 py-6 sm:px-6 lg:px-8">
        <p class="text-sm font-medium leading-6 text-zinc-400">Success rate</p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight text-white"
            >98.5%</span>
        </p>
      </div>
    </div>
  </div>
</div>

<div class="overflow-hidden border border-zinc-700 bg-white shadow">
  <div
    class="grid grid-cols-1 divide-y divide-zinc-200 bg-zinc-200 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
    <div class="px-6 py-4 text-center text-sm font-medium">
      <span class="text-zinc-600">Visit status:</span>
      <span class="text-zinc-900">{visit.status}</span>
    </div>
    <div class="px-6 py-4 text-center text-sm font-medium">
      <span class="text-zinc-600">Total locations:</span>
      <span class="text-zinc-900"
        >{locationsForType(locations, job.type).length}</span>
    </div>
    <div class="px-6 py-4 text-center text-sm font-medium">
      <span class="text-zinc-600">Locations completed</span>
      <span class="text-zinc-900">{completeLocations.length}</span>
    </div>
    <div class="px-6 py-4 text-center text-sm font-medium">
      <span class="text-zinc-600">Follow ups required</span>
      <span class="text-zinc-900">-</span>
    </div>
  </div>
</div>
