<script lang="ts">
  export let pageTitle: string;
</script>

<div
  class="border-b border-zinc-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
  <div class="min-w-0 flex-1">
    <h1 class="text-lg font-medium leading-6 text-zinc-900 sm:truncate">
      {pageTitle}
    </h1>
  </div>
  <div class="mt-4 flex sm:ml-4 sm:mt-0">
    <button
      type="button"
      class="sm:order-0 order-1 ml-3 inline-flex items-center border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 sm:ml-0"
      >Share</button>
    <button
      type="button"
      class="order-0 inline-flex items-center border border-transparent bg-zinc-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 sm:order-1 sm:ml-3"
      >Create</button>
  </div>
</div>
