// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://eppic.github.io',
  // Solange das Repo noch "portfolio" heißt, hier base: '/portfolio' setzen.
  // Nach dem Umbenennen in "eppic.github.io" wird kein base benötigt.
  vite: {
    plugins: [tailwindcss()]
  }
});
