import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vinasig.github.io',
  base: '/vinasig',
  output: 'static',
  devToolbar: { enabled: false },
  build: { format: 'directory', inlineStylesheets: 'never' },
});
