<script lang="ts">
    
 
import { get } from "../services/SiteApiService";
   
  let promise = get().then((response) => response.json());
</script>
{#await promise}
<p>Loading</p>
{:then site}


<main
      class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last"
    >
      <!-- Breadcrumb -->
      <nav
        class="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
        aria-label="Breadcrumb"
      >
        <a
          href="#"
          class="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
        >
          <!-- Heroicon name: mini/chevron-left -->
          <svg
            class="-ml-2 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Directory</span>
        </a>
      </nav>

      <article>
      
        <div class="border-b border-gray-200 pb-5">
            <h3 class="text-lg font-medium leading-6 text-gray-900">{site[0].name}</h3>
          </div>

        <!-- Tabs -->
        <div class="mt-6 sm:mt-2 2xl:mt-5">
          <div class="border-b border-gray-200">
            <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                <!-- Current: "border-pink-500 text-gray-900", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                <a
                  href="#"
                  class="border-pink-500 text-orange-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  aria-current="page">Account</a
                >

                <a
                  href="#"
                  class="border-transparent text-green-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  >Calendar</a
                >

                <a
                  href="#"
                  class="border-transparent text-blue-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  >Inspections</a
                >

                <a
                href="#"
                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                >Service History</a
              >
              </nav>
            </div>
          </div>
        </div>

        <!-- Description list -->
        <div class="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
          <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">

            <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-black-500">Booking Required Date</dt>
                <dd class="mt-1 text-sm text-black-900">{site[0].works[0].reminderAt}</dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-black-500">Booking not Required Date</dt>
                <dd class="mt-1 text-sm text-gray-900">{site[0].works[0].updatedAt}</dd>
              </div>
    
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-black-500">Overdue Date</dt>
                <dd class="mt-1 text-sm text-gray-900">{site[0].works[0].overdueAt}</dd>
              </div>

            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-black-500">Booking Date</dt>
              <dd class="mt-1 text-sm text-gray-900">{site[0].works[0].bookedAt}</dd>
            </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-black-500">Start Date</dt>
                <dd class="mt-1 text-sm text-gray-900">{site[0].works[0].startedAt}</dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-black-500">Cancelled Date</dt>
                <dd class="mt-1 text-sm text-gray-900">{site[0].works[0].cancelledAt}</dd>
              </div>


            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">Email</dt>
              <dd class="mt-1 text-sm text-gray-900">
                {site[0].name}@example.com
              </dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">Venue</dt>
              <dd class="mt-1 text-sm text-gray-900">
                Leisure Center
              </dd>
            </div>


            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">Address</dt>
              <dd class="mt-1 text-sm text-gray-900">{site[0].address.postcode}</dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">Location</dt>
              <dd class="mt-1 text-sm text-gray-900">{site[0].works[0].location}</dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">Payment</dt>
              <dd class="mt-1 text-sm text-gray-900">£5,000</dd>
            </div>

          </dl>
        </div>

       
      </article>
    </main>
    {:catch error}
<p style="color: red">{error.message}</p>
{/await}