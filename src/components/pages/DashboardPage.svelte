<script lang="ts">
  import { getMySites } from "../../lib/services/SiteApiService";
  import SiteOverviewTable from "../SiteOverviewTable.svelte";
  import type { Site } from "../../lib/types/Site";

  //TODO this should be sites available for this month or assigned
  let sites = [];
  getMySites().then((data: Array<Site>) => {
    sites = data;
  });

  function hasWork(site: Site) {
    return site.works.length > 0;
  }
</script>

<SiteOverviewTable sites={sites} />
