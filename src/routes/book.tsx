import { createFileRoute } from "@tanstack/react-router";
import astronaut from "@/assets/astronaut.png.asset.json";
import { Clock, ExternalLink, Phone } from "lucide-react";

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
      {/* Option B — neon medallion next to the title */}
      <header className="mb-8 flex items-center gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-neon/70 shadow-[0_0_25px_rgba(255,0,160,0.45)]">
          <img
            src={astronaut.url}
            alt=""
            aria-hidden
            className="h-full w-full scale-[1.9] object-cover object-top"
          />
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neon">
            Submit · Comply
          </p>
          <h1 className="font-display text-4xl font-bold leading-none tracking-tight text-white uppercase">
            OBEY THE SCHEDULE
          </h1>
        </div>
      </header>

      <section className="mb-6 rounded-2xl bg-surface p-5 glow-border space-y-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-neon/15 p-2.5 text-neon">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Hours</p>
            <p className="text-xs text-muted-foreground">Both locations, Pacific time</p>
          </div>
        </div>
        <div className="grid gap-3 border-t border-border pt-4">
          <div>
            <p className="text-sm font-semibold text-white">Downtown Duncan</p>
            <p className="text-xs text-muted-foreground">Mon–Sat · 10am–6:30pm · Sun · 10am–4pm</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Maple Bay</p>
            <p className="text-xs text-muted-foreground">Mon–Sat · 10am–5pm · Sun closed</p>
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
          href="tel:+12505970155"
          className="flex items-center justify-between rounded-2xl bg-surface p-5 text-white"
        >
          <div>
            <p className="font-display text-lg font-semibold">Call Downtown Duncan</p>
            <p className="text-sm text-muted-foreground">(250) 597-0155</p>
          </div>
          <Phone className="h-5 w-5 text-gold" />
        </a>

        <a
          href="tel:+17784552858"
          className="flex items-center justify-between rounded-2xl bg-surface p-5 text-white"
        >
          <div>
            <p className="font-display text-lg font-semibold">Call Maple Bay</p>
            <p className="text-sm text-muted-foreground">(778) 455-CULT</p>
          </div>
          <Phone className="h-5 w-5 text-neon-cyan" />
        </a>

      </section>

      <section className="mt-6 rounded-2xl bg-surface-elevated p-5">
        <p className="mb-2 font-display text-lg font-semibold text-white">Shop policies</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Walk-ins are welcome when possible, but appointments are recommended.</li>
          <li>• Please arrive within 10 minutes of your appointment.</li>
          <li>• Kids cuts welcome — ask about availability.</li>
        </ul>
      </section>
    </main>
  );
}
