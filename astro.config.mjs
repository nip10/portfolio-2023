import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://diogocardoso.dev",
  integrations: [sitemap(), robotsTxt(), icon(), (await import("@playform/compress")).default()],
  vite: {
    // @ts-expect-error - Vite plugin types mismatch between @tailwindcss/vite and Astro's bundled Vite
    plugins: [tailwindcss()],
  },
  output: "static",
  adapter: vercel()
});