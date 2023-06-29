<script lang="ts">
  import { Link } from 'svelte-routing';

  export let to: string;
  export let text: string;
  export let disabled: boolean = false;
</script>

{#if disabled}
  <button
    class="inline-flex cursor-not-allowed items-center justify-center border border-zinc-300 bg-zinc-200 px-3 py-2 text-sm font-semibold text-zinc-400 shadow-sm"
    disabled="disabled">
    {text}
  </button>
{:else}
  <Link
    to={to}
    class="inline-flex items-center justify-center bg-zinc-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600">
    {text}
  </Link>
{/if}
