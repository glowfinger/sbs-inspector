<script lang="ts">
  import {Router, Route} from "svelte-routing";
  import {isOnline, sites} from './Store.js'
  import Dashboard from './pages/Dashboard.svelte';
  import Work from "./pages/Work.svelte";
  import InspectionEdit from './pages/InspectionEdit.svelte'
  import MainLayout from './layout/MainLayout.svelte'
  import SitePage from './pages/SitePage.svelte'
  import SitesRoute from "./routes/SitesRoute.svelte";
  import {onMount} from "svelte";
  import {createClient} from "./lib/auth/AuthService";
  import {authClient, isAuthenticated, user} from "./lib/stores/AuthStore";
  import LoginRoute from "./components/routes/LoginRoute.svelte";
  import {login, logout} from "./lib/auth/AuthService.js";
  import LogoutRoute from "./components/routes/LogoutRoute.svelte";
  import NotFoundRoute from "./components/routes/NotFoundRoute.svelte";

  export let url = '';

  onMount(async () => {

    await createClient();

    const query = window.location.search
    if (query.includes("code=") && query.includes("state=")) {
      await $authClient.handleRedirectCallback()
      window.history.replaceState({}, document.title, window.location.pathname)
    }

    isAuthenticated.set(await $authClient.isAuthenticated());
    user.set(await $authClient.getUser());
  });

</script>

<svelte:window bind:online={$isOnline}/>
<svelte:head>
    <title>SBS Inspector</title>
</svelte:head>

{#if $isAuthenticated}
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
            <Route path="/logout">
                <LogoutRoute logout={() => logout($authClient)}/>
            </Route>
            <Route path="/*" let:params>
                <NotFoundRoute/>
            </Route>
        </MainLayout>
    </Router>
{:else }
    <LoginRoute login={() => login($authClient)}/>
{/if}
