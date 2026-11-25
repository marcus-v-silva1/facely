# Facely Estética Avançada — site

Next.js 16 (App Router) · TypeScript · Tailwind 4 · GSAP + ScrollTrigger.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Editar conteúdo

Tudo fica em [`src/content/site.ts`](src/content/site.ts): textos, serviços, profissionais, vídeos, contato.
Campos vazios escondem o bloco (endereço, horários, depoimentos, credenciais) ou mostram um placeholder
identificado ("Mídia pendente") no caso de mídia. Veja [BRAND.md](BRAND.md) para a lista do que falta.

### Mídia

Coloque arquivos em `public/media/` e aponte `src` para eles (ex.: `"/media/hero.mp4"`).

- Vídeo: MP4 H.264, sem áudio para os loops, 8–15 s, ≤ 4 MB (hero 1920×1080; `srcMobile` vertical 1080×1920 opcional). Sempre com `poster` (JPG/WebP).
- Vídeos tocam mudos, em loop, só quando visíveis; com `prefers-reduced-motion` ficam no poster.
- Filmes (seção 04): `poster` = capa; `src` = vídeo aberto no lightbox com controles.

## Analytics

`track()` em `src/lib/links.ts` envia `whatsapp_click`, `booking_click`, `treatment_view`, `video_play` e
`contact_nav` para `window.dataLayer`, se existir. Nenhum script de terceiros é carregado — ao instalar
GTM/GA4, adicione banner de consentimento (LGPD) e política de privacidade.
