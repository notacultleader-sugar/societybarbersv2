import type { FreshaLocationStatus } from "@/lib/fresha-status";

/** Small OPEN NOW / CLOSED pill fed by Fresha's live status. */
export function StatusBadge({
  status,
  className = "",
}: {
  status?: FreshaLocationStatus;
  className?: string;
}) {
  if (!status) return null;
  const open = status.state === "OPEN";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${
        open ? "bg-neon/15 text-neon" : "bg-muted/20 text-muted-foreground"
      } ${className}`}
    >
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${open ? "bg-neon" : "bg-muted-foreground"}`}
      />
      {open ? "Open now" : "Closed"}
    </span>
  );
}
