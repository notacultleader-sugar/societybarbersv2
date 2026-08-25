import { createFileRoute } from "@tanstack/react-router";
import { Megaphone, Calendar, Music, Sparkles, Heart } from "lucide-react";

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

const posts = [
  {
    id: 1,
    category: "Event",
    icon: Music,
    color: "neon",
    title: "Vinyl & Fade Night",
    date: "Fri · Aug 29 · 7pm",
    body: "Bring a record, leave with a lineup. Free cuts for members after 8. Hosted by the crew.",
  },
  {
    id: 2,
    category: "Crew",
    icon: Sparkles,
    color: "neon-cyan",
    title: "New gear in the case",
    date: "In the shop now",
    body: "Shop tees, pomade, and fresh merch are back. Swing by and grab the latest.",
  },
  {
    id: 3,
    category: "Giveback",
    icon: Heart,
    color: "gold",
    title: "Free kids' cuts",
    date: "Sat · Sept 6 · 9am",
    body: "Bring a neighborhood kid Saturday morning. First come, first served at the Duncan location.",
  },
  {
    id: 4,
    category: "Culture",
    icon: Megaphone,
    color: "neon",
    title: "Older Gents' Day",
    date: "Every Thursday · 10am–2pm",
    body: "60 and up cut for $10. The best conversation in the shop, guaranteed.",
  },
];

function CommunityPage() {
  return (
    <main className="min-h-screen px-4 pb-28 pt-6 safe-top">
      <header className="mb-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neon">
          The Bulletin
        </p>
        <h1 className="font-display text-4xl font-bold leading-none tracking-tight text-white">
          From the front porch
        </h1>
      </header>

      <section className="grid gap-4">
        {posts.map((post) => {
          const Icon = post.icon;
          const colorClass =
            post.color === "neon"
              ? "bg-neon/15 text-neon"
              : post.color === "neon-cyan"
                ? "bg-neon-cyan/15 text-neon-cyan"
                : "bg-gold/15 text-gold";

          return (
            <article
              key={post.id}
              className="rounded-2xl bg-surface p-5 transition-transform active:scale-[0.98]"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className={`rounded-xl ${colorClass} p-2.5`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span
                  className={`text-xs font-semibold uppercase tracking-widest ${
                    post.color === "neon"
                      ? "text-neon"
                      : post.color === "neon-cyan"
                        ? "text-neon-cyan"
                        : "text-gold"
                  }`}
                >
                  {post.category}
                </span>
              </div>
              <h2 className="font-display text-xl font-semibold text-white">{post.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{post.body}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                <span>{post.date}</span>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
