/**
 * Opens a URL in the in-app browser (Capacitor) or a new tab (web).
 *
 * On iOS this presents SFSafariViewController, which runs out of process: the
 * app cannot read the page, its cookies, or anything the user types there. The
 * app itself has no analytics, advertising or tracking code, and requests no
 * tracking permission — see ios/App/App/PrivacyInfo.xcprivacy.
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
