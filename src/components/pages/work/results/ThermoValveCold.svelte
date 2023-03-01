<script lang="ts">
  import {Link, navigate} from "svelte-routing";
  import TemperatureInput from "../../../forms/inputs/TemperatureInput.svelte";
  import temperatureIssueCheck from "../../../../lib/helpers/temperature/TemperatureIssueCheck";
  import {cold, hot} from "../../../../lib/helpers/temperature/TemperatureRanges";
  import {onMount} from "svelte";
  import {getSiteWork} from "../../../../lib/apiServices/work/WorkApiService";
  import getResult from "../../../../lib/apiServices/helpers/results/GetResult";
  import {createWorkResult, updateWorkResult} from "../../../../lib/apiServices/work/WorkResultApiService";
  import type {WorkResult} from "../../../../lib/types/WorkResult";
  import type {Work} from "../../../../lib/types/Work";

  export let siteId;
  export let jobId;
  export let visitId;
  export let workId;

  let loading = true;

  let result: WorkResult = {
    id: 0,
    issue: false,
    temperature: 0,
    type: 'cold',
    value: null
  };

  onMount(() => {
    getSiteWork(workId).then((response: Work) => {
      const found = getResult(response.results, 'cold');
      if (found) {
        result = found;
      }
      loading = false;
    });
  });

  $: result.issue = temperatureIssueCheck(result.temperature, cold);

  async function submit() {
    if (result.id) {
      await updateWorkResult(result.id, result);
    } else {
      await createWorkResult(workId, result);
    }
    navigate(`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/result/mixed`);
  }
</script>

<TemperatureInput id="cold-temperature" name="Cold temperature" bind:value={result.temperature}/>

<Link to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/result/hot`}>Back</Link>
<button on:click={submit}>Next</button>
