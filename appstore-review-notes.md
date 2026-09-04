# App Review Reply — Society Barbers (build 8)

Rejection of September 4, 2026 (version 1.0 (5)) raised two items:

- Guideline 4 — Design: sign-in appeared to open the default web browser.
- Guideline 2.1(b) — Information Needed: business-model questions.

Both are answered below. Build 8 contains the code change for Guideline 4.

---

## 1. What changed in build 8 (Guideline 4)

Every link to Fresha — sign in, appointments, memberships, gift cards, booking —
now opens strictly inside the app using **SFSafariViewController** (Capacitor
Browser, presented as a sheet). On a device the app will never hand a URL to
Safari: if the in-app browser cannot be presented, nothing opens instead of
leaving the app. The customer sees the real URL and can inspect the SSL
certificate before entering credentials, as Apple's guidance describes.

A global safety net also intercepts every http(s) link in the app (Instagram,
maps, privacy links, all Fresha links) and re-presents it in the in-app Safari
view, so no code path can hand off to Safari. If the in-app browser cannot be
presented, an in-app error with a Retry action is shown instead.

The app has no accounts of its own: no in-app registration, no in-app profile,
no credentials stored. Accounts belong to Fresha, our third-party booking
provider. My Account now has a clearly labelled "Delete your account" section
with a "Delete your Fresha account" button that opens Fresha's own published
instructions
(https://www.fresha.com/help-center/knowledge-base/personal-account/237-delete-your-personal-account)
plus society@notacult.ca to have Society Barbers remove booking records held by
the shop.

My Account also states plainly that memberships and gift cards cover barber
services delivered in person at the shop and unlock no app features or digital
content.

---

## 2. Review Notes (paste this)

GUIDELINE 4 — DESIGN / SIGN IN
Sign-in is not an app account. Society Barbers uses Fresha as its booking
provider, and Fresha authenticates the customer on its own website. In build 8
every Fresha link — including sign in — is presented with
SFSafariViewController inside the app (Capacitor Browser, sheet presentation), so
the customer never leaves the app and can verify the URL and SSL certificate
before entering anything. The app does not open the default browser on device.
The app creates no accounts itself, stores no credentials, and therefore has no
in-app account to delete. My Account nevertheless contains a clearly labelled
"Delete your account" section linking to Fresha's own published account-deletion
instructions, plus an email address for removing booking records held by the shop.
Home, Book, Transmissions, Barbers, Contact, Support and Privacy are fully
usable with no sign-in of any kind.

GUIDELINE 2.1(b) — BUSINESS MODEL
1. Users: retail haircut customers of our two barbershops in Duncan and Maple
   Bay, British Columbia, Canada. Anyone can use the whole app without an
   account.
2. Where purchases happen: nowhere in the app. All payment happens either in
   person at the shop or on Fresha's own website in SFSafariViewController.
   The app itself sells nothing and unlocks nothing.
3. Previously purchased items a user can see: none inside the app. Appointments,
   memberships and gift cards are shown by Fresha's website, in the browser view.
   The app only links there.
4. Paid content, subscriptions or features unlocked in the app without In-App
   Purchase: none. There is no digital content, no subscription tier and no
   paywalled feature anywhere in the app.
5. Physical goods bundled with digital content: no. Everything sold is a real
   world service performed in person by a barber (haircuts, beard trims), plus
   gift cards and memberships that are redeemed only for those in-person
   services. There is no digital content of any kind, so nothing is bundled.

GUIDELINE 5.1.2(i) — TRACKING (for completeness)
The app does not track. No analytics SDKs, no advertising SDKs, the IDFA is never
read, and no device data is sent anywhere. PrivacyInfo.xcprivacy declares
NSPrivacyTracking = false, no collected data types and no tracking domains.
Anything the customer enters on Fresha's site is entered in an out-of-process
browser view the app cannot read.

GUIDELINE 1.5 — SUPPORT URL
https://societybarbersv2.lovable.app/support lists both shop phone numbers, both
email addresses, both street addresses, opening hours for both locations, and
answers to common questions about bookings, accounts, memberships, gift cards
and app problems.

ABOUT THE APP
Society Barbers is a free companion app for a two-location barbershop. It shows
hours, locations, staff, shop artwork, closure notices and booking links. No
user-generated content, no messaging, no social feed, no in-app purchases or
subscriptions, and no permission requests at all.

CONTACT
society@notacult.ca — 250.597.0155

---

## 3. App Store Connect checklist (owner actions)

- **Support URL** → `https://societybarbersv2.lovable.app/support`
- **Privacy Policy URL** → `https://societybarbersv2.lovable.app/privacy`
- **App Review Information → Sign-In Required: YES** — provide a real Fresha
  client account you have created and tested, plus a contact so a one-time code
  can be relayed (Fresha emails a code).
- **App Privacy** → "No, we do not collect data from this app"; tracking → No.
- **In-App Purchases** → none; do not add any.
- Upload build 8, paste part 2 into Review Notes, Submit for Review.

---

## 4. Still pending — cannot be verified from code

- Installed iPhone/iPad test that every Fresha link opens the in-app Safari
  sheet (URL bar visible, "Done" button top-left) and never jumps to Safari.
- A real Fresha reviewer account created and tested by the owner.
- Confirmation of substitute closure dates in `src/lib/holidays.ts`.
- A Codemagic `ios-app-store` run producing build 8.
- App Store Connect field entry.
