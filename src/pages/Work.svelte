<script lang="ts">
  import {Link} from 'svelte-routing'

  export let siteId;
  // TODO setup work ID
  export let workId;
  export let sites = [];

  let site

  let activeWorks = []

  $: activeWorks = flattenWorks(site)

  $: site = sites.find((s) => {
    return s.id === siteId
  });


  function flattenWorks(site) {

    if (!site) {
      return []
    }

    let locations = site.locations


    return locations
  }
</script>

{#if site }
    <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Inspections</h1>
        </div>
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        Name
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Title
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Status
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Role
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Hot
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Cold
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Fail safe
                                    </th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">

                                {#each activeWorks as location}
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
                                        {#if !!location}
                                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Yes</td>
                                        { :else }
                                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Yes</td>
                                        {/if}
                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">

                                            <Link to="/site/{site.id}/work/{site.works[0].id}/location/{location.id}" class="text-gray-600 hover:text-gray-900">Edit</Link>
                                        </td>
                                    </tr>
                                {/each}

                                <!-- More people... -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
{/if}
