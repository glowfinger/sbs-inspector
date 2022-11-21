<script lang="ts">

  import {Router, Route} from "svelte-routing";
  import {isOnline, sites} from './Store.js'
  import {onMount} from "svelte";
  import {getMySites} from "./services/SiteApiService";
  import Dashboard from './pages/Dashboard.svelte';
  import Site from "./pages/Site.svelte";
  import Work from "./pages/Work.svelte";
  import Navbar from './Layout/Navigation/Navbar.svelte'
  import InspectionEdit from './pages/InspectionEdit.svelte'

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
    <Navbar/>
    <div>
        <Route path="/" component={Dashboard}/>
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
    </div>
</Router>



