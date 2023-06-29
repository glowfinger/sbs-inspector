<script lang="ts">
  import type Site from '../../lib/types/Site';
  import SiteCardHeader from './SiteCardHeader.svelte';
  import SiteCardBody from './SiteCardBody.svelte';

  export let site: Site;
</script>

<div
  class="divide-y divide-zinc-200 overflow-hidden bg-white shadow">
  <SiteCardHeader site={site} />
  <SiteCardBody jobs={site.jobs} />
</div>
