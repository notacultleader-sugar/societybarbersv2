import { createFileRoute, Link } from "@tanstack/react-router";
import astronaut from "@/assets/astronaut.png.asset.json";
import { MapPin, Phone, Mail, Clock, Instagram, ExternalLink } from "lucide-react";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Society Barbers" },
      { name: "description", content: "Contact The Society Barbers. Two locations in the Cowichan Valley." },
      { property: "og:title", content: "Contact — Society Barbers" },
      { property: "og:description", content: "Contact The Society Barbers. Two locations in the Cowichan Valley." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {


  return (
    <main className="min-h-screen px-4 pb-28 pt-6 safe-top">
      <header className="relative mb-8 -mx-4 px-4">
        <img
          src={astronaut.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-10 right-0 h-56 w-auto object-contain object-right-top opacity-80 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
        />
        <div className="relative max-w-[62%] pt-6">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            The Signal
          </p>
          <h1 className="font-display text-4xl font-bold leading-none tracking-tight text-white uppercase">
            MAKE CONTACT
          </h1>
        </div>
      </header>

      <section className="mb-5 grid gap-3">
        <div className="relative rounded-2xl bg-surface p-4">
          <a
            href="https://maps.google.com/?q=191+Kenneth+St+Duncan+BC"
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4"
          >
            <div className="rounded-xl bg-neon/15 p-2.5 text-neon">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-white">Downtown Duncan</p>
              <p className="text-sm text-muted-foreground">191 Kenneth St</p>
            </div>
          </a>
          <a
            href="tel:+12505970155"
            className="mt-4 flex items-center gap-2 text-sm text-white"
          >
            <Phone className="h-4 w-4 text-gold" />
            <span className="font-display font-semibold">(250) 597-0155</span>
          </a>
          <a
            href="mailto:society@notacult.ca"
            className="mt-3 flex items-center gap-2 text-sm text-white"
          >
            <Mail className="h-4 w-4 text-neon" />
            <span className="font-display font-semibold">society@notacult.ca</span>
          </a>
        </div>

        <div className="relative rounded-2xl bg-surface p-4">
          <a
            href="https://maps.google.com/?q=963+Herd+Rd+Maple+Bay+BC"
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4"
          >
            <div className="rounded-xl bg-neon-cyan/15 p-2.5 text-neon-cyan">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-white">Maple Bay</p>
              <p className="text-sm text-muted-foreground">963 Herd Rd</p>
            </div>
          </a>
          <a
            href="tel:+17784552858"
            className="mt-4 flex items-center gap-2 text-sm text-white"
          >
            <Phone className="h-4 w-4 text-gold" />
            <span className="font-display font-semibold">(778) 455-CULT</span>
          </a>
          <a
            href="mailto:hall@notacult.ca"
            className="mt-3 flex items-center gap-2 text-sm text-white"
          >
            <Mail className="h-4 w-4 text-neon-cyan" />
            <span className="font-display font-semibold">hall@notacult.ca</span>
          </a>
        </div>
      </section>

      <section className="mb-5 grid gap-3 rounded-2xl bg-surface-elevated p-5">
        <div className="mb-2 flex items-center gap-3">
          <div className="rounded-xl bg-gold/15 p-2.5 text-gold">
            <Clock className="h-5 w-5" />
          </div>
          <h2 className="font-display text-lg font-semibold text-white">Hours</h2>
        </div>

        <div className="rounded-2xl bg-surface p-4">
          <p className="mb-3 font-display text-sm font-semibold text-white">Downtown Duncan</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Monday – Saturday</span>
              <span className="text-white">10am – 6:30pm</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span className="text-white">10am – 4pm</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-surface p-4">
          <p className="mb-3 font-display text-sm font-semibold text-white">Maple Bay</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Monday – Saturday</span>
              <span className="text-white">10am – 5pm</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span className="text-white">Closed</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-3">
        <a
          href="https://instagram.com/societybarbers"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-2xl bg-surface p-4 text-white"
        >
          <div className="flex items-center gap-3">
            <Instagram className="h-5 w-5 text-neon" />
            <div>
              <p className="font-display font-semibold">@societybarbers</p>
              <p className="text-xs text-muted-foreground">Duncan</p>
            </div>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground" />
        </a>

        <a
          href="https://instagram.com/societyatthehall"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-2xl bg-surface p-4 text-white"
        >
          <div className="flex items-center gap-3">
            <Instagram className="h-5 w-5 text-neon-cyan" />
            <div>
              <p className="font-display font-semibold">@societyatthehall</p>
              <p className="text-xs text-muted-foreground">Maple Bay</p>
            </div>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground" />
        </a>
      </section>

      <section className="mt-6 rounded-2xl bg-surface-elevated p-5 text-sm text-muted-foreground">
        Need help with the app, a booking or a gift card? See{" "}
        <Link to="/support" className="text-neon">
          Support &amp; Help
        </Link>{" "}
        or read our{" "}
        <Link to="/privacy" className="text-neon">
          privacy policy
        </Link>
        .
      </section>
    </main>
  );
}

