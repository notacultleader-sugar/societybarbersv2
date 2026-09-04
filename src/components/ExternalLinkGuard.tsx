import { useEffect } from "react";
import { openInAppBrowser, isNativeApp } from "@/lib/browser";

/**
 * Safety net for Guideline 4: on the native app, no http(s) link may ever hand
 * off to the system browser. Any anchor click that would leave the web view is
 * captured here and re-presented in SFSafariViewController via
 * @capacitor/browser, whether or not the individual link remembered to call
 * openInAppBrowser itself. On the web build this does nothing.
 */
export function ExternalLinkGuard() {
  useEffect(() => {
    if (!isNativeApp()) return;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      if (!/^https?:\/\//i.test(href)) return; // in-app routes, tel:, mailto: untouched

      try {
        if (new URL(href).origin === window.location.origin) return;
      } catch {
        return;
      }

      event.preventDefault();
      void openInAppBrowser(href);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
