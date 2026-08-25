import { createFileRoute } from "@tanstack/react-router";
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
      <header className="mb-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Find the porch
        </p>
        <h1 className="font-display text-4xl font-bold leading-none tracking-tight text-white">
          Come sit a while
        </h1>
      </header>

      <section className="mb-5 grid gap-3">
        <a
          href="https://maps.google.com/?q=191+Kenneth+St+Duncan+BC"
          target="_blank"
          rel="noreferrer"
          className="flex items-start gap-4 rounded-2xl bg-surface p-4"
        >
          <div className="rounded-xl bg-neon/15 p-2.5 text-neon">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-white">Downtown Duncan</p>
            <p className="text-sm text-muted-foreground">191 Kenneth St</p>
            <p className="mt-1 text-xs text-neon">Open now · 9am–7pm</p>
          </div>
        </a>

        <a
          href="https://maps.google.com/?q=Maple+Bay+Hall+Duncan+BC"
          target="_blank"
          rel="noreferrer"
          className="flex items-start gap-4 rounded-2xl bg-surface p-4"
        >
          <div className="rounded-xl bg-neon-cyan/15 p-2.5 text-neon-cyan">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-white">Maple Bay Hall</p>
            <p className="text-sm text-muted-foreground">Maple Bay, BC</p>
            <p className="mt-1 text-xs text-neon-cyan">Hours vary · call ahead</p>
          </div>
        </a>
      </section>

      <section className="mb-5 rounded-2xl bg-surface-elevated p-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-xl bg-gold/15 p-2.5 text-gold">
            <Clock className="h-5 w-5" />
          </div>
          <h2 className="font-display text-lg font-semibold text-white">Hours</h2>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex justify-between">
            <span>Tuesday – Saturday</span>
            <span className="text-white">9am – 7pm</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span className="text-white">10am – 4pm</span>
          </div>
          <div className="flex justify-between">
            <span>Monday</span>
            <span className="text-white">Closed</span>
          </div>
        </div>
      </section>

      <section className="grid gap-3">
        <a
          href="tel:+12507483244"
          className="flex items-center justify-between rounded-2xl bg-surface p-4 text-white"
        >
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-gold" />
            <span className="font-display font-semibold">(250) 748-3244</span>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground" />
        </a>

        <a
          href="mailto:hello@thesocietybarbers.com"
          className="flex items-center justify-between rounded-2xl bg-surface p-4 text-white"
        >
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-neon" />
            <span className="font-display font-semibold">hello@thesocietybarbers.com</span>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground" />
        </a>

        <a
          href="https://instagram.com/thesocietybarbers"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 p-4 text-white"
        >
          <div className="flex items-center gap-3">
            <Instagram className="h-5 w-5" />
            <span className="font-display font-semibold">@thesocietybarbers</span>
          </div>
          <ExternalLink className="h-4 w-4" />
        </a>
      </section>
    </main>
  );
}
