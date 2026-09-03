# App Review Reply — Society Barbers (build 7)

Three parts:

1. What to set in App Store Connect (owner actions)
2. The Review Notes block to paste
3. The App Privacy answers to select

> These notes describe what is actually in the code as of September 3, 2026.
> Do not reuse the build-5 or build-6 notes. Those claimed an App Tracking
> Transparency prompt and tracking declarations. The app does no tracking, so
> the ATT prompt, the tracking purpose string, and the Device ID declaration
> have all been removed. Nothing in these notes may be pasted as "already done"
> unless you have actually done it in App Store Connect.

---

## 1. App Store Connect checklist (owner actions — not done by code)

- **Support URL** → `https://societybarbersv2.lovable.app/support`
- **Privacy Policy URL** → `https://societybarbersv2.lovable.app/privacy`
- **App Review Information → Sign-In Required: YES**
  - Provide a real Fresha client account you have created and tested.
  - Fresha signs in with an emailed one-time code, so also give a reviewer
    contact number/email so a code can be relayed on request.
- **App Privacy** → set to *no data collected* (part 3 below).
- Upload build 7, then Submit for Review.

---

## 2. Review Notes (paste this)

GUIDELINE 5.1.2(i) — TRACKING
This app does not track. It contains no analytics SDKs, no advertising SDKs and
no tracking code, never reads the IDFA, and sends no device data anywhere. There
is therefore no App Tracking Transparency request, no
NSUserTrackingUsageDescription, and PrivacyInfo.xcprivacy declares
NSPrivacyTracking = false with no collected data types and no tracking domains.

Booking, sign-in, memberships and gift cards open our booking provider Fresha's
own website in SFSafariViewController (via Capacitor Browser). That browser runs
out of process: the app cannot read the page, its cookies, its storage, or
anything the user enters there. Per Apple's User Privacy and Data Use guidance,
information a user provides to a website they browse in a browser presented by
the app is not data collected by the app, so no tracking authorization applies.
Our privacy policy at /privacy states this and links to Fresha's own privacy
policy and cookie notice for the data Fresha handles.

GUIDELINE 2.1(a) — ACCOUNT ACCESS
Sign-in happens on Fresha's website, not in the app. Fresha authenticates with a
one-time code emailed to the account, so a static password alone may not be
enough to complete sign-in. A Fresha client account for App Review is provided
in App Review Information; if a one-time code is needed we will relay it
immediately at the contact below.
Home, Book, Transmissions, Barbers, Contact, Support and Privacy are fully
usable with no account and no sign-in. Only "My Account" links into Fresha
sign-in, and booking works without signing in to the app in any way.

GUIDELINE 1.5 — SUPPORT URL
https://societybarbersv2.lovable.app/support lists both shop phone numbers, both
email addresses, both street addresses, opening hours for both locations, and
answers to common questions about bookings, accounts, memberships, gift cards
and app problems.

ABOUT THE APP
Society Barbers is a free companion app for a two-location barbershop in Duncan
and Maple Bay, British Columbia, Canada. It shows hours, locations, staff, shop
artwork, our next closure date, and booking links. There is no user-generated
content, no messaging, no social feed, and no in-app purchases or subscriptions.
The app requests no permissions at all — no tracking, location, contacts,
camera, microphone, photos or notifications. Behaviour is identical in all
regions.

CONTACT
society@notacult.ca — 250.597.0155

---

## 3. App Privacy answers in App Store Connect

Set: **"No, we do not collect data from this app."**

- No data types are collected.
- Tracking question: **No, this app does not use data for tracking purposes.**

Data the customer enters on Fresha's website is collected by Fresha, the
third-party booking provider, on its own website — not by this app. As the
business you book with, Society Barbers receives booking details through Fresha
to provide the service; that is disclosed in the app's privacy policy.

This matches `ios/App/App/PrivacyInfo.xcprivacy` exactly. If you change one,
change both.

---

## 4. Still pending — cannot be verified from code

- Installed iPhone/iPad test of Fresha sign-in (one-time code) and booking.
- A real Fresha reviewer account created and tested by the owner.
- Confirmation of substitute closure dates in `src/lib/holidays.ts` (any entry
  with a `note`).
- A clean Codemagic Mac ARM `npm ci` + native build run.
- App Store Connect field entry (support URL, privacy answers, reviewer notes).
