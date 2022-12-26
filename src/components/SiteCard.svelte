<script lang="ts">
  import type {Site} from "../lib/types/Site";
  import {Link} from 'svelte-routing'

  export let site: Site;
</script>

<Link to={`/site/${site.id}`} class="focus:outline-none">
    <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm focus-within:ring-2 focus-within:ring-gray-500 focus-within:ring-offset-2 hover:border-gray-400 text-white">
        <div class="px-4 py-2 bg-gray-800 text-sm">
            {site.works.length}
        </div>
        <div class="px-4 py-2">
            <p class="text-sm font-medium text-gray-900">{site.name}</p>

        </div>
    </div>
</Link>

<!--<div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 ">-->
<!--    <div class="min-w-0 flex-1">-->
<!--        <div class="border-b border-gray-200 bg-red-500 px-4 py-5 sm:px-6">-->
<!--            <h3 class="text-lg font-medium leading-6 text-gray-900">Job Postings</h3>-->
<!--        </div>-->
<!--        <Link to={`/site/${site.id}`} class="focus:outline-none">-->
<!--            <span class="absolute inset-0" aria-hidden="true"></span>-->
<!--            <p class="text-sm font-medium text-gray-900">{site.name}</p>-->
<!--            <p class="truncate text-sm text-gray-500">{site.address.town} / {site.address.postcode}</p>-->
<!--        </Link>-->
<!--    </div>-->
<!--</div>-->
