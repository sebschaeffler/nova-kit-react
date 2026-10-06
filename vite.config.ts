import { defineConfig } from "vite";
import { resolve } from "path";
import pkg from "./package.json" with { type: "json" };
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      "jsxRuntime": "automatic",
    }),
    tailwindcss(),
    dts({
      include: ["src/**/*"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(import.meta.dirname, "src/index.ts"),
        components: resolve(import.meta.dirname, "src/components/index.ts"),
        hooks: resolve(import.meta.dirname, "src/hooks/index.ts"),
        utils: resolve(import.meta.dirname, "src/utils/index.ts"),
      },
      formats: ["es", "cjs"],
      // fileName: (ext) => `index.${ext}.js`,
      fileName: (format, entryName) => {
        const ext = format === "es" ? "es" : "cjs";
        return `${entryName}/index.${ext}.js`;
      },
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies), ...Object.keys(pkg.dependencies)],
      output: { preserveModules: true, exports: "named" },
    },

    target: "esnext",
    sourcemap: true,
  },
});
