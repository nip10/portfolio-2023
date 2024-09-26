// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://diogocardoso.dev",
  integrations: [tailwind(), sitemap(), robotsTxt(), (await import("astro-compress")).default(), icon()],
  output: "hybrid",
  adapter: vercel()
});