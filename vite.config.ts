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
      // external: ['react', /node_modules\/react\/jsx-runtime\.js/],
      external: ['react', 'react/jsx-runtime'],
      plugins: [
        externalGlobals({
          react: 'window.React',
          'react/jsx-runtime': 'window.ReactJSXRuntime',
        }),
      ],
    },
  },
});
