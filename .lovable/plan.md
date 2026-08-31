# Fixing the four App Review rejections (keeping the Fresha links)

The Fresha links stay exactly as they are, opening inside the app. To satisfy Apple we
add the tracking permission prompt, declare it, and fix the support URL and the
reviewer-access issue.

## 1. Ask permission before any Fresha web content loads (fixes 5.1.2(i))

- Add the App Tracking Transparency plugin so iOS shows Apple's standard
  "Allow Society Barbers to track your activity across other companies' apps and
  websites?" dialog.
- The prompt appears the first time someone taps a Fresha link (Book, Home, Barbers, or
  My Account), before the in-app browser opens. It only ever shows once; after that iOS
  remembers the answer.
- Info.plist gets the required explanation string, worded plainly, e.g.
  "Society Barbers uses Fresha to handle bookings. Allowing this lets Fresha remember you
  and keep you signed in when you book."
- If the person declines, the Fresha link still opens — we just clear the in-app browser's
  cookies first and don't persist them, so nothing is used for tracking.
- Also add a short in-app notice on the My Account screen saying Fresha sets cookies to
  keep you signed in.

## 2. Reviewer access (fixes both 2.1(a) items)

Apple couldn't get a Fresha OTP code, so they couldn't get past the sign-in and asked
for a demo account. Apple explicitly says a demo video is not enough. Two options:

- **Option A (recommended):** create a real Fresha client account with a shared email you
  control, put that email + password in App Review Information, and note in the review
  notes that the code arrives by email at that address. This is the cleanest path.
- **Option B:** add a hidden **Demo mode** to the app — a toggle Apple activates from the
  My Account screen that shows a sample account view (fake appointment, membership and
  gift card) with no login. Then the reviewer can see all functionality without Fresha.

I'll implement Option B in code either way, since it removes the dependency on Fresha's
OTP delivery entirely, and you can also supply an account if you have one.

## 3. Real support page (fixes 1.5 - Safety)

- Add a `/support` page: what the app does, both phone numbers, both emails, both
  addresses and hours, an FAQ / "how to get help" section, and a link to the privacy policy.
- You then change the Support URL in App Store Connect to
  `https://societybarbersv2.lovable.app/support`.

## 4. App Store Connect settings (you do these, no code)

- App Privacy: declare **Yes, this app uses data to track you**, with data type
  "Identifiers - Device ID / Other identifiers", used for tracking, via Fresha web content.
- Review Notes: say where the tracking prompt appears (first tap of any Fresha booking
  link), and how to enter demo mode.
- I'll write all of this into `appstore-review-notes.md` ready to paste.

## 5. Resubmit

- Bump the iOS build to 5, push to GitHub, re-run the Codemagic `ios-app-store` workflow,
  submit build 5 with the new notes and Support URL.

## Technical notes

- Install `@capacitor-community/app-tracking-transparency`; wrap `openInAppBrowser` in
  `src/lib/browser.ts` so it requests/checks status once before `Browser.open`, and calls
  `Browser` with cookies cleared when status is denied/restricted.
- `NSUserTrackingUsageDescription` added to `ios/App/App/Info.plist`.
- `PrivacyInfo.xcprivacy`: set `NSPrivacyTracking` to true and list the tracking domain
  `fresha.com`.
- Demo mode: local state on `src/routes/account.tsx`, no backend.
- New `src/routes/support.tsx` with its own head metadata, linked from Contact and privacy.
- `ios/App/App.xcodeproj/project.pbxproj`: `CURRENT_PROJECT_VERSION` 4 -> 5.
