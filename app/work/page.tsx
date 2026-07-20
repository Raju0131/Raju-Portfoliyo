import type { Metadata } from "next";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Work — Raju",
  description:
    "A collection of things I've designed & built — full-stack apps, playful interfaces and my own brand.",
};

const rowBase =
  "flex flex-wrap items-center gap-y-4 gap-x-[clamp(16px,3vw,32px)] border-t border-line px-[clamp(12px,2vw,24px)] py-[26px] rounded-[18px] [transition:background_.35s_ease,transform_.35s_ease] hover:translate-x-2";
const rowTitle =
  "font-display text-[clamp(26px,4.2vw,50px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink";
const rowText = "flex min-w-[200px] flex-1 flex-col gap-[7px]";
const rowRight = "ml-auto flex items-center gap-[18px]";
const rowYear = "font-mono text-[12px] opacity-60";
const rowArrow =
  "inline-flex h-[46px] w-[46px] items-center justify-center rounded-full bg-ink text-[18px] text-white [transition:background_.3s_ease,transform_.3s_ease] hover:rotate-45 hover:bg-accent";

export default function WorkPage() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between gap-4 border-b border-line bg-[rgba(243,242,250,.8)] px-[clamp(20px,4.5vw,56px)] py-3.5 backdrop-blur-[12px]">
        <Link href="/" className="font-hand text-[22px] leading-none tracking-[.04em] text-ink">
          Raju
        </Link>
        <Link
          href="/"
          className="inline-block rounded-full border-[1.5px] border-ink px-[18px] py-2 text-[13.5px] font-semibold text-ink [transition:background_.3s_ease,color_.3s_ease] hover:bg-ink hover:text-white"
        >
          <span className="whitespace-nowrap">← Back home</span>
        </Link>
      </header>

      <main className="mx-auto box-border max-w-[1200px] px-[clamp(16px,5vw,64px)] pb-20 pt-[140px]">
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 [animation:fadeUp_.7s_ease_.05s_both]">
          <h1 className="m-0 whitespace-nowrap font-display text-[clamp(48px,8vw,110px)] font-extrabold leading-none tracking-[-0.03em] text-ink">
            Work <span className="text-accent">✦</span>
          </h1>
          <span className="font-mono text-[12px] tracking-[.18em] opacity-60">
            (04) — Selected projects
          </span>
        </div>
        <p className="m-0 mb-5 max-w-[52ch] text-[16.5px] leading-[1.75] [animation:fadeUp_.7s_ease_.15s_both]">
          A collection of things I&apos;ve designed &amp; built — full-stack apps, playful
          interfaces and my own brand. Click any project for the full story.
        </p>
        <div className="mb-12 flex flex-wrap gap-2 [animation:fadeUp_.7s_ease_.2s_both]">
          <span className="rounded-full bg-ink px-[18px] py-2 font-mono text-[11px] tracking-[.1em] text-white">
            All (04)
          </span>
          <span className="rounded-full border border-line bg-card px-[18px] py-2 font-mono text-[11px] tracking-[.1em] text-ink">
            Full-stack
          </span>
          <span className="rounded-full border border-line bg-card px-[18px] py-2 font-mono text-[11px] tracking-[.1em] text-ink">
            Motion
          </span>
          <span className="rounded-full border border-line bg-card px-[18px] py-2 font-mono text-[11px] tracking-[.1em] text-ink">
            Branding
          </span>
        </div>

        <div className="flex flex-col [animation:fadeUp_.7s_ease_.25s_both]">
          <Link href="/work/techhouse" className={`${rowBase} hover:bg-lav`}>
            <span className="font-mono text-[12px] tracking-[.18em] text-accent">01</span>
            <span className="flex h-[72px] w-[104px] shrink-0 items-center justify-center rounded-xl bg-lav font-hand text-[26px] text-ink">
              Th
            </span>
            <span className={rowText}>
              <span className={rowTitle}>Tech House</span>
              <span className="text-[14px]">
                Full-stack e-commerce — Next.js · TypeScript · PostgreSQL
              </span>
            </span>
            <span className={rowRight}>
              <span className={rowYear}>2026</span>
              <span className={rowArrow}>↗</span>
            </span>
          </Link>
          <Link href="/work/cinenest" className={`${rowBase} hover:bg-mint`}>
            <span className="font-mono text-[12px] tracking-[.18em] text-accent">02</span>
            <span className="h-[72px] w-[104px] shrink-0 overflow-hidden rounded-xl bg-mint">
              <img
                src="/assets/cinenest-home.png"
                alt=""
                className="block h-full w-full object-cover object-top"
              />
            </span>
            <span className={rowText}>
              <span className="flex flex-wrap items-center gap-3">
                <span className={rowTitle}>Cinenest</span>
                <span className="whitespace-nowrap rounded-full bg-mint px-[13px] py-[5px] font-mono text-[10px] tracking-[.1em] text-ink">
                  ● Live
                </span>
              </span>
              <span className="text-[14px]">Cinematic movie discovery — React · GSAP · Live on Vercel</span>
            </span>
            <span className={rowRight}>
              <span className={rowYear}>2025</span>
              <span className={rowArrow}>↗</span>
            </span>
          </Link>
          <Link href="/work/branding" className={`${rowBase} hover:bg-peach`}>
            <span className="font-mono text-[12px] tracking-[.18em] text-accent">03</span>
            <span className="flex h-[72px] w-[104px] shrink-0 rotate-[-2deg] items-center justify-center rounded-xl bg-peach font-hand text-[26px] text-ink">
              Raju
            </span>
            <span className={rowText}>
              <span className={rowTitle}>Raju — Identity</span>
              <span className="text-[14px]">
                Personal brand &amp; portfolio — design, motion, micro-interactions
              </span>
            </span>
            <span className={rowRight}>
              <span className={rowYear}>2025</span>
              <span className={rowArrow}>↗</span>
            </span>
          </Link>
          <Link href="/work/3d" className={`${rowBase} border-b hover:bg-lav`}>
            <span className="font-mono text-[12px] tracking-[.18em] text-accent">04</span>
            <span className="flex h-[72px] w-[104px] shrink-0 items-center justify-center rounded-xl bg-ink font-display text-[22px] font-extrabold text-paper">
              3D
            </span>
            <span className={rowText}>
              <span className="flex flex-wrap items-center gap-3">
                <span className={rowTitle}>3D</span>
                <span className="whitespace-nowrap rounded-full bg-lav px-[13px] py-[5px] font-mono text-[10px] tracking-[.1em] text-ink">
                  In progress
                </span>
              </span>
              <span className="text-[14px]">Interactive 3D on the web — Three.js · WebGL</span>
            </span>
            <span className={rowRight}>
              <span className={rowYear}>2026</span>
              <span className={rowArrow}>↗</span>
            </span>
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-3.5 [animation:fadeUp_.7s_ease_.35s_both]">
          <a
            href="mailto:iamraju705@gmail.com"
            className="inline-block rounded-full bg-ink px-8 py-[15px] text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-accent hover:text-white"
          >
            Have a project? Let&apos;s talk →
          </a>
          <a
            href="https://github.com/Raju0131"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full border-[1.5px] border-line bg-card px-8 py-[15px] text-[15px] font-semibold text-ink [transition:border-color_.3s_ease] hover:border-ink"
          >
            More on GitHub ↗
          </a>
        </div>
      </main>
    </>
  );
}
