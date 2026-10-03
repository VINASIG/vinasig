import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vinasig.io.vn',
  base: '/',
  output: 'static',
  devToolbar: { enabled: false },
  build: { format: 'directory', inlineStylesheets: 'never' },
});
