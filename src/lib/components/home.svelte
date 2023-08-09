<script>
  import Button from './button.svelte';
</script>

<div
  class="h-full flex justify-center items-center flex-col snap-start snap-always bg-backdrop p-8 md:px-24 text-white"
>
  <h1 class="lg:text-8xl md:text-6xl font-display text-4xl">moonlight</h1>
  <h1 class="lg:text-8xl md:text-6xl font-display text-4xl">devs</h1>
  <div class="flex mt-16">
    <Button label="i am a dev" customClasses="mr-4" />
    <Button label="i am an org" customClasses="ml-4" />
  </div>
</div>
