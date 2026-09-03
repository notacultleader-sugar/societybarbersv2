import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import societyLogo from "@/assets/society-logo.png.asset.json";
import { BootSplash } from "@/components/BootSplash";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Home, Calendar, Users, Megaphone, Phone, UserRound } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover",
      },
      { title: "Society Barbers" },
      {
        name: "description",
        content: "The Society Barbers community app. Classic barbering upgraded.",
      },
      { name: "author", content: "The Society Barbers" },
      { name: "theme-color", content: "#0a0815" },
      { property: "og:title", content: "Society Barbers" },
      {
        property: "og:description",
        content: "The Society Barbers community app. Classic barbering upgraded.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@thesocietybarbers" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/manifest.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <BootSplash />
      <div className="relative flex min-h-screen flex-col bg-background">
        {/* Angled, translucent logo watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
        >
          <img
            src={societyLogo.url}
            alt=""
            className="w-[115%] max-w-[560px] -rotate-12 opacity-25 md:max-w-[820px]"
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-md flex-1 overflow-y-auto md:max-w-3xl lg:max-w-4xl">
          <Outlet />
        </div>

        <BottomNav />
      </div>
    </QueryClientProvider>
  );
}

function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const tabs = [
    { to: "/", label: "Home", icon: Home },
    { to: "/book", label: "Book", icon: Calendar },
    { to: "/community", label: "Transmissions", icon: Megaphone },
    { to: "/barbers", label: "Barbers", icon: Users },
    { to: "/contact", label: "Contact", icon: Phone },
    { to: "/account", label: "Account", icon: UserRound },
  ];

  return (
    <nav className="glass safe-bottom fixed bottom-0 left-0 right-0 z-50 border-t border-border">
      <div className="mx-auto flex max-w-md items-center justify-around px-2 pb-2 pt-3 md:max-w-3xl md:gap-6 md:px-8 lg:max-w-4xl">
        {tabs.map((tab) => {
          const isActive = pathname === tab.to;
          const Icon = tab.icon;
          return (
            <Link
              key={tab.to}
              to={tab.to}
              className="flex flex-col items-center gap-1 px-2 py-1 md:px-4"
            >
              <div
                className={`rounded-xl p-1.5 transition-all md:p-2.5 ${
                  isActive
                    ? "bg-primary/20 text-primary shadow-[0_0_12px_rgba(255,0,160,0.35)]"
                    : "text-muted-foreground"
                }`}
              >
                <Icon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <span
                className={`text-[10px] font-medium md:text-xs ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
