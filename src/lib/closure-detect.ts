import { SHOP_CLOSURES } from "@/lib/holidays";
import type { FreshaLocationStatus } from "@/lib/fresha-status";

/**
 * Which weekdays each shop is normally open (0 = Sunday).
 * Duncan: Mon–Sat 10–6:30, Sun 10–4. Maple Bay: Mon–Sat 10–5.
 */
const REGULAR_OPEN_DAYS: Record<string, number[]> = {
  duncan: [0, 1, 2, 3, 4, 5, 6],
  "maple-bay": [1, 2, 3, 4, 5, 6],
};

export type DetectedClosure = {
  locationId: string;
  locationName: string;
  /** YYYY-MM-DD (Pacific) days the shop should be open but Fresha shows closed. */
  dates: string[];
  /** Friendly list, e.g. "Thursday, September 4". */
  labels: string[];
  /** Matching statutory closure name when the date is a known stat holiday. */
  holidayNames: string[];
};

const WEEKDAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

/** Today in Pacific time as [YYYY-MM-DD, weekdayIndex]. */
function pacificToday(): { date: string; weekday: number } {
  const now = new Date();
  const date = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Vancouver",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
  const name = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Vancouver",
    weekday: "long",
  })
    .format(now)
    .toLowerCase();
  return { date, weekday: Math.max(0, WEEKDAYS.indexOf(name)) };
}

function addDays(isoDate: string, days: number): string {
  const [y, m, d] = isoDate.split("-").map(Number) as [number, number, number];
  const t = new Date(Date.UTC(y, m - 1, d + days));
  return t.toISOString().slice(0, 10);
}

function labelFor(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number) as [number, number, number];
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}

/**
 * Read the closure window out of Fresha's status detail.
 *
 * Fresha only publishes "opens on <Weekday> at <time>" — no calendar. Combined
 * with the shop's regular weekly schedule, that next-open weekday tells us
 * which upcoming regular working days the shop is actually shut. Statutory
 * holidays are always closures (src/lib/holidays.ts) and are named when they
 * line up with a detected date.
 */
export function detectFreshaClosure(
  status: FreshaLocationStatus | undefined,
): DetectedClosure | null {
  if (!status || status.state === "OPEN" || !status.detail) return null;

  const match = /opens\s+on\s+([A-Za-z]+)/i.exec(status.detail);
  if (!match) return null;
  const targetWeekday = WEEKDAYS.indexOf(match[1]!.toLowerCase());
  if (targetWeekday < 0) return null;

  const openDays = REGULAR_OPEN_DAYS[status.id] ?? [0, 1, 2, 3, 4, 5, 6];
  const today = pacificToday();

  // First upcoming date matching the next-open weekday. "Today" counts only
  // when Fresha names today's weekday (it opens later today).
  let nextOpenOffset = -1;
  for (let i = 0; i < 14; i += 1) {
    if ((today.weekday + i) % 7 === targetWeekday) {
      nextOpenOffset = i;
      break;
    }
  }
  if (nextOpenOffset <= 0) return null;

  const dates: string[] = [];
  for (let i = 0; i < nextOpenOffset; i += 1) {
    const weekday = (today.weekday + i) % 7;
    if (!openDays.includes(weekday)) continue;
    dates.push(addDays(today.date, i));
  }
  if (dates.length === 0) return null;

  return {
    locationId: status.id,
    locationName: status.name,
    dates,
    labels: dates.map(labelFor),
    holidayNames: dates
      .map((d) => SHOP_CLOSURES.find((c) => c.date === d)?.name)
      .filter((n): n is string => Boolean(n)),
  };
}

/** Detected closures for every location Fresha reported. */
export function detectFreshaClosures(
  statuses: Record<string, FreshaLocationStatus>,
): DetectedClosure[] {
  return Object.values(statuses)
    .map(detectFreshaClosure)
    .filter((c): c is DetectedClosure => c !== null);
}
