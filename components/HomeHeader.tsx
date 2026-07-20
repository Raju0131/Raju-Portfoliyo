"use client";

import { useEffect, useState } from "react";
import Clock from "./Clock";

const MENU_ITEMS = [
  { num: "01", label: "Work", href: "#work", delay: ".05s" },
  { num: "02", label: "About", href: "#about", delay: ".12s" },
  { num: "03", label: "Journey", href: "#experience", delay: ".19s" },
  { num: "04", label: "Contact", href: "#contact", delay: ".26s" },
];

export default function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between gap-4 border-b border-line bg-[rgba(243,242,250,.8)] px-[clamp(20px,4.5vw,56px)] py-3.5 backdrop-blur-[12px]">
        <a
          href="#home"
          aria-label="Home"
          className="font-hand text-[22px] leading-none tracking-[.04em] text-ink"
        >
          Raju
        </a>
        <div className="flex items-center gap-5">
          <span className="whitespace-nowrap font-mono text-[11px] tracking-[.14em] opacity-65">
            <Clock /> — DHAKA
          </span>
          <a
            href="/assets/rifat-sarker-cv.pdf"
            download
            className="inline-block rounded-full border-[1.5px] border-ink px-[18px] py-2 text-[13.5px] font-semibold text-ink [transition:background_.3s_ease,color_.3s_ease] hover:bg-ink hover:text-white"
          >
            CV ↓
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex cursor-pointer items-center gap-2.5 rounded-full border-none bg-ink px-[18px] py-[9px] font-mono text-[11px] uppercase tracking-[.2em] text-paper transition-colors duration-300 hover:bg-accent"
          >
            Menu
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[80] flex flex-col bg-ink [animation:fadeUp_.35s_ease_both]">
          <div className="flex items-center justify-between border-b border-paper/[.14] px-[clamp(20px,4.5vw,56px)] py-4">
            <span className="font-hand text-[22px] tracking-[.04em] text-paper">Raju</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer rounded-full border-none bg-paper px-[18px] py-[9px] font-mono text-[11px] uppercase tracking-[.2em] text-ink transition-colors duration-300 hover:bg-accent hover:text-white"
            >
              Close ✕
            </button>
          </div>
          <nav className="flex flex-1 items-center px-[clamp(24px,10vw,160px)]">
            <ol className="m-0 flex w-full list-none flex-col gap-1 p-0">
              {MENU_ITEMS.map((item, i) => (
                <li
                  key={item.num}
                  className={i < MENU_ITEMS.length - 1 ? "border-b border-paper/[.14]" : ""}
                  style={{ animation: `fadeUp .5s ease ${item.delay} both` }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline gap-[22px] py-[18px] font-display text-[clamp(36px,6vw,62px)] font-extrabold tracking-[-0.02em] text-paper/55 [transition:color_.3s_ease,transform_.3s_ease] hover:translate-x-[14px] hover:text-paper"
                  >
                    <span className="font-mono text-[12px] font-normal tracking-[.2em] text-accent">
                      {item.num}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-paper/[.14] px-[clamp(20px,4.5vw,56px)] py-5 font-mono text-[11px] uppercase tracking-[.14em]">
            <a href="mailto:iamraju705@gmail.com" className="text-paper/70 hover:text-white">
              iamraju705@gmail.com
            </a>
            <span className="text-paper/45">
              Rajshahi, BD — <Clock />
            </span>
          </div>
        </div>
      )}
    </>
  );
}
