"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Media } from "@/content/site";

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

type Props = {
  media: Media;
  className?: string;
  /** Hero: carrega com prioridade. Demais: lazy + pausa fora da tela. */
  priority?: boolean;
  dark?: boolean;
  sizes?: string;
};

/**
 * Exibe vídeo (autoplay mudo, loop, pausa fora da viewport), imagem, ou um placeholder
 * claramente identificado quando a mídia oficial ainda não foi entregue.
 */
export function MediaFrame({ media, className = "", priority, dark, sizes = "100vw" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // fica no poster
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {}); // falha de autoplay: poster continua visível
      else v.pause();
    }, { threshold: 0.15 });
    io.observe(v);
    return () => io.disconnect();
  }, [media.src]);

  if (!media.src) {
    return (
      <div className={`media-placeholder grain relative overflow-hidden ${dark ? "is-dark" : ""} ${className}`} role="img" aria-label={`${media.alt} (mídia em produção)`}>
        <div className="absolute left-4 bottom-4 right-4 flex max-w-xs flex-col gap-1 text-left">
          <span className={`eyebrow ${dark ? "text-cream/70" : "text-espresso/60"}`}>Mídia pendente</span>
          <span className={`text-xs leading-relaxed ${dark ? "text-cream/50" : "text-espresso/50"}`}>{media.brief}</span>
        </div>
      </div>
    );
  }

  if (isVideo(media.src)) {
    return (
      <div className={`relative overflow-hidden bg-espresso ${className}`}>
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          preload={priority ? "auto" : "none"}
          poster={media.poster ?? undefined}
          aria-label={media.alt}
        >
          {media.srcMobile && <source src={media.srcMobile} media="(max-width: 767px)" />}
          <source src={media.src} />
        </video>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      <Image src={media.src} alt={media.alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
