<script lang="ts">
  import SiteList from '../SiteList.svelte'
  import { get } from '../services/SiteApiService'

  export let params;



  let promise = get().then((response) => response.json())


</script>


<div class="flex min-w-0 flex-1 flex-col overflow-hidden">
    <div class="lg:hidden">
        <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
            <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=500"
                     alt="Your Company">
            </div>
            <div>
                <button type="button"
                        class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600">
                    <span class="sr-only">Open sidebar</span>
                    <!-- Heroicon name: outline/bars-3 -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div class="relative z-0 flex flex-1 overflow-hidden">
        <main class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
            <!-- Breadcrumb -->
            <nav class="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden" aria-label="Breadcrumb">
                <a href="#" class="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
                    <!-- Heroicon name: mini/chevron-left -->
                    <svg class="-ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                              clip-rule="evenodd"/>
                    </svg>
                    <span>Directory</span>
                </a>
            </nav>

            <article>
                <!-- Profile header -->
                <div>
                    <div>
                        <img class="h-32 w-full object-cover lg:h-48"
                             src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                             alt="">
                    </div>
                    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                            <div class="flex">
                                <img class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                     src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                     alt="">
                            </div>
                            <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                <div class="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                                    <h1 class="truncate text-2xl font-bold text-gray-900">Ricardo Cooper</h1>
                                </div>
                                <div class="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                                    <button type="button"
                                            class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                                        <!-- Heroicon name: mini/envelope -->
                                        <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"/>
                                            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"/>
                                        </svg>
                                        <span>Message</span>
                                    </button>
                                    <button type="button"
                                            class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                                        <!-- Heroicon name: mini/phone -->
                                        <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                        <span>Call</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                            <h1 class="truncate text-2xl font-bold text-gray-900">Ricardo Cooper</h1>
                        </div>
                    </div>
                </div>

                <!-- Tabs -->
                <div class="mt-6 sm:mt-2 2xl:mt-5">
                    <div class="border-b border-gray-200">
                        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                <!-- Current: "border-pink-500 text-gray-900", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                                <a href="#"
                                   class="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                                   aria-current="page">Profile</a>

                                <a href="#"
                                   class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Calendar</a>

                                <a href="#"
                                   class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Recognition</a>
                            </nav>
                        </div>
                    </div>
                </div>

                <!-- Description list -->
                <div class="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
                    <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">Phone</dt>
                            <dd class="mt-1 text-sm text-gray-900">(555) 123-4567</dd>
                        </div>

                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">Email</dt>
                            <dd class="mt-1 text-sm text-gray-900">ricardocooper@example.com</dd>
                        </div>

                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">Title</dt>
                            <dd class="mt-1 text-sm text-gray-900">Senior Front-End Developer</dd>
                        </div>

                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">Team</dt>
                            <dd class="mt-1 text-sm text-gray-900">Product Development</dd>
                        </div>

                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">Location</dt>
                            <dd class="mt-1 text-sm text-gray-900">San Francisco</dd>
                        </div>

                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">Sits</dt>
                            <dd class="mt-1 text-sm text-gray-900">Oasis, 4th floor</dd>
                        </div>

                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">Salary</dt>
                            <dd class="mt-1 text-sm text-gray-900">$145,000</dd>
                        </div>

                        <div class="sm:col-span-1">
                            <dt class="text-sm font-medium text-gray-500">Birthday</dt>
                            <dd class="mt-1 text-sm text-gray-900">June 8, 1990</dd>
                        </div>

                        <div class="sm:col-span-2">
                            <dt class="text-sm font-medium text-gray-500">About</dt>
                            <dd class="mt-1 max-w-prose space-y-5 text-sm text-gray-900">
                                <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit
                                    dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere
                                    aliquam.</p>
                                <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet.
                                    Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus
                                    felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam
                                    lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus
                                    suspendisse.</p>
                            </dd>
                        </div>
                    </dl>
                </div>

                <!-- Team member list -->
                <div class="mx-auto mt-8 max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
                    <h2 class="text-sm font-medium text-gray-500">Team members</h2>
                    <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-gray-400">
                            <div class="flex-shrink-0">
                                <img class="h-10 w-10 rounded-full"
                                     src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt="">
                            </div>
                            <div class="min-w-0 flex-1">
                                <a href="#" class="focus:outline-none">
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    <p class="text-sm font-medium text-gray-900">Leslie Alexander</p>
                                    <p class="truncate text-sm text-gray-500">Co-Founder / CEO</p>
                                </a>
                            </div>
                        </div>

                        <div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-gray-400">
                            <div class="flex-shrink-0">
                                <img class="h-10 w-10 rounded-full"
                                     src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt="">
                            </div>
                            <div class="min-w-0 flex-1">
                                <a href="#" class="focus:outline-none">
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    <p class="text-sm font-medium text-gray-900">Michael Foster</p>
                                    <p class="truncate text-sm text-gray-500">Co-Founder / CTO</p>
                                </a>
                            </div>
                        </div>

                        <div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-gray-400">
                            <div class="flex-shrink-0">
                                <img class="h-10 w-10 rounded-full"
                                     src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt="">
                            </div>
                            <div class="min-w-0 flex-1">
                                <a href="#" class="focus:outline-none">
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    <p class="text-sm font-medium text-gray-900">Dries Vincent</p>
                                    <p class="truncate text-sm text-gray-500">Manager, Business Relations</p>
                                </a>
                            </div>
                        </div>

                        <div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-gray-400">
                            <div class="flex-shrink-0">
                                <img class="h-10 w-10 rounded-full"
                                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt="">
                            </div>
                            <div class="min-w-0 flex-1">
                                <a href="#" class="focus:outline-none">
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    <p class="text-sm font-medium text-gray-900">Lindsay Walton</p>
                                    <p class="truncate text-sm text-gray-500">Front-end Developer</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
        <aside class="hidden w-96 flex-shrink-0 border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
            <div class="px-6 pt-6 pb-4">
                <h2 class="text-lg font-medium text-gray-900">Directory</h2>
                <p class="mt-1 text-sm text-gray-600">Search directory of 3,018 employees</p>
                <form class="mt-6 flex space-x-4" action="#">
                    <div class="min-w-0 flex-1">
                        <label for="search" class="sr-only">Search</label>
                        <div class="relative rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <!-- Heroicon name: mini/magnifying-glass -->
                                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <input type="search" name="search" id="search"
                                   class="block w-full rounded-md border-gray-300 pl-10 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                                   placeholder="Search">
                        </div>
                    </div>
                    <button type="submit"
                            class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                        <!-- Heroicon name: mini/funnel -->
                        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                             fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                                  clip-rule="evenodd"/>
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                </form>
            </div>


            {#await promise}
                <p>Loading</p>
            {:then sites}
                <SiteList sites={sites}/>
            {:catch error}
                <p style="color: red">{error.message}</p>
            {/await}



        </aside>
    </div>
</div>


