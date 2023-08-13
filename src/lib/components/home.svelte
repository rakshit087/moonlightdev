<script>
  import { UserType, userType } from '$lib/store';
  import Typewriter from './typewriter.svelte';
</script>

<div class="h-[60vh] flex flex-col justify-end snap-start snap-always">
  <h1 class="font-display text-white text-center text-4xl md:text-7xl lg:text-7xl mb-8">
    moonlight <br /> devs
  </h1>
  {#if $userType === UserType.DEVELOPER}
    <Typewriter
      customClasses="text-white text-center text-lg md:text-3xl mb-24"
      text={'find your next side hustle ✨'}
    />
  {:else}
    <Typewriter
      customClasses="text-white text-center text-lg md:text-3xl mb-24"
      text={'find part time devs on demand ✨'}
    />
  {/if}
</div>
