iOS App Store submission with GitHub + Codemagic

## Goal
Build the Society Barbers iOS app, upload it to App Store Connect, and submit it for App Store review using a GitHub repository connected to Codemagic cloud builds.

## Confirmed constraints
- Apple Developer account type: **Organization**.
- No existing git repository; user is willing to create a free GitHub account.
- Codemagic is the chosen cloud build service.
- App basics: name `Society Barbers`, bundle id `com.thesocietybarbers.app`, free, Canada only.

## Plan

### Step 1. Create a GitHub account
- Sign up at https://github.com.
- Note the username/organization name you create; the repo will live under it.

### Step 2. Connect the Lovable project to GitHub
- In the Lovable editor, open the **Plus (+)** menu in the chat input.
- Choose **GitHub → Connect project**.
- Authorize the Lovable GitHub App when GitHub asks.
- Select the GitHub account/organization you just created.
- Click **Create Repository** in Lovable. This pushes the full project code to `github.com/<you>/<repo>` and enables two-way sync.

### Step 3. Verify repo contents
- Confirm the repository contains the `ios/` folder, `capacitor.config.json`, `codemagic.yaml`, `mobile/index.html`, `src/`, and the new `ios/App/App/PrivacyInfo.xcprivacy` file.

### Step 4. Sign in to App Store Connect
- Go to https://appstoreconnect.apple.com and sign in with the Apple ID that owns the Organization Developer account.
- Accept any pending agreements.
- Confirm you can see the "Users and Access" section and can create an App Store Connect API key.

### Step 5. Generate an App Store Connect API key
- In App Store Connect: **Users and Access → Integrations → App Store Connect API**.
- Generate a new Team API key. Download the `.p8` file and note:
  - Issuer ID
  - Key ID
- These three values will be entered into Codemagic; they are not committed to the repo.

### Step 6. Connect the GitHub repo to Codemagic
- Sign up / log in at https://codemagic.io.
- Under **Apps**, connect your GitHub account and select the `societybarbersv2` repository.
- In Codemagic settings, create an environment variable group named `app_store_connect` containing:
  - `APP_STORE_CONNECT_ISSUER_ID`
  - `APP_STORE_CONNECT_KEY_IDENTIFIER`
  - `APP_STORE_CONNECT_PRIVATE_KEY` (paste the full contents of the `.p8` file)
- The existing `codemagic.yaml` in the repo already references this group.

### Step 7. Run a first Codemagic build
- Trigger the `ios-app-store` workflow from Codemagic.
- Codemagic will: install dependencies, build the web app, sync Capacitor iOS assets, archive, and upload the IPA to App Store Connect TestFlight.
- Watch the build log for any signing or provisioning errors.

### Step 8. Create the App Store app record
- In App Store Connect: **My Apps → + → New App**.
- Platform: iOS.
- Name: `Society Barbers`.
- Primary language: English (Canada).
- Bundle ID: `com.thesocietybarbers.app`.
- SKU: `society-barbers`.
- Availability: Canada only; Pricing: Free.

### Step 9. Prepare store listing assets
- Upload the screenshots already generated for 6.7-inch (1290x2796) and 6.5-inch (1242x2688) devices covering: Home, Book, Transmissions, Barbers, Contact, My Account.
- Use the provided `appstore-listing-copy.md` for short description, full description, keywords, and category.
- Privacy policy URL: `https://societybarbersv2.lovable.app/privacy`.
- Support URL: `https://societybarbersv2.lovable.app`.
- Support email: `society@notacult.ca`.

### Step 10. TestFlight internal testing
- Once the build appears in App Store Connect, add your email as an internal tester.
- Install TestFlight on an iPhone, install Society Barbers, and verify:
  - Splash animation and home screen render.
  - Bottom tabs navigate correctly.
  - Fresha links open in the in-app browser.
  - Phone/email links work.

### Step 11. Submit for review
- Complete the age rating questionnaire honestly; expect 12+ or 17+ due to the dystopian/propaganda imagery.
- Provide review notes: the app is a companion to a barbershop website, uses an in-app browser for Fresha account/booking deep links, and contains no in-app purchases.
- Submit version 1.0 for review.

### Step 12. After approval
- Release version 1.0 to the App Store in Canada.
- Return to the Google Play plan once an Android device is available to confirm the Google account.

## Notes
- No new code changes are required beyond the existing `PrivacyInfo.xcprivacy`, `Info.plist`, `/privacy` route, and `codemagic.yaml`.
- The Google Play `society-barbers-release.aab` and keystore remain untouched for later.
