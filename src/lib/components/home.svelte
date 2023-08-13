<script>
  import { UserType, userType } from '$lib/store';
  import Typewriter from './typewriter.svelte';
</script>

<div class="h-[60vh] flex flex-col justify-end snap-start snap-always">
  <h1 class="font-display text-white text-center text-4xl md:text-7xl lg:text-7xl mb-8">
    moonlight <br /> devs
  </h1>
  {#if $userType === UserType.DEVELOPER}
    <Typewriter>
      <p class="text-white text-center text-lg md:text-3xl mb-24">
        A platform for developers to find their dream job.
      </p>
    </Typewriter>
  {:else}
    <Typewriter>
      <p class="text-white text-center text-lg md:text-3xl mb-24">
        A platform for developers to find their dream developer.
      </p>
    </Typewriter>
  {/if}
</div>
