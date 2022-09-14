<script lang="ts">
  export let sites;


</script>

<nav class="min-h-0 flex-1 overflow-y-auto" aria-label="Directory">
    <div class="relative">
        <div class="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
            <h3>A</h3>
        </div>
        <ul role="list" class="relative z-0 divide-y divide-gray-200">
            {#each sites.sort((a, b) => (a.name > b.name) ? 1 : -1) as site}
                <li>
                    <div class="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 hover:bg-gray-50">
                        <div class="min-w-0 flex-1">
                            <a href="#" class="focus:outline-none">
                                <!-- Extend touch target to entire panel -->
                                <span class="absolute inset-0" aria-hidden="true"></span>
                                <p class="text-sm font-medium text-gray-900">{site.name}</p>
                                <p class="truncate text-sm text-gray-500">{site.address.address4}
                                    , {site.address.postcode}</p>
                                <p class="truncate text-sm text-gray-500">Valves: {site.locations.length}</p>


                                {#if site.works[0].startedAt}
                                    <span class="inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">In progress</span>
                                {/if}

                                {#if site.works[0].bookedAt}
                                    <span class="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">Booked</span>
                                {/if}

                            </a>
                        </div>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</nav>
