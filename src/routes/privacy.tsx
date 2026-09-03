import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Society Barbers" },
      {
        name: "description",
        content:
          "Privacy policy for the Society Barbers app. We collect no data ourselves; bookings and accounts are handled by Fresha, which may track you.",
      },
      { property: "og:title", content: "Privacy Policy — Society Barbers" },
      {
        property: "og:description",
        content:
          "Privacy policy for the Society Barbers app. We collect no data ourselves; bookings and accounts are handled by Fresha, which may track you.",
      },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "What this app is",
    body: "The Society Barbers app is a companion app for our barbershops in Duncan and Maple Bay, BC. It shows our hours, locations, barbers, community updates, and links to our booking platform, Fresha.",
  },
  {
    title: "Data the app collects",
    body: "The app itself does not collect, store, or share any personal information. There are no accounts inside the app, no analytics SDKs, no advertising SDKs, and no tracking code. It does not read your device's advertising identifier and sends no data from your device to us.",
  },
  {
    title: "Who is who",
    body: "There are three parties: this app (a simple companion app), Fresha (the third-party booking platform we use), and Society Barbers (us — the barbershop providing your haircut). The app only links you to Fresha; it cannot read what happens inside Fresha's website.",
  },
  {
    title: "Bookings and your Fresha account",
    body: "When you tap a booking, sign-in, membership, or gift card link, the app opens Fresha's own website in a secure in-app browser that runs separately from the app. Anything you enter there — name, contact details, payment info, sign-in codes or passwords — is handled by Fresha under Fresha's privacy policy, and the app never sees or stores your Fresha login. As the business you are booking with, Society Barbers does receive the booking information Fresha makes available to us — such as your name, contact details, appointments and purchase history — because we need it to provide and manage your appointments. We use it for that purpose only, and we do not sell it or use it for advertising.",
  },
  {
    title: "Cookies",
    body: "Fresha's website sets its own cookies in that in-app browser, as any website does, and those are governed by Fresha's cookie notice and privacy policy. We cannot read, delete, or block them, and we make no promises about what signing out or deleting the app removes from Fresha's side. To manage that data, use the privacy and account controls inside your Fresha account or contact Fresha. Booking works the same either way.",
  },


  {
    title: "Phone, email, and map links",
    body: "Tapping a phone number, email address, or address opens your device's own phone, mail, or maps app. No information is sent to us by doing this.",
  },
  {
    title: "Changes",
    body: "If this policy ever changes, the updated version will be posted at this address.",
  },
  {
    title: "Contact",
    body: "Questions about this policy? Email us at society@notacult.ca.",
  },
];

function PrivacyPage() {
  return (
    <main className="min-h-screen px-4 pb-28 pt-6 safe-top">
      <header className="relative mb-8">
        <div className="relative pt-6">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neon">
            The fine print
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-none tracking-tight text-white">
            PRIVACY POLICY
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: August 27, 2026</p>
        </div>
      </header>

      <section className="grid gap-3">
        {sections.map((section) => (
          <div key={section.title} className="rounded-2xl bg-surface p-5">
            <div className="mb-2 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-neon-cyan" />
              <h2 className="font-display text-lg font-semibold text-white">{section.title}</h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{section.body}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
