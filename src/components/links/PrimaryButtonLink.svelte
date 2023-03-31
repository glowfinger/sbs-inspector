<script lang="ts">
  import { Link } from "svelte-routing";

  export let to: string;
  export let text: string;
</script>

<Link
  to={to}
  class="order-0 inline-flex items-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 sm:order-1 "
>
  {text}
</Link>
