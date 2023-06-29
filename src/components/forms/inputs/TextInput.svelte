<script lang="ts">
  export let id: string;
  export let error = false;
  export let name: string;
  export let loading = false;
  export let value: string;
</script>

<div class="col-span-6 leading-6 sm:col-span-4">
  <label
    for={id}
    class="block text-sm font-medium {error ? 'text-red-600' : 'text-zinc-700'}"
    >{name}</label>
  <div class="relative mt-1 shadow-sm">
    <input
      bind:value
      disabled={loading}
      type="text"
      name={id}
      id={id}
      autocomplete="off"
      class="disabled:bg-slate-200 block w-full border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 {error
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

