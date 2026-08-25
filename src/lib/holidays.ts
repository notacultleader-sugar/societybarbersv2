export type StatHoliday = { name: string; date: string }; // date = YYYY-MM-DD (Pacific)

// British Columbia statutory holidays
export const BC_STAT_HOLIDAYS: StatHoliday[] = [
  { name: "New Year's Day", date: "2026-01-01" },
  { name: "Family Day", date: "2026-02-16" },
  { name: "Good Friday", date: "2026-04-03" },
  { name: "Victoria Day", date: "2026-05-18" },
  { name: "Canada Day", date: "2026-07-01" },
  { name: "BC Day", date: "2026-08-03" },
  { name: "Labour Day", date: "2026-09-07" },
  { name: "National Day for Truth and Reconciliation", date: "2026-09-30" },
  { name: "Thanksgiving", date: "2026-10-12" },
  { name: "Remembrance Day", date: "2026-11-11" },
  { name: "Christmas Day", date: "2026-12-25" },
  { name: "New Year's Day", date: "2027-01-01" },
  { name: "Family Day", date: "2027-02-15" },
  { name: "Good Friday", date: "2027-03-26" },
  { name: "Victoria Day", date: "2027-05-24" },
  { name: "Canada Day", date: "2027-07-01" },
  { name: "BC Day", date: "2027-08-02" },
  { name: "Labour Day", date: "2027-09-06" },
  { name: "National Day for Truth and Reconciliation", date: "2027-09-30" },
  { name: "Thanksgiving", date: "2027-10-11" },
  { name: "Remembrance Day", date: "2027-11-11" },
  { name: "Christmas Day", date: "2027-12-27" },
  { name: "New Year's Day", date: "2028-01-01" },
  { name: "Family Day", date: "2028-02-21" },
  { name: "Good Friday", date: "2028-04-14" },
  { name: "Victoria Day", date: "2028-05-22" },
  { name: "Canada Day", date: "2028-07-03" },
  { name: "BC Day", date: "2028-08-07" },
  { name: "Labour Day", date: "2028-09-04" },
  { name: "National Day for Truth and Reconciliation", date: "2028-10-02" },
  { name: "Thanksgiving", date: "2028-10-09" },
  { name: "Remembrance Day", date: "2028-11-13" },
  { name: "Christmas Day", date: "2028-12-25" },
];

/** Today's date in Pacific time as YYYY-MM-DD. */
function pacificToday(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Vancouver",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

/** The next BC stat holiday (including today), or null if the list is exhausted. */
export function getNextStatHoliday(): (StatHoliday & { label: string; daysAway: number }) | null {
  const today = pacificToday();
  const next = BC_STAT_HOLIDAYS.find((h) => h.date >= today);
  if (!next) return null;

  const parts = next.date.split("-").map(Number);
  const [y, m, d] = parts as [number, number, number];
  const target = Date.UTC(y, m - 1, d);
  const [ty, tm, td] = today.split("-").map(Number) as [number, number, number];
  const current = Date.UTC(ty, tm - 1, td);
  const daysAway = Math.round((target - current) / 86400000);

  const label = new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date(target));

  return { ...next, label, daysAway };
}
