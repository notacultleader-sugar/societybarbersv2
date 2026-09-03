import { createFileRoute, Link } from "@tanstack/react-router";
import { LifeBuoy, Mail, MapPin, Phone, Clock, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support & Help — Society Barbers App" },
      {
        name: "description",
        content:
          "Get help with the Society Barbers app: phone numbers, emails, hours and addresses for our Duncan and Maple Bay barbershops, plus answers to common questions.",
      },
      { property: "og:title", content: "Support & Help — Society Barbers App" },
      {
        property: "og:description",
        content:
          "Contact The Society Barbers for help with the app, bookings, memberships or gift cards. Duncan and Maple Bay, BC.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SupportPage,
});

const locations = [
  {
    name: "Downtown Duncan",
    address: "191 Kenneth St, Duncan, BC",
    phone: "250-597-0155",
    tel: "+12505970155",
    email: "society@notacult.ca",
    hours: "Mon–Sat 10:00am–6:30pm · Sun 10:00am–4:00pm",
  },
  {
    name: "Maple Bay",
    address: "963 Herd Rd, North Cowichan, BC",
    phone: "778-455-2858",
    tel: "+17784552858",
    email: "hall@notacult.ca",
    hours: "Mon–Sat 10:00am–5:00pm · Sun closed",
  },
];

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Open the Book tab and tap Book online, or pick your barber on the Barbers tab and tap BOOK NOW. Booking is handled by Fresha, our booking platform. You can also call either shop during opening hours.",
  },
  {
    q: "How do I cancel or change a booking?",
    a: "Cancel or reschedule from the confirmation email or text Fresha sent you, from the My Account tab, or call the shop directly and we'll sort it out.",
  },
  {
    q: "I can't sign in to my account.",
    a: "The My Account tab opens Fresha's own sign-in page. Sign in with the email or phone number you booked with; Fresha sends a one-time code. If the code doesn't arrive, check your spam folder, then contact us and we'll look up your bookings for you.",
  },
  {
    q: "Where are my memberships or gift cards?",
    a: "They live in your Fresha account, reachable from the My Account tab. If a balance looks wrong, call or email the shop where you bought it and we'll fix it.",
  },
  {
    q: "The app isn't loading or a screen looks wrong.",
    a: "Close the app fully and reopen it, and make sure you have a data or Wi-Fi connection. If it keeps happening, email society@notacult.ca with your device model and what you were tapping, and we'll get it fixed.",
  },
  {
    q: "Do you take walk-ins?",
    a: "Walk-ins are welcome when possible, but appointments are recommended.",
  },
];

function SupportPage() {
  return (
    <main className="min-h-screen px-4 pb-28 pt-6 safe-top">
      <header className="mb-8 pt-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neon">
          We're here to help
        </p>
        <h1 className="font-display text-4xl font-bold uppercase leading-none tracking-tight text-white">
          SUPPORT
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Questions about the Society Barbers app, a booking, a membership or a gift card? Reach a
          real person at either shop — usually the same day.
        </p>
      </header>

      <section className="mb-6 rounded-2xl bg-surface p-5 glow-border">
        <div className="mb-3 flex items-center gap-2">
          <LifeBuoy className="h-4 w-4 text-neon-cyan" />
          <h2 className="font-display text-lg font-semibold uppercase text-white">
            Fastest way to reach us
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Email{" "}
          <a className="text-neon" href="mailto:society@notacult.ca">
            society@notacult.ca
          </a>{" "}
          or call{" "}
          <a className="text-neon" href="tel:+12505970155">
            250-597-0155
          </a>
          . We answer app questions, booking questions and everything else. We aim to reply to email
          within one business day.
        </p>
      </section>

      <section className="grid gap-3">
        {locations.map((loc) => (
          <div key={loc.name} className="rounded-2xl bg-surface p-5">
            <h2 className="font-display text-lg font-semibold uppercase text-white">{loc.name}</h2>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${loc.tel}`} className="text-white">
                  {loc.phone}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                <a href={`mailto:${loc.email}`} className="text-white">
                  {loc.email}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan" />
                <span>{loc.address}</span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{loc.hours}</span>
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-6 grid gap-3">
        <h2 className="font-display text-xl font-semibold uppercase text-white">
          Common questions
        </h2>
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-2xl bg-surface-elevated p-5">
            <div className="mb-2 flex items-center gap-2">
              <HelpCircle className="h-4 w-4 shrink-0 text-neon-cyan" />
              <h3 className="font-display text-base font-semibold text-white">{faq.q}</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 rounded-2xl bg-surface p-5">
        <p className="text-sm text-muted-foreground">
          Bookings, accounts, memberships and gift cards are handled by Fresha, our booking
          platform. See our{" "}
          <Link to="/privacy" className="text-neon">
            privacy policy
          </Link>{" "}
          for how your information is handled.
        </p>
      </section>
    </main>
  );
}
