<script lang="ts">
  import { Link, navigate } from 'svelte-routing';
  import { setWorkServiced } from '../../../lib/apiServices/work/WorkApiService';

  export let siteId: number;
  export let jobId: number;
  export let visitId: number;
  export let workId: number;

  let loading = true;

  const request = {
    comment: '',
    submittedAt: new Date(),
  };

  function submit() {
    loading = false;

    request.submittedAt = new Date();
    setWorkServiced(workId, request).then(complete);

    function complete() {
      navigate(`/site/${siteId}/job/${jobId}/visit/${visitId}`);
    }
  }
</script>

<form
  class="space-y-8 divide-y divide-zinc-200"
  on:submit|preventDefault={submit}>
  <div class="space-y-8 divide-y divide-zinc-200">
    <div>
      <div>
        <h3 class="text-lg font-medium leading-6 text-zinc-900">
          Location Serviced
        </h3>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
        <div class="sm:col-span-6">
          <label for="about" class="block text-sm font-medium text-zinc-700"
            >Any comments</label>
          <div class="mt-1">
            <textarea
              id="about"
              name="about"
              rows="3"
              bind:value={request.comment}
              class="block w-full border-zinc-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pt-5">
    <div class="flex justify-end">
      <Link
        to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action`}
        class="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
        Back to actions
      </Link>
      <button
        type="submit"
        class="ml-3 inline-flex justify-center border border-transparent bg-zinc-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2">
        Save
      </button>
    </div>
  </div>
</form>
