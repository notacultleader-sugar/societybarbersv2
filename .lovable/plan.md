Apple App Store submission for Society Barbers (via cloud build)

## Goal
Get the Society Barbers iOS app built, uploaded to App Store Connect, and submitted for App Store review, using a cloud build service (no Mac required). Google Play submission is deferred until the user has an Android device to confirm their Google account.

## Current state
- iOS project exists and is synced: `ios/` with bundle id `com.thesocietybarbers.app`, name `Society Barbers`, version 1.0 (build 1), new app icon and splash assets already generated.
- No `PrivacyInfo.xcprivacy` file exists under `ios/App/App/` — Apple now requires a privacy manifest; this must be added before upload or App Store Connect will reject/warn.
- User has an Apple Developer account (type unconfirmed — user will sign in and report back).
- Build path chosen: cloud build service (Codemagic) with App Store Connect API key signing.
- App basics confirmed: name `Society Barbers`, bundle id `com.thesocietybarbers.app`, free, Canada only.

## Plan

### 1. iOS release prep (code)
- Add `ios/App/App/PrivacyInfo.xcprivacy` declaring no data collection and no required-reason API use beyond defaults.
- Add `ITSAppUsesNonExemptEncryption = false` to `ios/App/App/Info.plist` so export compliance is pre-answered.
- Confirm version `1.0` / build `1` in the Xcode project settings.
- Re-run asset sync so the new icon and splash are in the iOS target.

### 2. Privacy policy page (shared with Play later)
- Add a simple `/privacy` route to the website.
- Content: app itself collects no data and has no accounts; bookings, memberships, and gift cards are handled by Fresha under their own privacy policy; contact email `society@notacult.ca`.
- Publish the site so the policy is live at `https://societybarbersv2.lovable.app/privacy`.

### 3. User account steps (App Store Connect)
- Sign in at `https://appstoreconnect.apple.com` and confirm the account type (Individual or Organization) — this affects the seller name shown on the store.
- Accept any pending agreements (Paid Apps agreement not needed since the app is free).
- In App Store Connect: Users and Access → Integrations → App Store Connect API, generate a Team API key (Issuer ID, Key ID, .p8 file) and share it for the cloud build setup.

### 4. Codemagic setup
- Connect this project repo to Codemagic.
- Configure an iOS workflow: Xcode latest, `npm ci`, `npm run build:mobile`, `npx cap sync ios`, then archive and upload to App Store Connect using the API key from step 3 (automatic code signing).
- Trigger a first build to validate signing and upload end-to-end.

### 5. Store listing assets
- Screenshots from the live preview at required sizes (6.7-inch 1290x2796 and 6.5-inch 1242x2688): Home, Book, Transmissions, Barbers, Contact, My Account.
- Short description, full description, and keywords covering: barbershop, Duncan, Maple Bay, Cowichan, booking, Fresha, community.
- Category: Lifestyle (secondary: Shopping or Health & Fitness not needed).
- Privacy policy URL from step 2, support URL `https://societybarbersv2.lovable.app`, support email `society@notacult.ca`.

### 6. Create the app record in App Store Connect
- New app: iOS, name `Society Barbers`, primary language English (Canada), bundle id `com.thesocietybarbers.app`, SKU `society-barbers`.
- Set availability: Canada. Pricing: Free.

### 7. TestFlight round
- Upload the first build via Codemagic.
- Add the user as an internal tester in TestFlight, install on their iPhone, and verify: splash animation, tabs, Fresha deep links open in-app, phone/email links work.

### 8. Submit for App Review
- Complete age rating questionnaire (expect 12+ or 17+ given the dystopian imagery; answer honestly).
- Provide review notes: app is a companion to a barbershop website; account features deep-link to Fresha in an in-app browser; no in-app purchases.
- Submit version 1.0 for review (typical review time: 24–48 hours).

### 9. After approval
- Release to the App Store (Canada).
- Return to the Google Play plan once the user can confirm their Google account on an Android device.

## Notes
- No visual or content changes to the app itself beyond the privacy manifest/plist metadata.
- The `society-barbers-release.aab` and keystore work stays untouched for Play later.

## Technical details
- New files: `ios/App/App/PrivacyInfo.xcprivacy`, `src/routes/privacy.tsx`, `codemagic.yaml` at repo root.
- Edited files: `ios/App/App/Info.plist` (encryption flag).
- Codemagic iOS code signing: App Store Connect API key (Issuer ID, Key ID, .p8 private key) stored as Codemagic environment variables — never committed to the repo.
- Screenshot capture: Playwright against the local preview at 1290x2796 and 1242x2688 viewports.
