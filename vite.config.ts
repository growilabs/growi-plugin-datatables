import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'hastscript',
  },
  build: {
    manifest: true,
    sourcemap: true,
    rollupOptions: {
      input: ['/client-entry.tsx'],
    },
  },
});
