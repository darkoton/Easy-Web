import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import favicons from './scripts/favicons';

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/',
  base: '/Easy-Web/',
  plugins: [
    react(),
    {
      name: 'postbuild-commands', // the name of your custom plugin. Could be anything.
      closeBundle: favicons,
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
