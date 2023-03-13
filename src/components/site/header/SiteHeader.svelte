<script lang="ts">
  import type {Site} from "../../../lib/types/Site";
  export let site: Site;
</script>

<div class="bg-white">
    <div class=" md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
        <div class="min-w-0 flex-1">
            <div class="flex items-center">
                <div>
                    <div class="flex items-center">
                        <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">Visit</h1>
                    </div>
                    <dl class=" flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                        <dt class="sr-only">Company</dt>
                        <dd class="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                            <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                      d="M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4zm3-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM11 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z"
                                      clip-rule="evenodd"/>
                            </svg>
                            {site.name}
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        <slot/>
    </div>
</div>
