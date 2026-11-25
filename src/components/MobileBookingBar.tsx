"use client";

import { track, whatsappUrl } from "@/lib/links";

/** CTA fixo no mobile — visitantes chegam do Instagram querendo agendar. */
export function MobileBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener"
        onClick={() => track("whatsapp_click", { location: "mobile_bar" })}
        className="btn btn-solid w-full shadow-[0_10px_30px_rgb(42_31_27/0.35)]"
      >
        Agendar pelo WhatsApp
      </a>
    </div>
  );
}
