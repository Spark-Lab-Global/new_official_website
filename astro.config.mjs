// @ts-check
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Instrument Serif",
        cssVariable: "--font-title",
      },
      {
        provider: fontProviders.fontsource(),
        name: "Red Hat Text",
        cssVariable: "--font-body",
        weights: [400, 500, 600, 700],
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
  integrations: [react(), partytown()],

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
});
