"use client";

import { useRef } from "react";
import { site } from "@/content/site";
import { gsap, useGSAP, MOTION_OK, revealIn } from "@/lib/gsap";
import { MediaFrame } from "./MediaFrame";

export function Professionals() {
  const root = useRef<HTMLElement>(null);
  const { professionals, testimonials } = site;

  useGSAP(() => {
    gsap.matchMedia().add(MOTION_OK, () => revealIn(root.current!));
  }, { scope: root });

  return (
    <section ref={root} id="profissionais" className="bg-ivory py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p data-reveal className="eyebrow text-taupe">
          Capítulo 06 · Confiança
        </p>
        <h2 data-reveal className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-light leading-[1.02] text-espresso">
          Quem cuida de você.
        </h2>

        <ul className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          {professionals.map((p, i) => (
            <li key={p.handle} data-reveal className={i % 2 ? "md:mt-24" : ""}>
              <div className="overflow-hidden rounded-[20px]">
                <MediaFrame media={p.portrait} className="aspect-[4/5] w-full" sizes="(min-width: 768px) 45vw, 100vw" />
              </div>
              <h3 className="mt-6 font-display text-3xl text-espresso md:text-4xl">{p.name}</h3>
              <p className="eyebrow mt-2 text-taupe">{p.role}</p>
              {p.credentials.length > 0 && (
                <ul className="mt-4 space-y-1 font-light text-ink/75">
                  {p.credentials.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              )}
              <a
                href={`https://www.instagram.com/${p.handle}/`}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-block border-b border-espresso/25 pb-0.5 text-sm text-espresso/80 transition-colors hover:border-espresso hover:text-espresso"
              >
                @{p.handle}
              </a>
            </li>
          ))}
        </ul>

        {testimonials.length > 0 && (
          <ul className="mt-28 grid gap-10 md:grid-cols-2">
            {testimonials.map((t) => (
              <li key={t.author} data-reveal>
                <blockquote className="font-display text-2xl font-light italic leading-snug text-espresso">“{t.quote}”</blockquote>
                <p className="eyebrow mt-4 text-taupe">{t.author}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
