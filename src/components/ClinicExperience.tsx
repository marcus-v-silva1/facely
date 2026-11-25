"use client";

import { useRef } from "react";
import { site } from "@/content/site";
import { gsap, useGSAP, MOTION_OK, revealIn } from "@/lib/gsap";
import { MediaFrame } from "./MediaFrame";
import { ArchLine } from "./ArchLine";

export function ClinicExperience() {
  const root = useRef<HTMLElement>(null);
  const { experience } = site;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        revealIn(root.current!);
        // O vídeo nasce num contêiner arredondado e se expande com o scroll
        gsap.fromTo(
          "[data-expand]",
          { clipPath: "inset(12% 14% 12% 14% round 200px 200px 24px 24px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 24px 24px 24px 24px)",
            ease: "none",
            scrollTrigger: { trigger: "[data-expand]", start: "top 90%", end: "center 55%", scrub: 0.6 },
          },
        );
        gsap.to("[data-arch]", {
          yPercent: -25,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="experiencia" className="relative overflow-hidden bg-ivory py-24 md:py-40">
      <ArchLine className="pointer-events-none absolute -right-10 top-16 w-40 text-gold/40 md:right-16 md:w-56" data-arch="" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:gap-10 md:px-10">
        <div className="md:col-span-5 md:pt-24">
          <p data-reveal className="eyebrow text-taupe">
            Capítulo 02 · {experience.kicker}
          </p>
          <h2 data-reveal className="mt-6 font-display text-[clamp(2.6rem,6vw,5rem)] font-light leading-[1] text-espresso">
            {experience.title}
          </h2>
          {experience.body.map((p) => (
            <p key={p} data-reveal className="mt-6 max-w-md font-light leading-relaxed text-ink/75">
              {p}
            </p>
          ))}
          <a data-reveal href="#filmes" className="btn btn-ghost mt-10 text-espresso">
            Conheça nosso espaço
          </a>
        </div>
        <div className="md:col-span-7">
          <div data-expand style={{ clipPath: "inset(0% round 24px)" }}>
            <MediaFrame media={experience.media} className="aspect-[4/5] w-full md:aspect-[5/6]" sizes="(min-width: 768px) 58vw, 100vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
