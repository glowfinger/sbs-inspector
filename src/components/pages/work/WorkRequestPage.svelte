<script lang="ts">
  import {Link, navigate} from "svelte-routing";
  import {setWorkRequest} from "../../../lib/apiServices/work/WorkApiService";

  export let siteId;
  export let jobId;
  export let visitId;
  export let workId;

  let loading = true;

  const request = {
    comment: ''
  }

  function submit() {
    loading = false;
    setWorkRequest(workId, request)
      .then(complete)

    function complete() {
      navigate(`/site/${siteId}/job/${jobId}/visit/${visitId}`);
    }
  }
</script>

<form class="space-y-8 divide-y divide-gray-200" on:submit|preventDefault={submit}>
    <div class="space-y-8 divide-y divide-gray-200">
        <div>
            <div>
                <h3 class="text-lg font-medium leading-6 text-gray-900">Request unit</h3>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-6">
                    <label for="about" class="block text-sm font-medium text-gray-700">Please enter a reason</label>
                    <div class="mt-1">
                        <textarea id="about" name="about" rows="3"  bind:value={request.comment}
                                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="pt-5">
        <div class="flex justify-end">
            <Link to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action`}
                  class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Back to actions
            </Link>
            <button type="submit"
                    class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Save
            </button>
        </div>
    </div>
</form>
