<script lang="ts">
  export let label: string;
  export let customClasses: string = '';
</script>

<button class="bg-yellow-50 py-2 px-8 rounded-lg text-backdrop {customClasses}">{label}</button>
