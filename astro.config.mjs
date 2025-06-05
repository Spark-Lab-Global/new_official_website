// @ts-check
import partytown from "@astrojs/partytown";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Instrument Serif",
        cssVariable: "--font-title",
      },
      {
        provider: fontProviders.google(),
        name: "Red Hat Text",
        cssVariable: "--font-body",
        weights: [400, 500],
      },
    ],
  },

  srcDir: ".",
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
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
