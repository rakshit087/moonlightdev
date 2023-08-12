<script lang="ts">
  export let label: string;
</script>

<button>
  {label}
</button>

<style lang="scss" scoped>
  button {
    background-color: black;
    color: white;
    padding: 0.5rem 1.5rem;
    font-size: small;
    border-radius: 0.5rem;
    width: 100%;
  }

  @media (min-width: 768px) {
    button {
      font-size: medium;
      padding: 0.5rem 2rem;
    }
  }

  @media (min-width: 1024px) {
    button {
      font-size: large;
      padding: 0.5rem 2.5rem;
    }
  }
</style>
