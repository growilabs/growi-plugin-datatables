import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    sourcemap: false,
    minify: false,
    rollupOptions: {
      input: ['/client-entry.tsx'],
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
