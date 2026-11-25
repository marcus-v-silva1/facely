"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Motion tokens */
export const ease = { soft: "power3.out", cine: "expo.out", inOut: "power2.inOut" };
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

/** Revela em sequência os elementos `[data-reveal]` dentro do escopo, ao entrarem na tela. */
export function revealIn(scope: Element) {
  const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", scope);
  ScrollTrigger.batch(items, {
    start: "top 88%",
    once: true,
    onEnter: (batch) => gsap.from(batch, { autoAlpha: 0, y: 28, duration: 1.1, ease: ease.soft, stagger: 0.1 }),
  });
}

export { gsap, ScrollTrigger, useGSAP };
