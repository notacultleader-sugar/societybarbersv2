import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Society Barbers" },
      {
        name: "description",
        content:
          "Privacy policy for the Society Barbers app. The app collects no personal data; bookings are handled by Fresha.",
      },
      { property: "og:title", content: "Privacy Policy — Society Barbers" },
      {
        property: "og:description",
        content:
          "Privacy policy for the Society Barbers app. The app collects no personal data; bookings are handled by Fresha.",
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
    title: "Data we collect",
    body: "The app itself does not collect, store, or share any personal information. There are no accounts inside the app, no analytics, and no advertising SDKs.",
  },
  {
    title: "Cookies and tracking",
    body: "When you open Fresha inside the app, Fresha's own website may set cookies, including cookies that could be used to recognise you across other websites. On iOS we ask for your permission first using Apple's App Tracking Transparency prompt. If you decline, you can still use every booking link — we simply don't allow that data to be used for tracking. You can change your choice any time in iOS Settings under Privacy & Security, then Tracking.",
  },
  {
    title: "Bookings and your Fresha account",
    body: "When you tap a booking, sign-in, membership, or gift card link, the app opens Fresha's own website in an in-app browser. Anything you enter there — your name, contact details, payment info, or password — goes directly to Fresha and is covered by Fresha's privacy policy (fresha.com/privacy-policy). We never see or store your Fresha login.",
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
    <main className="min-h-screen px-4 pb-16 pt-6 safe-top">
      <header className="relative mb-8">
        <div className="relative pt-6">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neon">
            The fine print
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-none tracking-tight text-white">
            PRIVACY POLICY
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: August 27, 2026
          </p>
        </div>
      </header>

      <section className="grid gap-3">
        {sections.map((section) => (
          <div key={section.title} className="rounded-2xl bg-surface p-5">
            <div className="mb-2 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-neon-cyan" />
              <h2 className="font-display text-lg font-semibold text-white">
                {section.title}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {section.body}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
