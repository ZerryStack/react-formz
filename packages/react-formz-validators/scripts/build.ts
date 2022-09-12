import { defineConfig, LibraryOptions } from "vite";
import path from "path";

const config: Record<string, LibraryOptions & { library: string }> = {
  zod: {
    entry: path.resolve(__dirname, "..", "zod", "index.ts"),
    fileName: "zod",
    name: "zod",
    library: "zod",
  },
};

if (!process.env.LIB) {
  throw new Error("LIB is not defined or is not valid");
}

const currentConfig = config[process.env.LIB];

if (currentConfig === undefined) {
  throw new Error("LIB is not defined or is not valid");
}

const { library, ...lib } = currentConfig;

export default defineConfig({
    mode: "production",
    build: {
      outDir: path.resolve(__dirname, "..", library, "dist"),
      lib: {
        ...lib,
        formats: ["es", "cjs", "umd"],
      },
      emptyOutDir: false,
      rollupOptions: {
        external: ["@zerry/react-formz", library],
        output: {
          globals: {
            "@zerry/react-formz": "@zerry/react-formz",
            [library]: library,
          },
        },
      },
    },
  });
