# Finish the App Tracking Transparency integration

> **Status: SUPERSEDED — kept for history only.**
> The shipped implementation differs from the approach below. ATT is
> requested exactly once, natively, in `ios/App/App/SceneDelegate.swift`
> (`sceneDidBecomeActive`). `src/lib/browser.ts` deliberately does NOT
> re-check or re-request ATT status per link tap, and does not clear
> cookies — enforcement is left to iOS/WebKit once the user answers the
> system prompt. Do not treat the steps below as the current spec.

Two small items from the App Review rejection fix were not completed. This plan finishes them.

## 1. Install the Capacitor ATT plugin

- Add `@capacitor-community/app-tracking-transparency` to the project.
- Run Capacitor sync so the plugin is registered in iOS and Android native projects.

## 2. Update the in-app browser helper

- Modify `src/lib/browser.ts` so that, before opening a Fresha URL, it checks the tracking authorization status using the plugin.
- If status is `authorized`, open normally.
- If status is `denied`, `restricted`, or `notDetermined`, open the in-app browser but call `clearAllCookies` first so Fresha cannot use previously stored cookies for tracking. When the status is not yet determined, also request permission first and then proceed based on the user's answer.
- Keep the existing web fallback (`window.open`) for non-native environments.

## 3. Verify

- Confirm the plugin appears in `package.json` and `capacitor.config.json` / iOS pods are updated.
- Confirm `src/lib/browser.ts` compiles and is imported by `src/routes/account.tsx`, `src/routes/book.tsx`, and `src/routes/barbers.tsx`.
- No UI changes; the existing "Fresha sets cookies" notice in My Account stays.
