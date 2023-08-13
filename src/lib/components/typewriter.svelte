<script lang="ts">
  import { disableAnimations } from '$lib/store';
  import Typewriter from 'svelte-typewriter';
</script>

{#if $disableAnimations}
  <slot />
{:else}
  <Typewriter mode="scramble" scrambleDuration={500}>
    <slot />
  </Typewriter>
{/if}
