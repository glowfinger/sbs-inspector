<script lang="ts">
  import { onMount } from 'svelte';
  import { Router, Route } from 'svelte-routing';
  import { isOnline } from './Store.js';
  import DashboardPage from './components/pages/DashboardPage.svelte';
  import MainLayout from './components/layout/MainLayout.svelte';
  import SitePage from './components/pages/SitePage.svelte';
  import SitesPage from './components/pages/SitesPage.svelte';
  import LoginRoute from './components/pages/LoginPage.svelte';
  import LogoutPage from './components/pages/LogoutPage.svelte';
  import NotFoundPage from './components/pages/NotFoundPage.svelte';
  import VisitPage from './components/pages/visit/VisitPage.svelte';
  import WorkActionPage from './components/pages/work/WorkActionPage.svelte';
  import WorkConfirmationPage from './components/pages/work/WorkConfirmationPage.svelte';
  import ThermoValveHot from './components/pages/work/results/ThermoValveHot.svelte';
  import ThermoValveCold from './components/pages/work/results/ThermoValveCold.svelte';
  import ThermoValveMixed from './components/pages/work/results/ThermoValveMixed.svelte';
  import ThermoValveFailSafe from './components/pages/work/results/ThermoValveFailSafe.svelte';
  import WorkInaccessiblePage from './components/pages/work/WorkInaccessiblePage.svelte';
  import WorkRequestPage from './components/pages/work/WorkRequestPage.svelte';
  import WorkServicedPage from './components/pages/work/WorkServicedPage.svelte';
  import WorkReplacePage from './components/pages/work/WorkReplacePage.svelte';
  import VisitReviewPage from './components/pages/visit/VisitReviewPage.svelte';
  import SiteLocationPage from './components/pages/SiteLocationPage.svelte';
  import VisitCompletePage from './components/pages/visit/VisitCompletePage.svelte';
  import WorkDescaledPage from './components/pages/work/WorkDescaledPage.svelte';
  import { isAuthenticated, user } from './lib/stores/AuthStore';
  import { clearToken, hasToken } from './lib/auth/TokenManager';
  import LoadingPage from './components/pages/LoadingPage.svelte';
  import { getCurrentUser } from './lib/apiServices/AuthenticationApiService';

  export let url = '';

  let loaded: boolean = false;

  onMount(async () => {
    if (hasToken()) {
      await getCurrentUser()
        .then((currentUser) => {
          $user = currentUser;
          loaded = true;
          $isAuthenticated = true;
        })
        .catch(() => {
          loaded = true;
          $isAuthenticated = false;
          clearToken();
        });
    } else {
      loaded = true;
      $isAuthenticated = false;
    }
  });
</script>

<svelte:window bind:online={$isOnline} />
<svelte:head>
  {#if $isOnline}
    <title>SBS Inspector - Online</title>
  {:else}
    <title>SBS Inspector - Offline</title>
  {/if}
</svelte:head>

{#if !loaded}
  <LoadingPage />
{:else if $isAuthenticated}
  <Router url={url}>
    <MainLayout>
      <Route path="/">
        <DashboardPage />
      </Route>
      <Route path="/visits">
        <SitesPage />
      </Route>
      <Route path="/site/:siteId" let:params>
        <SitePage siteId={parseInt(params.siteId)} />
      </Route>
      <Route
        path="/site/:siteId/job/:jobId/visit/:visitId/location/add"
        let:params>
        <SiteLocationPage
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          locationId={parseInt(params.locationId)} />
      </Route>
      <Route
        path="/site/:siteId/job/:jobId/visit/:visitId/location/add/:locationType"
        let:params>
        <SiteLocationPage
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          locationId={parseInt(params.locationId)}
          locationType={params.locationType} />
      </Route>
      <Route path="/site/:siteId/job/:jobId/visit/:visitId" let:params>
        <VisitPage
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)} />
      </Route>
      <Route
        path="/site/:siteId/job/:jobId/visit/:visitId/status/:status"
        let:params>
        <VisitPage
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          status={params.status} />
      </Route>
      <Route path="/site/:siteId/job/:jobId/visit/:visitId/review" let:params>
        <VisitReviewPage
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          visitId={parseInt(params.visitId)} />
      </Route>
      <Route path="/site/:siteId/job/:jobId/visit/:visitId/complete" let:params>
        <VisitCompletePage
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          visitId={parseInt(params.visitId)} />
      </Route>
      <Route
        let:params
        path="/site/:siteId/job/:jobId/visit/:visitId/work/:workId/action">
        <WorkActionPage
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          workId={parseInt(params.workId)} />
      </Route>
      <Route
        let:params
        path="/site/:siteId/job/:jobId/visit/:visitId/work/:workId/action/inaccessible">
        <WorkInaccessiblePage
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          workId={parseInt(params.workId)} />
      </Route>
      <Route
        let:params
        path="/site/:siteId/job/:jobId/visit/:visitId/work/:workId/action/serviced">
        <WorkServicedPage
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          workId={parseInt(params.workId)} />
      </Route>
      <Route
        let:params
        path="/site/:siteId/job/:jobId/visit/:visitId/work/:workId/action/descaled">
        <WorkDescaledPage
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          workId={parseInt(params.workId)} />
      </Route>
      <Route
        let:params
        path="/site/:siteId/job/:jobId/visit/:visitId/work/:workId/action/request">
        <WorkRequestPage
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          workId={parseInt(params.workId)} />
      </Route>
      <Route
        let:params
        path="/site/:siteId/job/:jobId/visit/:visitId/work/:workId/action/replaced">
        <WorkReplacePage
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          workId={parseInt(params.workId)} />
      </Route>
      <Route
        let:params
        path="/site/:siteId/job/:jobId/visit/:visitId/work/:workId/result/hot">
        <ThermoValveHot
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          workId={parseInt(params.workId)} />
      </Route>
      <Route
        let:params
        path="/site/:siteId/job/:jobId/visit/:visitId/work/:workId/result/cold">
        <ThermoValveCold
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          workId={parseInt(params.workId)} />
      </Route>
      <Route
        let:params
        path="/site/:siteId/job/:jobId/visit/:visitId/work/:workId/result/mixed">
        <ThermoValveMixed
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          workId={parseInt(params.workId)} />
      </Route>
      <Route
        let:params
        path="/site/:siteId/job/:jobId/visit/:visitId/work/:workId/result/fail-safe">
        <ThermoValveFailSafe
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          workId={parseInt(params.workId)} />
      </Route>
      <Route
        let:params
        path="/site/:siteId/job/:jobId/visit/:visitId/work/:workId/confirmation">
        <WorkConfirmationPage
          visitId={parseInt(params.visitId)}
          siteId={parseInt(params.siteId)}
          jobId={parseInt(params.jobId)}
          workId={parseInt(params.workId)} />
      </Route>
      <Route path="/logout">
        <LogoutPage />
      </Route>
      <Route path="/*">
        <NotFoundPage />
      </Route>
    </MainLayout>
  </Router>
{:else}
  <LoginRoute />
{/if}
