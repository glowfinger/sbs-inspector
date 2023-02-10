<script lang="ts">
    import type {Site} from "../../lib/types/Site";

    export let site: Site;
</script>

<div class="bg-gray-300 px-2 py-1">
    <h3 class="text-lg font-medium text-gray-900">{site.name}</h3>
</div>
