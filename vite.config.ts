import dts from 'vite-plugin-dts';
import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, UserConfig } from 'vite';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  base: './',
  plugins: [dts({ rollupTypes: true }), stylelint({ fix: true, cache: true }), react()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'mantine-extension-boilerplate',
      formats: ['es', 'cjs', 'umd', 'iife'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        extend: true,
      },
    },
  },
} satisfies UserConfig);
