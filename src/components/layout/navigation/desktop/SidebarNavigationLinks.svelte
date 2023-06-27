<script>
  import { Link } from "svelte-routing";
  import VisitIcon from "../../../icons/VisitIcon.svelte";
  import HomeIcon from "../../../icons/HomeIcon.svelte";
</script>

<nav class="mt-6 px-3">
  <div class="space-y-1">
    <Link
      to={`/`}
      class="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
    >
      <HomeIcon class="mr-3 h-6 w-6 flex-shrink-0 text-gray-500" />
      Home
    </Link>
    <Link
      to={`/visits`}
      class="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
    >
      <VisitIcon class="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
      My visits
    </Link>
  </div>
</nav>
