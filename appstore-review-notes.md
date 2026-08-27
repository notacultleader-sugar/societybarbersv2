# App Review Notes — Society Barbers

Paste the "Review Notes" block below into App Store Connect →
App Review Information → Notes.

---

## Review Notes (paste this)

1. USER-GENERATED CONTENT / SENSITIVE PERMISSIONS
The app contains no user-generated content, no social feed, no messaging,
no account creation inside the app, and no user-to-user interaction.
Therefore no reporting/blocking mechanism is required.
The app requests no sensitive permissions: no location, contacts, camera,
microphone, photos, notifications, or App Tracking Transparency prompt.
No tracking or advertising SDKs are present.

2. DEVICES AND OS TESTED
- iPhone (iOS 18) via TestFlight
- iPad (iPadOS 18) via TestFlight
The layout is a centered phone-width column on iPad by design.

3. PURPOSE AND TARGET AUDIENCE
Society Barbers is a free companion app for a two-location barbershop in
Duncan and Maple Bay, British Columbia, Canada. Target audience is existing
and prospective clients in the Cowichan Valley. It solves the problem of
finding shop hours, locations, contact details, staff information, and
booking links in one place instead of hunting across a website and social
media. Value: fast booking access and shop information.

4. SETTING UP AND ACCESSING MAIN FEATURES
No login, account, or credentials are required to use any part of the app.
All screens are reachable immediately from the bottom tab bar:
- Home: shop overview, hours, quick links
- Book: booking links for both locations
- Transmissions: shop announcements and next statutory holiday closure
- Barbers: staff list with individual booking links
- Contact: phone, email, and addresses for both locations
- My Account: opens the Fresha booking platform in an in-app browser
  (SFSafariViewController via Capacitor Browser). This is an optional
  convenience link to the barbershop's existing booking provider. Reviewers
  do not need a Fresha account to review the app; the tab simply opens the
  Fresha web page. No demo credentials exist because the app itself has no
  account system.

5. EXTERNAL SERVICES USED
- Fresha (fresha.com) — the barbershop's booking platform. Used only as
  outbound links opened in an in-app browser. No API integration, no data
  exchange, no payment processing inside the app.
- No analytics, no authentication service, no payment processor, no AI
  services, no data providers.

6. REGIONAL DIFFERENCES
None. The app functions identically in all regions. It is distributed in
Canada only because the business serves a local market, but no features or
content vary by region.

7. REGULATED INDUSTRY / THIRD-PARTY MATERIAL
Not applicable. Barbering services are not a regulated industry for App
Store purposes. All imagery, logos, staff photographs, and copy are owned
by The Society Barbers and used with permission. The visual style is an
original design inspired by dystopian sci-fi aesthetics; no third-party
film, brand, or copyrighted artwork is reproduced.

CONTACT
society@notacult.ca — 250.597.0155

---

## Other checklist items

- Screenshots must show real in-app screens, not the splash or title art.
  Current screenshots (iPhone 6.7"/6.5" and iPad 13") show Home, Book,
  Transmissions, Barbers, Contact, My Account — compliant.
- No subscriptions or in-app purchases → Guideline 3.1.2 not applicable.
- No purpose strings needed → Guideline 5.1.1 not applicable, and no
  usage-description keys should be present in Info.plist.
- Privacy Policy URL: https://societybarbersv2.lovable.app/privacy
- Support URL: https://societybarbersv2.lovable.app
