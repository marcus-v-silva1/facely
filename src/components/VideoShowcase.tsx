"use client";

import { useRef, useState } from "react";
import { site, type Film } from "@/content/site";
import { useGSAP, gsap, MOTION_OK, revealIn } from "@/lib/gsap";
import { track } from "@/lib/links";
import { MediaFrame } from "./MediaFrame";

export function VideoShowcase() {
  const root = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Film | null>(null);

  useGSAP(() => {
    gsap.matchMedia().add(MOTION_OK, () => revealIn(root.current!));
  }, { scope: root });

  const open = (f: Film) => {
    setActive(f);
    dialog.current?.showModal();
    track("video_play", { video: f.id });
  };

  return (
    <section ref={root} id="filmes" className="bg-espresso py-24 text-cream md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p data-reveal className="eyebrow text-caramel">
          Capítulo 04 · Beauty in motion
        </p>
        <h2 data-reveal className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-light leading-[1.02]">
          A Facely em movimento.
        </h2>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.films.map((f) => {
            const ready = Boolean(f.media.src);
            return (
              <li key={f.id} data-reveal>
                <button
                  type="button"
                  disabled={!ready}
                  onClick={() => open(f)}
                  className="group relative block w-full text-left disabled:cursor-default"
                  aria-label={ready ? `Assistir: ${f.title}` : `${f.title} — vídeo em produção`}
                >
                  <div className="overflow-hidden rounded-[18px]">
                    <div className="transition-transform duration-[1.2s] ease-[var(--ease-soft)] group-enabled:group-hover:scale-[1.04]">
                      <MediaFrame media={{ ...f.media, src: f.media.poster ?? null }} dark className="aspect-[3/4] w-full" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                    </div>
                  </div>
                  {ready && (
                    <span className="absolute right-4 top-4 grid size-12 place-items-center rounded-full bg-ivory/90 text-espresso transition-transform duration-500 group-hover:scale-110">
                      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                        <path d="M3 1.5v11l9-5.5z" fill="currentColor" />
                      </svg>
                    </span>
                  )}
                  <span className="mt-5 flex items-baseline justify-between gap-4">
                    <span>
                      <span className="eyebrow block text-caramel">Vídeo {f.kicker}</span>
                      <span className="mt-2 block font-display text-2xl">{f.title}</span>
                    </span>
                    <span className="eyebrow text-cream/50">{ready ? f.duration : "Em produção"}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <dialog
        ref={dialog}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
        aria-label={active?.title}
        className="m-auto max-w-[92vw] max-h-[92svh] overflow-visible bg-transparent p-0 backdrop:transition-opacity open:animate-[fadein_.5s_ease]"
      >
        {active?.media.src && (
          <div className="relative">
            <video
              key={active.id}
              src={active.media.src}
              poster={active.media.poster ?? undefined}
              controls
              autoPlay
              playsInline
              className="block h-[85svh] w-auto max-w-[92vw] rounded-[14px] bg-black object-contain"
            />
            <form method="dialog" className="absolute -top-12 right-0">
              <button className="eyebrow text-cream/80 hover:text-cream" aria-label="Fechar vídeo">
                Fechar ✕
              </button>
            </form>
          </div>
        )}
      </dialog>
    </section>
  );
}
