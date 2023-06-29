<script>
  import { Link } from 'svelte-routing';
  import VisitIcon from '../../../icons/VisitIcon.svelte';
  import HomeIcon from '../../../icons/HomeIcon.svelte';
</script>

<nav class="mt-6 px-3">
  <div class="space-y-1">
    <Link
      to={`/`}
      class="group flex items-center px-2 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900">
      <HomeIcon class="mr-3 h-6 w-6 flex-shrink-0 text-zinc-500" />
      Home
    </Link>
    <Link
      to={`/visits`}
      class="group flex items-center px-2 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900">
      <VisitIcon
        class="mr-3 h-6 w-6 flex-shrink-0 text-zinc-400 group-hover:text-zinc-500" />
      My visits
    </Link>
  </div>
</nav>
