<script lang="ts">
  export let text: string;
</script>

<div class="relative my-2">
  <div class="absolute inset-0 flex items-center" aria-hidden="true">
    <div class="w-full border-t border-zinc-300" />
  </div>
  <div class="relative flex justify-start">
    <span class="text-md bg-zinc-100 pr-3 font-semibold text-zinc-900"
      >{text}</span>
  </div>
</div>
