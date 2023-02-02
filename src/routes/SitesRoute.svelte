<script lang="ts">
  import {onMount} from "svelte";
  import {getMySites} from "../lib/services/SiteApiService";
  import type {Site} from "../lib/types/Site";

  let sites: Array<Site> = [];

  onMount(() => {
    getMySites()
      .then(r => sites = r);
  });
</script>


