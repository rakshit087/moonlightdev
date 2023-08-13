<script>
  import StepCard from './step_card.svelte';
</script>

<div id="devs" class="h-screen flex flex-col justify-center snap-start snap-always">
  <p class="text-4xl font-semibold">Find awesome <br /> moonlighting opportunities</p>
  <p class="mt-4 text-xl">
    We help you find long-term part time contract based work to earn some side income.
  </p>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16">
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
  </div>
</div>
