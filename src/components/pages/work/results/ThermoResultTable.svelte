<script lang="ts">
  import TemperatureTd from "../../../tables/TemperatureTd.svelte";
  import type {WorkResult} from "../../../../lib/types/WorkResult";
  import FailSafeTd from "../../../tables/FailSafeTd.svelte";
  import getResult from "../../../../lib/apiServices/helpers/results/GetResult.js";

  export let results: WorkResult[] = [];
</script>

<div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Hot
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Cold
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Mixed
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Fail safe
                    </th>
                </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                <tr>
                    <TemperatureTd result={getResult(results, 'hot')}/>
                    <TemperatureTd result={getResult(results, 'cold')}/>
                    <TemperatureTd result={getResult(results, 'mixed')}/>
                    <FailSafeTd result={getResult(results, 'fail_safe')}/>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
