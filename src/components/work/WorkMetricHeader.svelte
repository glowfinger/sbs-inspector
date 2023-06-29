<script>
  import WorkMetric from './WorkMetric.svelte';

  export let siteId;
  export let jobId;
  export let visitId;
</script>

<div>
  <h2 class="text-sm font-medium text-zinc-900">Work outcome filter</h2>
  <ul
    class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-6 xl:grid-cols-4">
    <WorkMetric
      title="All"
      to={`/site/${siteId}/job/${jobId}/visit/${visitId}/status/:status`} />
    <WorkMetric
      title="Pending"
      to={`/site/${siteId}/job/${jobId}/visit/${visitId}/status/pending`} />
    <WorkMetric
      title="Started"
      to={`/site/${siteId}/job/${jobId}/visit/${visitId}/status/started`} />
    <WorkMetric
      title="Inaccessible"
      to={`/site/${siteId}/job/${jobId}/visit/${visitId}/status/inaccessible`} />
    <WorkMetric
      title="Completed"
      to={`/site/${siteId}/job/${jobId}/visit/${visitId}/status/completed`} />
  </ul>
</div>
