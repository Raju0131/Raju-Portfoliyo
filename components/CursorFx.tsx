"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor (accent dot + trailing ring) and magnetic buttons
 * ([data-magnetic]), pointer-fine devices only — logic copied from the
 * design reference.
 */
export default function CursorFx() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    let mx = innerWidth / 2,
      my = innerHeight / 2,
      dx = mx,
      dy = my,
      rx = mx,
      ry = my,
      seen = false,
      over = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!seen) {
        seen = true;
        if (dot) dot.style.opacity = "1";
        if (ring) ring.style.opacity = "0.6";
      }
      const t = (e.target as Element | null)?.closest?.("a,button");
      if (!!t !== over) {
        over = !!t;
        if (ring) {
          ring.style.width = over ? "56px" : "36px";
          ring.style.height = over ? "56px" : "36px";
          ring.style.margin = over ? "-28px 0 0 -28px" : "-18px 0 0 -18px";
        }
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf = requestAnimationFrame(function loop() {
      dx += (mx - dx) * 0.4;
      dy += (my - dy) * 0.4;
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (dot) dot.style.transform = `translate(${dx}px,${dy}px)`;
      if (ring) ring.style.transform = `translate(${rx}px,${ry}px)`;
      raf = requestAnimationFrame(loop);
    });

    const mags: Array<[HTMLElement, (e: MouseEvent) => void, () => void]> = [];
    document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        el.style.transition = "transform .2s ease-out";
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.16}px, ${
          (e.clientY - r.top - r.height / 2) * 0.24
        }px)`;
      };
      const leave = () => {
        el.style.transition = "transform .45s cubic-bezier(.25,.1,.25,1)";
        el.style.transform = "translate(0,0)";
      };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      mags.push([el, move, leave]);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      mags.forEach(([el, move, leave]) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border-[1.5px] border-accent opacity-0 [margin:-18px_0_0_-18px] [transition:width_.25s_ease,height_.25s_ease,margin_.25s_ease,opacity_.3s_ease]"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-[6px] w-[6px] rounded-full bg-accent opacity-0 [margin:-3px_0_0_-3px]"
      />
    </>
  );
}
