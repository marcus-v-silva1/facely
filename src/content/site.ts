/**
 * Conteúdo editável do site. Troque textos, mídias, serviços e links aqui —
 * nenhum componente precisa ser alterado.
 *
 * Regra: só publique o que a Facely confirmou. Campos `null`/vazios
 * fazem o bloco correspondente sumir (ou exibir um placeholder identificado,
 * no caso de mídia). Veja BRAND.md para o que ainda está pendente.
 */

export type Media = {
  /** Caminho em /public (ex.: "/media/hero.mp4"). null = placeholder identificado. */
  src: string | null;
  /** Versão vertical opcional para telas estreitas. */
  srcMobile?: string | null;
  poster?: string | null;
  /** O que deve ser filmado/fotografado — aparece no placeholder. */
  brief: string;
  alt: string;
};

export type Treatment = {
  id: string;
  name: string;
  description: string;
  media: Media;
  /** Fonte da informação, para auditoria. */
  source: string;
};

export type Film = {
  id: string;
  kicker: string;
  title: string;
  /** Ex.: "1:24". Exibido apenas se houver vídeo. */
  duration: string | null;
  media: Media;
};

export type Professional = {
  name: string;
  handle: string;
  role: string;
  /** Preencher só com dados verificados: formação, registro, especialidades. */
  credentials: string[];
  portrait: Media;
};

export type Testimonial = { quote: string; author: string };

