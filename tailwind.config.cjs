/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lora: ["Lora", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
        body: ["Lora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
