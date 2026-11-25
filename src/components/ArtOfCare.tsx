"use client";

import { useRef } from "react";
import { site } from "@/content/site";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { MediaFrame } from "./MediaFrame";
import { ArchLine } from "./ArchLine";

export function ArtOfCare() {
  const root = useRef<HTMLElement>(null);
  const { care } = site;

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        // Fundo transita do espresso (seção anterior) para o creme da marca
        gsap.fromTo(root.current, { backgroundColor: "#3a2a26" }, {
          backgroundColor: "#f1e8de",
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top 85%", end: "top 25%", scrub: true },
        });
        // Leitura palavra por palavra
        gsap.fromTo("[data-word]", { opacity: 0.12 }, {
          opacity: 1,
          stagger: 0.08,
          ease: "none",
          scrollTrigger: { trigger: "[data-words]", start: "top 75%", end: "bottom 45%", scrub: true },
        });
        gsap.from("[data-portrait]", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} aria-labelledby="care-title" className="relative overflow-hidden bg-cream py-28 md:py-44">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-12 md:px-10">
        <div className="relative md:col-span-5">
          <ArchLine className="absolute -left-6 -top-10 w-[70%] text-gold/50" />
          <div data-portrait className="relative overflow-hidden rounded-t-[999px] rounded-b-[20px]">
            <MediaFrame media={care.media} className="aspect-[3/4] w-full" sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="eyebrow text-taupe">Capítulo 05 · The art of care</p>
          <h2 id="care-title" className="mt-6 font-display text-[clamp(2.6rem,6vw,5.4rem)] font-light italic leading-[1] text-espresso">
            {care.title}
          </h2>
          <p data-words className="mt-10 font-display text-[clamp(1.5rem,2.6vw,2.2rem)] font-light leading-[1.35] text-espresso">
            {care.body.split(" ").map((w, i) => (
              <span key={i} data-word>
                {w}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
