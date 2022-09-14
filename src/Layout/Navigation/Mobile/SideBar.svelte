<script lang="ts">
  import {fade, fly} from 'svelte/transition';
  import ProfileButton from './ProfileButton.svelte'
  import Logo from './Logo.svelte'
  import NavLinks from './NavLinks.svelte'
  import {isOpen} from '../../../NavigationStore'
  import CloseButton from './CloseButton.svelte'


  const duration = 300;

  const inFade = {duration};
  const outFade = {duration};

  function toggle() {
    isOpen.update((v) => {
      return !v;
    })
  }

</script>


{#if $isOpen}
    <div class="relative z-40 md:hidden" role="dialog" aria-modal="true"
         in:fade={inFade}
         out:fade={outFade}>
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>

        <div class="fixed inset-0 flex z-40" transition:fly={{ x: 0, duration: 300 }}>
            <div class="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800" in:fade={{duration: 300}}
                 out:fade={{duration: 300}}>
                <CloseButton/>
                <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                    <Logo/>
                    <NavLinks/>
                </div>
                <div class="flex-shrink-0 flex bg-gray-700 p-4">
                    <ProfileButton/>
                </div>

                <div class="flex-shrink-0 w-14" aria-hidden="true">
                    <!-- Force sidebar to shrink to fit close icon -->
                </div>
            </div>
        </div>
    </div>
{/if}

