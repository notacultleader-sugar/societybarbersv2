Fix the blank screen in the Android test build (BlueStacks shows nothing).

## What's going on

The app is built with TanStack Start, which normally renders the first screen on a server and then "wakes up" in the browser. The APK has no server — it just loads a local HTML file. The hand-written `index.html` used for the mobile build points at the web bundle that expects that server-rendered page to already exist, so nothing ever gets drawn. That matches what you're seeing: app launches, splash goes away, blank screen.

This diagnosis is based on how the mobile HTML file is generated (`scripts/build-capacitor.cjs`) and how the app boots. The build output itself was cleaned from the sandbox, so step 1 is to reproduce it before changing anything.

## Steps

1. Rebuild the web bundle and mobile HTML, serve it as a plain static folder, and open it in a headless browser to reproduce the blank screen and capture the exact console error.
2. Add a mobile-only entry point that mounts the app fresh (client-side render) instead of trying to attach to server-rendered HTML, and have the mobile HTML load that entry.
3. Make sure all asset and route paths work from a local file/`https://localhost` origin inside the app (no absolute `/` paths that break in the wrapper).
4. Re-run the static-folder browser check: confirm the home screen renders, the bottom tabs navigate between Home / Book / Transmissions / Barbers / Contact / My Account, and there are no console errors.
5. Sync into the Android project and rebuild the debug APK.
6. Hand you a new `.apk` to sideload into BlueStacks.

## Notes

- No visual or content changes — same design, same links, same copy.
- The in-app browser (Fresha links) stays wired as-is; once the screen renders you'll be able to test it.
- If BlueStacks specifically still misbehaves after the APK renders correctly in the browser check, next step would be pulling its logcat output, but I expect the blank screen to be gone.
