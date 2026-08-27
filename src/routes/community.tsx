import { createFileRoute } from "@tanstack/react-router";
import astronaut from "@/assets/astronaut.png.asset.json";
import { CalendarOff, Instagram, Sparkles } from "lucide-react";
import { getNextStatHoliday } from "@/lib/holidays";
import { useInstagramFeed } from "@/lib/instagram";
import { openInAppBrowser } from "@/lib/browser";

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
            <Instagram className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-widest text-neon">
              Latest feed
            </span>
            <span className="block text-base font-semibold text-white">@societybarbers</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {posts.length > 0
            ? posts.slice(0, 3).map((post) => (
                <button
                  key={post.id}
                  type="button"
                  onClick={() => openInAppBrowser(post.permalink)}
                  className="relative aspect-square overflow-hidden rounded-xl bg-surface-elevated"
                >
                  <img
                    src={post.thumbnailUrl}
                    alt={post.caption ?? "Instagram post"}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))
            : [0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex aspect-square items-center justify-center rounded-xl bg-surface-elevated text-muted-foreground/40"
                >
                  <Sparkles className="h-5 w-5" />
                </div>
              ))}
        </div>

        <button
          type="button"
          onClick={() => openInAppBrowser("https://www.instagram.com/societybarbers/")}
          className="mt-4 w-full rounded-xl border border-neon/40 py-3 text-sm font-semibold uppercase tracking-widest text-neon"
        >
          View on Instagram
        </button>
      </section>
    </main>
  );
}
