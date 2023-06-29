<script lang="ts">
  export let action: () => {};

  export let disabled: boolean = false;
</script>

{#if disabled}
  <button
    type="button"
    disabled
    class="inline-flex w-full justify-center rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto">
    Complete
  </button>
{:else }
  <button
    type="button"
    on:click={action}
    class="inline-flex w-full justify-center rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:w-auto">
    Complete
  </button>
{/if}
