import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  Users,
  Megaphone,
  Phone,
  MapPin,
  Instagram,
  Scissors,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Society Barbers — Home" },
      { name: "description", content: "Your Society dashboard. Book, connect, and stay in the loop." },
      { property: "og:title", content: "Society Barbers — Home" },
      { property: "og:description", content: "Your Society dashboard. Book, connect, and stay in the loop." },
    ],
  }),
  component: HomeDashboard,
});

function HomeDashboard() {
  return (
    <main className="min-h-screen px-4 pb-28 pt-6 safe-top">
      <header className="mb-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neon">
          Proudly serving the Cowichan Valley since 2017
        </p>
        <h1 className="font-display text-4xl font-bold leading-none tracking-tight text-white">
          Classic Barbering
          <span className="block text-neon-cyan text-glow-cyan">// Upgraded</span>
        </h1>
      </header>

      {/* Bento grid */}
      <section className="grid grid-cols-2 gap-3">
        {/* Book now — large tile */}
        <Link
          to="/book"
          className="group relative col-span-2 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/70 p-5 text-white shadow-[0_0_30px_rgba(255,0,160,0.25)]"
        >
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                Book Online
              </p>
              <h2 className="font-display text-2xl font-bold">Book a chair</h2>
              <p className="mt-1 text-sm text-white/80">Skip the wait. Reserve your time.</p>
            </div>
            <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
              <Calendar className="h-7 w-7" />
            </div>
          </div>
          <ArrowRight className="relative z-10 mt-4 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>

        {/* Community */}
        <Link
          to="/community"
          className="group relative overflow-hidden rounded-2xl bg-surface p-4 glow-border"
        >
          <div className="mb-3 inline-flex rounded-xl bg-neon/15 p-2.5 text-neon">
            <Megaphone className="h-5 w-5" />
          </div>
          <h3 className="font-display text-lg font-semibold text-white">The Board</h3>
          <p className="mt-1 text-xs text-muted-foreground">Events, drops, and shop news.</p>
        </Link>

        {/* Barbers */}
        <Link
          to="/barbers"
          className="group relative overflow-hidden rounded-2xl bg-surface p-4 glow-border-cyan"
        >
          <div className="mb-3 inline-flex rounded-xl bg-neon-cyan/15 p-2.5 text-neon-cyan">
            <Users className="h-5 w-5" />
          </div>
          <h3 className="font-display text-lg font-semibold text-white">The Crew</h3>
          <p className="mt-1 text-xs text-muted-foreground">Meet the barbers and follow their work.</p>
        </Link>

        {/* Locations */}
        <div className="col-span-2 rounded-2xl bg-surface-elevated p-4">
          <div className="mb-3 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" />
            <h3 className="font-display text-lg font-semibold text-white">Two locations</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="https://maps.google.com/?q=191+Kenneth+St+Duncan+BC"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-background p-3 text-sm text-white"
            >
              <span className="font-display font-semibold text-neon">Downtown Duncan</span>
              <p className="mt-1 text-muted-foreground">191 Kenneth St</p>
            </a>
            <a
              href="https://maps.google.com/?q=Maple+Bay+Hall+Duncan+BC"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-background p-3 text-sm text-white"
            >
              <span className="font-display font-semibold text-neon-cyan">Maple Bay Hall</span>
              <p className="mt-1 text-muted-foreground">Maple Bay, BC</p>
            </a>
          </div>
        </div>

        {/* Contact */}
        <Link
          to="/contact"
          className="group relative overflow-hidden rounded-2xl bg-surface p-4"
        >
          <div className="mb-3 inline-flex rounded-xl bg-gold/15 p-2.5 text-gold">
            <Phone className="h-5 w-5" />
          </div>
          <h3 className="font-display text-lg font-semibold text-white">Contact</h3>
          <p className="mt-1 text-xs text-muted-foreground">Call, DM, or stop by.</p>
        </Link>

        {/* Instagram */}
        <a
          href="https://instagram.com/thesocietybarbers"
          target="_blank"
          rel="noreferrer"
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 p-4 text-white"
        >
          <div className="mb-3 inline-flex rounded-xl bg-white/20 p-2.5">
            <Instagram className="h-5 w-5" />
          </div>
          <h3 className="font-display text-lg font-semibold">Follow us</h3>
          <p className="mt-1 text-xs text-white/80">@societybarbers</p>
        </a>
      </section>

      {/* Tagline */}
      <section className="mt-8 rounded-2xl bg-surface p-5 text-center">
        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-neon/20 text-neon">
          <Scissors className="h-5 w-5" />
        </div>
        <p className="font-display text-lg font-semibold text-white">
          Built on tradition, elevated with today&apos;s energy.
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Every service is rooted in precision, attention to detail, and genuine connection.
        </p>
      </section>
    </main>
  );
}
