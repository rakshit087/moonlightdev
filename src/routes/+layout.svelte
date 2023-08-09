<script>
  import Navbar from '$lib/components/navbar.svelte';
  import '../global.css';
</script>

<main class="scroll-smooth bg-backdrop p-4 md:px-18">
  <Navbar />
  <slot />
</main>
