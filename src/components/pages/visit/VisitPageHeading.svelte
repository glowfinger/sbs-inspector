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

<div class="overflow-hidden rounded-lg border border-gray-700 bg-white shadow">
  <div
    class="grid grid-cols-1 divide-y divide-gray-200  bg-gray-200 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
    <div class="px-6 py-4 text-center text-sm font-medium">
      <span class="text-gray-600">Visit status:</span>
      <span class="text-gray-900">{visit.status}</span>
    </div>
    <div class="px-6 py-4 text-center text-sm font-medium">
      <span class="text-gray-600">Total locations:</span>
      <span class="text-gray-900"
        >{locationsForType(locations, job.type).length}</span>
    </div>
    <div class="px-6 py-4 text-center text-sm font-medium">
      <span class="text-gray-600">Locations completed</span>
      <span class="text-gray-900">{completeLocations.length}</span>
    </div>
    <div class="px-6 py-4 text-center text-sm font-medium">
      <span class="text-gray-600">Follow ups required</span>
      <span class="text-gray-900">-</span>
    </div>
  </div>
</div>

<!--  <div class="sm:flex sm:items-center sm:justify-between">-->
<!--    <div class="mb-2">-->
<!--      <h1 class="text-2xl font-bold text-gray-900">{site.name} [{site.code}]</h1>-->
<!--      <p class="text-sm font-medium text-gray-500">{job.type} {job.task}</p>-->
<!--    </div>-->
<!--    &lt;!&ndash; Action Buttons&ndash;&gt;-->
<!--    {#if visit.completedAt === null}-->
<!--      <div-->
<!--        class="flex flex-col-reverse justify-stretch space-y-2 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-2 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-2">-->
<!--        <SecondaryButtonLink to={addLocationLink} type="button" text="Add location" />-->
<!--        <PrimaryButtonLink to={completeVisitLink} type="button" text="Complete visit" />-->
<!--      </div>-->
<!--    {/if}-->
<!--  </div>-->
