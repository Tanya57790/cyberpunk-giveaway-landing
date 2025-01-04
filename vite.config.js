'use strict';

import { defineConfig } from 'vite';
import { resolve } from 'path';
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    visualizer(),
  ],
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          'swiper': ['swiper'],
        },
        chunkFileNames: 'assets/scripts/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    }
  },
  optimizeDeps: {
    include: ['swiper'], 
  },
  resolve: {
    alias: {
      'validateForm-dist.js': './src/scripts/validateForm-dist.js',
    }
  },
});