// import react from '@vitejs/plugin-react';
import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    manifest: true,
    sourcemap: true,
    rollupOptions: {
      input: ['/client-entry.tsx'],
    },
  },
});
