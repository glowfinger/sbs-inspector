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
  <MobileNavigation toggle={toggleIsNavOpen} {isNavOpen} />
  <MobileNavbar toggle={toggleIsNavOpen} />
  <DesktopNavigation />
  <div class="flex flex-col lg:pl-64 pb-48">
    <main class="flex-1 p-4 mb-6 min-h-full">
      <slot />
    </main>
  </div>
</div>
