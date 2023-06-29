<script lang="ts">
  import { navigate } from 'svelte-routing';

  export let siteId: number;
  export let jobId: number;
  export let visitId: number;
  export let workId: number;
  function cancel() {
    navigate(
      `/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action`
    );
  }
</script>

<form class="space-y-8 divide-y divide-zinc-200">
  <div class="space-y-8 divide-y divide-zinc-200">
    <div>
      <div>
        <h3 class="text-lg font-medium leading-6 text-zinc-900">s</h3>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
        <div class="sm:col-span-6">
          <label for="about" class="block text-sm font-medium text-zinc-700"
            >Comments</label>
          <div class="mt-1">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="block w-full border-zinc-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <p class="mt-2 text-sm text-zinc-500">
            Write a few sentences about yourself.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="pt-5">
    <div class="flex justify-end">
      <button
        type="button"
        on:click={cancel}
        class="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Cancel
      </button>
      <button
        type="submit"
        class="ml-3 inline-flex justify-center border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Save
      </button>
    </div>
  </div>
</form>
