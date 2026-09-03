# App Review Reply — Society Barbers (build 6)

Three parts:
1. What to set in App Store Connect (checklist)
2. The Review Notes block to paste
3. The App Privacy answers to select

> These notes describe the behaviour actually shipped in the code. Do not reuse
> the older build-5 notes — they claimed a first-launch prompt that was wired to
> a callback iOS never calls on scene-based apps, and claimed cookie blocking
> the app does not do.

---

## 1. App Store Connect checklist

- **Support URL** → `https://societybarbersv2.lovable.app/support`
- **Privacy Policy URL** → `https://societybarbersv2.lovable.app/privacy`
- **App Review Information → Sign-In Required: YES**
  - Username / password: the Fresha client account created for reviewers
  - Contact: first name, last name, phone, email
- **App Privacy** → see part 3 below (tracking = Yes).
- Upload the new build, then Submit for Review.

---

## 2. Review Notes (paste this)

GUIDELINE 5.1.2(i) — TRACKING PERMISSION
This build presents Apple's App Tracking Transparency prompt on first launch.
The app is scene-based (UIApplicationSceneManifest), so the request is made from
SceneDelegate.sceneDidBecomeActive — approximately one second after the first
scene becomes active, and before any Fresha web content can be opened. It is
requested exactly once via ATTrackingManager.requestTrackingAuthorization. This
is the only place the app asks; there is no second or duplicate request. The
purpose string in Info.plist (NSUserTrackingUsageDescription) explains that
allowing lets Fresha's cookies recognise the user across other companies' apps
and websites, and that declining does not affect booking.

WHAT THE APP DOES AND DOES NOT DO WITH TRACKING
The app contains no analytics SDKs, no advertising SDKs, and no tracking code of
its own. It never reads the IDFA and never sends device data anywhere. The only
third-party web content is Fresha, our booking provider, opened in an in-app
browser (SFSafariViewController via Capacitor Browser) for booking, sign-in,
memberships and gift cards. Fresha's website sets its own cookies, and those
cookies may be used to recognise the user on other sites, so we disclose
tracking and ask permission rather than claim otherwise. The user's ATT answer
is recorded by iOS and is what any advertising use must respect; the app does
not itself delete or block Fresha's cookies, and booking works identically
whether the user allows or denies. Our privacy policy states this in the same
terms.

PRIVACY MANIFEST
PrivacyInfo.xcprivacy declares NSPrivacyTracking = true and one collected data
type: Identifiers → Device ID, not linked to the user, used for tracking, with
purpose Third-Party Advertising. This matches the App Privacy answers in App
Store Connect. NSPrivacyTrackingDomains is intentionally empty: fresha.com is
our own booking provider's domain rather than an advertising endpoint, and
declaring it would make iOS block booking, sign-in, memberships and gift cards
for any user who chooses "Ask App Not to Track".

GUIDELINE 2.1(a) — DEMO ACCOUNT
A Fresha client account has been created for App Review; the email and password
are in the App Review Information section. Fresha (a third party, not software
we control) emails a one-time code as part of sign-in. If a code does not arrive
or you need it relayed, contact us at the number below and we will provide the
current code immediately.
Only the "My Account" tab uses Fresha sign-in. Home, Book, Transmissions,
Barbers, Contact and Support are fully usable with no account and no login.

GUIDELINE 1.5 — SUPPORT URL
The Support URL is https://societybarbersv2.lovable.app/support — it lists both
shop phone numbers, both email addresses, both street addresses, opening hours,
and answers to common questions about bookings, accounts, memberships, gift
cards and app problems.

ABOUT THE APP
Society Barbers is a free companion app for a two-location barbershop in Duncan
and Maple Bay, British Columbia, Canada. It shows hours, locations, staff, shop
artwork, our next closure date, and booking links. There is no user-generated
content, no messaging, no social feed, and no in-app purchases or
subscriptions. The only permission requested is tracking; no location,
contacts, camera, microphone, photos or notifications. Behaviour is identical in
all regions.

CONTACT
society@notacult.ca — 250.597.0155

---

## 3. App Privacy answers in App Store Connect

Set: **"Yes, we collect data from this app."**

Data type to add: **Identifiers → Device ID**
- Used for: **Third-Party Advertising**
- Linked to the user: **No**
- Used for tracking: **YES**

Final tracking question: **Yes, this app uses data for tracking purposes.**

Everything else (contact info, health, financial info, location, etc.) stays
**not collected** — that data is entered on Fresha's own website, not collected
by the app.

This matches PrivacyInfo.xcprivacy exactly. If you change one, change both.

---

## 4. Device testing still required before submitting

- Install the build on a real iPhone. On first launch confirm the tracking
  prompt appears.
- With **"Allow"**: complete a booking and a Fresha sign-in (including the
  emailed one-time code) in the in-app browser.
- With **"Ask App Not to Track"** (Settings → Privacy & Security → Tracking):
  repeat the same booking and sign-in and confirm both still work. This is the
  case Apple's tracking-domain blocking would break; the manifest deliberately
  declares no tracking domains so it should not, but verify it.
- Test on iPad as well; the layout is a centered column that widens on tablets.

---

## 5. Android signing (security)

The release keystore and its password file are no longer stored in the
repository. `android/app/build.gradle` now reads signing material from the build
environment (`CM_KEYSTORE_PATH`, `CM_KEYSTORE_PASSWORD`, `CM_KEY_ALIAS`,
`CM_KEY_PASSWORD`). Upload the keystore to Codemagic's secure environment
variables and keep the offline backup safe. Because the key and its passwords
were previously committed, treat them as exposed: if the Android app has not yet
been published to Google Play, generate a fresh keystore before the first
upload.
