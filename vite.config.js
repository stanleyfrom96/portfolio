import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Set the root path for your custom domain
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
