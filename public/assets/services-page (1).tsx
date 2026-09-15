// app/services/page.tsx
// Drop-in services + pricing page for rifatsarkerraju.com
// Next.js App Router + Tailwind. No extra dependencies.
//
// Setup:
//   1. Save as app/services/page.tsx
//   2. Put og-image-rifatsarkerraju.png in /public
//   3. Link "Services" from your header
//   4. Replace CAL_LINK with your Cal.com / Calendly URL
//
// The prices below are the launch prices. Raise them as reviews come in;
// every number lives in the SERVICES array, so it is one edit.

import type { Metadata } from "next";
import Link from "next/link";

const CAL_LINK = "https://cal.com/rifatsarkerraju/15min"; // ← change this
const EMAIL = "iamraju705@gmail.com";
const WHATSAPP = "https://wa.me/8801315152005";

export const metadata: Metadata = {
  title: "Services & Pricing — Three.js and Next.js developer for hire",
  description:
    "Real-time 3D product configurators, animated Next.js landing pages, and full-stack web apps. Fixed prices, written scope, a live link at every milestone.",
  alternates: { canonical: "https://rifatsarkerraju.com/services" },
  openGraph: {
    title: "Three.js & Next.js developer for hire — Raju Ahmed",
    description:
      "Real-time 3D product configurators and the Next.js stores they live in. Fixed prices, from $145.",
    url: "https://rifatsarkerraju.com/services",
    siteName: "Raju Ahmed",
    images: [{ url: "/og-image-rifatsarkerraju.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Three.js & Next.js developer for hire — Raju Ahmed",
    description: "Real-time 3D product configurators. Fixed prices, from $145.",
    images: ["/og-image-rifatsarkerraju.png"],
  },
};

type Service = {
  id: string;
  eyebrow: string;
  title: string;
  blurb: string;
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
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ---------- hero ---------- */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-14 sm:pt-32">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-indigo-400">
          Services &amp; pricing
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl">
          Fixed prices, written scope, and a live link at every milestone.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
          I build real-time 3D product experiences for the web — and the Next.js
          stores they live in. Below is what things actually cost, so you can
          decide before you message me.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={CAL_LINK}
            className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Book a 15-minute call
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Email me
          </a>
          <a
            href={WHATSAPP}
            className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* ---------- services ---------- */}
      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="grid gap-5 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className={[
                "flex flex-col rounded-2xl border p-7",
                s.featured
                  ? "border-indigo-500/60 bg-indigo-500/[0.06]"
                  : "border-neutral-800 bg-neutral-900/40",
              ].join(" ")}
            >
              {s.featured && (
                <span className="mb-4 self-start rounded-full bg-indigo-500 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                  Most asked for
                </span>
              )}
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-indigo-400">
                {s.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-snug tracking-tight text-balance">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{s.blurb}</p>

              <div className="mt-6 flex items-baseline gap-2 border-t border-neutral-800 pt-6">
                <span className="font-mono text-3xl font-semibold tabular-nums">{s.from}</span>
                <span className="text-sm text-neutral-500">to start</span>
              </div>
              <p className="mt-1 text-xs text-neutral-500">{s.typical}</p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {s.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-300">
                    <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                Typical timeline · {s.timeline}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-neutral-500">
          Bigger or ongoing work is quoted per project, or on a monthly retainer
          from $600. Agencies: I white-label.
        </p>
      </section>

      {/* ---------- process ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How the work runs</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p) => (
            <div key={p.n} className="border-t-2 border-indigo-500/70 pt-5">
              <span className="font-mono text-[11px] tracking-[0.16em] text-neutral-500">{p.n}</span>
              <h3 className="mt-2 text-lg font-bold tracking-tight">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- faq ---------- */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Questions people ask first</h2>
        <div className="mt-8 divide-y divide-neutral-800 border-y border-neutral-800">
          {FAQ.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="cursor-pointer list-none text-base font-semibold marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400">
                <span className="flex items-start justify-between gap-6">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-indigo-400 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ---------- cta ---------- */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-9 sm:p-12">
          <h2 className="max-w-2xl text-2xl font-bold leading-snug tracking-tight text-balance sm:text-4xl">
            Send me the product and a photo. I&rsquo;ll tell you what&rsquo;s possible and what it costs.
          </h2>
          <p className="mt-4 max-w-lg text-neutral-400">
            No call needed to get a price. I reply within one working day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              {EMAIL}
            </a>
            <Link
              href="/#work"
              className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500"
            >
              See the work first
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
