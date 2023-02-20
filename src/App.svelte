<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import { isOnline } from "./Store.js";
  import DashboardPage from "./components/pages/DashboardPage.svelte";
  import MainLayout from "./layout/MainLayout.svelte";
  import SitePage from "./components/pages/SitePage.svelte";
  import SitesPage from "./components/pages/SitesPage.svelte";
  import { onMount } from "svelte";
  import { createClient } from "./lib/auth/AuthService";
  import { authClient, isAuthenticated, user } from "./lib/stores/AuthStore";
  import LoginRoute from "./components/pages/LoginPage.svelte";
  import { login, logout } from "./lib/auth/AuthService.js";
  import LogoutPage from "./components/pages/LogoutPage.svelte";
  import NotFoundPage from "./components/pages/NotFoundPage.svelte";
  import VisitPage from "./components/pages/VisitPage.svelte";
  import WorkResultEditPage from "./components/pages/WorkResultEditPage.svelte";

  export let url = "";

  onMount(async () => {
    await createClient();

    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {
      await $authClient.handleRedirectCallback();
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    isAuthenticated.set(await $authClient.isAuthenticated());
    user.set(await $authClient.getUser());
  });
</script>

<svelte:window bind:online={$isOnline} />
<svelte:head>
  <title>SBS Inspector</title>
</svelte:head>

{#if $isAuthenticated}
  <Router {url}>
    <MainLayout>
      <Route path="/">
        <DashboardPage />
      </Route>
      <Route path="/sites">
        <SitesPage />
      </Route>
      <Route path="/site/:siteId" let:params>
        <SitePage siteId={parseInt(params.siteId)} />
      </Route>
      <Route path="/site/:siteId/job/:jobId/visit/:visitId" let:params>
        <VisitPage
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
        />
      </Route>
      <Route
        path="/site/:siteId/job/:jobId/visit/:visitId/work/:workId/results/add"
        let:params
      >
        <WorkResultEditPage
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          workId={parseInt(params.workId)}
        />
      </Route>
      <Route path="/logout">
        <LogoutPage logout={() => logout($authClient)} />
      </Route>
      <Route path="/*" let:params>
        <NotFoundPage />
      </Route>
    </MainLayout>
  </Router>
{:else}
  <LoginRoute login={() => login($authClient)} />
{/if}
