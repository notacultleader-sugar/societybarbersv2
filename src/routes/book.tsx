import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock, ExternalLink, Phone, Instagram } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Chair — Society Barbers" },
      { name: "description", content: "Book your appointment at The Society Barbers." },
      { property: "og:title", content: "Book a Chair — Society Barbers" },
      { property: "og:description", content: "Book your appointment at The Society Barbers." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <main className="min-h-screen px-4 pb-28 pt-6 safe-top">
      <header className="mb-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neon">
          Book Online
        </p>
        <h1 className="font-display text-4xl font-bold leading-none tracking-tight text-white">
          Reserve your chair
        </h1>
      </header>

      <section className="mb-6 rounded-2xl bg-surface p-5 glow-border">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-xl bg-neon/15 p-2.5 text-neon">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Hours</p>
            <p className="text-xs text-muted-foreground">Tue–Sat · 9am–7pm</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-neon-cyan/15 p-2.5 text-neon-cyan">
            <Calendar className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Best to book ahead</p>
            <p className="text-xs text-muted-foreground">Walk-ins welcome when chairs are open.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-3">
        <a
          href="https://squareup.com/appointments/book/thesocietybarbers"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-2xl bg-primary p-5 text-white shadow-[0_0_30px_rgba(255,0,160,0.25)]"
        >
          <div>
            <p className="font-display text-lg font-semibold">Book online</p>
            <p className="text-sm text-white/80">Reserve through our booking site</p>
          </div>
          <ExternalLink className="h-5 w-5" />
        </a>

        <a
          href="tel:+12507483244"
          className="flex items-center justify-between rounded-2xl bg-surface p-5 text-white"
        >
          <div>
            <p className="font-display text-lg font-semibold">Call the shop</p>
            <p className="text-sm text-muted-foreground">(250) 748-3244</p>
          </div>
          <Phone className="h-5 w-5 text-gold" />
        </a>

        <a
          href="https://instagram.com/thesocietybarbers"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-2xl bg-surface p-5 text-white"
        >
          <div>
            <p className="font-display text-lg font-semibold">DM to book</p>
            <p className="text-sm text-muted-foreground">@thesocietybarbers</p>
          </div>
          <Instagram className="h-5 w-5 text-neon-cyan" />
        </a>
      </section>

      <section className="mt-6 rounded-2xl bg-surface-elevated p-5">
        <p className="mb-2 font-display text-lg font-semibold text-white">Shop policies</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Please arrive within 10 minutes of your appointment.</li>
          <li>• Cancellations within 24 hours may be charged.</li>
          <li>• Kids cuts welcome — ask about availability.</li>
        </ul>
      </section>
    </main>
  );
}
