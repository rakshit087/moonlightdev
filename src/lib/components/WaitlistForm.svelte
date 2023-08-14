<script lang="ts">
  import { enhance } from '$app/forms';
  export let form: any;

  let loading = false;

  $: console.log(form);
</script>

<div
  class="w-4/5 max-w-2xl border-2 rounded-xl p-6 md:p-8 border-black bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
>
  <p class="md:text-5xl mb-4 text-3xl">we will be launching pretty soon...</p>
  <p class="text-lg md:text-2xl">join our waitlist to get an early access to our beta!</p>

  <p class="mt-8 md:mt-12">where can we contact you?</p>
  <form
    method="POST"
    action="?/addToWaitlist"
    use:enhance={() => {
      loading = true;
      return async ({ update }) => {
        loading = false;
        update();
      };
    }}
  >
    <input
      type="text"
      placeholder="anon@moonlightdevs.xyz"
      class="border-2 border-black rounded-lg p-2 mt-1 w-full"
      name="email"
      value={form?.email ?? ''}
    />
    {#if form?.missing}<p class="text-red-500 text-sm mt-1 md:mt-2">
        The email field is required
      </p>{/if}
    {#if form?.invalid}<p class="text-red-500 text-sm mt-1 md:mt-2">Enter a valid email</p>{/if}
    <p class="md:mt-6 mt-4">you want to...</p>
    <select class="border-2 border-black rounded-lg p-2 mt-1 w-full" name="type">
      <option value="dev">find part time jobs</option>
      <option value="org">hire devs</option>
    </select>
    <button
      class="bg-black text-white rounded-lg p-2 mt-8 md:mt-10 w-full focus:border-black"
      disabled={loading}
    >
      {#if loading}
        <div class="flex justify-center items-center">
          <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
        </div>
      {:else}
        join the waitlist
      {/if}
    </button>
    {#if form?.success}
      <p class="text-black mt-1 md:mt-2">Successfully added to the waitlist</p>
    {/if}
    {#if form?.exists}
      <p class="text-red-500 text-sm mt-1 md:mt-2">Already added to the waitlist</p>
    {/if}
  </form>
</div>
