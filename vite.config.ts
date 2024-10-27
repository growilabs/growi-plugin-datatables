import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import externalGlobals from 'rollup-plugin-external-globals';

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
      plugins: [
        externalGlobals({
          react: 'window.React',
        }),
      ],
    },
  },
});
