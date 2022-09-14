<script>
   export let characters
</script>

{#each characters as character}

<tr>
    <td class="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
        <div class="flex items-center space-x-3 lg:pl-2">
            <div class="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600" aria-hidden="true"></div>
            <a href="#" class="truncate hover:text-gray-600">
                      <span>
                        {character.name}
                        <span class="text-gray-500 font-normal">{character.address.address1}</span>
                        <span class="text-gray-500 font-normal">{character.address.address2}</span>
                      </span>
            </a>
        </div>
    </td>
    <td class="px-6 py-3 text-sm text-gray-500 font-medium">
        <div class="flex items-center space-x-2">
            <div class="flex flex-shrink-0 -space-x-1">
                <img class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                     src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                     alt="Dries Vincent">

                <img class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                     alt="Lindsay Walton">

                <img class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                     src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                     alt="Courtney Henry">

                <img class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                     alt="Tom Cook">
            </div>

            <span class="flex-shrink-0 text-xs leading-5 font-medium">+8</span>
        </div>
    </td>
    <td class="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">March
        17, 2020
    </td>
    <td class="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
        <a href="/"class="text-indigo-600 hover:text-indigo-900">Edit</a>
    </td>
</tr>
{/each}
