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
  import navigationLinks from './Layout/NavigationLinks.js'
  import {onMount} from "svelte";
  import {preloader} from "./services/Preloader";
  import {loaded, loading, pageParams, sites} from './Store.js'


  const callBack = (ctx, next) => {
    params = ctx.params;
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
  });

  router.start();

  onMount(preloader())

</script>

{#if $loaded && $loading.length === 0 }

    <div class="flex h-full">
        <MobileSideNav links={navigationLinks}/>
        <DesktopSideNav links={navigationLinks}/>
        <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
            <MobileNavbar/>
            <svelte:component this={page} sites={$sites} params={params}/>
        </div>
    </div>

{:else }
    <!-- This example requires Tailwind CSS v2.0+ -->
    <!-- Global notification live region, render this permanently at the end of the document -->
    <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
        <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
            <!--
              Notification panel, dynamically insert this into the live region when it needs to be displayed

              Entering: "transform ease-out duration-300 transition"
                From: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                To: "translate-y-0 opacity-100 sm:translate-x-0"
              Leaving: "transition ease-in duration-100"
                From: "opacity-100"
                To: "opacity-0"
            -->
            <div class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div class="p-4">
                    <div class="flex items-start">
                        <div class="flex-shrink-0">
                            <!-- Heroicon name: outline/check-circle -->
                            <svg class="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                            </svg>
                        </div>
                        <div class="ml-3 w-0 flex-1 pt-0.5">
                            <p class="text-sm font-medium text-gray-900">Loading</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

{/if}
