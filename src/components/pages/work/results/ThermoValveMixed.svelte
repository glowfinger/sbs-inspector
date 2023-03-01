<script lang="ts">
  import {Link, navigate} from "svelte-routing";
  import TemperatureInput from "../../../forms/inputs/TemperatureInput.svelte";
  import temperatureIssueCheck from "../../../../lib/helpers/temperature/TemperatureIssueCheck";
  import {mixed} from "../../../../lib/helpers/temperature/TemperatureRanges";
  import {createWorkResult, updateWorkResult} from "../../../../lib/apiServices/work/WorkResultApiService";
  import {onMount} from "svelte";
  import {getSiteWork} from "../../../../lib/apiServices/work/WorkApiService";
  import getResult from "../../../../lib/apiServices/helpers/results/GetResult";
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
    type: 'mixed',
    value: null
  };

  onMount(() => {
    getSiteWork(workId).then((response: Work) => {
      const found = getResult(response.results, 'mixed');
      if (found) {
        result = found;
      }
      loading = false;
    });
  });

  $: result.issue = temperatureIssueCheck(result.temperature, mixed);

  async function submit() {
    if (result.id) {
      await updateWorkResult(result.id, result);
    } else {
      await createWorkResult(workId, result);
    }
    navigate(`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/result/fail-safe`);
  }
</script>

<TemperatureInput id="mixed-temperature" name="Mixed temperature" bind:value={result.temperature}/>

<Link to={`/site/${siteId}/job/${jobId}/visit/${visitId}/work/${workId}/result/cold`}>Back</Link>
<button on:click={submit}>Next</button>
