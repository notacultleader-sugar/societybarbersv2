import { createFileRoute } from "@tanstack/react-router";

/**
 * Live open/closed status for both shops, read from Fresha's public provider
 * page. Fresha embeds a `workingTime.status` block per location in the page
 * data; that is the same badge customers see on fresha.com.
 *
 * Fresha does NOT publish future closure dates anywhere public, so this only
 * reports today's state. Planned closures stay in src/lib/holidays.ts.
 *
 * Public on purpose: it returns no user data, only shop opening state.
 */
const FRESHA_URL =
  "https://www.fresha.com/providers/society-barbers-mfk1wznr?share=true&pId=3065198&allOffer=true&menu=true";

export type FreshaLocationStatus = {
  /** "duncan" | "maple-bay" */
  id: string;
  name: string;
  /** "OPEN" | "CLOSED" | "UNKNOWN" */
  state: string;
  /** e.g. "Closed" */
  label: string;
  /** e.g. "- opens on Thursday at 10:00 AM" */
  detail: string | null;
};

export type FreshaStatusResponse = {
  fetchedAt: string;
  locations: FreshaLocationStatus[];
};

type CacheEntry = { at: number; body: FreshaStatusResponse };
let cache: CacheEntry | null = null;
const CACHE_MS = 5 * 60 * 1000;

function extractStatuses(html: string): FreshaLocationStatus[] {
  const out: FreshaLocationStatus[] = [];
  // Each location node contains its name, then later its workingTime status.
  const re =
    /"name":"(Society Barbers (?:Duncan|Maple Bay))"[\s\S]{0,4000}?"workingTime":\{"status":\{"name":"([^"]*)","state":"([^"]*)","stateDetails":"([^"]*)"/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html)) !== null) {
    const name = match[1]!;
    const id = name.includes("Maple") ? "maple-bay" : "duncan";
    if (out.some((l) => l.id === id)) continue;
    out.push({
      id,
      name,
      label: match[2] || "Unknown",
      state: (match[3] || "UNKNOWN").toUpperCase(),
      detail: match[4] ? match[4].replace(/^-\s*/, "") : null,
    });
  }
  return out;
}

export const Route = createFileRoute("/api/public/fresha-status")({
  server: {
    handlers: {
      GET: async () => {
        if (cache && Date.now() - cache.at < CACHE_MS) {
          return Response.json(cache.body, {
            headers: { "cache-control": "public, max-age=300" },
          });
        }

        try {
          const res = await fetch(FRESHA_URL, {
            headers: {
              "user-agent":
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
              accept: "text/html",
            },
          });
          if (!res.ok) {
            return Response.json({ fetchedAt: new Date().toISOString(), locations: [] });
          }
          const html = await res.text();
          const body: FreshaStatusResponse = {
            fetchedAt: new Date().toISOString(),
            locations: extractStatuses(html),
          };
          if (body.locations.length > 0) cache = { at: Date.now(), body };
          return Response.json(body, {
            headers: { "cache-control": "public, max-age=300" },
          });
        } catch {
          return Response.json({ fetchedAt: new Date().toISOString(), locations: [] });
        }
      },
    },
  },
});
