<script>
  import Navbar from '$lib/components/navbar.svelte';
  import '../global.css';
</script>

<main class="h-screen overflow-y-scroll scroll-smooth snap-mandatory snap-y">
  <Navbar />
  <slot />
</main>
