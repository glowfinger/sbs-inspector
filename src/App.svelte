<script lang="ts">
  import SideBar from './Layout/Navigation/Mobile/SideBar.svelte'
  import {isOpen} from "./NavigationStore";
  import router from 'page';
  import Home from "./pages/Home.svelte";
  import Sites from "./pages/Sites.svelte";
  import Profile from "./pages/Profile.svelte";
  import Site from "./pages/Site.svelte";
  import Inspections from "./pages/Inspections.svelte";
  import {fade} from 'svelte/transition';
  import MobileSideNav from './Layout/Navigation/MobileSideNav.svelte'
  import DesktopSideNav from './Layout/Navigation/DesktopSideNav.svelte'
  import MainNavbar from './MainNavbar.svelte'
  import MobileNavbar from './Layout/Navigation/MobileNavbar.svelte'
  import navigationLinks from './Layout/NavigationLinks.js'



  const callBack = (ctx, next) => {
    params = ctx.params
    next()
  }

  let page
  let params

  router('/', () => (page = Home));
  router('/sites', () => (page = Sites));

  router('/site/:name', callBack, () => page = Site)
  router('/inspections', () => (page = Inspections));
  router('/profile', () => (page = Profile));


  router.exit('*', function (ctx, next) {
    isOpen.set(false);
    next();
  })

  router.start();

</script>

<div class="flex h-full">
    <MobileSideNav links={navigationLinks}/>
    <DesktopSideNav links={navigationLinks}/>
    <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
        <MobileNavbar/>

        <svelte:component this={page} params={params}/>
    </div>
</div>
