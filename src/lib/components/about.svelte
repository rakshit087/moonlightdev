<script>
  import StepCard from './step_card.svelte';
  import Typewriter from './typewriter.svelte';
  import { userType, UserType } from '$lib/store';
  import autoAnimate from '@formkit/auto-animate';
</script>

<div id="about" class="min-h-screen flex flex-col justify-center snap-start snap-always py-12">
  <p class="text-4xl font-semibold">Find awesome</p>
  {#if $userType === UserType.DEVELOPER}
    <Typewriter customClasses="text-4xl font-semibold" text="moonlighting opportunities" />
  {:else}
    <Typewriter customClasses="text-4xl font-semibold" text="developers for your project" />
  {/if}
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16 h-48" use:autoAnimate>
    {#if $userType === UserType.DEVELOPER}
      <StepCard
        step="1"
        title="Make a profile"
        description="Create a profile with your skills, experience, and availability. We'll match you with opportunities that fit your profile."
      />
      <StepCard
        step="2"
        title="Search and apply"
        description="Search by your favorite language, framework, or tool. Write a small proposal and apply for the job."
      />
      <StepCard
        step="3"
        title="Get hired 🚀"
        description="If the client likes your proposal, they'll reach out to you. You can negotiate the terms and get started."
      />
    {:else}
      <StepCard
        step="1"
        title="Post a Job"
        description="Enter details, requirements, and budget for your project and wait for developers to apply."
      />
      <StepCard
        step="2"
        title="Browse applicants"
        description="Browse through the applicants and their proposals. You can also search by language, framework, or tool."
      />
      <StepCard
        step="3"
        title="Hire a developer"
        description="Once you find the right developer, you can negotiate the terms and get started."
      />
    {/if}
  </div>
</div>
