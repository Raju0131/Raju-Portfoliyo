"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal for every [data-reveal] element on the page, exactly like the
 * reference: hidden (opacity 0, optionally translateY(26px)) until it enters
 * the viewport, then eased in over .8s. Reveal targets must not carry their
 * own transforms — wrap tilted elements (marquees, signature) instead.
 */
export default function RevealFx({
  translate = true,
  threshold = 0.1,
}: {
  translate?: boolean;
  threshold?: number;
}) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    els.forEach((el) => {
      el.style.opacity = "0";
      if (translate) el.style.transform = "translateY(26px)";
      el.style.transition = translate
        ? "opacity .8s cubic-bezier(.25,.1,.25,1), transform .8s cubic-bezier(.25,.1,.25,1)"
        : "opacity .8s cubic-bezier(.25,.1,.25,1)";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const el = en.target as HTMLElement;
            el.style.opacity = "1";
            if (translate) el.style.transform = "translateY(0)";
            io.unobserve(el);
          }
        });
      },
      { threshold }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [translate, threshold]);
  return null;
}
