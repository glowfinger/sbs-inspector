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
  function toggle() {
    isOpen.update((v) => {
      return !v;
    })
  }


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


  router.exit('*', function(ctx, next) {
    isOpen.set(false);
    next();
  })

  router.start();

</script>

<div>
    <SideBar/>
    <div class="md:pl-64 flex flex-col flex-1">
        <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <button type="button"
                    class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                    on:click={toggle}>
                <span class="sr-only">Open sidebar</span>
                <!-- Heroicon name: outline/menu-alt-2 -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7"/>
                </svg>
            </button>

        </div>
        <!--        <MainNavbar/>-->
        <main>
            <svelte:component this="{page}" params="{params}"/>
        </main>
    </div>
</div>
