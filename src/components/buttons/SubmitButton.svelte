<script lang="ts">
  export let disabled = false;
</script>

{#if disabled}
  <button
    disabled
    class="inline-flex w-full justify-center bg-blue-300 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto">
    Save
  </button>
{:else}
  <button
    type="submit"
    class="inline-flex w-full justify-center bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    Save
  </button>
{/if}
