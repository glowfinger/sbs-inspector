<script lang="ts">
  import {Router, Route} from "svelte-routing";
  import {isOnline, sites} from './Store.js'
  import Dashboard from './pages/Dashboard.svelte';
  import Work from "./pages/Work.svelte";
  import InspectionEdit from './pages/InspectionEdit.svelte'
  import MainLayout from './layout/MainLayout.svelte'
  import SitePage from './pages/SitePage.svelte'
  import SitesRoute from "./routes/SitesRoute.svelte";

  let url

</script>

<svelte:window bind:online={$isOnline}/>
<svelte:head>
    <title>SBS</title>
</svelte:head>

<Router url={url}>
    <MainLayout>
        <Route path="/">
            <Dashboard/>
        </Route>
        <Route path="/sites">
            <SitesRoute/>
        </Route>
        <Route path="/site/:siteId" let:params>
            <SitePage siteId={parseInt(params.siteId)}/>
        </Route>
        <Route path="/site/:siteId/work/:workId" let:params>
            <Work sites={$sites} workId={parseInt(params.workId)} siteId={parseInt(params.siteId)}/>
        </Route>
        <Route path="/site/:siteId/work/:workId/inspection" let:params>
            <Work sites={$sites} workId={parseInt(params.workId)} siteId={parseInt(params.siteId)}/>
        </Route>
        <Route path="/site/:siteId/work/:workId/location/:locationId" let:params>
            <InspectionEdit sites={$sites} workId={parseInt(params.workId)} siteId={parseInt(params.siteId)}
                            locationId={params.locationId}/>
        </Route>
    </MainLayout>
</Router>
