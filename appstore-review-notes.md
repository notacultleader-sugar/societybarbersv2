# App Review Reply — Society Barbers (build 10)

Build 10 addresses the outstanding App Review issues under Guidelines 2.1(a), 4, and 5.1.2(i).

## Review Notes (paste into App Store Connect)

GUIDELINE 2.1(a) — REVIEW ACCESS
Fresha, our third-party booking provider, sends a one-time code when a customer signs in. We have requested an App Review callback so we can provide the code during review. If the reviewer needs a new code, please use the review contact telephone number in App Review Information. All Society Barbers app content is usable without signing in; Fresha sign-in is needed only to view a customer's appointments, memberships, or gift cards.

GUIDELINE 4 — SIGN-IN AND WEB CONTENT
In build 10, every Fresha action is presented inside the app with SFSafariViewController through the Capacitor Browser plugin. This includes Book a Chair on Home, Book Online on Book, each barber's BOOK NOW button, My appointments, My memberships, My gift cards, and Fresha's account-deletion instructions. A native global link guard also presents all other external http(s) links inside SFSafariViewController. The app does not hand these links to the standalone Safari app. The visible URL and browser controls allow the customer to verify Fresha before entering credentials.

Society Barbers does not create or store app accounts or credentials. Accounts belong to Fresha. The Account screen explains this and provides Fresha's published account-deletion instructions and Society Barbers contact details.

GUIDELINE 5.1.2(i) — TRACKING
The App Privacy answers have been corrected: the app does not track users and does not collect a Device ID. The app contains no analytics SDK, advertising SDK, ATT framework call, or IDFA access. PrivacyInfo.xcprivacy declares tracking false and no collected data types or tracking domains. Fresha runs in SFSafariViewController, and the app cannot read the page, cookies, credentials, or information entered there.

BUSINESS MODEL

1. Users are customers booking real-world barbering services at our Duncan and Maple Bay, British Columbia locations. The app itself is free.
2. Nothing is purchased inside the app. Transactions occur through Fresha or in person at the barbershop.
3. No previously purchased digital content is accessible in the app. Fresha's website can display appointments, in-shop service memberships, and gift-card balances.
4. No paid digital content, subscription, or app feature is unlocked, with or without In-App Purchase.
5. There are no physical/digital bundles. Memberships and gift cards apply only to real-world barbering services performed in person.

REVIEW PATH

- Home > Book a Chair: opens Fresha inside the app.
- Book > Book Online: opens Fresha inside the app.
- Barbers > any BOOK NOW: opens Fresha inside the app.
- Account > My appointments / My memberships / My gift cards: opens Fresha inside the app; sign-in may request a one-time code.
- Account > Delete your Fresha account: opens Fresha's deletion instructions inside the app.
- Support and Privacy are available from the app and require no sign-in.

SUPPORT URL
https://societybarbersv2.lovable.app/support

PRIVACY POLICY URL
https://societybarbersv2.lovable.app/privacy

CONTACT
society@notacult.ca — 250-597-0155

## App Store Connect checklist

- Select build 10 for version 1.0. Do not resubmit build 8 or an earlier copy of build 9.
- App Review Information > Sign-in required: enable it and provide a tested Fresha customer login plus a telephone number that can receive the one-time code or coordinate the requested reviewer callback.
- Paste the Review Notes above.
- App Privacy: tracking No; Device ID not collected; if the questionnaire asks whether this app collects data, answer No based on the current binary.
- In-App Purchases: none.
- Support URL and Privacy Policy URL: use the URLs above.
- Test the TestFlight build on both iPhone and iPad before submission. Confirm every REVIEW PATH item displays an in-app Safari view with a Done button and does not switch to the standalone Safari app.

## Code-audit result

- All nine routes reviewed: Home, Book, Transmissions, Barbers, Contact, Account, Support, Privacy, and the not-found/error screens.
- Fresha buttons use the shared native in-app browser helper.
- External http(s) anchors are covered by the native global link guard.
- Phone and email links intentionally use iOS Phone/Mail handling.
- The Capacitor Browser package is registered in the iOS native project.
- Privacy manifest declares no tracking or collected data.
- No analytics, advertising, IDFA, or ATT dependency/call was found.

The final device behavior still must be verified from the uploaded TestFlight binary because SFSafariViewController cannot be launched in this Linux audit environment.
