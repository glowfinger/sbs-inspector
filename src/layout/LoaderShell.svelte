<script lang="ts">
  import Loader from "./Loader.svelte";

  export let loaded: boolean;

</script>

{#if !loaded}
    <Loader/>
{:else }
    <slot></slot>
{/if}
