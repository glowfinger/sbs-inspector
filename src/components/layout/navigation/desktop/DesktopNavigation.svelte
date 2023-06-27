<script>
  import Logo from '../Logo.svelte';
  import UserAccountDropdown from './UserAccountDropdown.svelte';
  import SidebarNavigationLinks from './SidebarNavigationLinks.svelte';
  import { Link } from 'svelte-routing';
</script>

<div
  class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pb-4 lg:pt-5">
  <div class="flex flex-shrink-0 items-center px-6 text-gray-900">
    <Link to={'/'}>
      <Logo />
    </Link>
  </div>
  <div class="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
    <UserAccountDropdown />
    <SidebarNavigationLinks />
  </div>
</div>
