<script lang="ts">
  import type {Site} from "../../../lib/types/Site";
  export let site: Site;
  export let address;
</script>

<div class="sm:flex sm:items-center sm:justify-between">
    <div class="min-w-0 flex-1">
        <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">Visit overview</h1>
        <p class="mt-1 max-w-2xl text-sm text-gray-500 flex">
            <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z"></path></svg>
            {site.name}, {site.code}</p>
            <p class="mt-1 max-w-2xl text-sm text-gray-500 flex">{address.line1}, {address.line2} </p>
            <p class="mt-1 max-w-2xl text-sm text-gray-500 flex">{address.town}, {address.county}, {address.postcode}, {address.country}</p>
    </div> 
</div>

