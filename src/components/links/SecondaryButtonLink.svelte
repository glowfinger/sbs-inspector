<script lang="ts">
  import {Link} from 'svelte-routing';

  export let to: string;
  export let text: string;
</script>

<Link to={to}
      class="sm:order-0 order-1 ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-0">
    {text}
</Link>

