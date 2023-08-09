<script>
  import Navbar from '$lib/components/navbar.svelte';
  import '../global.css';
</script>

<main
  class="h-screen overflow-y-scroll scroll-smooth snap-mandatory snap-y bg-backdrop p-8 md:px-24"
>
  <Navbar />
  <slot />
</main>
