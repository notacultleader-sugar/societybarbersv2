export async function openInAppBrowser(url: string) {
  if (typeof window === 'undefined') return;

  try {
    const { Browser } = await import('@capacitor/browser');
    await Browser.open({ url });
  } catch {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
