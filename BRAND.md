# Facely — brand audit e pendências

Auditoria feita em 25/11/2026 a partir de fontes públicas oficiais:
- Instagram [@facely.ea](https://www.instagram.com/facely.ea/) (bio, destaques, grade visível sem login)
- Link-in-bio [clinicafacely.keepo.bio](https://clinicafacely.keepo.bio)

Nenhuma mídia foi baixada do Instagram (sem scraping; Reels públicos não implicam licença).

## O que foi observado

| Item | Observação | Uso no site |
|---|---|---|
| Nome | "Facely \| Estética Avançada" / "Facely Estética Avançada" | `site.name` |
| Assinatura | "Você mais linda em um só lugar." | rodapé |
| Posicionamento | "Estética Facial e Corporal." (keepo) | hero eyebrow |
| Logo | Monograma em traço fino; "FACELY / ESTÉTICA AVANÇADA" em serifa caixa-alta | SVGs em `public/brand/` |
| Cores | creme/nude (fundo do monograma), taupe, dourado metálico (letreiro), espresso + caramelo (keepo) | tokens em `src/app/globals.css` (aproximados de capturas) |
| Tipografia | Serifa de alto contraste e leve nos posts ("Facely", títulos); sans fina para rótulos; manuscrita pontual | Cormorant Garamond + Jost (aproximação) |
| Grafismo | Arte de parede em traço fino (arcos/linha), tons quentes, luz natural | `ArchLine` |
| Tom de voz | Próximo, feminino, leve ("Coisas que achamos chique", "POV") | copy editorial |
| Serviços | Perfiloplastia, Botox, Preenchimento labial (catálogo keepo); Up Glúteo (destaque IG) | `site.treatments` |
| Profissionais | "Por @dra.lynaguiomarino e @drayasmimsousa_" | nomes + @, sem credenciais |
| Agendamento | Link oficial `wa.me/message/AADEZFBDHSFIE1` | todos os CTAs |

## Entregue em 25/11/2026

- **Logo vetorizada** em `public/brand/`: `monogram.svg` (redesenhado geometricamente a partir do arquivo enviado — 2 hastes, arco elíptico e arco circular) e `logo-facely.svg` (monograma + "FACELY / ESTÉTICA AVANÇADA" em contornos). Cor `#6f4e32` amostrada da logo.
  O wordmark usa **Cormorant Garamond** como aproximação da fonte original — pedir ao designer os arquivos vetoriais originais e substituir.
- **Contato**: WhatsApp +55 91 8582-6046 (perfil comercial "Clinica Facely"), endereço Passagem Eunice Weaver, 9 — Sacramenta, Belém/PA, atendimento com hora marcada.
- **Mídias** em `public/media/`, recortadas e comprimidas a partir dos Reels oficiais (originais em `media-raw/`, fora do git):

| Arquivo | Reel | Uso |
|---|---|---|
| hero | DdXheGpTMdc 3.5–11.5 s (limpeza de pele) | Hero (loop mudo) |
| experiencia | DekxvD6vpqU 9–14.5 s | Capítulo 02 |
| perfiloplastia / labios / botox / up-gluteo | DbEqb1vBQGt / Deh37yeMHS2 / DZDGEaBhkTa / DaYHy-yhUF6 | Cards de procedimentos |
| cuidado | Dd2bu27zBMd 14–19 s | Capítulo 05 |
| film-experiencia / film-cuidado / film-profissionais / film-depoimento | Dd2bu27zBMd / DdXheGpTMdc / DeUWx_RT9zS ("História Facely") / Dce0la_hev3 | Galeria de filmes (com áudio, ao clicar) |
| dra-lyna.jpg | capa do Reel DY0Qj-yyU7n (creditado a "Dra. Lyna Guiomarino") | Retrato |

## Pendente de confirmação com a clínica

1. **Autorização de uso no site** dos Reels — especialmente pacientes identificáveis (perfiloplastia, lábios, depoimento da Sabrina, limpeza de pele) e o antes/depois implícito. Exigência ética/publicitária da categoria profissional.
2. **Arquivos vetoriais originais** da logo e códigos de cor/fontes do manual.
3. **Credenciais da Dra. Lyna** (formação/registro) → `credentials`. Dra. Yasmim Sousa: Biomédica, CRBM-4 8111 (bio do Instagram); retrato de frame do Reel DfzqczABkXq do perfil dela.
4. **Descrição do Up Glúteo** (texto provisório) e lista completa de procedimentos (o WhatsApp cita "Harmonização Facial").
5. **Vídeos originais em alta** (os Reels vêm em 720p vertical, com legendas embutidas em alguns trechos).
6. **Domínio** → `NEXT_PUBLIC_SITE_URL`; **imagem Open Graph** 1200×630 → `src/app/opengraph-image.jpg`.

"Beleza é se sentir bem em sua própria pele" e o manifesto do capítulo 05 são propostas editoriais, não textos oficiais.
