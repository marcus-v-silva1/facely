"use client";

import { useRef, useState } from "react";
import { site } from "@/content/site";
import { gsap, useGSAP, MOTION_OK, revealIn } from "@/lib/gsap";
import { track, whatsappUrl } from "@/lib/links";

export function BookingCTA() {
  const root = useRef<HTMLElement>(null);
  const [interest, setInterest] = useState<string>("");
  const { booking, contact } = site;
  // Interesse só entra na mensagem quando há número confirmado (o link oficial não aceita texto)
  const canPrefill = Boolean(contact.whatsappNumber);

  useGSAP(() => {
    gsap.matchMedia().add(MOTION_OK, () => revealIn(root.current!));
  }, { scope: root });

  return (
    <section ref={root} id="agendar" className="relative overflow-hidden bg-espresso py-28 text-cream md:py-40">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-10">
        <p data-reveal className="eyebrow text-caramel">
          Capítulo 07 · Agendamento
        </p>
        <h2 data-reveal className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.6rem,6.5vw,5.6rem)] font-light leading-[1]">
          {booking.title}
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-md font-light leading-relaxed text-cream/75">
          {booking.body}
        </p>

        {canPrefill && (
          <fieldset data-reveal className="mx-auto mt-12 max-w-2xl">
            <legend className="eyebrow mb-5 w-full text-cream/60">Tenho interesse em (opcional)</legend>
            <div className="flex flex-wrap justify-center gap-2">
              {site.treatments.map((t) => {
                const on = interest === t.name;
                return (
                  <button
                    key={t.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setInterest(on ? "" : t.name)}
                    className={`min-h-11 rounded-full border px-5 text-sm transition-colors duration-300 ${
                      on ? "border-cream bg-cream text-espresso" : "border-cream/30 text-cream/85 hover:border-cream/70"
                    }`}
                  >
                    {t.name}
                  </button>
                );
              })}
            </div>
          </fieldset>
        )}

        <div data-reveal className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappUrl(interest || undefined)}
            target="_blank"
            rel="noopener"
            onClick={() => track("whatsapp_click", { location: "booking", interest })}
            className="btn btn-light w-full sm:w-auto"
          >
            Agendar pelo WhatsApp
          </a>
          <a href={contact.instagramDm} target="_blank" rel="noopener" className="btn btn-ghost w-full text-cream sm:w-auto">
            Falar com a Facely
          </a>
        </div>

        {(contact.address || contact.hours.length > 0) && (
          <div data-reveal className="mx-auto mt-20 grid max-w-2xl gap-10 border-t border-cream/15 pt-10 text-left sm:grid-cols-2">
            {contact.address && (
              <div>
                <p className="eyebrow text-caramel">Endereço</p>
                <address className="mt-3 not-italic font-light leading-relaxed text-cream/80">
                  {contact.address.street}
                  <br />
                  {contact.address.city} · {contact.address.state}
                </address>
                {contact.address.mapsUrl && (
                  <a href={contact.address.mapsUrl} target="_blank" rel="noopener" className="mt-3 inline-block text-sm underline underline-offset-4">
                    Ver no mapa
                  </a>
                )}
              </div>
            )}
            {contact.hours.length > 0 && (
              <div>
                <p className="eyebrow text-caramel">Horários</p>
                <ul className="mt-3 font-light leading-relaxed text-cream/80">
                  {contact.hours.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
