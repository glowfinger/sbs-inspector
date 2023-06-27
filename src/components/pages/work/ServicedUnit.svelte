<script lang="ts">
  import { Link } from 'svelte-routing';
  import hasAllTemperatureResults from '../../../lib/helpers/conditionals/HasAllTemperatureResults';
  import type WorkResult from '../../../lib/types/WorkResult';

  export let results: WorkResult[];
  export let url: string;
</script>

{#if hasAllTemperatureResults(results)}
  <li>
    <div class="group relative flex items-start space-x-3 py-4">
      <div class="flex-shrink-0">
        <span
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700">
          <svg
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
        </span>
      </div>

      <div class="min-w-0 flex-1">
        <div class="text-sm font-medium text-gray-900">
          <Link to={url}>
            <span class="absolute inset-0" aria-hidden="true" />
            Serviced
          </Link>
        </div>
        <p class="text-sm text-gray-500">Completed unit service</p>
      </div>

      <div class="flex-shrink-0 self-center">
        <svg
          class="h-5 w-5 text-gray-400 group-hover:text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  </li>
{:else}
  <li>
    <div class="group relative flex items-start space-x-3 py-4">
      <div class="flex-shrink-0">
        <span
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-300">
          <svg
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
        </span>
      </div>

      <div class="min-w-0 flex-1">
        <div class="text-sm font-medium text-gray-300">Serviced</div>
        <p class="text-sm text-red-300 underline">Please add temperatures</p>
        <p class="text-sm text-gray-300 line-through">Completed unit service</p>
      </div>

      <div class="flex-shrink-0 self-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
        </svg>
      </div>
    </div>
  </li>
{/if}
