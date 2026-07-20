"use client";

import { useEffect, useLayoutEffect, useState } from "react";

const GREETS = ["Hello", "নমস্কার", "Bonjour", "হ্যালো", "Hola"];

export default function Loader() {
  const [done, setDone] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [idx, setIdx] = useState(0);

  // Show once per browsing session (README: "once per visit").
  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem("raju_loader_shown")) {
        setDone(true);
        setSkipped(true);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (skipped) return;
    const g = window.setInterval(() => setIdx((i) => (i + 1) % GREETS.length), 280);
    const t1 = window.setTimeout(() => {
      clearInterval(g);
      setOpacity(0);
      try {
        sessionStorage.setItem("raju_loader_shown", "1");
      } catch {}
    }, 1500);
    const t2 = window.setTimeout(() => setDone(true), 2050);
    return () => {
      clearInterval(g);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [skipped]);

  if (done) return null;
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center bg-ink [transition:opacity_.55s_ease,transform_.55s_ease]"
      style={{ opacity }}
    >
      <div className="flex flex-col items-center gap-[18px]">
        <span className="font-display text-[clamp(40px,7vw,76px)] font-extrabold leading-none tracking-[-0.02em] text-paper">
          {GREETS[idx]}
        </span>
        <span className="font-mono text-[10.5px] uppercase tracking-[.3em] text-paper/55">
          Raju — Folio 2026
        </span>
      </div>
    </div>
  );
}
