<script lang="ts">
  export let step: string;
  export let title: string;
  export let description: string;
</script>

<div class="bg-transparent border-black border-2 rounded-xl p-4">
  <div class="flex items-center">
    <div class="h-16 w-16 bg-black rounded-xl flex justify-center items-center text-white text-2xl">
      {step}
    </div>
    <p class="ml-4 text-xl font-semibold">{title}</p>
  </div>
  <p class="mt-4 h-24">
    {description}
  </p>
</div>
