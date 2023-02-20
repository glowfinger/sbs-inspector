<script lang="ts">
  export let login: () => void;
</script>

<div class="bg-gray-700 h-full">
  <div class="mx-auto max-w-2xl py-16 px-6 text-center sm:py-20 lg:px-8">
    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
      <span class="block">SBS Inspector</span>
    </h2>
    <p class="mt-4 text-lg leading-6 text-gray-200">
      Access SBS inspection app
    </p>
    <button
      on:click={login}
      class="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-600 hover:bg-indigo-50 sm:w-auto"
    >
      Login
    </button>
  </div>
</div>
