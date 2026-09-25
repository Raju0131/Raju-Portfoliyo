import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import RevealFx from "@/components/RevealFx";
import ScrollProgress from "@/components/ScrollProgress";

const EMAIL = "iamraju705@gmail.com";
const WHATSAPP = "https://wa.me/8801315152005";

export const metadata: Metadata = {
  title: "Services & Pricing — Three.js and Next.js developer for hire",
  description:
    "Real-time 3D product configurators, animated Next.js landing pages, and full-stack web apps. Fixed prices, written scope, a live link at every milestone.",
  alternates: { canonical: "https://rifatsarkerraju.com/services" },
  openGraph: {
    type: "website",
    url: "https://rifatsarkerraju.com/services",
    siteName: "Raju — Full-Stack Web Developer",
    title: "Three.js & Next.js developer for hire — Raju Ahmed",
    description:
      "Real-time 3D product configurators and the Next.js stores they live in. Fixed prices, from $145.",
    images: [
      {
        url: "https://rifatsarkerraju.com/og/services?v=2",
        width: 1200,
        height: 630,
        alt: "Services and pricing — Rifat Sarker Raju",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Three.js & Next.js developer for hire — Raju Ahmed",
    description: "Real-time 3D product configurators. Fixed prices, from $145.",
    images: ["https://rifatsarkerraju.com/og/services?v=2"],
  },
};

type Service = {
  id: string;
  eyebrow: string;
  title: string;
  blurb: string;
  /* Appended inside the blurb's own paragraph, so a service can point at the
     case study without growing a second block of copy. */
  blurbMore?: ReactNode;
  from: string;
  typical: string;
  includes: string[];
  timeline: string;
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    id: "configurator",
    eyebrow: "Three.js · WebGL · React",
    title: "Real-time 3D product configurator",
    blurb:
      "Your customer orbits the product, swaps colours and materials, and watches the price update — in the browser, on a phone, with no plugin.",
    blurbMore: (
      <>
        {" "}
        The shipped build brings a 16.7 MB model down to 2.4 MB —{" "}
        <Link href="/work/3d" className="font-semibold text-ink underline underline-offset-4">
          see the case study
        </Link>
        .
      </>
    ),
    from: "$145",
    typical: "Most builds land at $385–$850",
    includes: [
      "Three.js / React Three Fiber viewer",
      "Colour + material options wired to your prices",
      "Draco compression and mobile performance tuning",
      "Studio lighting matched to your photography",
      "Delivered as a React component, or embedded in your site",
    ],
    timeline: "7–14 days",
    featured: true,
  },
  {
    id: "landing",
    eyebrow: "Next.js · GSAP · Lenis",
    title: "Animated landing page",
    blurb:
      "Motion that guides the eye instead of showing off, on a page that still scores well on a mid-range phone.",
    from: "$85",
    typical: "Most builds land at $220–$480",
    includes: [
      "Next.js + Tailwind, deployed on Vercel",
      "GSAP scroll timelines and page transitions",
      "Image, font and loading performance work",
      "SEO meta, Open Graph preview, contact form",
      "Reduced-motion respected throughout",
    ],
    timeline: "5–12 days",
  },
  {
    id: "fullstack",
    eyebrow: "Next.js · Node · PostgreSQL",
    title: "Full-stack web app",
    blurb:
      "Schema, API, interface and deployment from one person — so you are not hiring three and translating between them.",
    blurbMore: (
      <>
        {" "}
        Premium Hatbazar, a working demo store, is built this way end to end —{" "}
        <Link
          href="/work/premium-hatbazar"
          className="font-semibold text-ink underline underline-offset-4"
        >
          see the case study
        </Link>
        .
      </>
    ),
    from: "$190",
    typical: "Most builds land at $520–$1,100",
    includes: [
      "Relational schema designed before any code",
      "Typed API layer, TypeScript end to end",
      "Auth, roles, Stripe payments and webhooks",
      "Admin dashboard",
      "Deployed, with environment setup documented",
    ],
    timeline: "7–21 days",
  },
];

const PROCESS = [
  { n: "01", t: "Scope", d: "Written, priced and approved before a line of code." },
  { n: "02", t: "Build", d: "A live staging link from the first milestone, updated as I go." },
  { n: "03", t: "Review", d: "Written progress updates. No standing calls unless you want them." },
  { n: "04", t: "Ship", d: "Deployed, documented, and 14 days of free bug fixes." },
];

const FAQ = [
  {
    q: "Do I need a 3D model already?",
    a: "No. Send photos and dimensions and I will tell you the cheapest route — a marketplace model, a scan, or a modeller I can brief for you. Modelling is quoted separately.",
  },
  {
    q: "How do payments work?",
    a: "Fixed price, 50% to start and 50% before handover. I invoice through Payoneer or Wise. On Fiverr and Upwork we use the platform's own escrow.",
  },
  {
    q: "What are your hours?",
    a: "I am in Rajshahi, Bangladesh (GMT+6) and work async-first — roughly four hours of daily overlap with US Eastern, and full overlap with Europe.",
  },
  {
    q: "What if the scope changes mid-project?",
    a: "I re-quote the new piece in writing before building it. Nothing gets added silently, and nothing gets billed as a surprise.",
  },
];

const shell = "mx-auto box-border max-w-[1200px] px-[clamp(20px,5vw,64px)]";
const sectionHeading =
  "m-0 font-display text-[clamp(24px,3vw,34px)] font-extrabold tracking-[-0.02em] text-ink";
const eyebrow = "font-mono text-[11px] uppercase tracking-[.2em] text-accent";
const btnSolid =
  "inline-block rounded-full border-[1.5px] border-ink bg-ink px-8 py-[15px] text-[15px] font-semibold text-white [transition:background_.3s_ease,border-color_.3s_ease] hover:border-accent hover:bg-accent hover:text-white";
const btnOutline =
  "inline-block rounded-full border-[1.5px] border-line bg-card px-8 py-[15px] text-[15px] font-semibold text-ink [transition:border-color_.3s_ease] hover:border-ink";

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Md. Raju Ahmed — Three.js & Next.js Developer",
    url: "https://rifatsarkerraju.com/services",
    email: EMAIL,
    areaServed: "Worldwide",
    address: { "@type": "PostalAddress", addressLocality: "Rajshahi", addressCountry: "BD" },
    makesOffer: SERVICES.map((s) => ({
      "@type": "Offer",
      name: s.title,
      priceCurrency: "USD",
      price: s.from.replace("$", ""),
      description: s.blurb,
    })),
  };

  return (
    <>
      <ScrollProgress />

      <header className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between gap-4 border-b border-line bg-[rgba(243,242,250,.8)] px-[clamp(20px,4.5vw,56px)] py-3.5 backdrop-blur-[12px]">
        <Link href="/" className="font-hand text-[22px] leading-none tracking-[.04em] text-ink">
          Raju
        </Link>
        <div className="flex items-center gap-3.5">
          <Link
            href="/work"
            className="inline-block rounded-full border-[1.5px] border-line px-[18px] py-2 text-[13.5px] font-semibold text-ink [transition:border-color_.3s_ease] hover:border-ink"
          >
            <span className="whitespace-nowrap">Work</span>
          </Link>
          <Link
            href="/"
            className="inline-block rounded-full border-[1.5px] border-ink px-[18px] py-2 text-[13.5px] font-semibold text-ink [transition:background_.3s_ease,color_.3s_ease] hover:bg-ink hover:text-white"
          >
            <span className="whitespace-nowrap">← Back home</span>
          </Link>
        </div>
      </header>

      <main className="box-border">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ---------- hero ---------- */}
        <section className={`${shell} pb-[clamp(40px,6vh,64px)] pt-[150px]`}>
          <div className="[animation:fadeUp_.7s_ease_.05s_both]">
            <p className={`m-0 mb-[22px] ${eyebrow}`}>Services &amp; pricing</p>
            <h1 className="m-0 mb-[26px] max-w-[18ch] text-balance font-display text-[clamp(40px,6.4vw,82px)] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink">
              Fixed prices, written scope, and a live link at every milestone.
            </h1>
            <p className="m-0 max-w-[52ch] text-[clamp(16px,1.9vw,20px)] leading-[1.7] text-ink">
              I build real-time 3D product experiences for the web — and the Next.js stores they
              live in. Below is what things actually cost, so you can decide before you message me.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-[18px] gap-y-3.5">
              <a href={`mailto:${EMAIL}`} data-magnetic="1" className={btnSolid}>
                Email me
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className={btnOutline}>
                WhatsApp ↗
              </a>
            </div>
          </div>
        </section>

        {/* ---------- services ---------- */}
        <section className={`${shell} pb-[clamp(40px,6vh,64px)]`}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[22px]">
            {SERVICES.map((s) => (
              <article
                key={s.id}
                data-reveal="1"
                className={`flex flex-col rounded-[26px] p-[clamp(24px,3vw,34px)] shadow-[0_14px_40px_rgba(52,55,92,.08)] ${
                  s.featured ? "bg-lav" : "bg-card"
                }`}
              >
                {s.featured && (
                  <span className="mb-4 self-start whitespace-nowrap rounded-full bg-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.16em] text-paper">
                    Most asked for
                  </span>
                )}
                <p className="m-0 font-mono text-[10px] uppercase tracking-[.16em] text-accent">
                  {s.eyebrow}
                </p>
                <h2 className="m-0 mt-3 text-balance font-display text-[clamp(22px,2.4vw,28px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink">
                  {s.title}
                </h2>
                <p className="m-0 mt-3 text-[14.5px] leading-[1.7]">
                  {s.blurb}
                  {s.blurbMore}
                </p>

                <p className="m-0 mt-6 flex items-baseline gap-2 border-t border-line pt-6">
                  <span className="font-mono text-[clamp(26px,3.2vw,32px)] font-bold tabular-nums tracking-[-0.02em] text-ink">
                    {s.from}
                  </span>
                  <span className="text-[14px]">to start</span>
                </p>
                <p className="m-0 mt-1.5 text-[13px] leading-[1.6]">{s.typical}</p>

                <ul className="m-0 mt-6 flex flex-1 list-none flex-col gap-2.5 p-0">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] leading-[1.65]">
                      <span aria-hidden="true" className="shrink-0 text-accent">
                        ✦
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="m-0 mt-6 font-mono text-[10.5px] uppercase tracking-[.16em] opacity-60">
                  Typical timeline · {s.timeline}
                </p>
              </article>
            ))}
          </div>

          <p data-reveal="1" className="m-0 mt-6 max-w-[72ch] text-[14.5px] leading-[1.7]">
            Bigger or ongoing work is quoted per project, or on a monthly retainer from $600.
            Agencies: I white-label.
          </p>
        </section>

        {/* ---------- process ---------- */}
        <section className={`${shell} py-[clamp(48px,8vh,88px)]`}>
          <h2 data-reveal="1" className={sectionHeading}>
            How the work runs
          </h2>
          <div
            data-reveal="1"
            className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[clamp(24px,3vw,36px)]"
          >
            {PROCESS.map((p) => (
              <div key={p.n} className="border-t-2 border-line pt-5">
                <span className="font-mono text-[11px] tracking-[.18em] text-accent">{p.n}</span>
                <h3 className="m-0 mb-2 mt-2 font-display text-[clamp(17px,2vw,20px)] font-bold tracking-[-0.01em] text-ink">
                  {p.t}
                </h3>
                <p className="m-0 text-[14px] leading-[1.7]">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- faq ---------- */}
        <section className={`${shell} pb-[clamp(48px,8vh,88px)]`}>
          <h2 data-reveal="1" className={sectionHeading}>
            Questions people ask first
          </h2>
          <div data-reveal="1" className="mt-8 max-w-[72ch] border-y border-line">
            {FAQ.map((f, i) => (
              <details key={f.q} className={`group py-5 ${i > 0 ? "border-t border-line" : ""}`}>
                <summary className="cursor-pointer list-none marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent">
                  <span className="flex items-start justify-between gap-6">
                    <h3 className="m-0 text-[15.5px] font-semibold leading-[1.5] text-ink">
                      {f.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[17px] text-accent transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="m-0 mt-3 text-[14.5px] leading-[1.75]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ---------- cta ---------- */}
        <section
          className={`mx-auto box-border max-w-[1340px] px-[clamp(16px,3vw,40px)] pb-[clamp(48px,8vh,88px)]`}
        >
          <div
            data-reveal="1"
            className="relative overflow-hidden rounded-[32px] bg-ink px-[clamp(24px,5vw,72px)] py-[clamp(48px,7vh,80px)]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[-0.22em] right-[-0.06em] select-none whitespace-nowrap font-hand text-[clamp(140px,20vw,280px)] leading-none text-paper/5"
            >
              Raju
            </span>
            <h2 className="relative m-0 max-w-[22ch] text-balance font-display text-[clamp(26px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-paper">
              Send me the product and a photo. I&rsquo;ll tell you what&rsquo;s possible and what it
              costs.
            </h2>
            <p className="relative m-0 mt-4 max-w-[46ch] text-[15.5px] leading-[1.75] text-paper/70">
              No call needed to get a price. I reply within one working day.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center gap-x-[18px] gap-y-3.5">
              <a
                href={`mailto:${EMAIL}`}
                data-magnetic="1"
                className="inline-block rounded-full bg-accent px-8 py-[15px] text-[15px] font-semibold text-white [transition:transform_.3s_ease,filter_.3s_ease] hover:scale-[1.04] hover:brightness-[1.12] hover:text-white"
              >
                {EMAIL}
              </a>
              <Link
                href="/work"
                className="inline-block rounded-full border border-paper/30 px-8 py-[15px] text-[15px] font-semibold text-paper [transition:background_.3s_ease,border-color_.3s_ease] hover:border-paper/60 hover:bg-paper/[.12] hover:text-white"
              >
                See the work first
              </Link>
            </div>
          </div>
        </section>
      </main>

      <RevealFx translate={false} threshold={0.08} />
    </>
  );
}
