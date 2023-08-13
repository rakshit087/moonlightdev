<script>
  import Navbar from '$lib/components/navbar.svelte';
  import '../global.css';
</script>

<main class="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-black">
  <Navbar />
  <slot />
</main>
