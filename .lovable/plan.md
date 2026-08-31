# Fixing the four App Review rejections

Apple cited four issues. Three are caused by the same thing: the **My Account** tab signs
people into Fresha (a third-party site) inside the app. That triggers the cookie/tracking
question (5.1.2(i)), forces reviewers to log in with an OTP they never received
(2.1(a) bug and 2.1(a) demo-account request). The fourth is a Support URL problem.

## 1. Remove third-party sign-in from inside the app (fixes 5.1.2(i), both 2.1(a) items)

- Delete the "Sign in to Fresha" / appointments / memberships / gift-card sign-in tiles.
- Replace the **My Account** tab with a **My Visits** screen that explains the shop's
  Fresha account features and offers a single clearly-labelled button that opens Fresha
  in the device's **Safari** browser (system browser, not the in-app browser), so the
  login and its cookies happen in Safari, outside the app. Apple treats this as leaving
  the app, so no ATT prompt and no cookie disclosure are needed.
- Same change for the booking links (Home, Book, Barbers): they open in Safari instead of
  the embedded in-app browser. Nothing inside the app then collects cookies.
- Result: every screen is fully reviewable with no login, so no demo account is required
  and the OTP bug disappears.

## 2. Real support page (fixes 1.5 - Safety)

- Add a `/support` page on the website with: what the app does, both shop phone numbers,
  both emails, both addresses and hours, a "how to get help" section, and a link to the
  privacy policy.
- You then set the Support URL in App Store Connect to
  `https://societybarbersv2.lovable.app/support`.

## 3. Privacy answers in App Store Connect (you do this, no code)

- App Privacy: "Data Not Collected", tracking = **No**.
- Review Notes: state that the app has no accounts, no logins, and no tracking; any
  Fresha link opens in Safari outside the app.
- I'll write the exact wording into `appstore-review-notes.md`.

## 4. Resubmit

- Bump the iOS build number to 5, push to GitHub, re-run the Codemagic `ios-app-store`
  workflow, then submit build 5 with the updated notes and Support URL.

## Technical notes

- `src/lib/browser.ts`: switch from `Browser.open` (SFSafariViewController) to
  `@capacitor/app-launcher` / `window.open` so URLs hand off to Safari.
- `src/routes/account.tsx`: rewritten, no auth links.
- New `src/routes/support.tsx` with its own head metadata; linked from Contact and privacy.
- `PrivacyInfo.xcprivacy` already declares no tracking and no collected data - no change.
- `ios/App/App.xcodeproj/project.pbxproj`: `CURRENT_PROJECT_VERSION` 4 -> 5.
