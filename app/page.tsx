import Link from "next/link";
import { Fragment } from "react";
import Clock from "@/components/Clock";
import CursorFx from "@/components/CursorFx";
import HomeHeader from "@/components/HomeHeader";
import Loader from "@/components/Loader";
import RevealFx from "@/components/RevealFx";
import ScrollProgress from "@/components/ScrollProgress";
import AboutPhotoCard from "@/components/AboutPhotoCard";

/* eslint-disable @next/next/no-img-element */

const WAVE_BG =
  "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2226%22 height=%229%22 viewBox=%220 0 26 9%22><path d=%22M0 4.5 Q 6.5 0 13 4.5 T 26 4.5%22 fill=%22none%22 stroke=%22%238b8fb3%22 stroke-width=%221.8%22/></svg>')";

const MARQUEE_ITEMS = [
  "Full-stack developer",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Motion",
  "Based in Bangladesh",
];

function MarqueeText() {
  return (
    <>
      {MARQUEE_ITEMS.map((item) => (
        <Fragment key={item}>
          {item} <span className="text-accent">✦</span>{" "}
        </Fragment>
      ))}
    </>
  );
}

function SectionHeading({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <h2 className="m-0 flex items-baseline gap-[18px] font-display text-[clamp(38px,5.8vw,74px)] font-extrabold leading-none tracking-[-0.03em] text-ink">
      <span className="font-mono text-[13px] font-normal tracking-[.2em] text-accent">{num}</span>
      {children}
    </h2>
  );
}

