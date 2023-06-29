<script>
  import ConnectionIndicator from './connectionIndicator/ConnectionIndicator.svelte';
  import Logo from './Logo.svelte';
  import { Link } from 'svelte-routing';
</script>

<nav class="bg-zinc-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div
        class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <Logo />
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <!-- Current: "bg-zinc-900 text-white", Default: "text-zinc-300 hover:bg-zinc-700 hover:text-white" -->
            <Link
              to="/"
              class="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white"
              aria-current="page">Dashboard</Link>

            <Link
              to="sites"
              class="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white">
              My sites
            </Link>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <ConnectionIndicator />
      </div>
    </div>
  </div>
</nav>
