<script lang="ts">
  import { onMount } from "svelte";
  import { pageTitle } from '../lib/stores/NavigationStore';

  export let title: string;

  onMount(() => {
    $pageTitle = title;
  });
</script>

<div class="relative my-2 hidden lg:block">
  <div class="absolute inset-0 flex items-center" aria-hidden="true">
    <div class="w-full border-t border-zinc-300"></div>
  </div>
  <div class="relative flex justify-start">
    <span class="bg-zinc-100 pr-3 text-xl font-semibold text-zinc-900">{title}</span>
  </div>
</div>
