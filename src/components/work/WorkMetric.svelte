<script lang="ts">
  export let title: string;
</script>

<li class="relative col-span-1 flex rounded-md shadow-sm">
  <div
    class="flex w-8 flex-shrink-0 items-center justify-center rounded-l-md bg-pink-600 text-sm font-medium text-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    </svg>
  </div>
  <div
    class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white"
  >
    <div class="flex-1 truncate px-4 py-2 text-sm">
      <a href="/" class="font-medium text-gray-900 hover:text-gray-600"
        >{title}</a
      >
      <p class="text-gray-500">12 Members</p>
    </div>
    <div class="flex-shrink-0 pr-2">
      <button
        type="button"
        class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        id="pinned-project-options-menu-0-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span class="sr-only">Open options</span>
        <svg
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
          />
        </svg>
      </button>
    </div>
  </div>
</li>
