import { defineConfig } from "vite";
import { resolve } from "path";
import { dependencies, peerDependencies } from "./package.json";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react({
      "jsxRuntime": "automatic",
    }),
    dts({
      include: ["src/**/*"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        components: resolve(__dirname, "src/components/index.ts"),
        hooks: resolve(__dirname, "src/hooks/index.ts"),
        utils: resolve(__dirname, "src/utils/index.ts"),
      },
      formats: ["es", "cjs"],
      // fileName: (ext) => `index.${ext}.js`,
      fileName: (format, entryName) => {
        const ext = format === "es" ? "es" : "cjs";
        return `${entryName}/index.${ext}.js`;
      },
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
      output: { preserveModules: true, exports: "named" },
    },

    target: "esnext",
    sourcemap: true,
  },
});
