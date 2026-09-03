export type WeeklyHours = {
  weekday: { open: string; close: string }; // "HH:MM" in 24h Pacific time
  sunday?: { open: string; close: string };
};

export const DUNCAN_HOURS: WeeklyHours = {
  weekday: { open: "10:00", close: "18:30" },
  sunday: { open: "10:00", close: "16:00" },
};

export const MAPLE_BAY_HOURS: WeeklyHours = {
  weekday: { open: "10:00", close: "17:00" },
};

function timeToMinutes(time: string): number {
  const [h, m] = time.split(":").map((part) => Number(part));
  if (h === undefined || m === undefined || Number.isNaN(h) || Number.isNaN(m)) {
    throw new Error(`Invalid time format: ${time}`);
  }
  return h * 60 + m;
}

export function isLocationOpen(hours: WeeklyHours): boolean {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Vancouver",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    weekday: "short",
  });

  const parts = formatter.formatToParts(now);
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10);
  const minute = parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10);
  const dayShort = parts.find((p) => p.type === "weekday")?.value ?? "Sun";

  // Sunday is 7, Monday–Saturday is 1–6
  const dayMap: Record<string, number> = {
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
    Sun: 7,
  };
  const day = dayMap[dayShort] ?? 0;

  const todaysHours = day === 7 ? hours.sunday : day >= 1 && day <= 6 ? hours.weekday : undefined;
  if (!todaysHours) return false;

  const openMinutes = timeToMinutes(todaysHours.open);
  const closeMinutes = timeToMinutes(todaysHours.close);
  const currentMinutes = hour * 60 + minute;

  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}
