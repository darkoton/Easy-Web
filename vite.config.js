import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import favicons from './scripts/favicons';

const __dirname = path.resolve();
const basePath = '/Easy-Web/';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/',
  base: basePath,
  plugins: [
    react(),
    {
      name: 'postbuild-commands', // the name of your custom plugin. Could be anything.
      closeBundle: () => favicons(basePath),
    },
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
