Google Play Store submission for Society Barbers

## Goal
Get the Society Barbers Android app uploaded, reviewed, and ready for release on the Google Play Store, before moving on to the Apple App Store.

## Current state
- Signed release AAB already exists: `society-barbers-release.aab`
- Release keystore exists: `android/app/society-barbers.keystore`
- Keystore credentials file exists: `android/keystore-credentials.txt`
- App id: `com.thesocietybarbers.app`
- Published website: `https://societybarbersv2.lovable.app`
- User has no Google Play Console account yet

## Plan

### 1. Register for Google Play Console
- The user must create a Google Play Developer account at `https://play.google.com/console/signup`
- One-time $25 USD registration fee
- Use a Google account the business owns / will keep forever

### 2. Back up the signing key
- Download and save `android/app/society-barbers.keystore`
- Download and save `android/keystore-credentials.txt`
- Store both somewhere safe (password manager, cloud storage). Losing the keystore blocks future updates.

### 3. Generate a privacy policy page
- Create a simple `/privacy` route on the app website
- Text focused on: no user accounts in the app itself, Fresha handles booking data, no data collection by the app, contact email
- Publish the site so the policy lives at `https://societybarbersv2.lovable.app/privacy`

### 4. Prepare store listing assets
- App name: `Society Barbers`
- Short description: one sentence about booking and community
- Full description: a few paragraphs covering Duncan and Maple Bay locations, Fresha booking, barber team, "They Live" community vibe
- App category: `Lifestyle` or `Beauty`
- Contact email: `society@notacult.ca`
- Website: `https://societybarbersv2.lovable.app`
- Phone screenshots (2-8 images) from key screens: Home, Book, Transmissions, Barbers, Contact, My Account
- Feature graphic (1024x500) and optional promo video

### 5. Create the app in Play Console
- Click `Create app`
- Enter app name, default language (English, Canada), app or game (app), free or paid (free)
- Confirm the app id matches `com.thesocietybarbers.app`

### 6. Fill in store listing
- Add short and full descriptions
- Upload app icon (generated from `assets/icon.png`)
- Upload phone screenshots
- Upload feature graphic
- Add privacy policy URL from step 3
- Set `Lifestyle` or `Beauty` category
- Add contact email and website

### 7. Set distribution
- Countries / regions: `Canada`
- Pricing: Free
- Target audience: 18+ (barbershop/booking app, no child content)

### 8. Complete content rating questionnaire
- Fill the Google Play content rating form honestly (violence, sexuality, language, etc.)
- Expected result: likely `Everyone` or `Teen`, depending on the dystopian "They Live" imagery

### 9. Upload the release bundle
- Go to `Production` (or start with `Internal testing` for a safer first upload)
- Create a new release
- Upload `society-barbers-release.aab`
- Confirm version code and version name
- Save and review

### 10. Internal testing track first
- Add the user's own email as an internal tester
- Send the internal testing link to install the app before public release
- This catches Play Console issues without affecting production

### 11. Submit for review
- Once internal testing installs successfully, roll the release to `Production`
- Submit for Google Play review
- Typical review time: a few hours to several days

### 12. Post-approval
- Confirm the app is live on Google Play
- Provide next steps for the Apple App Store

## Notes
- No changes to the app's design, copy, or functionality are planned unless Play Console flags something.
- The iOS build is out of scope for this plan; it will follow after Play Store submission.
