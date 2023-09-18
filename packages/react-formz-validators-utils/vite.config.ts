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
      name: 'utils',
      formats: ['es', 'cjs', 'umd'],
    },
    emptyOutDir: true,
    rollupOptions: {
      external: ['@zerry/react-formz-core'],
      output: {
        globals: {},
      },
    },
  },
});
