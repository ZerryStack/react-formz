import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  mode: 'production',
  resolve: {
    alias: {},
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    lib: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      fileName: 'index',
      name: 'yup',
      formats: ['es', 'cjs', 'umd'],
    },
    emptyOutDir: true,
    rollupOptions: {
      external: ['@zerry/react-formz-core', '@zerry/react-formz-validators-utils', 'yup'],
      output: {
        globals: {
          yup: 'yup',
        },
      },
    },
  },
});