export const site = {
  name: "Facely Estética Avançada",
  shortName: "Facely",
  tagline: "Você mais linda em um só lugar.",
  description:
    "Facely Estética Avançada — estética facial e corporal com cuidado individualizado. Agende sua avaliação.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  contact: {
    /** Somente dígitos com DDI, ex.: "5511999999999". Habilita mensagem pré-preenchida. */
    whatsappNumber: "559185826046", // perfil comercial WhatsApp "Clinica Facely"
    /** Link oficial "Agendar consulta" (clinicafacely.keepo.bio). Não aceita texto pré-preenchido. */
    whatsappFallbackUrl: "https://wa.me/message/AADEZFBDHSFIE1",
    whatsappMessage:
      "Olá! Conheci a Facely pelo site e gostaria de informações para agendar uma avaliação.",
    instagram: "https://www.instagram.com/facely.ea/",
    instagramDm: "https://ig.me/m/facely.ea",
    /** Preencher após confirmação — blocos ficam ocultos enquanto vazios. */
    address: {
      street: "Passagem Eunice Weaver, 9 — Bacia do Una, Sacramenta",
      city: "Belém",
      state: "PA",
      zip: "66083-290",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Passagem+Eunice+Weaver+9+Sacramenta+Bel%C3%A9m+PA+66083-290",
    } as null | { street: string; city: string; state: string; zip?: string; mapsUrl?: string },
    hours: ["Atendimento com hora marcada"] as string[],
  },

  hero: {
    /** Uma string por linha (animadas em sequência). */
    headline: ["Beleza é se sentir bem", "em sua própria pele."],
    subheadline: "Uma experiência de cuidado pensada para valorizar sua beleza e seu bem-estar.",
    media: {
      src: "/media/hero.mp4",
      srcMobile: null,
      poster: "/media/hero.jpg",
      brief: "Vídeo do ambiente: luz suave, detalhes da recepção, preparo do atendimento (8–12 s, loop).",
      alt: "Ambiente da clínica Facely",
    } satisfies Media,
  },

  experience: {
    kicker: "A experiência Facely",
    title: "Cada detalhe importa.",
    body: [
      "Da recepção ao pós-atendimento, cada etapa é pensada para que você se sinta acolhida e segura.",
      "Estética facial e corporal conduzida com escuta, naturalidade e atenção ao que é único em você.",
    ],
    media: {
      src: "/media/experiencia.mp4",
      poster: "/media/experiencia.jpg",
      brief: "Tour real pela clínica: recepção, sala de atendimento, equipamentos.",
      alt: "Estrutura da clínica Facely",
    } satisfies Media,
  },

  // Mídias: Reels oficiais @facely.ea (nov/2026), recortados sem áudio. Fonte dos serviços: clinicafacely.keepo.bio (catálogo) e destaques do Instagram @facely.ea, nov/2026.
  treatments: [
    {
      id: "perfiloplastia",
      name: "Perfiloplastia",
      description: "Transforme o seu perfil com alguns mls de ácido hialurônico.",
      media: { src: "/media/perfiloplastia.mp4", poster: "/media/perfiloplastia.jpg", brief: "Detalhe do perfil / atendimento (sem antes-e-depois sem consentimento).", alt: "Perfiloplastia" },
      source: "keepo.bio + destaque Instagram",
    },
    {
      id: "botox",
      name: "Botox",
      description: "Olhar mais descansado e sem linhas de expressão.",
      media: { src: "/media/botox.mp4", poster: "/media/botox.jpg", brief: "Detalhe do olhar, luz natural.", alt: "Botox" },
      source: "keepo.bio + destaque Instagram",
    },
    {
      id: "preenchimento-labial",
      name: "Preenchimento labial",
      description: "Lábios mais volumosos, definidos e hidratados.",
      media: { src: "/media/labios.mp4", poster: "/media/labios.jpg", brief: "Close delicado dos lábios.", alt: "Preenchimento labial" },
      source: "keepo.bio + destaque Instagram",
    },
    {
      id: "up-gluteo",
      name: "Up Glúteo",
      // Descrição a validar com a clínica — serviço consta apenas como destaque no Instagram.
      description: "Cuidado corporal para valorizar o contorno dos glúteos.",
      media: { src: "/media/up-gluteo.mp4", poster: "/media/up-gluteo.jpg", brief: "Ambiente / preparo do procedimento corporal.", alt: "Up Glúteo" },
      source: "destaque Instagram",
    },
  ] satisfies Treatment[],

  films: [
    {
      id: "experiencia",
      kicker: "01",
      title: "A experiência",
      duration: "1:08",
      media: { src: "/media/film-experiencia.mp4", poster: "/media/film-experiencia.jpg", brief: "Atmosfera e estrutura da clínica.", alt: "A experiência Facely" },
    },
    {
      id: "cuidado",
      kicker: "02",
      title: "O cuidado",
      duration: "0:31",
      media: { src: "/media/film-cuidado.mp4", poster: "/media/film-cuidado.jpg", brief: "Detalhes dos atendimentos e da rotina.", alt: "O cuidado" },
    },
    {
      id: "profissionais",
      kicker: "03",
      title: "As profissionais",
      duration: "2:53",
      media: { src: "/media/film-profissionais.mp4", poster: "/media/film-profissionais.jpg", brief: "Apresentação da equipe e da abordagem.", alt: "As profissionais" },
    },
    {
      id: "depoimentos",
      kicker: "04",
      title: "A Facely por quem viveu",
      duration: "2:35",
      media: { src: "/media/film-depoimento.mp4", poster: "/media/film-depoimento.jpg", brief: "Depoimentos reais, com autorização assinada.", alt: "Depoimentos" },
    },
  ] satisfies Film[],

  care: {
    title: "Um momento dedicado a você.",
    // Copy editorial proposta — substituir pelo manifesto oficial quando houver.
    body: "Aqui, o tempo desacelera. Cada cuidado começa por ouvir você — e termina quando você se reconhece no espelho, mais leve e mais você.",
    media: { src: "/media/cuidado.mp4", poster: "/media/cuidado.jpg", brief: "Retrato expressivo, luz lateral suave.", alt: "Momento de cuidado" } satisfies Media,
  },

  // Fonte: bio do Instagram ("Por @dra.lynaguiomarino e @drayasmimsousa_").
  // Nomes confirmados (crédito dos Reels / perfil @drayasmimsousa_). Credenciais da Dra. Lyna: confirmar.
  professionals: [
    {
      name: "Dra. Lyna Guiomarino",
      handle: "dra.lynaguiomarino",
      role: "À frente da Facely",
      credentials: [],
      portrait: { src: "/media/dra-lyna.jpg", brief: "Retrato profissional.", alt: "Dra. Lyna Guiomarino" },
    },
    {
      name: "Dra. Yasmim Sousa",
      handle: "drayasmimsousa_",
      role: "À frente da Facely",
      // Fonte: bio do Instagram @drayasmimsousa_ (nov/2026)
      credentials: ["Biomédica · CRBM-4 8111", "Harmonização facial"],
      portrait: { src: "/media/dra-yasmim.jpg", brief: "Retrato profissional.", alt: "Dra. Yasmim Sousa" },
    },
  ] satisfies Professional[],

  /** Apenas depoimentos reais com autorização documentada. Vazio = seção oculta. */
  testimonials: [] as Testimonial[],

  booking: {
    title: "Seu momento de cuidado começa aqui.",
    body: "Fale direto com a nossa equipe e agende sua avaliação.",
  },
};
