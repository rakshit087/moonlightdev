<script>
  import WaitlistForm from './WaitlistForm.svelte';
</script>

<div class="h-screen snap-start snap-always relative" id="waitlist">
  <div class="moon h-1/3" />
  <WaitlistForm />
</div>

<style>
  .moon {
    background-image: url('$lib/assets/moon_texture.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: white;
    clip-path: ellipse(140% calc(100vw + 6rem) at 50% calc(100% - 6rem - 100vw));
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .moon {
      clip-path: ellipse(140% calc(100vw + 6rem) at 50% calc(100% - 6rem - 100vw));
    }
  }

  @media (min-width: 1024px) {
    .moon {
      clip-path: ellipse(140% calc(100vw + 6rem) at 50% calc(100% - 6rem - 100vw));
    }
  }
</style>
