<script lang="ts">
  import TemperatureTd from '../../../tables/TemperatureTd.svelte';
  import type WorkResult from '../../../../lib/types/WorkResult';
  import FailSafeTd from '../../../tables/FailSafeTd.svelte';
  import getResult from '../../../../lib/apiServices/helpers/results/GetResult.js';
  export let results: WorkResult[] = [];
</script>

<div class=" mt-4 overflow-x-auto shadow">
  <div class="inline-block min-w-full align-middle sm:px-6 lg:px-8">
    <div
      class="overflow-hidden border border-zinc-300 bg-white ring-1 ring-black ring-opacity-5 sm:rounded-lg">
      <table class="min-w-full divide-y divide-zinc-300">
        <thead class="bg-zinc-50">
          <tr>
            <th
              scope="col"
              class="px-2 py-2 text-left text-sm font-semibold text-zinc-900">
              Hot
            </th>
            <th
              scope="col"
              class="px-2 py-2 text-left text-sm font-semibold text-zinc-900">
              Cold
            </th>
            <th
              scope="col"
              class="px-2 py-2 text-left text-sm font-semibold text-zinc-900">
              Mixed
            </th>
            <th
              scope="col"
              class="px-2 py-2 text-left text-sm font-semibold text-zinc-900">
              Fail safe
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-zinc-200 bg-white">
          <tr>
            <TemperatureTd result={getResult(results, 'hot')} />
            <TemperatureTd result={getResult(results, 'cold')} />
            <TemperatureTd result={getResult(results, 'mixed')} />
            <FailSafeTd result={getResult(results, 'fail_safe')} />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
