<script lang="ts">
  import { onMount } from 'svelte';

  export let id: string;
  export let error = false;
  export let name;
  export let loading = false;
  export let value;

  function handleBlur() {
    if (value) {
      value = Number(parseFloat(value).toFixed(1));
    }
  }

  let elm;

  onMount(function () {
    elm.focus();
  });

  // $: value = value.replace(/[^0-9]/g, '')
</script>

<div class="col-span-6 sm:col-span-4">
  <label
    for={id}
    class="block text-sm font-medium {error ? 'text-red-600' : 'text-zinc-900'}"
    >{name}</label>
  <div class="relative mt-1 shadow-sm">
    <input
      bind:value={value}
      on:blur={handleBlur}
      disabled={loading}
      type="text"
      name={id}
      id={id}
      bind:this={elm}
      inputmode="decimal"
      autocomplete="off"
      class="mt-1 block w-full border px-3 py-2 shadow-sm focus:outline-none disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm {error
        ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
        : 'border-zinc-300 focus:border-zinc-500 focus:ring-zinc-500'}" />
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      {#if error}
        <svg
          class="h-5 w-5 text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd" />
        </svg>
      {/if}
    </div>
  </div>
  {#if error}
    <p class="mt-2 text-sm text-red-600" id={`${id}-error`}>{error}</p>
  {/if}
</div>
