<script lang="ts">
  import {getMySites} from "../lib/services/SiteApiService";
  import SiteCardList from '../components/SiteCardList.svelte'


  let sites = []
  getMySites().then((data) => {
    sites = data;
  })

</script>

<div class="min-h-full">
    <SiteCardList sites={sites}/>
</div>

