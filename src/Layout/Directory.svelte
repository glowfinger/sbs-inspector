<script lang="ts">
    import { get } from "../services/SiteApiService";
    import SiteList from "../SiteList.svelte";
  let promise = get().then((response) => response.json());
</script>

<aside
  class="hidden w-96 flex-shrink-0 border-r border-gray-200 xl:order-first xl:flex xl:flex-col"
>
  <div class="px-6 pt-6 pb-4">
    <h2 class="text-lg font-medium text-gray-900">Directory</h2>
    <p class="mt-1 text-sm text-gray-600">
      Search directory of 3,018 employees
    </p>
    <form class="mt-6 flex space-x-4" action="#">
      <div class="min-w-0 flex-1">
        <label for="search" class="sr-only">Search</label>
        <div class="relative rounded-md shadow-sm">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
          >
            <!-- Heroicon name: mini/magnifying-glass -->
            <svg
              class="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="search"
            name="search"
            id="search"
            class="block w-full rounded-md border-gray-300 pl-10 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
            placeholder="Search"
          />
        </div>
      </div>
      <button
        type="submit"
        class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
      >
        <!-- Heroicon name: mini/funnel -->
        <svg
          class="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="sr-only">Search</span>
      </button>
    </form>
  </div>

  {#await promise}
    <p>Loading</p>
  {:then sites}
    <SiteList {sites} />
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</aside>
