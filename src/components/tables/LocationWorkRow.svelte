<script lang="ts">
  import type {Work} from "../../lib/types/Work";
  import type Location from "../../lib/types/Location";
  import {Link} from "svelte-routing";

  export let jobId: number;
  export let visitId: number;
  export let works: Work[] = [];
  export let location: Location;

  function locationHasWork(location: Location, works): boolean {
    return works.find((w) => w.locationId === location.id);
  }
</script>

<tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
        <div class="flex items-center">
            <div class="ml-4">
                <div class="font-medium text-gray-900">{location.name} </div>
            </div>
        </div>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <div class="text-gray-500">Floor:  {location.floor} {location.type}</div>
    </td>
    {#if locationHasWork(location, works)}
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">{null}</span>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{null}
            &#8451
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{null}
            &#8451
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{null}
            &#8451
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Yes</td>
        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
<!--            <Link to="/site/{site.id}/work/{site.works[0].id}/location/{location.id}"-->
<!--                  class="text-gray-600 hover:text-gray-900">Edit-->
<!--            </Link>-->
        </td>
    {:else}
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center bg-gray-100" colspan="5">Pending</td>
        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
            <Link to="/site/{location.siteId}/job/{jobId}/visit/{visitId}/location/{location.id}/add"
                  class="text-gray-600 hover:text-gray-900">Add
            </Link>
        </td>
    {/if}
</tr>
