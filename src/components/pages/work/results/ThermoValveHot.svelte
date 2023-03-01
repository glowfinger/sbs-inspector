<script lang="ts">
  import {Link, navigate} from "svelte-routing";
  import TemperatureInput from "../../../forms/inputs/TemperatureInput.svelte";
  import {hot} from "../../../../lib/helpers/temperature/TemperatureRanges";
  import temperatureIssueCheck from "../../../../lib/helpers/temperature/TemperatureIssueCheck";
  import {onMount} from "svelte";
  import {getSiteWork} from "../../../../lib/apiServices/work/WorkApiService";
  import getResult from "../../../../lib/apiServices/helpers/results/GetResult";
  import {createWorkResult, updateWorkResult} from "../../../../lib/apiServices/work/WorkResultApiService";
  import type {Work} from "../../../../lib/types/Work";
  import type {WorkResult} from "../../../../lib/types/WorkResult";

  export let siteId;
  export let jobId;
  export let visitId;
  export let workId;

  let loading = true;

  let result: WorkResult = {
    id: null,
    issue: false,
    temperature: 0,
    type: 'hot',
    value: null
  };

  onMount(() => {
    getSiteWork(workId).then((response: Work) => {
      const found = getResult(response.results, 'hot');
      if (found) {
        result = found;
      }
      loading = false;
    });
  });

  $: result.issue = temperatureIssueCheck(result.temperature, hot);

  async function submit() {
    if (result.id) {
      await updateWorkResult(result.id, result);
    } else {
      await createWorkResult(workId, result);
    }
    navigate(`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/result/cold`);
  }
</script>

<TemperatureInput id="hot-temperature" name="Hot temperature" bind:value={result.temperature}/>

<Link to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/action`}>Back</Link>
<button on:click={submit}>Next</button>
