<script lang="ts">
  import { onMount } from 'svelte';

  export let logout;

  onMount(() => logout());
</script>

<div class="mx-auto max-w-2xl px-6 py-16 text-center sm:py-20 lg:px-8">
  <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    <span class="block">Logging out</span>
  </h2>
</div>
