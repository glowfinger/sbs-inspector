<script lang="ts">
  export let disabled = false;
</script>


{#if disabled}
  <button
    disabled
    type="submit"
    class="inline-flex w-full justify-center rounded-md bg-blue-300 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto">
    Save
  </button>
{:else}
  <button
    type="submit"
    class="inline-flex w-full justify-center rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:w-auto">
    Save
  </button>
{/if}




