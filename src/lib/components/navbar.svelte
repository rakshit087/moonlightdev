<script>
  import Moon from '$lib/assets/icons/moon.svelte';
  import SwapIcon from '$lib/assets/icons/swap_icon.svelte';
  import TypewriterDual from './TypewriterDual.svelte';
  import { swapUserType } from '$lib/utils/swapUser';
  import { enableAnimations } from '$lib/utils/enableAnimations';
</script>

<nav
  class="fixed right-4 left-4 top-8 py-2 px-4 md:right-20 md:left-20 lg:right-24 lg:left-24 z-50 flex justify-between items-center border-2 rounded-2xl backdrop-blur-md mix-blend-difference"
>
  <Moon class="text-white text-3xl" />
  <div class="text-sm md:text-lg text-white flex items-center absolute right-1/2 translate-x-1/2">
    <a href="#about" class="mr-4 lg:mr-8">About</a>
    <a href="#waitlist">Waitlist</a>
  </div>
  <div class="flex items-center text-white">
    <div class="hidden md:block">
      <TypewriterDual
        customClasses="text-sm md:text-lg mr-4 lg:mr-8"
        devText="Developer"
        orgText="Organisation"
      />
    </div>
    <button
      class="text-3xl cursor-pointer hover:bg-white hover:text-black transition-colors rounded-md"
      on:click={() => {
        swapUserType();
        enableAnimations();
      }}
    >
      <SwapIcon />
    </button>
  </div>
</nav>
