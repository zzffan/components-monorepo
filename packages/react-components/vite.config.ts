/// <reference types='vitest' />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import * as path from "path";

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: "../../node_modules/.vite/packages/react-components",
  plugins: [
    react(),
    dts({
      entryRoot: "src",
      tsconfigPath: path.join(__dirname, "tsconfig.lib.json"),
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    cssCodeSplit: true,
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ["react", "react-dom"],
      output: [
        // {
        //     format: "es",
        //     entryFileNames: "[name].js",
        //     exports: "named",
        //     name: "npmzzff/react-components",
        //     dir: "./dist/dist",
        // },
        {
            format: "es",
            entryFileNames: "[name].js",
            exports: "named",
            preserveModules: true,
            preserveModulesRoot: 'src',
            dir: "./dist/es",
        },
        {
            format: "cjs",
            entryFileNames: "[name].js",
            exports: "named",
            preserveModules: true,
            preserveModulesRoot: 'src',
            dir: "./dist/lib",
        }
      ],
    },
    lib: {
      entry: "./src/index.ts",
      name: "npmzzff/react-components",
      fileName: (format) => `npmzzff/react-components.${format}.js`,
      formats: ['es', 'cjs']
    }
  },
}));
