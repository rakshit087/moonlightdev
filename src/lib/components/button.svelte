<script lang="ts">
  export let label: string;
  export let customClasses: string = '';
</script>

<button
  class="bg-yellow-50 py-2 text-sm md:text-base px-6 md:px-8 rounded-lg text-backdrop {customClasses}"
>
  {label}
</button>
