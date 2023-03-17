<script lang="ts">
  import type Location from "../../lib/types/Location";
  import type {Work} from "../../lib/types/Work";
  import type {Visit} from "../../lib/types/Visit";
  import StartStatusIcon from "../icons/StartStatusIcon.svelte";
  import CompletedStatusIcon from "../icons/CompletedStatusIcon.svelte";

  export let location: Location;
  export let visit: Visit;

  function hasWorkForLocation(location: Location, works: Work[]): boolean {
    return works.some((w) => w.locationId === location.id);
  }

  function getWorksForLocation(location: Location, works: Work[]): Work[] {
    return works.filter((w) => w.locationId === location.id);
  }

  function isLatestWorkInCompleted(location: Location, works: Work[]): boolean {
    const work: Work = getWorksForLocation(location, works)
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .find(() => true);

    return work.completedAt === null;
  }

  function isLatestWorkCompleted(location: Location, works: Work[]): boolean {
    const work: Work = getWorksForLocation(location, works)
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .find(() => true);

    return work.completedAt !== null;
  }

  function isLatestUnResolved(location: Location, works: Work[]): boolean {
    const work: Work = getWorksForLocation(location, works)
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .find(() => true);

    return work.completedAt !== null && work.remediedAt === null && work.resolvedAt === null;
  }
</script>


<li class="col-span-1 divide-y divide-gray-600 rounded-lg bg-white border border-gray-600 overflow-hidden">
    <div class="flex w-full items-center justify-between space-x-2 p-2">
        <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
                <h3 class="truncate text-sm font-medium text-gray-900">{location.name}</h3>
            </div>
            <p class="mt-1 truncate text-sm text-gray-500">Floor: {location.floor}, Area: {location.area}</p>
        </div>
        <!--        TODO add a status icon-->
    </div>
    {#if !hasWorkForLocation(location, visit.works)}
        <div class="sm:flex p-2">
            <p class="flex items-center text-sm text-gray-500">Not started</p>
        </div>
    {:else }
        <ul class="divide-y divide-gray-200">
            {#each getWorksForLocation(location, visit.works) as work}
                <li class="flex p-2">
                    <div class="flex items-center space-x-4">
                        <h3 class="truncate text-sm font-medium text-gray-900">{work.outcome}</h3>
                        <h3 class="truncate text-sm font-medium text-gray-900">{work.status}</h3>
                    </div>
                </li>
            {/each}
        </ul>
    {/if}


    {#if !hasWorkForLocation(location, visit.works)}
        <div class="-mt-px flex bg-gray-600 text-white">
            <button class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-2 text-sm font-semibold"
                    on:click={() => console.log('start work')}>
                <StartStatusIcon/>
                Start
            </button>
        </div>
    {:else if isLatestUnResolved(location, visit.works)}
        <div class="-mt-px flex bg-gray-600 text-white">
            <button class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-2 text-sm font-semibold"
                    on:click={() => console.log('resolve')}>
                <StartStatusIcon/>
                Resolve
            </button>
        </div>
    {:else if isLatestWorkInCompleted(location, visit.works)}
        <div class="-mt-px flex bg-gray-600 text-white">
            <button class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-2 text-sm font-semibold"
                    on:click={() => console.log('update')}>
                <StartStatusIcon/>
                Update
            </button>
        </div>
    {:else if isLatestWorkCompleted(location, visit.works)}
        <div class="-mt-px flex bg-gray-100 text-gray-400">
            <p class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-2 text-sm font-semibold">
                <CompletedStatusIcon/>
                Completed
            </p>
        </div>
    {/if}
</li>
