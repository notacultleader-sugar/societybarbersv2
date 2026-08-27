import fs from "node:fs";
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Client-only (SPA) build used for the native Capacitor wrapper.
// The native app has no server, so it cannot use the SSR/hydration entry.
export default defineConfig({
  base: "./",
  root: fileURLToPath(new URL("./mobile", import.meta.url)),
  publicDir: fileURLToPath(new URL("./public", import.meta.url)),
  plugins: [
    // Rewrite Lovable-hosted asset manifests to files bundled inside the app,
    // so images work offline in the native WebView.
    {
      name: "native-local-assets",
      enforce: "pre" as const,
      load(id: string) {
        const file = id.split("?")[0];
        if (!file.endsWith(".asset.json")) return null;
        const meta = JSON.parse(fs.readFileSync(file, "utf8"));
        return `export default ${JSON.stringify({ ...meta, url: `/native/${meta.original_filename}` })}`;
      },
    },
tsConfigPaths({ projects: ["./tsconfig.json"] }), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-query"],
  },
  build: {
    outDir: fileURLToPath(new URL("./dist/mobile", import.meta.url)),
    emptyOutDir: true,
  },
});
