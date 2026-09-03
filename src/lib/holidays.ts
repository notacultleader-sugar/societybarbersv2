export type ShopClosure = {
  /** Name shown in the app. */
  name: string;
  /** The date the shop is actually closed, YYYY-MM-DD (Pacific time). */
  date: string;
  /** Optional note, e.g. when this closure is a substitute day. */
  note?: string;
};

/**
 * SHOP CLOSURE DATES — edit this list.
 *
 * These are the days Society Barbers is closed, not a generic statutory-holiday
 * feed. They were seeded from the BC statutory holiday calendar, and where a
 * statutory holiday falls on a Sunday the substitute Monday closure is listed
 * with a note. Add or remove entries here (vacations, staff days, etc.) and the
 * "next closure" notice on Transmissions updates automatically.
 */
export const SHOP_CLOSURES: ShopClosure[] = [
  // 2026
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
  // 2027
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
  { name: "Christmas Day", date: "2027-12-25" },
  {
    name: "Boxing Day (substitute closure)",
    date: "2027-12-27",
    note: "Christmas Day falls on a Saturday",
  },
  // 2028
  { name: "New Year's Day", date: "2028-01-01" },
  { name: "Family Day", date: "2028-02-21" },
  { name: "Good Friday", date: "2028-04-14" },
  { name: "Victoria Day", date: "2028-05-22" },
  { name: "Canada Day", date: "2028-07-01" },
  { name: "BC Day", date: "2028-08-07" },
  { name: "Labour Day", date: "2028-09-04" },
  { name: "National Day for Truth and Reconciliation", date: "2028-09-30" },
  { name: "Thanksgiving", date: "2028-10-09" },
  { name: "Remembrance Day", date: "2028-11-11" },
  { name: "Christmas Day", date: "2028-12-25" },
  // 2029
  { name: "New Year's Day", date: "2029-01-01" },
  { name: "Family Day", date: "2029-02-19" },
  { name: "Good Friday", date: "2029-03-30" },
  { name: "Victoria Day", date: "2029-05-21" },
  { name: "Canada Day", date: "2029-07-01" },
  {
    name: "Canada Day (substitute closure)",
    date: "2029-07-02",
    note: "Canada Day falls on a Sunday",
  },
  { name: "BC Day", date: "2029-08-06" },
  { name: "Labour Day", date: "2029-09-03" },
  { name: "National Day for Truth and Reconciliation", date: "2029-09-30" },
  {
    name: "Truth and Reconciliation (substitute closure)",
    date: "2029-10-01",
    note: "September 30 falls on a Sunday",
  },
  { name: "Thanksgiving", date: "2029-10-08" },
  { name: "Remembrance Day", date: "2029-11-11" },
  {
    name: "Remembrance Day (substitute closure)",
    date: "2029-11-12",
    note: "November 11 falls on a Sunday",
  },
  { name: "Christmas Day", date: "2029-12-25" },
  // 2030
  { name: "New Year's Day", date: "2030-01-01" },
  { name: "Family Day", date: "2030-02-18" },
  { name: "Good Friday", date: "2030-04-19" },
  { name: "Victoria Day", date: "2030-05-20" },
  { name: "Canada Day", date: "2030-07-01" },
  { name: "BC Day", date: "2030-08-05" },
  { name: "Labour Day", date: "2030-09-02" },
  { name: "National Day for Truth and Reconciliation", date: "2030-09-30" },
  { name: "Thanksgiving", date: "2030-10-14" },
  { name: "Remembrance Day", date: "2030-11-11" },
  { name: "Christmas Day", date: "2030-12-25" },
];

/** Kept for backwards compatibility with earlier imports. */
export const BC_STAT_HOLIDAYS = SHOP_CLOSURES;
export type StatHoliday = ShopClosure;

/** Today's date in Pacific time as YYYY-MM-DD. */
function pacificToday(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Vancouver",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

/** The next shop closure (including today), or null if the list is exhausted. */
export function getNextStatHoliday(): (ShopClosure & { label: string; daysAway: number }) | null {
  const today = pacificToday();
  const next = SHOP_CLOSURES.filter((h) => h.date >= today).sort((a, b) =>
    a.date < b.date ? -1 : 1,
  )[0];
  if (!next) return null;

  const [y, m, d] = next.date.split("-").map(Number) as [number, number, number];
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
