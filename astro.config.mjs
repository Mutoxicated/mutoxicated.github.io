// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://mutoxicated.github.io",
  base: "/mutoxicated.github.io",
  fonts: [{
    provider: fontProviders.google(),
    name: "Aldrich",
    cssVariable: "--font-mutox"
  }]
});
