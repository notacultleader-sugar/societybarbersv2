import { createFileRoute } from "@tanstack/react-router";
import astronaut from "@/assets/astronaut.png.asset.json";
import { Instagram, Monitor, Scissors } from "lucide-react";

export const Route = createFileRoute("/barbers")({
  head: () => ({
    meta: [
      { title: "The Crew — Society Barbers" },
      { name: "description", content: "Meet the barbers and team at Society Barbers." },
      { property: "og:title", content: "The Crew — Society Barbers" },
      { property: "og:description", content: "Meet the barbers and team at Society Barbers." },
    ],
  }),
  component: BarbersPage,
});

type Barber = {
  name: string;
  handle: string;
  role: string;
  nickname: string;
  image: string;
  color: string;
  hideBooking?: boolean;
};

const barbers: Barber[] = [
  {
    name: "Ian",
    handle: "@notacult.leader",
    role: "Barber & Owner",
    nickname: "Sugar",
    image: "https://static.wixstatic.com/media/47ba99_9565f5b7ef5e44d193231b61d5e51f9f~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8812_PNG.png",
    color: "neon",
  },
  {
    name: "Rhiannon",
    handle: "@barberrhirhi",
    role: "Barber & Owner",
    nickname: "Rhi-Rhi",
    image: "https://static.wixstatic.com/media/47ba99_a4fc778f9aaf442a8a62a20862bfc2f3~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8785_PNG.png",
    color: "neon-cyan",
  },
  {
    name: "Chris",
    handle: "@barbernegrense",
    role: "Head Barber & Instructor",
    nickname: "Negrensé",
    image: "https://static.wixstatic.com/media/47ba99_95693b1f37684cac8f28692f58e60288~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8742_PNG.png",
    color: "gold",
  },
  {
    name: "Madz",
    handle: "@themadzbarber",
    role: "Barber",
    nickname: "Maternity Leave",
    image: "https://static.wixstatic.com/media/47ba99_26e6ef6b82504e0bad0e53a83f84f634~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8013_PNG.png",
    color: "neon",
  },
  {
    name: "Harry",
    handle: "@hccuts",
    role: "Barber",
    nickname: "Harry",
    image: "https://static.wixstatic.com/media/47ba99_8574e258d77547d4a053cf8339a85972~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8770_PNG.png",
    color: "neon-cyan",
  },
  {
    name: "Alex",
    handle: "@byalexbarber",
    role: "Barber",
    nickname: "The Spanish Guy",
    image: "https://static.wixstatic.com/media/47ba99_99f6864f450a4d6c9c74cf087f4dd622~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8762.png",
    color: "gold",
  },
  {
    name: "Ivy",
    handle: "@d.iv.inity",
    role: "Barber",
    nickname: "Ivy",
    image: "https://static.wixstatic.com/media/47ba99_3df284d98fbc4d9a9b114464bd4695a0~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8765_PNG.png",
    color: "neon",
  },
  {
    name: "Jordan",
    handle: "@the.black.shear",
    role: "Barber",
    nickname: "The New Guy",
    image: "https://static.wixstatic.com/media/47ba99_8697b4accfbc4ebc9be599fc5bdc5b1d~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8768_PNG.png",
    color: "neon-cyan",
  },
  {
    name: "B",
    handle: "@beautywblades.b",
    role: "Barber",
    nickname: "Coming Soon",
    image: "https://static.wixstatic.com/media/47ba99_bd611021625844149d4e0f519bfb3264~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8041_PNG.png",
    color: "gold",
    hideBooking: true,
  },
  {
    name: "David",
    handle: "",
    role: "Independent Contractor",
    nickname: "The Guy with the Beard",
    image: "https://static.wixstatic.com/media/47ba99_748c5df7fe1b452e9a29ea8d053485bd~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8016_PNG.png",
    color: "neon",
  },
  {
    name: "Bre",
    handle: "@barber.keen",
    role: "Junior Barber",
    nickname: "Keen",
    image: "https://static.wixstatic.com/media/47ba99_191d50996de8458bbfe9fba14f43031b~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8774_PNG.png",
    color: "neon-cyan",
  },
  {
    name: "Ryan",
    handle: "@societybarbers",
    role: "Manager / Ships Captain",
    nickname: "Coffee Daddy",
    image: "https://static.wixstatic.com/media/47ba99_3062a0481dca44a18a14c5dd85d85020~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8005_PNG.png",
    color: "gold",
  },
  {
    name: "Kiki",
    handle: "@societybarbers",
    role: "Manager",
    nickname: "Shop Mom",
    image: "https://static.wixstatic.com/media/47ba99_24be9afdc3044f7d9a6324373e0585ab~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8010_PNG.png",
    color: "neon",
  },
  {
    name: "Ashton",
    handle: "@barberkoppo",
    role: "Apprentice",
    nickname: "Society Barbers",
    image: "https://static.wixstatic.com/media/47ba99_dc92f58dcf8d4aaf953e3994c99a023f~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8017_PNG.png",
    color: "neon-cyan",
  },
  {
    name: "Locke",
    handle: "@ianlocke",
    role: "Artificial Intelligence",
    nickname: "ADV3N7UR35",
    image: "https://static.wixstatic.com/media/47ba99_75a19009d2a64e3ba93fb72f0f138c6a~mv2.png/v1/fill/w_313,h_313,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8012_PNG.png",
    color: "gold",
  },
];

function BarbersPage() {
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
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">
            The Chairs
          </p>
          <h1 className="font-display text-4xl font-bold leading-none tracking-tight text-white uppercase">
            MEET THE CREW
          </h1>
        </div>
      </header>

      <section className="grid gap-4">
        {barbers.map((barber, index) => {
          const accentColor =
            barber.color === "neon"
              ? "border-neon text-neon"
              : barber.color === "neon-cyan"
                ? "border-neon-cyan text-neon-cyan"
                : "border-gold text-gold";

          return (
            <div
              key={barber.name}
              className="relative overflow-hidden rounded-2xl bg-surface p-5 transition-transform active:scale-[0.98]"
            >
              <div className="flex items-start gap-4">
                <img
                  src={barber.image}
                  alt={`${barber.name} portrait`}
                  loading="lazy"
                  className="h-20 w-20 shrink-0 rounded-xl object-cover ring-2 ring-white/10"
                />
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <div className={`rounded-full ${accentColor} border-2 p-1.5`}>
                      {index >= 11 ? (
                        <Monitor className="h-4 w-4" />
                      ) : (
                        <Scissors className="h-4 w-4" />
                      )}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {barber.role}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-white">{barber.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{barber.nickname}</p>
                </div>
              </div>

              {barber.handle || (index < 11 && !barber.hideBooking) ? (
                <div className="mt-5 flex items-center justify-between gap-3">
                  {barber.handle ? (
                    <a
                      href={`https://instagram.com/${barber.handle.replace("@", "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-semibold ${accentColor}`}
                    >
                      <Instagram className="h-4 w-4" />
                      {barber.handle}
                    </a>
                  ) : (
                    <span />
                  )}
                  {index < 11 && !barber.hideBooking ? (
                    <a
                      href="https://squareup.com/appointments/book/thesocietybarbers"
                      target="_blank"
                      rel="noreferrer"
                      className={`flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 bg-background text-xs font-bold uppercase leading-none tracking-wide ${accentColor}`}
                    >
                      <span>BOOK</span>
                      <span className="mt-0.5">NOW</span>
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          );
        })}
      </section>
    </main>
  );
}
