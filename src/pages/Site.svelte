<script lang="ts">
  import {sites} from "../Store";
  import {onMount} from "svelte";

  export let params;
  let site;


  onMount(() => {
    $: {
      if (params.hasOwnProperty('siteKey')) {
        site = $sites.find((s => s.slug === params.siteKey))
      }
    }
  })

</script>

{#if site}

    <div class="py-6">

        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">{site.name}</h1>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
                <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
            </div>
            <!-- /End replace -->
        </div>
    </div>
{/if    }
