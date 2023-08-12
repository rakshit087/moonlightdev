<script lang="ts">
  export let label: string;
  export let customClasses: string = '';
</script>

<button
  class="bg-yellow-50 py-2 text-sm lg:text-xl md:text-base px-6 md:px-8 lg:px-12 rounded-lg text-black {customClasses}"
>
  {label}
</button>
