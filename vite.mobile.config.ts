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
      resolveId(source: string, importer: string | undefined) {
        if (!source.endsWith(".asset.json")) return null;
        const srcDir = fileURLToPath(new URL("./src/", import.meta.url));
        let resolved = source;
        if (source.startsWith("@/")) {
          resolved = srcDir + source.slice(2);
        } else if (source.startsWith(".") && importer) {
          resolved = fileURLToPath(new URL(source, `file://${importer}`));
        }
        // Virtual id must not end in .json or Vite's JSON plugin re-parses it.
        return `\0native-asset:${resolved}.mjs`;
      },
      load(id: string) {
        if (!id.startsWith("\0native-asset:")) return null;
        const file = id.slice("\0native-asset:".length).replace(/\.mjs$/, "");
        const meta = JSON.parse(fs.readFileSync(file, "utf8"));
        return `export default ${JSON.stringify({ ...meta, url: `/native/${meta.original_filename}` })}`;
      },
    },
    tsConfigPaths({ projects: ["../tsconfig.json"], ignoreConfigErrors: true }),
    react(),
    tailwindcss(),
  ],
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
