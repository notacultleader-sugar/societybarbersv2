import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import astronaut from "@/assets/astronaut.png.asset.json";
import promoTile1 from "@/assets/promo-tile-1.jpg";
import promoTile2 from "@/assets/promo-tile-2.jpg";
import promoTile3 from "@/assets/promo-tile-3.jpg";
import { CalendarOff, Sparkles } from "lucide-react";
import { getNextStatHoliday } from "@/lib/holidays";

const PROPAGANDA_TILES = [
  { id: "obey", src: promoTile1, alt: "OBEY — Society Barbers" },
  { id: "consume", src: promoTile2, alt: "CONSUME — Society Barbers" },
  { id: "stay-fresh", src: promoTile3, alt: "STAY FRESH — Society Barbers" },
];

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Transmissions — Society Barbers" },
      { name: "description", content: "Society Barbers transmissions, announcements, and community updates." },
      { property: "og:title", content: "Transmissions — Society Barbers" },
      { property: "og:description", content: "Society Barbers transmissions, announcements, and community updates." },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  const holiday = getNextStatHoliday();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((o) => (o + 1) % PROPAGANDA_TILES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neon">
            The Transmission
          </p>
          <h1 className="font-display text-4xl font-bold leading-none tracking-tight text-white uppercase">
            STAY TUNED. STAY AWAKE.
          </h1>
        </div>
      </header>

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
              ? "Both locations are closed today for the stat holiday."
              : holiday.daysAway === 1
                ? "Both locations are closed tomorrow for the stat holiday."
                : `Both locations are closed in ${holiday.daysAway} days for this BC stat holiday.`}
          </p>
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
            <span className="block text-base font-semibold text-white uppercase">SOCIETY PROPAGANDA</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {PROPAGANDA_TILES.map((_, slotIndex) => (
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
      </section>
    </main>
  );
}
