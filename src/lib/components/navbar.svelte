<script>
  import Moon from '$lib/assets/icons/moon.svelte';
</script>

<nav
  class="fixed right-4 left-4 top-8 md:right-20 md:left-20 lg:right-24 lg:left-24 z-50 flex justify-between items-center px-4 py-2 border-2 rounded-2xl backdrop-blur-md mix-blend-difference"
>
  <Moon class="text-white text-3xl" />
  <div class="text-sm md:text-lg text-white">
    <a href="/" class="mr-4 lg:mr-8">About</a>
    <a href="/" class="mr-4 lg:mr-8">Features</a>
    <a href="/" class="mr-4 lg:mr-8">FAQ</a>
    <a href="#waitlist">Waitlist</a>
  </div>
</nav>
