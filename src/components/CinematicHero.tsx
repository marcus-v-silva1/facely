"use client";

import { useRef } from "react";
import { site } from "@/content/site";
import { gsap, useGSAP, ease, MOTION_OK } from "@/lib/gsap";
import { track, whatsappUrl } from "@/lib/links";
import { MediaFrame } from "./MediaFrame";
import { Logo } from "./Logo";

export function CinematicHero() {
  const root = useRef<HTMLElement>(null);
  const { hero } = site;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        // Entrada
        gsap.from("[data-hero-line]", { yPercent: 110, duration: 1.4, ease: ease.cine, stagger: 0.12, delay: 0.2 });
        gsap.from("[data-hero-fade]", { autoAlpha: 0, y: 16, duration: 1.2, ease: ease.soft, stagger: 0.1, delay: 0.8 });

        // Saída por scroll: texto sobe, mídia escala levemente e recolhe em máscara arredondada
        const tl = gsap.timeline({
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.6 },
        });
        tl.to("[data-hero-copy]", { yPercent: -35, autoAlpha: 0, ease: "none" }, 0)
          .to("[data-hero-media]", { scale: 1.08, ease: "none" }, 0)
          .to("[data-hero-mask]", { clipPath: "inset(4% 3% 10% 3% round 28px)", ease: "none" }, 0);
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="inicio" className="relative h-svh min-h-[560px] overflow-hidden bg-ivory">
      <div data-hero-mask className="media-placeholder is-dark grain absolute inset-0 overflow-hidden" style={{ clipPath: "inset(0% 0% 0% 0% round 0px)" }}>
        {/* Vídeos da clínica são verticais: tela cheia no celular, painel alto à direita no desktop */}
        <div data-hero-media className="absolute inset-0 md:left-auto md:w-[42%]">
          {hero.media.src ? (
            <>
              <MediaFrame media={hero.media} priority className="h-full w-full" />
              <div className="absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-espresso to-transparent md:block" />
            </>
          ) : (
            // Fallback visual: luz suave em tons da marca até o vídeo oficial ser entregue
            <div className="media-placeholder is-dark grain absolute inset-0" role="img" aria-label="Fundo provisório — vídeo do hero pendente">
              <div className="light-drift absolute -inset-[20%] bg-[radial-gradient(40%_35%_at_65%_40%,rgb(196_147_95/0.35),transparent_70%)]" />
              <span className="eyebrow absolute right-5 top-24 text-cream/40 md:bottom-8 md:right-10 md:top-auto">Vídeo do hero pendente</span>
            </div>
          )}
          {/* Contraste discreto para legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/35 md:from-ink/50 md:via-ink/10 md:to-ink/20" />
        </div>
      </div>

      <div data-hero-copy className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-28 md:px-10 md:pb-24">
        <div data-hero-fade className="mb-8">
          <Logo variant="full" className="h-24 text-cream md:h-32" />
        </div>
        <p data-hero-fade className="eyebrow mb-6 text-cream/80">
          Estética facial e corporal
        </p>
        <h1 className="max-w-4xl font-display text-[clamp(2.1rem,7vw,6.2rem)] md:max-w-[52vw] md:text-[clamp(2.6rem,5vw,5.2rem)] font-light leading-[0.98] text-ivory">
          {hero.headline.map((l) => (
            <span key={l} className="block overflow-hidden pb-[0.08em]">
              <span data-hero-line className="block">
                {l}
              </span>
            </span>
          ))}
        </h1>
        <p data-hero-fade className="mt-6 max-w-md text-base font-light leading-relaxed text-cream/85 md:text-lg">
          {hero.subheadline}
        </p>
        <div data-hero-fade className="mt-9 flex flex-wrap gap-3">
          <a href={whatsappUrl()} target="_blank" rel="noopener" className="btn btn-light" onClick={() => track("booking_click", { location: "hero" })}>
            Agende sua avaliação
          </a>
          <a href="#experiencia" className="btn btn-ghost text-cream">
            Conheça a Facely
          </a>
        </div>
      </div>
    </section>
  );
}
