<div class="moon py-8">
  <slot />
</div>

<style>
  .moon {
    background-image: url('$lib/assets/moon_texture.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: white;
    clip-path: ellipse(120% 100% at 50% 100%);
    display: flex;
    flex-direction: column;
    margin: 3rem 0;
  }
</style>
