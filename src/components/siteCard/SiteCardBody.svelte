<script lang="ts">
  import { Link } from "svelte-routing";
  import { getLatest } from "../../lib/helpers/links/SiteJobVisit.js";
  import type Job from "../../lib/types/Job";
  import isJobVisitLive from "../../lib/helpers/conditionals/job/isJobVisitLive.js";
  import type { Visit } from "../../lib/types/Visit.js";
  import { localDate } from "../helpers/DateFormatter.js";

  

  export let jobs: Job;
  export let visits: Visit;
</script>

<div class="overflow-hidden bg-white">
    <ul role="list" class="divide-y divide-gray-200">
        {#each jobs as job}
            <li>
                <Link to={getLatest(job)} class="block hover:bg-gray-50">
                    <div class="flex items-center px-2 py-4 sm:px-4">
                        <div
                                class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between"
                        >
                            <div class="truncate">
                                <div class="flex text-sm">
                                    <p class="truncate font-medium text-gray-600">{job.type}</p>
                                    <p class="ml-1 flex-shrink-0 font-normal text-gray-500">
                                        {job.status}
                                    </p>
                                </div>
                                <div class="mt-2 flex">
                                    <div class="flex items-center text-sm text-gray-500">
                                        <!-- Heroicon name: mini/calendar -->
                                        <svg
                                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                        >
                                            <path
                                                    fill-rule="evenodd"
                                                    d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                                                    clip-rule="evenodd"
                                            />
                                        </svg>
                                        {#each job.visits as visit}
                                        <p>
                                            Booked on:
                                            <time datetime="2020-01-14">{localDate(visit.bookedAt)}</time>
                                        </p>
                                        {/each}
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                                <div class="flex -space-x-1 overflow-hidden" />
                            </div>
                        </div>
                        <div class="ml-5 flex-shrink-0">
                            <!-- Heroicon name: mini/chevron-right -->
                            <svg
                                    class="h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                            >
                                <path
                                        fill-rule="evenodd"
                                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                        clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </Link>
            </li>
        {/each}
    </ul>
</div>
