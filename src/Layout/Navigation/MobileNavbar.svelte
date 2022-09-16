<script lang="ts">

  import {isOpen} from "../../NavigationStore";

  function toggle() {
    isOpen.update((v) => {
      return !v;
    })
  }

</script>

<div class="lg:hidden">
    <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
        <div>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                 alt="Your Company">
        </div>
        <div>
            <button type="button"
                    class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900" on:click={toggle}>
                <span class="sr-only">Open sidebar</span>
                <!-- Heroicon name: outline/bars-3 -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
            </button>
        </div>
    </div>
</div>
