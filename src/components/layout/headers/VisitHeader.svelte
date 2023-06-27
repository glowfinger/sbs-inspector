<script lang="ts">
  import type { Site } from "../../../lib/types/Site";
  import type Job from "../../../lib/types/Job";

  export let site: Site;
  export let job: Job;
</script>

<div class="overflow-hidden rounded-lg bg-white shadow border-gray-700 border">
  <div class="bg-white p-2">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="mb-2">
        <h1 class="text-2xl font-bold text-gray-900">{site.name} [{site.code}]</h1>
        <p class="text-sm font-medium text-gray-500">{job.type} {job.task}</p>
      </div>
    </div>
  </div>
</div>
