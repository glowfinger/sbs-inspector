<script lang="ts">
  export let locations: Location[];
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
  <div
    class="divide-y divide-zinc-200 overflow-hidden bg-white shadow">
    <div class="px-4 py-2">Incomplete locations</div>
    <div class="px-4">
      <ul class="divide-y divide-zinc-100">
        {#each locations as location}
          <li class="flex items-center justify-between gap-x-6 py-2">
            <div class="min-w-0">
              <div class="flex items-start gap-x-3">
                <p class="text-sm font-semibold leading-6 text-zinc-900">
                  {location.name}
                </p>
                <div
                  class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-zinc-500">
                  <p class="whitespace-nowrap">Floor: {location.floor}</p>
                  <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <p class="truncate">Area: {location.area}</p>
                </div>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
