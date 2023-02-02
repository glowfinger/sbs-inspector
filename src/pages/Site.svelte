<script lang="ts">
  import {Link} from 'svelte-routing'

  export let sites = [];
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    <main class="pt-8 pb-16">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="px-4 sm:px-0">
                <h2 class="text-lg font-medium text-gray-900">My sites</h2>
            </div>
            <ul role="list" class="mt-5 divide-y divide-gray-200 border-t border-gray-200 sm:mt-0 sm:border-t-0">

                {#each sites as site, i}
                    <li>
                        <Link to="/site/{site.id}/work/{site.works[0].id}" class="group block">
                            <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                                <div class="flex min-w-0 flex-1 items-center">
                                    <div class="flex-shrink-0">
                                        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
                                            <span class="font-medium leading-none text-white">{site.name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'').slice(0,3).toUpperCase()}</span>
                                        </span>
                                    </div>
                                    <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                        <div>
                                            <p class="truncate text-sm font-medium text-gray-600">{site.name}</p>
                                            <p class="mt-2 flex items-center text-sm text-gray-500">
                                                <!-- Heroicon name: mini/envelope -->
                                                <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                     fill="currentColor" aria-hidden="true">
                                                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"/>
                                                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"/>
                                                </svg>
                                                <span class="truncate">{site.works[0].status}</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <!-- Heroicon name: mini/chevron-right -->
                                    <svg class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                         aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </li>
                {/each}
            </ul>
        </div>
    </main>
</div>
