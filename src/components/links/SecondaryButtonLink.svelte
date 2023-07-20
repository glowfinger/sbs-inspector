<script lang="ts">
  import { Link } from 'svelte-routing';

  export let to: string;
  export let text: string;
</script>

<Link
  to={to}
  class="inline-flex w-full justify-center border border-zinc-300 bg-zinc-200 px-3 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-400 sm:w-auto">
  {text}
</Link>
