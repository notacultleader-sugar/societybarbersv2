/**
 * Opens a URL without ever leaving the app.
 *
 * On iOS the Capacitor Browser plugin presents SFSafariViewController, which is
 * exactly what Apple asks for in Guideline 4: the customer stays inside the app,
 * can see the real URL and inspect the SSL certificate before typing sign-in
 * details on Fresha's page. It runs out of process, so the app cannot read the
 * page, its cookies, or anything typed there — see ios/App/App/PrivacyInfo.xcprivacy.
 *
 * The `window.open` path is for the web build only. On a native platform we
 * never hand the URL to the system browser: if the in-app browser can't be
 * presented we do nothing rather than kicking the user out to Safari.
 */
function isNative(): boolean {
  const cap = (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor;
  return Boolean(cap?.isNativePlatform?.());
}

export async function openInAppBrowser(url: string) {
  if (typeof window === "undefined") return;

  const native = isNative();

  try {
    const { Browser } = await import("@capacitor/browser");
    await Browser.open({
      url,
      // Sheet-style in-app Safari view; matches Apple's SFSafariViewController guidance.
      presentationStyle: "popover",
      toolbarColor: "#000000",
    });
    return;
  } catch (err) {
    if (native) {
      // Stay in the app. Never redirect to the default browser on device.
      console.error("In-app browser unavailable", err);
      return;
    }
  }

  window.open(url, "_blank", "noopener,noreferrer");
}
