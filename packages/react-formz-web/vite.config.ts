import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  mode: "production",
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["cjs", "umd", "es"],
      name: "React-Formz",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "immer"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          immer: "immer",
        },
      },
    },
  },
});
