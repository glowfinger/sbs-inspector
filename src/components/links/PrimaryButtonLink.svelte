<script lang="ts">
  import { Link } from 'svelte-routing';

  export let to: string;
  export let text: string;
  export let disabled: boolean = false;
</script>

{#if disabled}
  <button
    class="inline-flex w-full justify-center bg-primary-700 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto"
    disabled="disabled">
    {text}
  </button>
{:else}
  <Link
    to={to}
    class="inline-flex w-full justify-center bg-primary-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
    {text}
  </Link>
{/if}
