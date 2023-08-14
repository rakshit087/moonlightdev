<script>
  import About from '$lib/components/About.svelte';
  import Home from '$lib/components/Home.svelte';
  import JoinUs from '$lib/components/JoinUs.svelte';
  import MoonContainer from '$lib/components/MoonContainer.svelte';
  import Waitlist from '$lib/components/Waitlist.svelte';
</script>

<Home />
<MoonContainer>
  <JoinUs />
  <About />
</MoonContainer>
<Waitlist />
