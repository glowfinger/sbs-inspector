<script lang="ts">
  import CheckIcon from './icons/CheckIcon.svelte';
  import ProcessingIcon from './icons/ProcessingIcon.svelte';
  import { linear } from 'svelte/easing';
  import { fade } from 'svelte/transition';

  export let proceed = () => {};

  export let cancel = () => {};

  export let disabled: boolean = false;
</script>

<div
  class="relative z-10"
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true">
  <div
    class="fixed inset-0 bg-zinc-500 bg-opacity-75 transition-opacity"
    transition:fade={{ duration: 200, easing: linear }} />
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div
      id="clicker"
      class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      on:click|self={cancel}>
      <div
        transition:fade={{ duration: 300, easing: linear }}
        class="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
        <div class="sm:flex sm:items-start">
          <div
            class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
            {#if disabled}
              <ProcessingIcon class="h-6 w-6 animate-spin text-green-600" />
            {:else}
              <CheckIcon class="h-6 w-6 text-green-600" />
            {/if}
          </div>
          <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3
              class="text-base font-semibold leading-6 text-zinc-900"
              id="modal-title">
              Complete visit
            </h3>
            <div class="mt-2">
              <p class="text-sm text-zinc-500">
                Are you sure you want to complete this visit? This action cannot
                be undone.
              </p>
            </div>
          </div>
        </div>
        {#if !disabled}
          <div
            class="mt-4 flex flex-col gap-2 sm:ml-10 sm:mt-4 sm:flex sm:flex-row sm:pl-4">
            <button
              type="button"
              on:click={proceed}
              class="inline-flex w-full justify-center bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:w-auto">
              Complete
            </button>

            <button
              type="button"
              on:click={cancel}
              class="inline-flex items-center justify-center bg-zinc-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600">
              Cancel
            </button>
          </div>
        {:else}
          <div
            class="mt-4 flex flex-col gap-2 sm:ml-10 sm:mt-4 sm:flex sm:flex-row sm:pl-4">
            <button
              type="button"
              disabled
              class="inline-flex w-full justify-center bg-blue-300 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto">
              Complete
            </button>
            <button
              type="button"
              disabled
              class="inline-flex items-center justify-center bg-zinc-300 px-3 py-2 text-sm font-semibold text-white">
              Cancel
            </button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
