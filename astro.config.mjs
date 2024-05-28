import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  osite: 'https://bdvela.github.io',
  i18n: {
    defaultLocale: "es",
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      en: 'es',
    }
  }
});