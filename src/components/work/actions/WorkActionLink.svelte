<script lang="ts">
  import { Link } from 'svelte-routing';
  import ChevronRight from '../../icons/chevrons/ChevronRight.svelte';

  export let title: string;
  export let message: string;
  export let link: string;
</script>

<li>
  <div class="group relative flex items-start space-x-2 py-4">
    <div class="flex-shrink-0">
      <slot />
    </div>
    <div class="min-w-0 flex-1">
      <div class="text-sm font-medium text-zinc-900">
        <Link to={link}>
          <span class="absolute inset-0" aria-hidden="true" />
          {title}
        </Link>
      </div>
      <p class="text-sm text-zinc-500">{message}</p>
    </div>
    <div class="flex-shrink-0 self-center">
      <ChevronRight class="h-5 w-5 text-zinc-400 group-hover:text-zinc-500" />
    </div>
  </div>
</li>
