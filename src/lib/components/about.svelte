<script>
  import autoAnimate from '@formkit/auto-animate';
  import TypewriterDual from './typewriter_dual.svelte';
  import StepCardDual from './stepcard_dual.svelte';
</script>

<div id="about" class="min-h-screen flex flex-col justify-center snap-start snap-always py-12">
  <p class="text-4xl font-semibold">Find awesome</p>
  <TypewriterDual
    customClasses="text-4xl font-semibold"
    devText="moonlighting opportunities"
    orgText="developers for your project"
  />
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16 h-48" use:autoAnimate>
    <StepCardDual
      step="1"
      devTitle="Make a profile"
      devDescription="Create a profile with your skills, experience, and availability. We'll match you with opportunities that fit your profile."
      orgTitle="Post a Job"
      orgDescription="Enter details, requirements, and budget for your project and wait for developers to apply."
    />
    <StepCardDual
      step="2"
      devTitle="Search and apply"
      devDescription="Search by your favorite language, framework, or tool. Write a small proposal and apply for the job."
      orgTitle="Browse applicants"
      orgDescription="Browse through the applicants and their proposals. You can also search by language, framework, or tool."
    />
    <StepCardDual
      step="3"
      devTitle="Get hired 🚀"
      devDescription="If the client likes your proposal, they'll reach out to you. You can negotiate the terms and get started."
      orgTitle="Hire a developer"
      orgDescription="Once you find the right developer, you can negotiate the terms and get started."
    />
  </div>
</div>
