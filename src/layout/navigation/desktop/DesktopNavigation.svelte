<script>
  import Logo from '../Logo.svelte'
  import UserAccountDropdown from './UserAccountDropdown.svelte'
  import SidebarSearch from './SidebarSearch.svelte'
  import SidebarNavigatationLinks from './SidebarNavigatationLinks.svelte'
</script>

<div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4">
    <div class="flex flex-shrink-0 items-center px-6 text-blue-900">
        <Logo />
    </div>
    <div class="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
        <UserAccountDropdown />
        <SidebarSearch />
        <SidebarNavigatationLinks />
    </div>
</div>
