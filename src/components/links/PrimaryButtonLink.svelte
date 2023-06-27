<script lang="ts">
  import { Link } from 'svelte-routing';

  export let to: string;
  export let text: string;
  export let disabled: boolean = false;
</script>

{#if disabled}
  <button
    class="inline-flex cursor-not-allowed items-center justify-center rounded-md border border-gray-300 bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm"
    disabled="disabled">
    {text}
  </button>
{:else}
  <Link
    to={to}
    class="inline-flex items-center justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
    {text}
  </Link>
{/if}
