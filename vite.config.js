import { fileURLToPath, URL } from "node:url"; // Correct syntax here

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':fileURLToPath(new URL('./src',import.meta.url))
    }
  },
  build: {
    outDir: 'build', // Change this if you want a custom directory
  }
});


