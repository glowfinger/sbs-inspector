<script lang="ts">
  export let disabled = false;
</script>

{#if disabled}
  <button
    disabled
    class="inline-flex w-full justify-center bg-primary-800 px-3 py-2 text-sm font-semibold text-white shadow-sm">
    Save
  </button>
{:else}
  <button
    type="submit"
    class="inline-flex w-full justify-center bg-primary-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
    Save
  </button>
{/if}
