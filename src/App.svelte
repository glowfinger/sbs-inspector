<script lang='ts'>
  import { onMount } from 'svelte';
  import { isOnline } from './Store.js';
  import LoginRoute from './components/pages/LoginPage.svelte';
  import { isAuthenticated, user } from './lib/stores/AuthStore';
  import { clearToken, hasToken } from './lib/auth/TokenManager';
  import LoadingPage from './components/pages/LoadingPage.svelte';
  import { getCurrentUser } from './lib/apiServices/AuthenticationApiService';
  import Pages from './components/pages/Pages.svelte';

  let loaded: boolean = false;

  onMount(async () => {
    if (hasToken()) {
      await getCurrentUser()
        .then((currentUser) => {
          $user = currentUser;
          loaded = true;
          $isAuthenticated = true;
        })
        .catch(() => {
          loaded = true;
          $isAuthenticated = false;
          clearToken();
        });
    } else {
      loaded = true;
      $isAuthenticated = false;
    }
  });
</script>

<svelte:window bind:online={$isOnline} />
<svelte:head>
  {#if $isOnline}
    <title>SBS Inspector - Online</title>
  {:else}
    <title>SBS Inspector - Offline</title>
  {/if}
</svelte:head>

{#if !loaded}
  <LoadingPage />
{:else if $isAuthenticated}
  <Pages />
{:else}
  <LoginRoute />
{/if}
