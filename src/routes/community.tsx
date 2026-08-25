import { createFileRoute } from "@tanstack/react-router";
import astronaut from "@/assets/astronaut.png.asset.json";
import { CalendarOff, Sparkles } from "lucide-react";
import { getNextStatHoliday } from "@/lib/holidays";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Society Barbers" },
      { name: "description", content: "Events, announcements, and community board from The Society Barbers." },
      { property: "og:title", content: "Community — Society Barbers" },
      { property: "og:description", content: "Events, announcements, and community board from The Society Barbers." },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  const holiday = getNextStatHoliday();

  return (
    <main className="min-h-screen px-4 pb-28 pt-6 safe-top">
      <header className="mb-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neon">
          The Transmission
        </p>
        <h1 className="font-display text-4xl font-bold leading-none tracking-tight text-white uppercase">
          STAY TUNED. STAY AWAKE.
        </h1>
      </header>

      <section className="mb-4 rounded-2xl bg-surface p-8 text-center glow-border">
        <div className="mx-auto mb-4 w-fit rounded-xl bg-neon/15 p-3 text-neon">
          <Sparkles className="h-6 w-6" />
        </div>
        <h2 className="font-display text-2xl font-semibold text-white">Coming soon</h2>
        <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
          Events, nights out, and community happenings are on the way. Check back soon.
        </p>
      </section>

      {holiday && (
        <section className="rounded-2xl bg-surface-elevated p-5">
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
    </main>
  );
}
