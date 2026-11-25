"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { track, whatsappUrl } from "@/lib/links";

const nav = [
  { href: "#experiencia", label: "Experiência" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#filmes", label: "Filmes" },
  { href: "#profissionais", label: "Profissionais" },
  { href: "#agendar", label: "Agendar" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const light = !solid && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 ${
        light ? "bg-transparent" : "bg-ivory/90 shadow-[0_1px_0_rgb(58_42_38/0.08)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#inicio" aria-label="Facely — início">
          {/* Sobre o hero a logo completa já aparece; o monograma só entra após o scroll */}
          <Logo className={`h-11 text-brand transition-opacity duration-500 ${light ? "opacity-0" : "opacity-100"}`} />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className={`flex gap-8 text-[0.72rem] uppercase tracking-[0.22em] ${light ? "text-cream" : "text-espresso"}`}>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="opacity-80 transition-opacity hover:opacity-100" onClick={() => n.href === "#agendar" && track("contact_nav")}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener"
          onClick={() => track("whatsapp_click", { location: "header" })}
          className={`btn hidden md:inline-flex !min-h-10 ${light ? "btn-ghost text-cream" : "btn-solid"}`}
        >
          Agendar
        </a>

        <button
          type="button"
          className={`md:hidden -mr-2 p-2 ${light ? "text-cream" : "text-espresso"}`}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block h-px w-6 bg-current transition-transform duration-300" style={{ transform: open ? "translateY(3px) rotate(45deg)" : "translateY(-3px)" }} />
          <span className="block h-px w-6 bg-current transition-transform duration-300" style={{ transform: open ? "translateY(2px) rotate(-45deg)" : "translateY(3px)" }} />
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu" className="md:hidden border-t border-espresso/10 bg-ivory px-5 pb-8 pt-4">
          <ul className="flex flex-col">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block py-3 font-display text-3xl text-espresso">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
