<script lang='ts'>
  import ThermoValveCold from './work/results/ThermoValveCold.svelte';
  import { Route, Router } from 'svelte-routing';
  import WorkServicedPage from './work/WorkServicedPage.svelte';
  import WorkInaccessiblePage from './work/WorkInaccessiblePage.svelte';
  import ThermoValveFailSafe from './work/results/ThermoValveFailSafe.svelte';
  import VisitPage from './visit/VisitPage.svelte';
  import ThermoValveMixed from './work/results/ThermoValveMixed.svelte';
  import NotFoundPage from './NotFoundPage.svelte';
  import WorkActionPage from './work/WorkActionPage.svelte';
  import WorkDescaledPage from './work/WorkDescaledPage.svelte';
  import LogoutPage from './LogoutPage.svelte';
  import DashboardPage from './DashboardPage.svelte';
  import SitesPage from './SitesPage.svelte';
  import SitePage from './SitePage.svelte';
  import VisitCompletePage from './visit/VisitCompletePage.svelte';
  import WorkConfirmationPage from './work/WorkConfirmationPage.svelte';
  import WorkRequestPage from './work/WorkRequestPage.svelte';
  import ThermoValveHot from './work/results/ThermoValveHot.svelte';
  import SiteLocationPage from './SiteLocationPage.svelte';
  import VisitReviewPage from './visit/VisitReviewPage.svelte';
  import WorkReplacePage from './work/WorkReplacePage.svelte';
  import DesktopNavigation from '../layout/navigation/DesktopNavigation.svelte';
  import MobileNavigation from '../../lib/navigation/MobileNavigation.svelte';
  import { isSideNavOpen } from '../../lib/stores/NavigationStore';
  import MobileNavbar from '../layout/navigation/MobileNavbar.svelte';

  export let url: string = '';

  function toggleIsNavOpen() {
    $isSideNavOpen = !$isSideNavOpen;
  }
</script>

<Router url={url}>
  <div class='min-h-full'>
    <DesktopNavigation />
    <MobileNavigation toggle={toggleIsNavOpen} isNavOpen={$isSideNavOpen} />
    <MobileNavbar toggle={toggleIsNavOpen} />
    <div class='flex flex-col lg:pl-64'>
      <main class='p-4'>
        <Route path='/'>
          <DashboardPage />
        </Route>
        <Route path='/visits'>
          <SitesPage />
        </Route>
        <Route path='/site/:siteId' let:params>
          <SitePage siteId={parseInt(params.siteId)} />
        </Route>
        <Route
          path='/site/:siteId/job/:jobId/visit/:visitId/location/add'
          let:params>
          <SiteLocationPage
            visitId={parseInt(params.visitId)}
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)}
            locationId={parseInt(params.locationId)} />
        </Route>
        <Route
          path='/site/:siteId/job/:jobId/visit/:visitId/location/add/:locationType'
          let:params>
          <SiteLocationPage
            visitId={parseInt(params.visitId)}
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)}
            locationId={parseInt(params.locationId)}
            locationType={params.locationType} />
        </Route>
        <Route path='/site/:siteId/job/:jobId/visit/:visitId' let:params>
          <VisitPage
            visitId={parseInt(params.visitId)}
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)} />
        </Route>
        <Route
          path='/site/:siteId/job/:jobId/visit/:visitId/status/:status'
          let:params>
          <VisitPage
            visitId={parseInt(params.visitId)}
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)}
            status={params.status} />
        </Route>
        <Route path='/site/:siteId/job/:jobId/visit/:visitId/review' let:params>
          <VisitReviewPage
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)}
            visitId={parseInt(params.visitId)} />
        </Route>
        <Route path='/site/:siteId/job/:jobId/visit/:visitId/complete' let:params>
          <VisitCompletePage
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)}
            visitId={parseInt(params.visitId)} />
        </Route>
        <Route
          let:params
          path='/site/:siteId/job/:jobId/visit/:visitId/work/:workId/action'>
          <WorkActionPage
            visitId={parseInt(params.visitId)}
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)}
            workId={parseInt(params.workId)} />
        </Route>
        <Route
          let:params
          path='/site/:siteId/job/:jobId/visit/:visitId/work/:workId/action/inaccessible'>
          <WorkInaccessiblePage
            visitId={parseInt(params.visitId)}
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)}
            workId={parseInt(params.workId)} />
        </Route>
        <Route
          let:params
          path='/site/:siteId/job/:jobId/visit/:visitId/work/:workId/action/serviced'>
          <WorkServicedPage
            visitId={parseInt(params.visitId)}
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)}
            workId={parseInt(params.workId)} />
        </Route>
        <Route
          let:params
          path='/site/:siteId/job/:jobId/visit/:visitId/work/:workId/action/descaled'>
          <WorkDescaledPage
            visitId={parseInt(params.visitId)}
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)}
            workId={parseInt(params.workId)} />
        </Route>
        <Route
          let:params
          path='/site/:siteId/job/:jobId/visit/:visitId/work/:workId/action/request'>
          <WorkRequestPage
            visitId={parseInt(params.visitId)}
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)}
            workId={parseInt(params.workId)} />
        </Route>
        <Route
          let:params
          path='/site/:siteId/job/:jobId/visit/:visitId/work/:workId/action/replaced'>
          <WorkReplacePage
            visitId={parseInt(params.visitId)}
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)}
            workId={parseInt(params.workId)} />
        </Route>
        <Route
          let:params
          path='/site/:siteId/job/:jobId/visit/:visitId/work/:workId/result/hot'>
          <ThermoValveHot
            visitId={parseInt(params.visitId)}
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)}
            workId={parseInt(params.workId)} />
        </Route>
        <Route
          let:params
          path='/site/:siteId/job/:jobId/visit/:visitId/work/:workId/result/cold'>
          <ThermoValveCold
            visitId={parseInt(params.visitId)}
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)}
            workId={parseInt(params.workId)} />
        </Route>
        <Route
          let:params
          path='/site/:siteId/job/:jobId/visit/:visitId/work/:workId/result/mixed'>
          <ThermoValveMixed
            visitId={parseInt(params.visitId)}
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)}
            workId={parseInt(params.workId)} />
        </Route>
        <Route
          let:params
          path='/site/:siteId/job/:jobId/visit/:visitId/work/:workId/result/fail-safe'>
          <ThermoValveFailSafe
            visitId={parseInt(params.visitId)}
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)}
            workId={parseInt(params.workId)} />
        </Route>
        <Route
          let:params
          path='/site/:siteId/job/:jobId/visit/:visitId/work/:workId/confirmation'>
          <WorkConfirmationPage
            visitId={parseInt(params.visitId)}
            siteId={parseInt(params.siteId)}
            jobId={parseInt(params.jobId)}
            workId={parseInt(params.workId)} />
        </Route>
        <Route path='/logout'>
          <LogoutPage />
        </Route>
        <Route path='/*'>
          <NotFoundPage />
        </Route>
      </main>
    </div>
  </div>
</Router>
