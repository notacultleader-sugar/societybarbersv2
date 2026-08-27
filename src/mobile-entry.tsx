import { QueryClient } from "@tanstack/react-query";
import { RouterProvider, createMemoryHistory, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { routeTree } from "./routeTree.gen";
import "./styles.css";

const queryClient = new QueryClient();

// Native builds have no server, so routing runs entirely in memory:
// the WebView never asks a server for /book, /barbers, etc.
const router = createRouter({
  routeTree,
  context: { queryClient },
  history: createMemoryHistory({ initialEntries: ["/"] }),
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
