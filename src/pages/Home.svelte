<script>
  import TableRow from '../Layout/Navigation/TableRow.svelte'
  import { onMount } from 'svelte'


  // TODO move this to the store
  let sites = [];

    export let params = null;


  onMount(async () => {

  });




</script>

<main class="flex-1">
    <!-- Page title & actions -->
    <div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div class="flex-1 min-w-0">
            <h1 class="text-2xl font-semibold text-gray-900">Home</h1>
        </div>
    </div>
    <!-- Pinned projects -->
    <div class="px-4 mt-6 sm:px-6 lg:px-8">
        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Pinned Projects</h2>
        <ul role="list" class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
            <li class="relative col-span-1 flex shadow-sm rounded-md">
                <div class="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md">
                    GA
                </div>
                <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                    <div class="flex-1 px-4 py-2 text-sm truncate">
                        <a href="#" class="text-gray-900 font-medium hover:text-gray-600"> GraphQL API </a>
                        <p class="text-gray-500">12 Members</p>
                    </div>
                    <div class="flex-shrink-0 pr-2">
                        <button type="button"
                                class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                id="pinned-project-options-menu-0-button" aria-expanded="false" aria-haspopup="true">
                            <span class="sr-only">Open options</span>
                            <!-- Heroicon name: solid/dots-vertical -->
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                            </svg>
                        </button>



                    </div>
                </div>
            </li>

            <!-- More items... -->
        </ul>
    </div>

    <!-- Projects list (only on smallest breakpoint) -->
    <div class="mt-10 sm:hidden">
        <div class="px-4 sm:px-6">
            <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Projects</h2>
        </div>
        <ul role="list" class="mt-3 border-t border-gray-200 divide-y divide-gray-100">
            <li>
                <a href="#" class="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
              <span class="flex items-center truncate space-x-3">
                <span class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-pink-600" aria-hidden="true"></span>
                <span class="font-medium truncate text-sm leading-6">
                  GraphQL API
                  <span class="truncate font-normal text-gray-500">in Engineering</span>
                </span>
              </span>
                    <!-- Heroicon name: solid/chevron-right -->
                    <svg class="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"/>
                    </svg>
                </a>
            </li>

            <!-- More projects... -->
        </ul>
    </div>

    <!-- Projects table (small breakpoint and up) -->
    <div class="hidden mt-8 sm:block">
        <div class="align-middle inline-block min-w-full border-b border-gray-200">
            <table class="min-w-full">
                <thead>
                <tr class="border-t border-gray-200">
                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        scope="col">
                        <span class="lg:pl-2">Project</span>
                    </th>
                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        scope="col">Members
                    </th>
                    <th class="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        scope="col">Last updated
                    </th>
                    <th class="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        scope="col"></th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-100">

                <!-- More projects... -->
                </tbody>
            </table>
        </div>
    </div>
</main>
