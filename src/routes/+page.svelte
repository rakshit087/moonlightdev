<script>
  import ForDevs from '$lib/components/for_devs.svelte';
  import Home from '$lib/components/home.svelte';
  import Waitlist from '$lib/components/waitlist.svelte';
  import JoinUs from '$lib/components/join_us.svelte';
  import MoonContainer from '$lib/components/moon_container.svelte';
</script>

<Home />
<MoonContainer>
  <JoinUs />
  <ForDevs />
  <Waitlist />
</MoonContainer>
