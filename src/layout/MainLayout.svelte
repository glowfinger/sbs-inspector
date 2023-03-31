<script lang="ts">
  import MobileNavigation from "./navigation/MobileNavigation.svelte";
  import DesktopNavigation from "./navigation/desktop/DesktopNavigation.svelte";
  import MobileNavbar from "./navigation/mobile/MobileNavbar.svelte";

  let isNavOpen: boolean = false;

  function toggleIsNavOpen() {
    isNavOpen = !isNavOpen;
  }
</script>

<div class="min-h-full">
  <MobileNavigation toggle={toggleIsNavOpen} isNavOpen={isNavOpen} />
  <MobileNavbar toggle={toggleIsNavOpen} />
  <DesktopNavigation />
  <div class="flex flex-col pb-48 lg:pl-64">
    <main class="mb-6 min-h-full flex-1 p-4">
      <slot />
    </main>
  </div>
</div>
