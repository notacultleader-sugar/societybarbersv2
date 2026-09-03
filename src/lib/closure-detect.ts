import { SHOP_CLOSURES } from "@/lib/holidays";
import type { FreshaLocationStatus } from "@/lib/fresha-status";

export type DetectedClosure = {
  locationId: string;
  dates: string[];
  labels: string[];
  holidayNames: string[];
};

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/** Days of week each shop is normally open (0 = Sunday). */
const REGULAR_SCHEDULE: Record<string, number[]> = {
  duncan: [0, 1, 2, 3, 4, 5, 6],
  "maple-bay": [1, 2, 3, 4, 5, 6],
};

function pacificDate(d: Date): { iso: string; dayName: string; dayIndex: number } {
  const iso = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Vancouver",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
  const dayName = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Vancouver",
    weekday: "long",
  }).format(d);
  return { iso, dayName, dayIndex: DAYS.indexOf(dayName) };
}

function addDays(d: Date, days: number): Date {
  const next = new Date(d);
  next.setDate(next.getDate() + days);
  return next;
}

function parseNextOpenDay(detail: string | null): string | null {
  if (!detail) return null;
  const match = detail.match(
    /opens on (Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/i,
  );
  return match ? match[1]! : null;
}

/**
 * Derive upcoming unexpectedly-closed days from Fresha's "opens on X" detail.
 *
 * If Fresha says the shop is closed now and won't reopen until, say, Saturday,
 * any regular business days between today and Saturday are treated as detected
 * closures. When a detected date matches a known statutory holiday, the holiday
 * name is included.
 */
export function detectFreshaClosures(
  status: Record<string, FreshaLocationStatus>,
): DetectedClosure[] {
  const now = new Date();

  return Object.values(status).map((loc) => {
    const nextOpenDayName = parseNextOpenDay(loc.detail);
    const dates: string[] = [];
    const labels: string[] = [];
    const holidayNames: string[] = [];

    if (!nextOpenDayName || loc.state === "OPEN") {
      return { locationId: loc.id, dates, labels, holidayNames };
    }

    let cursor = 1;
    while (cursor <= 14) {
      const candidate = addDays(now, cursor);
      const { iso, dayName, dayIndex } = pacificDate(candidate);
      if (dayName === nextOpenDayName) break;

      const isRegularDay = REGULAR_SCHEDULE[loc.id]?.includes(dayIndex) ?? false;
      if (isRegularDay) {
        dates.push(iso);
        labels.push(dayName);
        const holiday = SHOP_CLOSURES.find((h) => h.date === iso);
        if (holiday) holidayNames.push(holiday.name);
      }
      cursor++;
    }

    return { locationId: loc.id, dates, labels, holidayNames };
  });
}
