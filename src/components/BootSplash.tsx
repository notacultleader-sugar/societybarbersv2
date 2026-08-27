import { useEffect, useRef, useState } from "react";

const BOOT_LINES = [
  "SOCIETY BIOS v8.13 ... OK",
  "MEM CHECK 640K ......... OK",
  "> mount /dev/cowichan",
  "0x1F4A  MOV  AX, [OBEY]",
  "0x1F52  CALL SUBMIT_TO_STYLE",
  "loading signal.sys .... [##########]",
  "decrypt: CONSUME.dat",
  "> scan --hosts --sunglasses",
  "0x2C10  XOR  BX, CONFORM",
  "SIGNAL LOCK ACQUIRED",
  "> exec propaganda_feed --loop",
  "WATCH TV .. STAY ASLEEP .. NO INDEPENDENT THOUGHT",
  "0x33E7  PUSH FRESH_FADE",
  "chair 01 ... READY",
  "chair 02 ... READY",
  "chair 03 ... READY",
  "> auth --member --gift-card",
  "MARRY AND REPRODUCE ......... OK",
  "0x41B0  JMP  LOOK_GOOD",
  "> init clippers --voltage 120",
  "THIS IS YOUR GOD",
  "OBEY. CONSUME. FIT IN.",
  "> boot society_barbers.app",
  "SYSTEM READY _",
];

const LINE_MS = 130;
const TOTAL_MS = 4200;
const FADE_MS = 550;

export function BootSplash() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [count, setCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = window.setInterval(() => {
      setCount((c) => (c >= BOOT_LINES.length ? c : c + 1));
    }, LINE_MS);
    const fade = window.setTimeout(() => setFading(true), TOTAL_MS);
    const hide = window.setTimeout(() => setVisible(false), TOTAL_MS + FADE_MS);
    return () => {
      window.clearInterval(line);
      window.clearTimeout(fade);
      window.clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [count]);

  if (!visible) return null;

  const lines = BOOT_LINES.slice(0, count);

  return (
    <div
      aria-hidden="true"
      className="crt-boot fixed inset-0 z-[200] bg-black"
      style={{
        opacity: fading ? 0 : 1,
        transition: `opacity ${FADE_MS}ms ease-out`,
      }}
    >
      <div className="crt-screen absolute inset-0 overflow-hidden">
        <div
          ref={scrollRef}
          className="absolute inset-0 overflow-hidden px-5 py-8 font-mono text-[11px] leading-[1.55] text-[#39ff8a] sm:text-[13px]"
          style={{ textShadow: "0 0 6px rgba(57,255,138,0.75), 0 0 18px rgba(57,255,138,0.35)" }}
        >
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap break-words">
              {line}
            </div>
          ))}
          <span className="crt-cursor inline-block h-[1em] w-[0.6em] translate-y-[0.15em] bg-[#39ff8a]" />
        </div>

        {/* scanlines */}
        <div className="crt-scanlines pointer-events-none absolute inset-0" />
        {/* rolling bright band */}
        <div className="crt-roll pointer-events-none absolute inset-x-0 h-24" />
        {/* tube vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 100% at 50% 50%, transparent 45%, rgba(0,0,0,0.85) 100%)",
          }}
        />
      </div>
    </div>
  );
}
