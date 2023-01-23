<script lang="ts">
  import {scale} from 'svelte/transition';
  import {Link} from "svelte-routing";
</script>

<div in:scale={{start: 0.95, duration: 75, opacity: 0}} out:scale={{start: 0.95, duration: 100, opacity: 0}}
     class="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
     role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
    <div class="py-1" role="none">
        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
           id="user-menu-item-0">View profile</a>
        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
           id="user-menu-item-1">Settings</a>
        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
           id="user-menu-item-2">Notifications</a>
    </div>
    <div class="py-1" role="none">
        <Link to={`/logout`} class="text-gray-700 block px-4 py-2 text-sm">Logout</Link>
    </div>
</div>
