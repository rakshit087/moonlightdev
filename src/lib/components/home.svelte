<script>
  import Button from './button.svelte';
</script>

<div class="space">
  <h1>moonlight <br /> devs</h1>
  <div class="moon">
    <a href="#waitlist">
      <Button label="find a job" />
    </a>
    <a href="#waitlist">
      <Button label="post a job" />
    </a>
  </div>
</div>

<style lang="scss" scoped>
  h1 {
    font-family: 'Press Start 2P', cursive;
    font-size: 2.25rem;
  }

  a {
    margin: 0 1rem;
  }

  .moon {
    background-color: white;
    bottom: 0;
    clip-path: ellipse(90% 100% at 50% 100%);
    display: flex;
    justify-content: center;
    padding: 6rem 0;
    position: absolute;
    width: 100%;
  }

  .space {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    position: relative;
    color: white;
    padding: 2rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3.75rem;
    }
    .moon {
      clip-path: ellipse(75% 100% at 50% 100%);
    }
    .space {
      padding: 2rem 6rem;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 5rem;
    }
  }
</style>
