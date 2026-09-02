import { createFileRoute, Link } from "@tanstack/react-router";
import astronaut from "@/assets/astronaut.png.asset.json";
import duncanShopLogo from "@/assets/duncan_shop_2.png.asset.json";
import mapleBayLogo from "@/assets/maple_bay.png.asset.json";
import { openInAppBrowser } from "@/lib/browser";
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
      {/* Option A — full-bleed hero, she stands beside the title */}
      <header className="relative mb-8 -mx-4 px-4">
        <img
          src={astronaut.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-10 right-0 h-56 w-auto md:h-72 object-contain object-right-top opacity-80 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
        />
        <div className="relative max-w-[62%] pt-6 md:max-w-[70%]">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neon">
            PROUDLY SERVING COWICHAN SINCE 2017
          </p>
          <h1 className="font-display text-4xl font-bold leading-none tracking-tight text-white uppercase md:text-6xl">
            CLASSIC BARBERING
            <span className="block text-neon-cyan text-glow-cyan">// UPGRADED</span>
          </h1>
        </div>
      </header>

      {/* Bento grid */}
      <section className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {/* Book now — large tile */}
        <a
          href="https://www.fresha.com/providers/society-barbers-mfk1wznr?share=true&pId=3065198&allOffer=true&menu=true"
          onClick={(event) => {
            event.preventDefault();
            openInAppBrowser(event.currentTarget.href);
          }}
          className="group relative col-span-2 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/70 p-5 text-white shadow-[0_0_30px_rgba(255,0,160,0.25)]"
        >
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/80">
                Book Online
              </p>
              <h2 className="font-display text-2xl font-bold uppercase">BOOK A CHAIR</h2>
              <p className="mt-1 text-sm text-white/80">Skip the wait. Reserve your time.</p>
            </div>
            <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
              <Calendar className="h-7 w-7" />
            </div>
          </div>
          <ArrowRight className="relative z-10 mt-4 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>

        {/* Community */}
        <Link
          to="/community"
          className="group relative overflow-hidden rounded-2xl bg-surface p-4 glow-border"
        >
          <div className="mb-3 inline-flex rounded-xl bg-neon/15 p-2.5 text-neon">
            <Megaphone className="h-5 w-5" />
          </div>
          <h3 className="font-display text-lg font-semibold text-white uppercase">TRANSMISSION</h3>
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
          <h3 className="font-display text-lg font-semibold text-white uppercase">THE CREW</h3>
          <p className="mt-1 text-xs text-muted-foreground">Meet the barbers and follow their work.</p>
        </Link>

        {/* Locations */}
        <div className="col-span-2 rounded-2xl bg-surface-elevated p-4">
          <div className="mb-3 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" />
            <h3 className="font-display text-lg font-semibold text-white uppercase">TWO LOCATIONS</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="https://maps.google.com/?q=Society+Barbers+191+Kenneth+St+Duncan+BC"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-background p-3 text-sm text-white"
            >
              <span className="font-display font-semibold text-neon">Downtown Duncan</span>
              <p className="mt-1 text-muted-foreground">191 Kenneth St</p>
            </a>
            <a
              href="https://maps.google.com/?q=Society+Barbers+963+Herd+Rd+North+Cowichan+BC"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-background p-3 text-sm text-white"
            >
              <span className="font-display font-semibold text-neon-cyan">Maple Bay</span>
              <p className="mt-1 text-muted-foreground">963 Herd Rd</p>
            </a>
          </div>
        </div>

        {/* Instagram — Duncan */}
        <a
          href="https://instagram.com/societybarbers"
          target="_blank"
          rel="noreferrer"
          className="group relative overflow-hidden rounded-2xl bg-[#e879f9] p-4 text-white"
        >
          <img
            src={duncanShopLogo.url}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#f472b6]/70 via-[#c084fc]/50 to-[#22d3ee]/50" />
          <div className="relative mb-3 inline-flex rounded-xl bg-black/30 p-2.5 backdrop-blur-sm">
            <Instagram className="h-5 w-5" />
          </div>
          <h3 className="relative font-display text-lg font-semibold uppercase" style={{ textShadow: '0 3px 10px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.9)' }}>DUNCAN</h3>
          <p className="relative mt-1 text-base text-white/90" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.9)' }}>@societybarbers</p>
        </a>

        {/* Instagram — Maple Bay */}
        <a
          href="https://instagram.com/societyatthehall"
          target="_blank"
          rel="noreferrer"
          className="group relative overflow-hidden rounded-2xl bg-[#ef4444] p-4 text-white"
        >
          <img
            src={mapleBayLogo.url}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#ef4444]/70 via-[#dc2626]/50 to-[#facc15]/50" />
          <div className="relative mb-3 inline-flex rounded-xl bg-black/30 p-2.5 backdrop-blur-sm">
            <Instagram className="h-5 w-5" />
          </div>
          <h3 className="relative font-display text-lg font-semibold uppercase" style={{ textShadow: '0 3px 10px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.9)' }}>MAPLE BAY</h3>
          <p className="relative mt-1 text-base text-white/90" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.9)' }}>@societyatthehall</p>
        </a>

        {/* Contact */}
        <Link
          to="/contact"
          className="group relative col-span-2 flex items-center gap-4 overflow-hidden rounded-2xl bg-surface p-4"
        >
          <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
            <Phone className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold text-white uppercase">CONTACT</h3>
            <p className="text-xs text-muted-foreground">Call, DM, or stop by.</p>
          </div>
        </Link>
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
