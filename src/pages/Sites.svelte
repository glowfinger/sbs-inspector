<script lang="ts">
  import {onDestroy, onMount} from "svelte";

  export let params = null;

  import {get} from "../services/SiteApiService";

  let promise = get().then((response) => response.json())



  onMount(function () {
    console.log(params);
  })

  onDestroy(function () {
    console.log('sites leave');
  })
</script>

<div class="py-6">

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Site
                    </th>
                    <th scope="col"
                        class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Valves
                    </th>
                    <th scope="col"
                        class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Email
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span class="sr-only">View</span>
                    </th>
                </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">


                    {#await promise}

                        <tr>
                            <td class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                Loading
                            </td>
                            <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">Front-end Developer</td>
                            <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">lindsay.walton@example.com</td>
                            <td class="px-3 py-4 text-sm text-gray-500">Member</td>
                            <td class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">

                            </td>
                        </tr>
                        <p>...waiting</p>
                    {:then sites}
                        {#each sites as site}
                            <tr>
                                <td class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">

                                    {site.name}
                                    <dl class="font-normal lg:hidden">
                                        <dt class="sr-only">Title</dt>
                                        <dd class="mt-1 truncate text-gray-700">Front-end Developer</dd>
                                        <dt class="sr-only sm:hidden">Email</dt>
                                        <dd class="mt-1 truncate text-gray-500 sm:hidden">lindsay.walton@example.com</dd>
                                    </dl>
                                </td>
                                <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">Front-end Developer</td>
                                <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                                    lindsay.walton@example.com
                                </td>
                                <td class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <a href="/site/{site.slug}" class="text-indigo-600 hover:text-indigo-900">View<span
                                            class="sr-only">, Lindsay Walton</span></a>
                                </td>
                            </tr>
                        {/each}
                    {:catch error}
                        <p style="color: red">{error.message}</p>
                    {/await}


                </tbody>
            </table>
        </div>
    </div>
</div>
