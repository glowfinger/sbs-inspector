<script lang="ts">
  import type { Site } from "../../lib/types/Site";
  import { Link } from "svelte-routing";
  import SiteCardHeader from "./SiteCardHeader.svelte";
  import SiteCardBody from "./SiteCardBody.svelte";
  import SiteCardJobFooter from "./SiteCardJobFooter.svelte";

  export let site: Site;
</script>

<div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
  <SiteCardHeader site={site} />
  <SiteCardBody jobs={site.jobs} />
  <div class="px-2 py-1 sm:px-4">
    <Link to={`/site/${site.id}`} class="focus:outline-none">
      <p class="text-sm font-medium text-gray-900">Edit</p>
    </Link>
  </div>
</div>
