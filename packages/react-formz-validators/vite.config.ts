import {
  defineConfig,
  LibraryOptions,
  BuildOptions,
  LibraryFormats,
} from "vite";
import path from "path";

type NonArray<T> = Exclude<T, Array<any>>;

type Globals = NonArray<
  NonNullable<NonNullable<BuildOptions["rollupOptions"]>["output"]>
>["globals"];

const config: Record<
  string,
  LibraryOptions & {
    library: string;
    globals?: Globals;
    external?: string[];
    formats: LibraryFormats[];
  }
> = {
  yup: {
    entry: path.resolve(__dirname, "yup", "index.ts"),
    fileName: "yup",
    name: "yup",
    library: "yup",
    globals: {
      yup: "yup",
    },
    external: ["yup"],
    formats: ["es", "cjs", "umd"],
  },
  zod: {
    entry: path.resolve(__dirname, "zod", "index.ts"),
    fileName: "zod",
    name: "zod",
    library: "zod",
    globals: {
      zod: "zod",
    },
    external: ["zod"],
    formats: ["es", "cjs", "umd"],
  },
};

if (!process.env.LIB) {
  throw new Error("LIB is not defined or is not valid");
}

const currentConfig = config[process.env.LIB];

if (currentConfig === undefined) {
  throw new Error("LIB is not defined or is not valid");
}

const { library, globals, external, formats, ...lib } = currentConfig;

export default defineConfig({
  mode: "production",
  resolve: {
    alias: {
      "@zerry/react-formz": path.resolve(__dirname, "../", "react-formz", "src", "index.ts")
    }
  },
  build: {
    outDir: path.resolve(__dirname, library, "dist"),
    lib: {
      ...lib,
      formats,
    },
    emptyOutDir: true,
    rollupOptions: {
      external: ["@zerry/react-formz"].concat(external ?? []),
      output: {
        globals: {
          ...globals,
        },
      },
    },
  },
});
