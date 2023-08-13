<div class="moon px-4 md:px-20 lg:px-24">
  <slot />
</div>

<style>
  .moon {
    background-image: url('$lib/assets/moon_texture.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: white;
    clip-path: ellipse(250% 100% at 50% 100%);
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .moon {
      clip-path: ellipse(185% 100% at 50% 100%);
    }
  }

  @media (min-width: 1024px) {
    .moon {
      clip-path: ellipse(120% 100% at 50% 100%);
    }
  }
</style>
