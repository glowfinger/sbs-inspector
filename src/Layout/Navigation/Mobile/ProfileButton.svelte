<script lang="ts">
  import {activeUser} from '../../../ActiveUserStore.js'
</script>

<a href="/profile" class="flex-shrink-0 group block">
    <div class="flex items-center">
        <span class="inline-flex items-center justify-center h-10 w-10 rounded-full bg-green-500">
            <span class="text-xs font-medium leading-none text-white">{$activeUser.initial}</span>
        </span>
        <div class="ml-3">
            <p class="text-base font-medium text-white">{$activeUser.firstName} {$activeUser.lastName}</p>
            <p class="text-sm font-medium text-gray-400 group-hover:text-gray-300">View profile</p>
        </div>
    </div>
</a>
