<script lang="ts">

  import {Router, Route} from "svelte-routing";
  import {isOnline, sites} from './Store.js'
  import {onMount} from "svelte";
  import {getMySites} from "./lib/services/SiteApiService";
  import Dashboard from './pages/Dashboard.svelte';
  import Site from "./pages/Site.svelte";
  import Work from "./pages/Work.svelte";
  import InspectionEdit from './pages/InspectionEdit.svelte'
  import MainLayout from './layout/MainLayout.svelte'

  let url
  let data

  onMount(() => {
    data = getMySites()
      .then((d) => {
        return sites.set(d)
      });
  });

</script>


<svelte:window bind:online={$isOnline}/>
<svelte:head>
    <title>SBS</title>
</svelte:head>



<Router url={url}>
    <MainLayout>
        <Route path="/">
            <Dashboard />
        </Route>
        <Route path="/sites">
            <Site sites={$sites} />
        </Route>
        <Route path="/site/:siteId/work/:workId" let:params>
            <Work sites={$sites} workId={parseInt(params.workId)} siteId={parseInt(params.siteId)} />
        </Route>
        <Route path="/site/:siteId/work/:workId/inspection" let:params>
            <Work sites={$sites} workId={parseInt(params.workId)} siteId={parseInt(params.siteId)} />
        </Route>
        <Route path="/site/:siteId/work/:workId/location/:locationId" let:params>
            <InspectionEdit sites={$sites} workId={parseInt(params.workId)} siteId={parseInt(params.siteId)} locationId={params.locationId} />
        </Route>
    </MainLayout>
</Router>
