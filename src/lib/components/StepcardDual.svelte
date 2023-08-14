<script lang="ts">
  import { UserType, userType } from '$lib/store';
  import StepCard from './StepCard.svelte';
  export let step: string;
  export let devTitle: string;
  export let devDescription: string;
  export let orgTitle: string;
  export let orgDescription: string;
</script>

{#if $userType === UserType.DEVELOPER}
  <StepCard {step} title={devTitle} description={devDescription} />
{:else}
  <StepCard {step} title={orgTitle} description={orgDescription} />
{/if}
