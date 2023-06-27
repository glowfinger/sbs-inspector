<script lang="ts">
  import DescaleIcon from "../../icons/DescaleIcon.svelte";
  import WorkActionLink from "./WorkActionLink.svelte";

  export let siteId: number;
  export let jobId: number;
  export let visitId: number;
  export let workId: number;
</script>

<ul class="mt-4 divide-y divide-gray-200">
  <WorkActionLink
    title="Descaled shower head"
    message="The shower head was in working condition and successfully descaled"
    link={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action/descaled`}
  >
    <span
      class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-400"
    >
      <DescaleIcon class="h-6 w-6 fill-white" />
    </span>
  </WorkActionLink>
  <WorkActionLink
    title="Replaced shower head"
    message="The shower head has been replaced with a new unit"
    link={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action/replaced`}
  >
    <span
      class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-400"
    >
      <DescaleIcon class="h-6 w-6 fill-white" />
    </span>
  </WorkActionLink>
  <WorkActionLink
    title="Request new shower head"
    message="The shower head was damaged or could not be descaled"
    link={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action/request`}
  >
    <span
      class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-400"
    >
      <DescaleIcon class="h-6 w-6 fill-white" />
    </span>
  </WorkActionLink>
  <WorkActionLink
    title="Shower head inaccessible"
    message="Unable to access the location of the shower head"
    link={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action/inaccessible`}
  >
    <span
      class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400"
    >
      <DescaleIcon class="h-6 w-6 fill-white" />
    </span>
  </WorkActionLink>
</ul>
