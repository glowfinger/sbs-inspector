<script lang="ts">
  import { Link } from 'svelte-routing';
  import BreadcrumbArrowIcon from './BreadcrumbArrowIcon.svelte';

  export let to: string;
  export let text: string;
</script>

<nav aria-label="Breadcrumb" class="mb-2">
  <div class="items-start">
    <Link
      to={to}
      class="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-slate-900">
      <BreadcrumbArrowIcon />
      <span>{text}</span>
    </Link>
  </div>
</nav>
