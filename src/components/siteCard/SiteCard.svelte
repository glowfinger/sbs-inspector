<script lang="ts">
  import type { Site } from "../../lib/types/Site";
  import { Link } from "svelte-routing";
  import SiteCardHeader from "./SiteCardHeader.svelte";
  import SiteCardJobFooter from "./SiteCardJobFooter.svelte";

  export let site: Site;
</script>

<li class="bg-white rounded-md overflow-hidden shadow border border-gray-900">
  <SiteCardHeader {site} />

  <!--    <div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white content-end">-->
  <!--        <div class="min-w-0 flex-1 h-fit">-->

  <!--            <Link to={`/site/${site.id}`} class="focus:outline-none">-->
  <!--                <span class="absolute inset-0" aria-hidden="true"></span>-->
  <!--                <p class="text-sm font-medium text-gray-900">{site.name}</p>-->
  <!--                &lt;!&ndash;            <p class="truncate text-sm text-gray-500">{site.address.town} / {site.address.postcode}</p>&ndash;&gt;-->
  <!--            </Link>-->
  <!--            <div class="border-b border-gray-200 bg-red-500 p-2">-->
  <!--                <h3 class="text-lg font-medium text-gray-900">Postings</h3>-->
  <!--            </div>-->
  <!--            <div class="border-b border-gray-200 bg-red-500 p-2">-->
  <!--                <h3 class="text-lg font-medium text-gray-900">Postings</h3>-->
  <!--            </div>-->
  <!--        </div>-->
  <!--    </div>-->
  <SiteCardJobFooter {site} />
</li>
