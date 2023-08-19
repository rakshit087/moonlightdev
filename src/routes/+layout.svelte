<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import '../global.css';
</script>

<svelte:head>
  <title>Moonlight Devs</title>
  <meta
    name="description"
    content="find part time contract based work as a developer or hire proffesional developers on part time bases."
  />
</svelte:head>

<main class="h-screen md:snap-y md:snap-mandatory overflow-y-scroll scroll-smooth bg-black">
  <Navbar />
  <slot />
</main>
