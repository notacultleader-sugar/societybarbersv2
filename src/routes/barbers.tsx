import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Scissors, Star } from "lucide-react";

export const Route = createFileRoute("/barbers")({
  head: () => ({
    meta: [
      { title: "The Crew — Society Barbers" },
      { name: "description", content: "Meet the barbers at The Society Barbers." },
      { property: "og:title", content: "The Crew — Society Barbers" },
      { property: "og:description", content: "Meet the barbers at The Society Barbers." },
    ],
  }),
  component: BarbersPage,
});

const barbers = [
  {
    name: "Danny",
    handle: "@danny.fades",
    role: "Chair 1",
    specialty: "Fades & skin work",
    years: "12 yrs",
    color: "neon",
  },
  {
    name: "Marcus",
    handle: "@marcus.cuts",
    role: "Chair 2",
    specialty: "Design lines & texture",
    years: "4 yrs",
    color: "neon-cyan",
  },
  {
    name: "Ray",
    handle: "@ray.thechair",
    role: "Chair 3",
    specialty: "Beards & classic work",
    years: "20 yrs",
    color: "gold",
  },
  {
    name: "Elena",
    handle: "@elena.society",
    role: "Chair 4",
    specialty: "Modern cuts & color",
    years: "7 yrs",
    color: "neon",
  },
];

function BarbersPage() {
  return (
    <main className="min-h-screen px-4 pb-28 pt-6 safe-top">
      <header className="mb-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">
          The Chairs
        </p>
        <h1 className="font-display text-4xl font-bold leading-none tracking-tight text-white">
          Meet the crew
        </h1>
      </header>

      <section className="grid gap-4">
        {barbers.map((barber) => {
          const accentColor =
            barber.color === "neon"
              ? "border-neon text-neon"
              : barber.color === "neon-cyan"
                ? "border-neon-cyan text-neon-cyan"
                : "border-gold text-gold";

          return (
            <div
              key={barber.name}
              className={`relative overflow-hidden rounded-2xl bg-surface p-5 transition-transform active:scale-[0.98]`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <div className={`rounded-full ${accentColor} border-2 p-1.5`}>
                      <Scissors className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {barber.role}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-white">{barber.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {barber.specialty} · {barber.years}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Star className="h-4 w-4 text-gold" />
                  <span className="text-xs font-semibold text-gold">5.0</span>
                </div>
              </div>

              <a
                href={`https://instagram.com/${barber.handle.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className={`mt-5 inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-semibold ${accentColor}`}
              >
                <Instagram className="h-4 w-4" />
                {barber.handle}
              </a>
            </div>
          );
        })}
      </section>
    </main>
  );
}
