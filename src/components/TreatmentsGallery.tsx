"use client";

import { useRef } from "react";
import { site } from "@/content/site";
import { gsap, ScrollTrigger, useGSAP, ease, MOTION_OK, revealIn } from "@/lib/gsap";
import { track, whatsappUrl } from "@/lib/links";
import { MediaFrame } from "./MediaFrame";

// Proporções alternadas para o ritmo editorial
const shapes = [
  { ratio: "aspect-[4/5]", offset: "" },
  { ratio: "aspect-[1/1]", offset: "md:mt-32" },
  { ratio: "aspect-[3/4]", offset: "md:-mt-16" },
  { ratio: "aspect-[4/5]", offset: "md:mt-16" },
];

export function TreatmentsGallery() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Analytics independe de motion
      gsap.utils.toArray<HTMLElement>("[data-treatment]").forEach((el) =>
        ScrollTrigger.create({ trigger: el, start: "top 70%", once: true, onEnter: () => track("treatment_view", { treatment: el.dataset.treatment! }) }),
      );

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        revealIn(root.current!);
        gsap.utils.toArray<HTMLElement>("[data-mask]").forEach((el) =>
          gsap.from(el, { clipPath: "inset(100% 0% 0% 0%)", duration: 1.5, ease: ease.cine, scrollTrigger: { trigger: el, start: "top 85%", once: true } }),
        );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="procedimentos" className="bg-cream py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-6 md:grid-cols-12">
          <p data-reveal className="eyebrow text-taupe md:col-span-12">
            Capítulo 03 · Procedimentos e cuidados
          </p>
          <h2 data-reveal className="font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-light leading-[1.02] text-espresso md:col-span-7">
            Estética facial e corporal, <em className="text-brand">no seu tempo.</em>
          </h2>
          <p data-reveal className="max-w-sm self-end font-light leading-relaxed text-ink/70 md:col-span-4 md:col-start-9">
            Cada procedimento começa por uma avaliação individual — para indicar só o que faz sentido para você.
          </p>
        </div>

        <ul className="mt-16 grid gap-x-8 gap-y-16 md:mt-24 md:grid-cols-2 md:gap-x-16">
          {site.treatments.map((t, i) => (
            <li key={t.id} data-treatment={t.id} className={`group ${shapes[i % shapes.length].offset}`}>
              <div data-mask className="overflow-hidden rounded-[20px]">
                <div className="transition-transform duration-[1.2s] ease-[var(--ease-soft)] group-hover:scale-[1.03]">
                  <MediaFrame media={t.media} className={`w-full ${shapes[i % shapes.length].ratio}`} sizes="(min-width: 768px) 45vw, 100vw" />
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <span data-reveal className="eyebrow block text-taupe">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 data-reveal className="mt-2 font-display text-3xl text-espresso md:text-4xl">
                    {t.name}
                  </h3>
                  <p data-reveal className="mt-3 max-w-sm font-light leading-relaxed text-ink/70">
                    {t.description}
                  </p>
                </div>
              </div>
              <a
                data-reveal
                href={whatsappUrl(t.name)}
                target="_blank"
                rel="noopener"
                onClick={() => track("booking_click", { location: "treatment", treatment: t.id })}
                className="mt-5 inline-flex items-center gap-3 border-b border-espresso/30 pb-1 text-[0.75rem] uppercase tracking-[0.2em] text-espresso transition-colors hover:border-espresso"
              >
                Solicitar avaliação <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                <span className="sr-only"> de {t.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
