// @ts-check
import partytown from "@astrojs/partytown";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  srcDir: ".",
  i18n: {
    locales: ["zh", "en"],
    defaultLocale: "zh",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [preact(), partytown()],

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
});
