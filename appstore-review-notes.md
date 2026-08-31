# App Review Reply — Society Barbers (build 5)

This file has three parts:
1. What to set in App Store Connect (checklist)
2. The Review Notes block to paste
3. The App Privacy answers to select

---

## 1. App Store Connect checklist

- **Support URL** → `https://societybarbersv2.lovable.app/support`
  (Guideline 1.5 — this is now a real support page with phone numbers, emails,
  hours, addresses and an FAQ.)
- **Privacy Policy URL** → `https://societybarbersv2.lovable.app/privacy`
- **App Review Information → Sign-In Required: YES**
  - Username: the Fresha client account email you created for reviewers
  - Password: that account's password
  - Contact: your first name, last name, phone, email
- **App Privacy** → see part 3 below (you must declare tracking = Yes).
- Upload build **1.0 (5)**, then Submit for Review.

---

## 2. Review Notes (paste this)

GUIDELINE 5.1.2(i) — TRACKING PERMISSION (RESOLVED IN BUILD 5)
Build 5 implements App Tracking Transparency. The system permission prompt
("Allow Society Barbers to track your activity across other companies' apps and
websites?") is presented automatically on first launch, about one second after
the app becomes active, before any Fresha web content can be opened. It is
requested once via ATTrackingManager.requestTrackingAuthorization in
AppDelegate.applicationDidBecomeActive. The purpose string is in Info.plist
(NSUserTrackingUsageDescription). The app's privacy manifest now declares
NSPrivacyTracking = true and lists fresha.com as a tracking domain. The App
Privacy section in App Store Connect has been updated to disclose tracking.
The only web content that sets cookies is Fresha, our third-party booking
platform, opened in an in-app browser. The app itself contains no analytics,
advertising or tracking SDKs.

GUIDELINE 2.1(a) — DEMO ACCOUNT
A Fresha client account has been created for App Review and its email and
password are in the App Review Information section. Note that Fresha (our
third-party booking provider, not software we control) sends a one-time code to
that account's email address as part of sign-in. If the code does not arrive or
you need it relayed, reply to this message or contact us at the number below and
we will provide the current code immediately.
Important: only the "My Account" tab uses this Fresha sign-in. Every other
feature of the app — Home, Book, Transmissions, Barbers, Contact — is fully
usable with no account, no login and no credentials.

GUIDELINE 2.1(a) — OTP BUG
The one-time code is generated and sent by Fresha's website, not by our app. We
have re-tested sign-in on iPhone and iPad with build 5 and codes arrive within
a minute. If a code is delayed during review, please contact us and we will
supply it directly so the review can continue.

GUIDELINE 1.5 — SUPPORT URL
The Support URL has been updated to
https://societybarbersv2.lovable.app/support
This page lists both shop phone numbers, both email addresses, both street
addresses, opening hours, and answers to common questions about bookings,
accounts, memberships, gift cards and app problems.

ABOUT THE APP
Society Barbers is a free companion app for a two-location barbershop in Duncan
and Maple Bay, British Columbia, Canada. It shows hours, locations, staff,
shop announcements and booking links. There is no user-generated content, no
messaging, no social feed, and no in-app purchases or subscriptions. The app
requests no permissions other than tracking; no location, contacts, camera,
microphone, photos or notifications. The layout is a centered phone-width
column on iPad by design. Behaviour is identical in all regions.

CONTACT
society@notacult.ca — 250.597.0155

---

## 3. App Privacy answers in App Store Connect

Set: **"Yes, we collect data from this app."**

Data type to add: **Identifiers → Device ID**
- Used for: **Third-Party Advertising** (this is the option Apple maps to tracking)
- Linked to the user: **No**
- Used for tracking: **YES**

Then answer the tracking question at the end as **Yes, this app uses data for
tracking purposes**.

Everything else (contact info, health, financial info, location, etc.) stays
**not collected** — that data goes to Fresha's own website, not to the app.

---

## Other checklist items

- Screenshots show real in-app screens (Home, Book, Transmissions, Barbers,
  Contact, My Account) — compliant with 2.3.3.
- No subscriptions or in-app purchases → Guideline 3.1.2 not applicable.
- Only purpose string present is NSUserTrackingUsageDescription → 5.1.1 OK.
