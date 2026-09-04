import { createFileRoute } from "@tanstack/react-router";
import astronaut from "@/assets/astronaut.png.asset.json";
import { openInAppBrowser } from "@/lib/browser";
import { CalendarCheck, CreditCard, ExternalLink, LogIn, ShieldCheck, Star } from "lucide-react";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "My Account — Society Barbers" },
      {
        name: "description",
        content:
          "Sign in to your Fresha account to view your appointments, memberships and gift cards at The Society Barbers.",
      },
      { property: "og:title", content: "My Account — Society Barbers" },
      {
        property: "og:description",
        content:
          "Sign in to your Fresha account to view your appointments, memberships and gift cards at The Society Barbers.",
      },
    ],
  }),
  component: AccountPage,
});

const FRESHA_LOGIN = "https://www.fresha.com/auth?pId=3065198";

const links = [
  {
    href: FRESHA_LOGIN,
    title: "Sign in to Fresha",
    subtitle: "Use the email or phone you booked with",
    icon: LogIn,
    accent: "text-white",
    className: "bg-primary text-white shadow-[0_0_30px_rgba(255,0,160,0.25)]",
  },
  {
    href: "https://www.fresha.com/activity?pId=3065198",
    title: "My appointments",
    subtitle: "Upcoming and past visits",
    icon: CalendarCheck,
    accent: "text-neon-cyan",
    className: "bg-surface text-white",
  },
  {
    href: "https://www.fresha.com/activity?pId=3065198&tab=memberships",
    title: "My memberships",
    subtitle: "In-shop haircut plans — visits remaining",
    icon: Star,
    accent: "text-gold",
    className: "bg-surface text-white",
  },
  {
    href: "https://www.fresha.com/activity?tab=gift-cards",
    title: "My gift cards",
    subtitle: "Balances and vouchers",
    icon: CreditCard,
    accent: "text-neon",
    className: "bg-surface text-white",
  },
];

function AccountPage() {
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
            Identify yourself
          </p>
          <h1 className="font-display text-4xl font-bold leading-none tracking-tight text-white uppercase md:text-6xl">
            MY ACCOUNT
          </h1>
        </div>
      </header>

      <section className="grid gap-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                openInAppBrowser(link.href);
              }}
              className={`flex items-center justify-between rounded-2xl p-5 ${link.className}`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`h-5 w-5 ${link.accent}`} />
                <div>
                  <p className="font-display text-lg font-semibold">{link.title}</p>
                  <p
                    className={`text-sm ${
                      link.className.includes("bg-primary")
                        ? "text-white/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.subtitle}
                  </p>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 opacity-70" />
            </a>
          );
        })}
      </section>

      <section className="mt-6 rounded-2xl bg-surface-elevated p-5">
        <div className="mb-2 flex items-center gap-2">
          <Star className="h-4 w-4 text-gold" />
          <p className="font-display text-lg font-semibold text-white">
            What memberships include
          </p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Memberships and gift cards cover barber services delivered in person at Society Barbers —
          haircuts, beard trims and the like, redeemed in the shop. They do not unlock any premium
          app features, digital content or subscriptions. Nothing in this app is sold or unlocked;
          purchases happen at the shop or on Fresha's own website.
        </p>
      </section>

      <section className="mt-4 rounded-2xl bg-surface p-5">
        <div className="mb-2 flex items-center gap-2">
          <Trash2 className="h-4 w-4 text-primary" />
          <p className="font-display text-lg font-semibold text-white">Delete your account</p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          This app has no account of its own — sign-in belongs to Fresha, our booking provider. To
          delete your Fresha account, follow Fresha's own instructions. To have Society Barbers
          remove your booking records with us, email{" "}
          <a href="mailto:society@notacult.ca" className="text-neon-cyan underline">
            society@notacult.ca
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => openInAppBrowser(FRESHA_DELETE_ACCOUNT)}
          className="mt-3 inline-flex items-center gap-2 rounded-xl border border-primary/60 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary"
        >
          <Trash2 className="h-4 w-4" />
          Delete your Fresha account
        </button>
      </section>

      <section className="mt-4 rounded-2xl bg-surface-elevated p-5">
        <div className="mb-2 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-neon-cyan" />
          <p className="font-display text-lg font-semibold text-white">Your login stays private</p>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• These buttons open Fresha's own sign-in page inside the app.</li>
          <li>• Fresha sets cookies on its pages to keep you signed in.</li>
          <li>• We never see or store your password.</li>
          <li>• No Fresha account yet? One is created the first time you book.</li>
        </ul>
      </section>
    </main>
  );
}
