<script lang="ts">
  import {Link} from 'svelte-routing';

  export let to: string;
  export let text: string;
</script>

<Link to={to}
      class="rounded bg-gray-500 py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">
    {text}
</Link>
