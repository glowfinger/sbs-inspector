<script lang="ts">
  import {Link, navigate} from "svelte-routing";
  import {createWorkResult, updateWorkResult} from "../../../../lib/apiServices/work/WorkResultApiService";
  export let siteId;
  export let jobId;
  export let visitId;
  export let workId;

  let result = {
    id: 0,
    issue: false,
    temperature: 0,
    type: 'hot',
    value: null
  };



  async function submit() {
    if (result.id) {
      await updateWorkResult(result.id, result);
    } else {
      await createWorkResult(workId, result);
    }
    navigate(`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/result/mixed`);
  }

  const backLink = `/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/result/mixed`;
  const nextLink = `/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/confirmation`;
</script>

<h2 class="text-base font-semibold leading-6 text-gray-900">Fail safe</h2>

<div>
    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
    <div class="mt-1">
        <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com">
    </div>
</div>

<Link to={backLink}>Back</Link>
<Link to={nextLink}>Next</Link>
