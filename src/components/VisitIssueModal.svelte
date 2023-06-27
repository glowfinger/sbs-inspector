<script lang="ts">
  import CheckIcon from "./icons/CheckIcon.svelte";
  import ProcessingIcon from "./icons/ProcessingIcon.svelte";
  import { linear } from "svelte/easing";
  import { fade } from "svelte/transition";
  import ErrorIcon from "./icons/ErrorIcon.svelte";

  export let proceed = () => {
  };

  export let cancel = () => {
  };

  export let disabled: boolean = false;
</script>

<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
       transition:fade={{ duration: 200, easing: linear }}></div>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div id="clicker" class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
         on:click|self={cancel}>
      <div transition:fade={{ duration: 300, easing: linear }}
           class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
        <div class="sm:flex sm:items-start">
          <div
            class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">

            {#if disabled}
              <ProcessingIcon class="h-6 w-6 text-red-600 animate-spin" />
            {:else }
              <ErrorIcon class="h-6 w-6 text-red-600" />
            {/if}

          </div>
          <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Complete visit</h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">Are you sure you want to complete this visit? This action cannot be
                undone.</p>
            </div>
          </div>
        </div>
        {#if !disabled}
          <div class="mt-4 sm:ml-10 sm:mt-4 sm:flex sm:pl-4 flex gap-2 sm:flex-row flex-col">
            <button type="button" on:click={proceed}
                    class="inline-flex w-full justify-center rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:w-auto">
              Complete
            </button>

            <button type="button" on:click={cancel}
                    class="inline-flex items-center justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
              Cancel
            </button>
          </div>
        {:else }
          <div class="mt-4 sm:ml-10 sm:mt-4 sm:flex sm:pl-4 flex gap-2 sm:flex-row flex-col">
            <button type="button" disabled
                    class="inline-flex w-full justify-center rounded-md bg-blue-300 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto">
              Complete
            </button>
            <button type="button" disabled
                    class="inline-flex items-center justify-center rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-white">
              Cancel
            </button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
