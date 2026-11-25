import { site } from "@/content/site";

/** Link de WhatsApp. Com número confirmado usa mensagem pré-preenchida; senão, o link oficial da clínica. */
export function whatsappUrl(interest?: string) {
  const { whatsappNumber, whatsappFallbackUrl, whatsappMessage } = site.contact;
  if (!whatsappNumber) return whatsappFallbackUrl;
  const text = interest ? `${whatsappMessage} Tenho interesse em: ${interest}.` : whatsappMessage;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

type EventName = "whatsapp_click" | "booking_click" | "treatment_view" | "video_play" | "contact_nav";

/**
 * Envia eventos para o dataLayer (GTM/GA4) se houver um instalado.
 * Nenhum script de analytics é carregado por padrão — ao adicionar um, implemente consentimento (LGPD).
 */
export function track(event: EventName, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer?.push({ event, ...params });
}