const workChip =
  "rounded-full bg-white/65 px-3.5 py-1.5 font-mono text-[10.5px] tracking-[.1em] text-ink";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Loader />
      <HomeHeader />

      {/* Hero */}
      <section
        id="home"
        className="relative z-[1] box-border flex min-h-screen items-center overflow-hidden px-[clamp(20px,5vw,64px)] pb-[90px] pt-[130px]"
      >
        <div className="mx-auto grid w-full max-w-[1300px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-[clamp(40px,5vw,60px)]">
          <div className="flex flex-col items-start gap-7">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-[18px] py-[9px] font-mono text-[11px] uppercase tracking-[.18em] text-ink [animation:fadeUp_.7s_ease_.1s_both]">
              <span className="h-[7px] w-[7px] rounded-full bg-success [animation:pulseDot_2s_ease-in-out_infinite]" />
              Available for freelance
            </span>
            <h1 className="m-0 text-balance font-display text-[clamp(44px,6.6vw,92px)] font-extrabold leading-none tracking-[-0.03em] text-ink [animation:fadeUp_.7s_ease_.2s_both]">
              Hey, I&apos;m{" "}
              <span
                className="inline-block bg-repeat-x pb-2.5 font-hand font-normal tracking-[.03em] text-accent [animation:waveMove_.9s_linear_infinite] [background-position:left_bottom] [background-size:26px_9px]"
                style={{ backgroundImage: WAVE_BG }}
              >
                Raju
              </span>
              <span className="text-accent">.</span>
              <br />
              I build playful, fast web experiences<span className="text-accent">*</span>
            </h1>
            <p className="m-0 max-w-[46ch] text-[clamp(16px,1.6vw,18.5px)] leading-[1.75] [animation:fadeUp_.7s_ease_.35s_both]">
              <span className="font-semibold text-ink">Full-stack web developer</span> from
              Rajshahi, Bangladesh — Next.js, TypeScript &amp; PostgreSQL under the hood,
              micro-interactions on top.
            </p>
            <div className="flex flex-wrap items-center gap-x-[22px] gap-y-3.5 [animation:fadeUp_.7s_ease_.5s_both]">
              <a
                href="#work"
                data-magnetic="1"
                className="inline-block rounded-full border-[1.5px] border-ink bg-ink px-8 py-[15px] text-[15px] font-semibold text-white [transition:background_.3s_ease,border-color_.3s_ease] hover:border-accent hover:bg-accent hover:text-white"
              >
                See my work →
              </a>
              <a
                href="mailto:iamraju705@gmail.com"
                data-magnetic="1"
                className="inline-block rounded-full border-[1.5px] border-line bg-card px-8 py-[15px] text-[15px] font-semibold text-ink [transition:border-color_.3s_ease] hover:border-ink"
              >
                Say hello
              </a>
            </div>
            <div className="flex flex-wrap gap-2 [animation:fadeUp_.7s_ease_.62s_both]">
              <span className="rounded-full bg-lav px-[15px] py-[7px] font-mono text-[11px] text-ink">
                Next.js
              </span>
              <span className="rounded-full bg-mint px-[15px] py-[7px] font-mono text-[11px] text-ink">
                TypeScript
              </span>
              <span className="rounded-full bg-peach px-[15px] py-[7px] font-mono text-[11px] text-ink">
                PostgreSQL
              </span>
              <span className="rounded-full border border-line bg-card px-[15px] py-[7px] font-mono text-[11px] text-ink">
                GSAP
              </span>
            </div>
          </div>
          <div className="relative justify-self-center [animation:fadeUp_.9s_ease_.3s_both]">
            <div className="relative box-content w-[clamp(260px,26vw,360px)] rotate-[-3deg] rounded-[22px] bg-card p-3.5 pb-[52px] shadow-[0_30px_70px_rgba(52,55,92,.18)] transition-transform duration-500 ease-swift hover:rotate-0 hover:scale-[1.02]">
              <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <img
                  src="/assets/raju.jpg"
                  alt="Rifat Sarker — Raju"
                  className="block h-full w-full object-cover"
                />
              </div>
              <span className="absolute inset-x-0 bottom-3.5 text-center font-hand text-[24px] tracking-[.04em] text-ink">
                Rifat Sarker
              </span>
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-[34px] -top-[34px] h-[104px] w-[104px] [animation:spinSlow_14s_linear_infinite]"
            >
              <svg viewBox="0 0 100 100" width="104" height="104">
                <defs>
                  <path
                    id="circ"
                    d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                  ></path>
                </defs>
                <circle cx="50" cy="50" r="49" fill="var(--accent)"></circle>
                <text
                  className="font-mono"
                  style={{ fontSize: "9.2px", letterSpacing: ".22em", fill: "#fff" }}
                >
                  <textPath href="#circ">OPEN TO WORK • FULL-STACK DEV • </textPath>
                </text>
                <text x="50" y="55" textAnchor="middle" style={{ fontSize: "15px", fill: "#fff" }}>
                  ✳
                </text>
              </svg>
            </div>
          </div>
        </div>
        <span className="absolute bottom-[22px] left-1/2 inline-flex -translate-x-1/2 items-center gap-2 font-mono text-[10.5px] uppercase tracking-[.2em] opacity-55">
          Scroll
          <span className="inline-block [animation:bobY_1.4s_ease-in-out_infinite]">↓</span>
        </span>
      </section>

      {/* Marquee ribbon */}
      <div data-reveal="1">
        <div className="relative z-[1] rotate-[-1.2deg] scale-[1.02] overflow-hidden bg-ink py-4">
          <div className="flex w-max whitespace-nowrap font-display text-[15px] font-semibold uppercase tracking-[.06em] text-paper [animation:marquee_30s_linear_infinite]">
            <span className="pr-[18px]">
              <MarqueeText />
            </span>
            <span aria-hidden="true" className="pr-[18px]">
              <MarqueeText />
            </span>
          </div>
        </div>
      </div>

      {/* 01 Selected work */}
      <section
        id="work"
        className="relative z-[1] mx-auto box-border max-w-[1300px] scroll-mt-10 px-[clamp(20px,5vw,64px)] pb-[clamp(60px,8vh,100px)] pt-[clamp(90px,13vh,150px)]"
      >
        <div
          data-reveal="1"
          className="mb-10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3"
        >
          <SectionHeading num="01">
            Selected work <span className="text-accent">✦</span>
          </SectionHeading>
          <span className="font-mono text-[12px] tracking-[.18em] opacity-60">(03) — 2025 · 2026</span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[22px]">
          <Link
            href="/work/3d"
            data-reveal="1"
            className="col-span-full grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center gap-[26px] rounded-[26px] bg-lav p-[clamp(24px,3vw,40px)] [transition:transform_.4s_cubic-bezier(.25,.1,.25,1),box-shadow_.4s_ease] hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(52,55,92,.16)]"
          >
            <span className="flex flex-col items-start gap-4">
              <span className="flex flex-wrap gap-2">
                <span className={workChip}>3D</span>
                <span className={workChip}>WebGL</span>
                <span className={workChip}>2026</span>
              </span>
              <span className="flex flex-wrap items-center gap-3">
                <span className="font-display text-[clamp(30px,3.6vw,48px)] font-extrabold leading-none tracking-[-0.02em] text-ink">
                  Sneaker Lab
                </span>
                <span className="whitespace-nowrap rounded-full bg-mint px-[13px] py-[6px] font-mono text-[10px] tracking-[.1em] text-ink">
                  ● Live
                </span>
              </span>
              <span className="max-w-[42ch] text-[15px] leading-[1.7]">
                Real-time 3D sneaker configurator — pick a colourway and material, recolour it
                live and export the result.
              </span>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-[19px] text-white [transition:background_.3s_ease,transform_.3s_ease] hover:rotate-45 hover:bg-accent">
                ↗
              </span>
            </span>
            <span className="block aspect-[16/11] overflow-hidden rounded-2xl bg-white/50">
              <img
                src="/assets/sneaker-navy.png"
                alt="Sneaker Lab configurator"
                className="block h-full w-full object-cover object-center"
              />
            </span>
          </Link>
          <Link
            href="/work/cinenest"
            data-reveal="1"
            className="flex flex-col gap-[22px] rounded-[26px] bg-mint p-[clamp(24px,3vw,36px)] [transition:transform_.4s_cubic-bezier(.25,.1,.25,1),box-shadow_.4s_ease] hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(52,55,92,.14)]"
          >
            <span className="flex flex-wrap items-center justify-between gap-3">
              <span className="flex flex-wrap gap-2">
                <span className={workChip}>Web app</span>
                <span className={workChip}>2025</span>
              </span>
              <span className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full bg-ink text-[17px] text-white [transition:background_.3s_ease,transform_.3s_ease] hover:rotate-45 hover:bg-accent">
                ↗
              </span>
            </span>
            <span className="block aspect-[16/11] overflow-hidden rounded-2xl bg-white/50">
              <img
                src="/assets/cinenest-home.png"
                alt="Cinenest homepage"
                className="block h-full w-full object-cover object-top"
              />
            </span>
            <span className="flex flex-col gap-2">
              <span className="font-display text-[clamp(26px,2.8vw,36px)] font-extrabold leading-none tracking-[-0.02em] text-ink">
                Cinenest
              </span>
              <span className="text-[14.5px] leading-[1.65]">
                Cinematic movie discovery with buttery GSAP transitions.
              </span>
            </span>
          </Link>
          <Link
            href="/work/branding"
            data-reveal="1"
            className="flex flex-col gap-[22px] rounded-[26px] bg-peach p-[clamp(24px,3vw,36px)] [transition:transform_.4s_cubic-bezier(.25,.1,.25,1),box-shadow_.4s_ease] hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(52,55,92,.14)]"
          >
            <span className="flex flex-wrap items-center justify-between gap-3">
              <span className="flex flex-wrap gap-2">
                <span className={workChip}>Branding</span>
                <span className={workChip}>2025</span>
              </span>
              <span className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full bg-ink text-[17px] text-white [transition:background_.3s_ease,transform_.3s_ease] hover:rotate-45 hover:bg-accent">
                ↗
              </span>
            </span>
            <span className="block aspect-[16/11] overflow-hidden rounded-2xl bg-white/50">
              <img
                src="/assets/raju-home.png"
                alt="Raju portfolio homepage"
                className="block h-full w-full object-cover object-top"
              />
            </span>
            <span className="flex flex-col gap-2">
              <span className="font-display text-[clamp(26px,2.8vw,36px)] font-extrabold leading-none tracking-[-0.02em] text-ink">
                Raju — Identity
              </span>
              <span className="text-[14.5px] leading-[1.65]">
                Personal brand &amp; this portfolio — motion and micro-interactions from scratch.
              </span>
            </span>
          </Link>
        </div>
        <div data-reveal="1" className="mt-10 flex justify-center">
          <Link
            href="/work"
            data-magnetic="1"
            className="inline-flex items-center gap-3 rounded-full border-[1.5px] border-ink bg-card px-[34px] py-4 text-[15px] font-semibold text-ink [transition:background_.3s_ease,color_.3s_ease] hover:bg-ink hover:text-white"
          >
            View more <span className="text-[17px]">→</span>
          </Link>
        </div>
      </section>

      {/* 02 About me */}
      <section
        id="about"
        className="relative z-[1] mx-auto box-border max-w-[1300px] scroll-mt-10 px-[clamp(20px,5vw,64px)] py-[clamp(60px,9vh,110px)]"
      >
        <div
          data-reveal="1"
          className="mb-11 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3"
        >
          <SectionHeading num="02">
            About me <span className="text-accent">✦</span>
          </SectionHeading>
          <span className="font-mono text-[12px] tracking-[.18em] opacity-60">Rajshahi, Bangladesh</span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[clamp(40px,5vw,80px)]">
          <AboutPhotoCard />
          <div className="flex flex-col gap-6">
            <p
              data-reveal="1"
              className="m-0 text-balance font-display text-[clamp(22px,2.6vw,32px)] font-bold leading-[1.3] tracking-[-0.02em] text-ink"
            >
              I&apos;m Rifat Sarker — <span className="text-accent">Raju</span> online. I turn
              ideas into products that feel alive.
            </p>
            <p data-reveal="1" className="m-0 text-base leading-[1.8]">
              Full-stack developer working across the modern JavaScript stack. I care about the
              details that make products feel finished — clean architecture, fast load times, and
              motion that serves the experience instead of decorating it. When I&apos;m not
              shipping, I&apos;m probably playing guitar.
            </p>
            <div data-reveal="1" className="flex flex-col gap-3">
              <div className="flex flex-wrap items-baseline gap-3.5">
                <span className="min-w-[84px] font-mono text-[10.5px] uppercase tracking-[.2em] opacity-55">
                  Core
                </span>
                <span className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-lav px-[15px] py-[7px] text-[13px] text-ink">Next.js</span>
                  <span className="rounded-full bg-lav px-[15px] py-[7px] text-[13px] text-ink">React</span>
                  <span className="rounded-full bg-lav px-[15px] py-[7px] text-[13px] text-ink">TypeScript</span>
                </span>
              </div>
              <div className="flex flex-wrap items-baseline gap-3.5">
                <span className="min-w-[84px] font-mono text-[10.5px] uppercase tracking-[.2em] opacity-55">
                  Backend
                </span>
                <span className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-mint px-[15px] py-[7px] text-[13px] text-ink">Node.js</span>
                  <span className="rounded-full bg-mint px-[15px] py-[7px] text-[13px] text-ink">PostgreSQL</span>
                </span>
              </div>
              <div className="flex flex-wrap items-baseline gap-3.5">
                <span className="min-w-[84px] font-mono text-[10.5px] uppercase tracking-[.2em] opacity-55">
                  UI · Motion
                </span>
                <span className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-peach px-[15px] py-[7px] text-[13px] text-ink">Tailwind CSS</span>
                  <span className="rounded-full bg-peach px-[15px] py-[7px] text-[13px] text-ink">GSAP</span>
                  <span className="rounded-full bg-peach px-[15px] py-[7px] text-[13px] text-ink">Lenis</span>
                </span>
              </div>
            </div>
            <span data-reveal="1" className="inline-block">
              <span className="inline-block rotate-[-3deg] font-hand text-[44px] leading-none tracking-[.05em] text-ink">
                Raju
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* 03 My journey */}
      <section
        id="experience"
        className="relative z-[1] mx-auto box-border max-w-[1300px] scroll-mt-10 px-[clamp(20px,5vw,64px)] py-[clamp(60px,9vh,110px)]"
      >
        <div
          data-reveal="1"
          className="mb-11 flex flex-wrap items-center justify-between gap-x-6 gap-y-4"
        >
          <SectionHeading num="03">
            My journey <span className="text-accent">✦</span>
          </SectionHeading>
          <a
            href="/assets/rifat-sarker-cv.pdf"
            download
            data-magnetic="1"
            className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-line bg-card px-6 py-[11px] text-[14px] font-semibold text-ink [transition:border-color_.3s_ease,background_.3s_ease,color_.3s_ease] hover:border-ink hover:bg-ink hover:text-white"
          >
            Download CV ↓
          </a>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[clamp(36px,5vw,72px)]">
          <div data-reveal="1">
            <span className="mb-[26px] block font-mono text-[10.5px] uppercase tracking-[.24em] opacity-55">
              Timeline
            </span>
            <ol className="m-0 list-none p-0">
              <li className="relative border-l-2 border-line pb-8 pl-[30px] transition-transform duration-300 hover:translate-x-1.5">
                <span className="absolute -left-[7px] top-[3px] h-3 w-3 rounded-full bg-accent" />
                <span className="font-mono text-[11px] tracking-[.18em] opacity-60">2026</span>
                <div className="mb-[7px] mt-[5px] font-display text-[clamp(18px,2vw,22px)] font-bold tracking-[-0.01em] text-ink">
                  Full-Stack Developer · Tech House
                </div>
                <p className="m-0 max-w-[46ch] text-sm leading-[1.7]">
                  End-to-end e-commerce — auth, cart, payments, admin dashboard. Architected to
                  scale.
                </p>
              </li>
              <li className="relative border-l-2 border-line pb-8 pl-[30px] transition-transform duration-300 hover:translate-x-1.5">
                <span className="absolute -left-[7px] top-[3px] h-3 w-3 rounded-full bg-ink" />
                <span className="font-mono text-[11px] tracking-[.18em] opacity-60">2025</span>
                <div className="mb-[7px] mt-[5px] font-display text-[clamp(18px,2vw,22px)] font-bold tracking-[-0.01em] text-ink">
                  Web Developer · Cinenest
                </div>
                <p className="m-0 max-w-[46ch] text-sm leading-[1.7]">
                  Cinematic movie discovery — GSAP transitions, dynamic routing, bespoke design
                  system.
                </p>
              </li>
              <li className="relative border-l-2 border-line pb-8 pl-[30px] transition-transform duration-300 hover:translate-x-1.5">
                <span className="absolute -left-[7px] top-[3px] h-3 w-3 rounded-full bg-ink" />
                <span className="font-mono text-[11px] tracking-[.18em] opacity-60">2025</span>
                <div className="mb-[7px] mt-[5px] font-display text-[clamp(18px,2vw,22px)] font-bold tracking-[-0.01em] text-ink">
                  Brand &amp; Portfolio · Raju
                </div>
                <p className="m-0 max-w-[46ch] text-sm leading-[1.7]">
                  Personal identity + this animated portfolio — every micro-interaction hand-made.
                </p>
              </li>
              <li className="relative border-l-2 border-transparent pl-[30px] transition-transform duration-300 hover:translate-x-1.5">
                <span className="absolute -left-[7px] top-[3px] box-border h-3 w-3 rounded-full border-2 border-ink bg-bg" />
                <span className="font-mono text-[11px] tracking-[.18em] opacity-60">2023</span>
                <div className="mb-[7px] mt-[5px] font-display text-[clamp(18px,2vw,22px)] font-bold tracking-[-0.01em] text-ink">
                  The beginning
                </div>
                <p className="m-0 max-w-[46ch] text-sm leading-[1.7]">
                  Fell in love with the web. Started with React — haven&apos;t stopped shipping
                  since.
                </p>
              </li>
            </ol>
          </div>
          <div data-reveal="1">
            <span className="mb-3 block font-mono text-[10.5px] uppercase tracking-[.24em] opacity-55">
              What I do
            </span>
            <div className="flex flex-col">
              {[
                ["Full-Stack Web Apps", "Next.js · Node"],
                ["Frontend Engineering", "React · TS"],
                ["UI / UX & Motion", "GSAP · Lenis"],
                ["Branding & Identity", "Design"],
                ["AI-Assisted Development", "Claude · Cursor"],
              ].map(([title, tools]) => (
                <div
                  key={title}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-4 transition-transform duration-300 hover:translate-x-1.5"
                >
                  <span className="font-display text-[clamp(16px,1.8vw,19px)] font-bold text-ink">
                    {title}
                  </span>
                  <span className="whitespace-nowrap font-mono text-[11px] opacity-60">{tools}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-[20px] bg-card px-7 py-[26px] shadow-[0_14px_40px_rgba(52,55,92,.08)]">
              <span className="mb-2.5 block font-mono text-[10.5px] uppercase tracking-[.24em] opacity-55">
                Currently
              </span>
              <p className="m-0 text-[15px] leading-[1.75]">
                Building faster with AI-assisted workflows — exploring 3D on the web and everything
                that makes an interface feel alive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Contact / footer */}
      <section
        id="contact"
        className="relative z-[1] mx-auto box-border max-w-[1340px] scroll-mt-10 px-[clamp(16px,3vw,40px)] pb-[26px] pt-[clamp(50px,7vh,80px)]"
      >
        <div
          data-reveal="1"
          className="relative overflow-hidden rounded-[32px] bg-ink px-[clamp(24px,5vw,72px)] pb-[30px] pt-[clamp(70px,10vh,120px)] text-center"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-0.22em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-hand text-[clamp(180px,26vw,380px)] leading-none text-paper/5"
          >
            Raju
          </span>
          <p className="relative m-0 mb-5 flex items-center justify-center gap-3.5 font-mono text-[11.5px] uppercase tracking-[.26em] text-paper/60">
            <span className="text-accent">04</span>Got a project in mind?
          </p>
          <h2 className="relative m-0 mb-[38px] text-balance font-display text-[clamp(42px,7.5vw,104px)] font-extrabold leading-none tracking-[-0.03em] text-paper">
            Let&apos;s build something <span className="text-accent">great ✦</span>
          </h2>
          <div className="relative mb-11 flex justify-center">
            <a
              href="mailto:iamraju705@gmail.com"
              data-magnetic="1"
              className="inline-block rounded-full bg-accent px-10 py-[18px] text-[clamp(16px,2vw,20px)] font-semibold text-white [transition:transform_.3s_ease,filter_.3s_ease] hover:scale-[1.04] hover:brightness-[1.12] hover:text-white"
            >
              iamraju705@gmail.com →
            </a>
          </div>
          <div className="relative mb-20 flex flex-wrap items-center justify-center gap-x-3.5 gap-y-3">
            <a
              href="https://github.com/Raju0131"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-paper/30 px-[22px] py-2.5 text-[14px] font-medium text-paper [transition:background_.3s_ease,border-color_.3s_ease] hover:border-paper/60 hover:bg-paper/[.12] hover:text-white"
            >
              GitHub ↗
            </a>
            <a
              href="https://wa.me/8801315152005"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-paper/30 px-[22px] py-2.5 text-[14px] font-medium text-paper [transition:background_.3s_ease,border-color_.3s_ease] hover:border-paper/60 hover:bg-paper/[.12] hover:text-white"
            >
              WhatsApp ↗
            </a>
            <a
              href="tel:+8801315152005"
              className="rounded-full border border-paper/30 px-[22px] py-2.5 text-[14px] font-medium text-paper [transition:background_.3s_ease,border-color_.3s_ease] hover:border-paper/60 hover:bg-paper/[.12] hover:text-white"
            >
              +880 1315 152005
            </a>
          </div>
          <div className="relative flex flex-wrap items-center justify-between gap-x-6 gap-y-3.5 border-t border-paper/[.16] pt-[22px] font-mono text-[10px] uppercase tracking-[.18em] text-paper/55">
            <span>© 2026 Rifat Sarker</span>
            <span>Designed &amp; built by Raju — Rajshahi, BD</span>
            <span>
              <Clock /> GMT+6
            </span>
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-paper/10 text-[15px] tracking-normal text-paper transition-colors duration-300 hover:bg-accent hover:text-white"
            >
              ↑
            </a>
          </div>
        </div>
      </section>

      <CursorFx />
      <RevealFx />
    </>
  );
}
