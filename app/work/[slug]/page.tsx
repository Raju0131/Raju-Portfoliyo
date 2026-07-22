import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RevealFx from "@/components/RevealFx";
import ScrollProgress from "@/components/ScrollProgress";
import { projects, projectSlugs } from "@/lib/projects";

/* eslint-disable @next/next/no-img-element */

export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = projects[params.slug];
  if (!p) return {};
  return { title: `${p.title} — Raju`, description: p.intro };
}

const metaTile =
  "flex items-baseline justify-between gap-4 bg-card px-7 py-6";
const metaLabel = "font-mono text-[10px] uppercase tracking-[.22em] opacity-55";
const metaValue = "text-right text-[15px] font-semibold text-ink";

function Placeholder({ text }: { text: string }) {
  return (
    <span className="box-border flex h-full w-full items-center justify-center p-5 text-center font-mono text-[11px] uppercase tracking-[.14em] text-muted opacity-60">
      {text}
    </span>
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects[params.slug];
  if (!p) notFound();

  return (
    <>
      <ScrollProgress />

      <header className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between gap-4 border-b border-line bg-[rgba(243,242,250,.8)] px-[clamp(20px,4.5vw,56px)] py-3.5 backdrop-blur-[12px]">
        <Link href="/" className="font-hand text-[22px] leading-none tracking-[.04em] text-ink">
          Raju
        </Link>
        <div className="flex items-center gap-3.5">
          <span className="whitespace-nowrap font-mono text-[11px] tracking-[.16em] opacity-60">
            {p.index} / 04
          </span>
          <Link
            href="/work"
            className="inline-block rounded-full border-[1.5px] border-ink px-[18px] py-2 text-[13.5px] font-semibold text-ink [transition:background_.3s_ease,color_.3s_ease] hover:bg-ink hover:text-white"
          >
            <span className="whitespace-nowrap">← All work</span>
          </Link>
        </div>
      </header>

      <main className="box-border">
        <div className="mx-auto box-border max-w-[1200px] px-[clamp(20px,5vw,64px)] pt-[150px]">
          <div className="[animation:fadeUp_.7s_ease_.05s_both]">
            <div className="mb-[22px] flex items-center gap-3.5 font-mono text-[11px] uppercase tracking-[.2em]">
              <Link href="/work" className="opacity-65 hover:opacity-100">
                Work
              </Link>
              <span className="opacity-40">/</span>
              <span className="text-accent">{p.title}</span>
            </div>
            <h1 className="m-0 mb-[26px] text-balance font-display text-[clamp(48px,9vw,120px)] font-extrabold leading-[.98] tracking-[-0.035em] text-ink">
              {p.title} <span className="text-accent">✦</span>
            </h1>
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
              <p className="m-0 max-w-[52ch] text-[clamp(16px,1.9vw,20px)] leading-[1.7] text-ink">
                {p.intro}
              </p>
              <span className="inline-flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="whitespace-nowrap rounded-full px-[17px] py-2 font-mono text-[11px] tracking-[.1em] text-ink"
                    style={{ background: p.tint }}
                  >
                    {tag}
                  </span>
                ))}
              </span>
            </div>
          </div>
          <div
            className={`relative mt-12 overflow-hidden rounded-[28px] shadow-[0_34px_80px_rgba(52,55,92,.14)] [animation:fadeUp_.8s_ease_.2s_both] ${
              p.imagesNatural ? "" : "aspect-[16/8.5]"
            }`}
            style={{ background: p.tint }}
          >
            {p.heroImg ? (
              <img
                src={p.heroImg}
                alt={`${p.title} screenshot`}
                className={
                  p.imagesNatural
                    ? "block h-auto w-full"
                    : "absolute inset-0 block h-full w-full object-cover object-top"
                }
              />
            ) : (
              <Placeholder text={`${p.title} — screenshot coming soon`} />
            )}
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-[22px] right-[22px] z-[3] inline-flex items-center gap-2.5 rounded-full bg-ink px-[26px] py-[13px] text-[14.5px] font-semibold text-white shadow-[0_14px_34px_rgba(52,55,92,.3)] [transition:background_.3s_ease,transform_.3s_ease] hover:-translate-y-[3px] hover:bg-accent hover:text-white"
              >
                Visit live site ↗
              </a>
            )}
          </div>
          {p.heroCaption && (
            <p className="mt-4 flex max-w-[72ch] items-baseline gap-2.5 text-[14px] leading-[1.65] text-muted [animation:fadeUp_.8s_ease_.3s_both]">
              <span className="text-accent">✦</span>
              <span>{p.heroCaption}</span>
            </p>
          )}
        </div>

        <div data-reveal="1" className="my-16">
          <div className="rotate-[-1deg] scale-[1.02] overflow-hidden bg-ink py-3.5">
            <div className="flex w-max whitespace-nowrap font-display text-[14px] font-semibold uppercase tracking-[.08em] text-paper [animation:marquee_22s_linear_infinite]">
              <span className="pr-4">{p.marquee}</span>
              <span aria-hidden="true" className="pr-4">
                {p.marquee}
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto box-border max-w-[1200px] px-[clamp(20px,5vw,64px)] pb-20">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[clamp(36px,5vw,72px)]">
            <div
              data-reveal="1"
              className="sticky top-[110px] flex flex-col gap-[2px] overflow-hidden rounded-[22px]"
            >
              <div className={metaTile}>
                <span className={metaLabel}>Role</span>
                <span className={metaValue}>{p.role}</span>
              </div>
              <div className={metaTile}>
                <span className={metaLabel}>Stack</span>
                <span className={metaValue}>{p.stack}</span>
              </div>
              <div className={metaTile}>
                <span className={metaLabel}>Year</span>
                <span className={metaValue}>{p.year}</span>
              </div>
              <div className={metaTile}>
                <span className={metaLabel}>Status</span>
                <span className={metaValue}>{p.status}</span>
              </div>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between bg-ink px-7 py-6 transition-colors duration-300 hover:bg-accent"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[.22em] text-paper/60">
                    Live site
                  </span>
                  <span className="text-[15px] font-semibold text-white">Visit ↗</span>
                </a>
              )}
            </div>

            <div className="flex flex-col gap-11">
              <div data-reveal="1">
                <span className="mb-4 flex items-baseline gap-3.5">
                  <span className="font-mono text-[12px] tracking-[.2em] text-accent">01</span>
                  <h2 className="m-0 font-display text-[clamp(24px,3vw,34px)] font-extrabold tracking-[-0.02em] text-ink">
                    The challenge
                  </h2>
                </span>
                <p className="m-0 text-base leading-[1.85]">{p.body1}</p>
              </div>
              <div data-reveal="1">
                <span className="mb-4 flex items-baseline gap-3.5">
                  <span className="font-mono text-[12px] tracking-[.2em] text-accent">02</span>
                  <h2 className="m-0 font-display text-[clamp(24px,3vw,34px)] font-extrabold tracking-[-0.02em] text-ink">
                    What I built
                  </h2>
                </span>
                <p className="m-0 text-base leading-[1.85]">{p.body2}</p>
              </div>
              <div data-reveal="1">
                <span className="mb-2 flex items-baseline gap-3.5">
                  <span className="font-mono text-[12px] tracking-[.2em] text-accent">03</span>
                  <h2 className="m-0 font-display text-[clamp(24px,3vw,34px)] font-extrabold tracking-[-0.02em] text-ink">
                    Highlights
                  </h2>
                </span>
                <div className="flex flex-col">
                  {p.features.map((f) => (
                    <div
                      key={f.t}
                      className="flex items-baseline gap-[18px] border-b border-line py-[17px] transition-transform duration-300 hover:translate-x-2"
                    >
                      <span className="text-[15px] text-accent">✦</span>
                      <span className="flex flex-col gap-1">
                        <span className="text-[15.5px] font-semibold text-ink">{f.t}</span>
                        <span className="text-sm leading-[1.6]">{f.d}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {p.imagesNatural ? (
            <div className="mt-[72px] flex flex-col gap-[clamp(32px,5vw,56px)]">
              {p.img2 && (
                <figure data-reveal="1" className="m-0">
                  <div
                    className="overflow-hidden rounded-[22px]"
                    style={{ background: p.tint }}
                  >
                    <img
                      src={p.img2}
                      alt={`${p.title} screenshot — colour switching`}
                      className="block h-auto w-full"
                    />
                  </div>
                  {p.img2Caption && (
                    <figcaption className="mt-4 flex max-w-[72ch] items-baseline gap-2.5 text-[14px] leading-[1.65] text-muted">
                      <span className="text-accent">✦</span>
                      <span>{p.img2Caption}</span>
                    </figcaption>
                  )}
                </figure>
              )}
              {p.img3 && (
                <figure data-reveal="1" className="m-0">
                  <div
                    className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[28px]"
                    style={{ background: p.tint }}
                  >
                    <span className="absolute left-4 top-4 z-[2] rounded-full bg-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.16em] text-paper">
                      Mobile view
                    </span>
                    <img
                      src={p.img3}
                      alt={`${p.title} screenshot — mobile`}
                      className="block h-auto w-full"
                    />
                  </div>
                  {p.img3Caption && (
                    <figcaption className="mx-auto mt-4 flex max-w-[48ch] items-baseline justify-center gap-2.5 text-center text-[14px] leading-[1.65] text-muted">
                      <span className="text-accent">✦</span>
                      <span>{p.img3Caption}</span>
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          ) : (
            <div
              data-reveal="1"
              className="mt-[72px] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[22px]"
            >
              <div
                className="aspect-[4/3] overflow-hidden rounded-[22px] transition-transform duration-[400ms] hover:-translate-y-1.5"
                style={{ background: p.tint }}
              >
                {p.img2 ? (
                  <img
                    src={p.img2}
                    alt={`${p.title} screenshot 2`}
                    className="block h-full w-full object-cover object-top"
                  />
                ) : (
                  <Placeholder text="Screenshot coming soon" />
                )}
              </div>
              <div
                className="aspect-[4/3] overflow-hidden rounded-[22px] transition-transform duration-[400ms] hover:-translate-y-1.5"
                style={{ background: p.tint }}
              >
                {p.img3 ? (
                  <img
                    src={p.img3}
                    alt={`${p.title} screenshot 3`}
                    className="block h-full w-full object-cover object-top"
                  />
                ) : (
                  <Placeholder text="Screenshot coming soon" />
                )}
              </div>
            </div>
          )}

          <div
            data-reveal="1"
            className="mt-20 flex flex-wrap items-center justify-between gap-4"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-line bg-card px-[26px] py-[13px] text-[14.5px] font-semibold text-ink [transition:border-color_.3s_ease] hover:border-ink"
            >
              ← All projects
            </Link>
            <Link
              href={`/work/${p.next}`}
              className="flex min-w-[280px] flex-1 flex-wrap items-center justify-between gap-4 rounded-[26px] bg-ink px-[clamp(24px,4vw,44px)] py-[clamp(26px,3.5vw,40px)] transition-transform duration-[350ms] hover:-translate-y-1"
            >
              <span className="flex flex-col gap-2">
                <span className="font-mono text-[10.5px] uppercase tracking-[.24em] text-paper/55">
                  Next project
                </span>
                <span className="font-display text-[clamp(26px,3.6vw,44px)] font-extrabold leading-none tracking-[-0.02em] text-paper">
                  {p.nextTitle}
                </span>
              </span>
              <span className="inline-flex h-[54px] w-[54px] items-center justify-center rounded-full bg-accent text-[20px] text-white">
                →
              </span>
            </Link>
          </div>
        </div>
      </main>

      <RevealFx translate={false} threshold={0.08} />
    </>
  );
}
