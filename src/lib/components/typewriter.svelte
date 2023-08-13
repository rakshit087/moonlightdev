<script lang="ts">
  import { disableAnimations } from '$lib/store';
  import Typewriter from 'svelte-typewriter';

  export let text: string;
  export let customClasses: string;
</script>

{#if $disableAnimations}
  <p class={customClasses}>
    {text}
  </p>
{:else}
  <div class="flex {customClasses}">
    {text.slice(0, 2)}
    <Typewriter mode="scramble" scrambleDuration={500} element="span">
      {text.slice(2)}
    </Typewriter>
  </div>
{/if}
