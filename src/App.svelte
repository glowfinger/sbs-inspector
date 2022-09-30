<script lang="ts">
  import {isOpen} from "./NavigationStore";
  import router from 'page';
  import Home from "./pages/Home.svelte";
  import Sites from "./pages/Sites.svelte";
  import Profile from "./pages/Profile.svelte";
  import Site from "./pages/Site.svelte";
  import Inspections from "./pages/Inspections.svelte";
  import MobileSideNav from './Layout/Navigation/MobileSideNav.svelte'
  import DesktopSideNav from './Layout/Navigation/DesktopSideNav.svelte'
  import MobileNavbar from './Layout/Navigation/MobileNavbar.svelte'
  import navigationLinks from './Layout/NavigationLinks.js';
  import {onMount} from "svelte";
  import {preloader} from "./services/Preloader";
  import {loaded, loading, pageParams, sites} from './Store.js'
  import InitialLoader from './Layout/InitialLoader.svelte'


  const callBack = (ctx, next) => {
    params = ctx.params;
    console.log(ctx.params);

    next()
  }

  let page
  let params

  router('/', () => (page = Home));
  router('/site', () => (page = Sites));
  router('/site/:siteKey', callback, () => page = Site)
  router('/inspections', () => (page = Inspections));
  router('/profile', () => (page = Profile));


  router.exit('*', function (ctx, next) {
    isOpen.set(false);
    next();
  });


  function callback(ctx, next) {
    params = ctx.params;

    console.log(ctx);
    if (ctx.params.hasOwnProperty('siteKey')) {
      console.log('set');
    } else {
      console.log('unset')
    }


    next()
  }

  router.start();

  onMount(preloader())

</script>

<!--{#if $loaded && $loading.length === 0 }-->


<div class="flex h-full">
    <MobileSideNav links={navigationLinks}/>
    <DesktopSideNav links={navigationLinks}/>
    <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
        <MobileNavbar/>
        <svelte:component this={page} sites={$sites} params={params}/>
    </div>
</div>

<!--{:else }-->
<!--    <InitialLoader/>-->
<!--{/if}-->
