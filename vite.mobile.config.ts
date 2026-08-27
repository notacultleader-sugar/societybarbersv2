import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Client-only (SPA) build used for the native Capacitor wrapper.
// The native app has no server, so it cannot use the SSR/hydration entry.
export default defineConfig({
  base: "./",
  root: fileURLToPath(new URL("./", import.meta.url)),
  plugins: [tsConfigPaths({ projects: ["./tsconfig.json"] }), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-query"],
  },
  build: {
    outDir: "dist/mobile",
    emptyOutDir: true,
    rollupOptions: {
      input: fileURLToPath(new URL("./mobile/index.html", import.meta.url)),
    },
  },
});
