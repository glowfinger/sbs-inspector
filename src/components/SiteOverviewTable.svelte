<script lang="ts">
  import type {Site} from "../lib/types/Site";
  import SiteCard from './SiteCard.svelte'

  export let sites: Array<Site>;
</script>

<div class="min-h-full">
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {#each sites as site}
                <SiteCard site={site}/>
            {/each}
        </div>
    </div>
</div>
