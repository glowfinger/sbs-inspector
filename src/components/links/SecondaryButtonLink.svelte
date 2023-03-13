<script lang="ts">
  import {Link} from 'svelte-routing';

  export let to: string;
  export let text: string;
</script>

<Link to={to}
      class="rounded bg-white py-1 px-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
    {text}
</Link>

