import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import * as path from "path";

export default defineConfig(() => ({
//   root: __dirname,
//   cacheDir: "../../node_modules/.vite/packages/react-components",
  plugins: [
    react(),
    // dts({
    //   entryRoot: "src",
    //   tsconfigPath: path.join(__dirname, "tsconfig.lib.json"),
    // }),
    dts()
  ],
  build: {
    target: "modules",
    // outDir: "es",
    minify: false,
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    sourcemap: false,
    // cssCodeSplit: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'ky', 'mobx', 'mobx-react', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
      input: ['src/index.ts'],
      output: [
        {
            format: "es",
            entryFileNames: "[name].js",
            preserveModules: true,
            preserveModulesRoot: 'src',
            dir: "es",
        },
        {
            format: "cjs",
            entryFileNames: "[name].js",
            exports: "named",
            preserveModules: true,
            preserveModulesRoot: 'src',
            dir: "lib",
        }
      ],
    },
    lib: {
      entry: "./src/index.ts",
      name: "react-components",
      fileName: (format) => `react-components.${format}.js`,
      formats: ['es', 'cjs']
    }
  },
}));
