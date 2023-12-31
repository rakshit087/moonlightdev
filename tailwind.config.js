const production = !process.env.ROLLUP_WATCH;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: [`'Press Start 2P'`, 'cursive']
      }
    }
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  purge: {
    content: ['./src/**/*.svelte', './src/**/*.html'],
    enabled: production
  }
};
