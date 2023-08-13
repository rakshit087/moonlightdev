<div class="h-screen snap-start snap-always relative" id="waitlist">
  <div class="moon h-1/3" />
  <div
    class="flex flex-col mx-auto w-4/5 max-w-2xl border-2 rounded-xl p-6 md:p-8 border-black bg-white backdrop-blur-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  >
    <p class="md:text-5xl mb-4 text-3xl">we will be launching pretty soon...</p>
    <p class="text-lg md:text-2xl">join our waitlist to get an early access to our beta!</p>

    <p class="mt-8 md:mt-12">where can we contact you?</p>
    <input
      type="email"
      placeholder="anon@moonlightdevs.xyz"
      class="border-2 border-black rounded-lg p-2 mt-1"
    />
    <p class="md:mt-6 mt-4">you want to...</p>
    <select class="border-2 border-black rounded-lg p-2 mt-1">
      <option value="dev">find part time jobs</option>
      <option value="org">hire devs</option>
    </select>
    <button class="bg-black text-white rounded-lg p-2 mt-8 md:mt-10 w-full focus:border-black">
      join waitlist
    </button>
  </div>
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
