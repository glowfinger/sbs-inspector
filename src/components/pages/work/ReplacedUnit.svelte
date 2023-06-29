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
          class="inline-flex h-10 w-10 items-center justify-center bg-zinc-800">
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
        <div class="text-sm font-medium text-zinc-900">
          <Link to={url}>
            <span class="absolute inset-0" aria-hidden="true" />
            Replace
          </Link>
        </div>
        <p class="text-sm text-zinc-500">Replaced unit</p>
      </div>

      <div class="flex-shrink-0 self-center">
        <svg
          class="h-5 w-5 text-zinc-400 group-hover:text-zinc-500"
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
          class="inline-flex h-10 w-10 items-center justify-center bg-zinc-300">
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
        <div class="text-sm font-medium text-zinc-300">Replace</div>
        <p class="text-sm text-red-300 underline">Please add temperatures</p>
        <p class="text-sm text-zinc-300 line-through">Replaced unit</p>
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
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  </li>
{/if}
