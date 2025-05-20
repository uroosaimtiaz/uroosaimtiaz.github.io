import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: '/',                 // root path
  plugins: [svelte()],
  build: {
    outDir: 'docs'           // temporary build dir
  }
});
