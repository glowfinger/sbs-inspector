<script lang="ts">
  import { Link } from 'svelte-routing';
</script>

<div class="py-16">
  <div class="text-center">
    <p class="text-base font-semibold text-primary-600">404</p>
    <h1
      class="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
      Page not found.
    </h1>
    <p class="mt-2 text-base text-zinc-500">
      Sorry, we couldn’t find the page you’re looking for.
    </p>
    <div class="mt-6">
      <Link
        href="#"
        class="text-base font-medium text-primary-600 hover:text-primary-500">
        Go back home
        <span aria-hidden="true"> &rarr;</span>
      </Link>
    </div>
  </div>
</div>
