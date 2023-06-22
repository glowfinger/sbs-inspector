<script lang="ts">
  import SecondaryButtonLink from "./links/SecondaryButtonLink.svelte";
  import { navigate } from "svelte-routing";
  import CheckIcon from "./icons/CheckIcon.svelte";

  export let cancelLink: string;

  export let proceed = () => {}


  function cancel(): void {
    navigate(cancelLink);
  }

  export let disabled: boolean = false;

</script>


<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div id="clicker" class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
         on:click|self={cancel}>
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <div
        class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
        <div class="sm:flex sm:items-start">
          <div
            class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
            <CheckIcon class="h-6 w-6 text-green-600"/>
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
            <SecondaryButtonLink to={cancelLink} text="Cancel" />
          </div>
        {:else }
          <div class="mt-4 sm:ml-10 sm:mt-4 sm:flex sm:pl-4 flex gap-2 sm:flex-row flex-col">
            <button type="button" disabled
                    class="inline-flex w-full justify-center rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:w-auto">
              Complete
            </button>
            <SecondaryButtonLink to={cancelLink} text="Cancel" />
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
