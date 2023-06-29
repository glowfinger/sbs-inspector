<script lang="ts">
  import TextInput from "../forms/inputs/TextInput.svelte";
  import PasswordInput from "../forms/inputs/PasswordInput.svelte";
  import SubmitButton from "../buttons/SubmitButton.svelte";
  import { authenticate } from "../../lib/apiServices/AuthenticationApiService";
  import { navigate } from "svelte-routing";
  import { isAuthenticated } from "../../lib/stores/AuthStore";
  import { setToken } from "../../lib/auth/TokenManager";


  let email: string = "";
  let password: string = "";
  let loading: boolean = false;
  let invalid: boolean = false;

  function login() {
    loading = true;

    authenticate(email, password)
      .then(success)
      .catch(failure);

    function success(data) {
      setToken(data.token)
      $isAuthenticated = true;
      navigate("/");
    }

    function failure() {
      $isAuthenticated = false;
      invalid = true;
      loading = false;
    }
  }

</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-auto w-64" src="/images/sbs-brand-header.png"
         alt="Your Company">
    <h1 class="text-center text-2xl leading-9">
      <span class="font-bold text-primary">Stockley</span>
      <span class="font-light text-red-700">|</span>
      <span class="font-light text-zinc-700">Building Services</span>
    </h1>
    <p class="text-center text-xs">
      <span class="font-light text-primary">PLUMBING</span>
      <span class="font-light text-red-700">|</span>
      <span class="font-light text-primary">ELECTRICAL</span>
      <span class="font-light text-red-700">|</span>
      <span class="font-light text-primary">MECHANICAL</span>
    </p>
  </div>

  <div class="relative my-8">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-zinc-300"></div>
    </div>
  </div>

  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="text-xl font-bold leading-9 tracking-tight text-zinc-700">SBS Inspector - Sign in</h2>
  </div>

  <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
    <form on:submit|preventDefault={login} class="space-y-6">
      <TextInput id="login-email" name="Email address" bind:value={email} loading={loading} error="" />
      <PasswordInput id="login-password" name="Password" bind:value={password} loading={loading} />
      <SubmitButton disabled={loading} />
    </form>
  </div>
</div>
