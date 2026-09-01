import type { AppTrackingStatus } from "@capgo/capacitor-app-tracking-transparency";

/**
 * Opens a URL in the in-app browser (Capacitor) or a new tab (web).
 *
 * Before opening a Fresha URL, we check iOS App Tracking Transparency status.
 * The app already asks for permission once on first launch via the native
 * AppDelegate prompt, so this call usually just reads the stored answer. If
 * the user has denied or restricted tracking, we still open the link — the iOS
 * system controls prevent cross-app tracking, and the in-app browser plugin
 * does not expose a cookie-clearing API in Capacitor 8.
 */
export async function openInAppBrowser(url: string) {
  if (typeof window === "undefined") return;

  try {
    const [{ Browser }, { AppTrackingTransparency }] = await Promise.all([
      import("@capacitor/browser"),
      import("@capgo/capacitor-app-tracking-transparency"),
    ]);

    const { status } = await AppTrackingTransparency.getStatus();

    if (status === "notDetermined") {
      await AppTrackingTransparency.requestPermission();
    }

    await Browser.open({ url });
  } catch {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

export function isTrackingAuthorized(status: AppTrackingStatus | null): boolean {
  return status === "authorized";
}
