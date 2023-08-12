<script>
  import Button from './button.svelte';
</script>

<div
  class="h-full flex justify-center items-center flex-col snap-start snap-always bg-black p-8 md:px-24 text-white relative"
>
  <h1 class="lg:text-8xl md:text-6xl font-display text-4xl">moonlight</h1>
  <h1 class="lg:text-8xl md:text-6xl font-display text-4xl">devs</h1>
  <div class="moon">
    <a href="#waitlist" class="mr-4">
      <Button label="find a job" />
    </a>
    <a href="#waitlist" class="ml-4">
      <Button label="post a job" />
    </a>
  </div>
</div>

<style lang="scss" scoped>
  .moon {
    background-color: white;
    bottom: 0;
    clip-path: ellipse(75% 100% at 50% 100%);
    display: flex;
    justify-content: center;
    padding: 8rem 0;
    position: absolute;
    width: 100%;
  }
</style>
