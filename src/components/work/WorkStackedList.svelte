<script lang="ts">
  import type Location from '../../lib/types/Location';
  import type Job from '../../lib/types/Job';
  import type Visit from '../../lib/types/Visit';
  import WorkListCard from './WorkListCard.svelte';
  import groupLocationsByFloor from '../../lib/mappers/GroupLocationsByFloor';
  import locationsForType from '../../lib/helpers/conditionals/LocationsForType';

  export let job: Job;
  export let visit: Visit;
  export let locations: Location[] = [];
  export let siteId: number;
  export let jobId: number;
  export let visitId: number;
</script>

<div class="overflow-hidden border border-zinc-700 bg-white shadow">
  <div class="bg-white">
    {#each groupLocationsByFloor(locationsForType(locations, job.type)) as floor}
      <div class="border-b border-zinc-900 bg-zinc-200 px-2 py-2 sm:px-2">
        <h3 class="text-base font-semibold leading-6 text-zinc-900">
          Floor: {floor.floor}
        </h3>
      </div>

      <ul class="divide-y divide-zinc-100 border-b border-zinc-900 p-2">
        {#each floor.locations as location}
          <li
            class="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap">
            <div>
              <p class="text-sm font-semibold leading-6 text-zinc-900">
                <a href="#" class="hover:underline"
                  >Atque perspiciatis et et aut ut porro voluptatem blanditiis?</a>
              </p>
              <div
                class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-zinc-500">
                <p>
                  <a href="#" class="hover:underline">Leslie Alexander</a>
                </p>
                <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <p><time datetime="2023-01-23T22:34Z">2d ago</time></p>
              </div>
            </div>
            <dl class="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
              <div class="flex -space-x-0.5">
                <dt class="sr-only">Commenters</dt>
                <dd>
                  <img
                    class="h-6 w-6 rounded-full bg-zinc-50 ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Emma Dorsey" />
                </dd>
                <dd>
                  <img
                    class="h-6 w-6 rounded-full bg-zinc-50 ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Tom Cook" />
                </dd>
                <dd>
                  <img
                    class="h-6 w-6 rounded-full bg-zinc-50 ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Lindsay Walton" />
                </dd>
                <dd>
                  <img
                    class="h-6 w-6 rounded-full bg-zinc-50 ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Benjamin Russel" />
                </dd>
                <dd>
                  <img
                    class="h-6 w-6 rounded-full bg-zinc-50 ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Hector Gibbons" />
                </dd>
              </div>
              <div class="flex w-16 gap-x-2.5">
                <dt>
                  <span class="sr-only">Total comments</span>
                  <svg
                    class="h-6 w-6 text-zinc-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </dt>
                <dd class="text-sm leading-6 text-zinc-900">24</dd>
              </div>
            </dl>
          </li>
        {/each}
      </ul>
    {/each}
  </div>
</div>
