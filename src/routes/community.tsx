import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import astronaut from "@/assets/astronaut.png.asset.json";
import promoTile1 from "@/assets/promo-tile-1.jpg";
import promoTile2 from "@/assets/promo-tile-2.jpg";
import promoTile3 from "@/assets/promo-tile-3.jpg";
import promoTile4 from "@/assets/promo-tile-4.jpg";
import promoTile5 from "@/assets/promo-tile-5.jpg";
import promoTile6 from "@/assets/promo-tile-6.jpg";
import promoTile7 from "@/assets/promo-tile-7.jpg";
import promoTile8 from "@/assets/promo-tile-8.jpg";
import promoTile9 from "@/assets/promo-tile-9.jpg";
import promoTile10 from "@/assets/promo-tile-10.jpg";
import promoTile11 from "@/assets/promo-tile-11.jpg";
import promoTile12 from "@/assets/promo-tile-12.jpg";
import promoTile13 from "@/assets/promo-tile-13.jpg";
import { CalendarOff, Instagram, Sparkles } from "lucide-react";
import { getNextStatHoliday } from "@/lib/holidays";
import { useFreshaStatus } from "@/lib/fresha-status";

const PROPAGANDA_TILES = [
  { id: "obey", src: promoTile1, alt: "OBEY — Society Barbers" },
  { id: "consume", src: promoTile2, alt: "CONSUME — Society Barbers" },
  { id: "stay-fresh", src: promoTile3, alt: "STAY FRESH — Society Barbers" },
  { id: "no-thoughts", src: promoTile4, alt: "NO THOUGHTS — Society Barbers" },
  { id: "submit", src: promoTile5, alt: "SUBMIT — Society Barbers" },
  { id: "look-good", src: promoTile6, alt: "LOOK GOOD — Society Barbers" },
  { id: "obey-the-chair", src: promoTile7, alt: "OBEY THE CHAIR — Society Barbers" },
  { id: "consume-freshness", src: promoTile8, alt: "CONSUME FRESHNESS — Society Barbers" },
  { id: "stay-sharp", src: promoTile9, alt: "STAY SHARP — Society Barbers" },
  { id: "trust-the-blade", src: promoTile10, alt: "TRUST THE BLADE — Society Barbers" },
  { id: "follow", src: promoTile11, alt: "FOLLOW — Society Barbers" },
  { id: "no-independent-cuts", src: promoTile12, alt: "NO INDEPENDENT CUTS — Society Barbers" },
  { id: "the-society-watches", src: promoTile13, alt: "THE SOCIETY WATCHES — Society Barbers" },
];

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Transmissions — Society Barbers" },
      {
        name: "description",
        content: "Society Barbers transmissions, announcements, and community updates.",
      },
      { property: "og:title", content: "Transmissions — Society Barbers" },
      {
        property: "og:description",
        content: "Society Barbers transmissions, announcements, and community updates.",
      },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  const holiday = getNextStatHoliday();
  const freshaStatus = useFreshaStatus();
  const closedToday = [freshaStatus["duncan"], freshaStatus["maple-bay"]].filter(
    (s) => s && s.state !== "OPEN",
  );
  const detected = detectFreshaClosures(freshaStatus).filter((c) => c.dates.length > 0);
  const [offset, setOffset] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((o) => (o + 1) % PROPAGANDA_TILES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen px-4 pb-28 pt-6 safe-top">
      <header className="relative mb-8 -mx-4 px-4">
        <img
          src={astronaut.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-10 right-0 h-56 w-auto md:h-72 object-contain object-right-top opacity-80 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
        />
        <div className="relative max-w-[62%] pt-6 md:max-w-[70%]">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neon">
            The Transmission
          </p>
          <h1 className="font-display text-4xl font-bold leading-none tracking-tight text-white uppercase md:text-6xl">
            STAY TUNED. STAY AWAKE.
          </h1>
        </div>
      </header>

      {closedToday.length > 0 && (
        <section className="mb-4 rounded-2xl bg-surface p-5 glow-border">
          <span className="text-xs font-semibold uppercase tracking-widest text-neon">
            Closed right now
          </span>
          <ul className="mt-3 space-y-2">
            {closedToday.map((status) => (
              <li key={status!.id} className="text-sm text-white">
                <span className="font-display font-semibold uppercase">
                  {status!.id === "duncan" ? "Downtown Duncan" : "Maple Bay"}
                </span>
                {status!.detail && (
                  <span className="block text-xs text-muted-foreground">{status!.detail}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {holiday && (
        <section className="mb-4 rounded-2xl bg-surface-elevated p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-xl bg-gold/15 p-2.5 text-gold">
              <CalendarOff className="h-5 w-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Next closure
            </span>
          </div>
          <h2 className="font-display text-xl font-semibold text-white">{holiday.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{holiday.label}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            {holiday.daysAway === 0
              ? "Both locations are closed today."
              : holiday.daysAway === 1
                ? "Both locations are closed tomorrow."
                : `Both locations are closed in ${holiday.daysAway} days.`}
          </p>
          {holiday.note && (
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              {holiday.note}
            </p>
          )}
        </section>
      )}

      <section className="rounded-2xl bg-surface p-5 glow-border">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-xl bg-neon/15 p-2.5 text-neon">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-widest text-neon">
              Latest transmissions
            </span>
            <span className="block text-base font-semibold text-white uppercase">
              SOCIETY PROPAGANDA
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {[0, 1, 2].map((slotIndex) => (
            <div
              key={slotIndex}
              className="relative aspect-square overflow-hidden rounded-xl bg-surface-elevated"
            >
              {PROPAGANDA_TILES.map((tile, imageIndex) => {
                const isActive = (slotIndex + offset) % PROPAGANDA_TILES.length === imageIndex;
                return (
                  <img
                    key={tile.id}
                    src={tile.src}
                    alt={tile.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                );
              })}
            </div>
          ))}
        </div>

        <a
          href="https://instagram.com/societybarbers"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-neon/30 bg-background py-3 text-sm font-bold uppercase tracking-wide text-neon transition-colors hover:bg-neon/10"
        >
          <Instagram className="h-5 w-5" />
          THIS WAY TO MORE PROPAGANDA
        </a>
      </section>
    </main>
  );
}
