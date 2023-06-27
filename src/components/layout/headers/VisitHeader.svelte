<script lang="ts">
  import type Site from "../../../lib/types/Site";
  import type Job from "../../../lib/types/Job";
  import ShowerHeadIcon from "../../icons/ShowerHeadIcon.svelte";
  import ThermoValveIcon from "../../icons/ThermoValveIcon.svelte";

  export let site: Site;
  export let job: Job;
</script>

<div class="col-span-1 flex border border-gray-300 bg-white shadow">
  {#if job.type === "shower_head"}
    <div
      class="flex w-16 flex-shrink-0 items-center justify-center bg-blue-400  text-sm font-medium text-white"
    >
      <ShowerHeadIcon class="h-10 w-10 fill-white" />
    </div>
  {:else if job.type === "thermo_valve"}
    <div
      class="flex w-16 flex-shrink-0 items-center justify-center bg-green-400 text-sm font-medium text-white"
    >
      <ThermoValveIcon class="h-10 w-10 fill-white" />
    </div>
  {/if}
  <div class="flex flex-1 items-center justify-between truncate bg-white">
    <div class="flex-1 truncate px-4 py-2 text-sm">
      <p class="text-sm font-bold text-gray-900">{site.name}</p>
      <p class="truncate text-sm text-gray-500">
        ({site.code}) / {job.type}
        {job.task}
      </p>
    </div>
  </div>
</div>
