import { useEffect, useState } from "react";

export type FreshaLocationStatus = {
  id: string;
  name: string;
  state: string;
  label: string;
  detail: string | null;
};

type FreshaStatusResponse = {
  fetchedAt: string;
  locations: FreshaLocationStatus[];
};

/** Published site — native builds have no local server to ask. */
const REMOTE_ENDPOINT = "https://societybarbersv2.lovable.app/api/public/fresha-status";

function endpoint(): string {
  if (typeof window === "undefined") return REMOTE_ENDPOINT;
  const isNative = Boolean(
    (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor
      ?.isNativePlatform?.(),
  );
  return isNative ? REMOTE_ENDPOINT : "/api/public/fresha-status";
}

/**
 * Live open/closed status per shop, as reported by Fresha.
 *
 * Returns an empty map until it loads, and stays empty if Fresha is
 * unreachable — every screen must render fine without it.
 */
export function useFreshaStatus(): Record<string, FreshaLocationStatus> {
  const [statuses, setStatuses] = useState<Record<string, FreshaLocationStatus>>({});

  useEffect(() => {
    let cancelled = false;
    fetch(endpoint())
      .then((res) => (res.ok ? (res.json() as Promise<FreshaStatusResponse>) : null))
      .then((data) => {
        if (cancelled || !data?.locations) return;
        const map: Record<string, FreshaLocationStatus> = {};
        for (const loc of data.locations) map[loc.id] = loc;
        setStatuses(map);
      })
      .catch(() => {
        /* offline or blocked — badges simply don't render */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return statuses;
}
