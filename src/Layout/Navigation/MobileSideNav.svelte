<script lang="ts">
  import {fade, fly} from 'svelte/transition';
  import {isOpen} from '../../NavigationStore'

  export let links;

  const duration = 300;

  const inFade = {duration};
  const outFade = {duration};

  function toggle() {
    isOpen.update((v) => {
      return !v;
    })
  }

</script>
{#if $isOpen}
    <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true"
         in:fade={inFade}
         out:fade={outFade}>
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75" on:click={toggle}></div>

        <div class="fixed inset-0 z-40 flex" transition:fly={{ x: 0, duration: 300 }}>
            <div class="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none"
                 in:fade={{duration: 300}}
                 out:fade={{duration: 300}}>
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                    <button type="button"
                            class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            on:click={toggle}>
                        <span class="sr-only">Close sidebar</span>
                        <!-- Heroicon name: outline/x-mark -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div class="flex flex-shrink-0 items-center px-4">
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                             alt="Your Company">
                    </div>
                    <nav aria-label="Sidebar" class="mt-5">
                        <div class="space-y-1 px-2">

                            {#each links as {url, title, icon}}
                            <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
                            <a href={url}
                               class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
                                <!--
                                  Heroicon name: outline/home

                                  Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
                                -->
                                <svg class="text-gray-500 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d={icon}/>
                                </svg>
                                {title}
                            </a>
                            {/each}

                        </div>
                    </nav>
                </div>
                <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
                    <a href="/profile" class="group block flex-shrink-0">
                        <div class="flex items-center">
                            <div>
                                <img class="inline-block h-10 w-10 rounded-full"
                                     src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                     alt="">
                            </div>
                            <div class="ml-3">
                                <p class="text-base font-medium text-gray-700 group-hover:text-gray-900">Whitney
                                    Francis</p>
                                <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="w-14 flex-shrink-0" aria-hidden="true"></div>
        </div>
    </div>
{/if}
