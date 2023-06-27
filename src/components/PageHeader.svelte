<script lang="ts">
  export let text: string;
</script>

<div class="relative my-2">
  <div class="absolute inset-0 flex items-center" aria-hidden="true">
    <div class="w-full border-t border-gray-300" />
  </div>
  <div class="relative flex justify-start">
    <span class="bg-gray-100 pr-3 text-xl font-semibold text-gray-900"
      >{text}</span
    >
  </div>
</div>
