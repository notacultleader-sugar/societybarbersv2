/**
 * Opens a URL in the in-app browser (Capacitor) or a new tab (web).
 *
 * Tracking permission is handled exactly once by the native layer
 * (SceneDelegate.sceneDidBecomeActive on iOS), so this helper does not ask
 * again. Whatever the user answered there is enforced by iOS itself; the app
 * does not add or remove any tracking of its own.
 */
export async function openInAppBrowser(url: string) {
  if (typeof window === "undefined") return;

  try {
    const { Browser } = await import("@capacitor/browser");
    await Browser.open({ url });
  } catch {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
