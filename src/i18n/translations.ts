export type Lang = "en" | "pt";

// Flip to re-enable the PT version and its navbar toggle.
export const PT_ENABLED: boolean = false;

interface ProjectCopy {
  title: string;
  description: string;
  liveLabel: string;
}

interface WorkItem {
  title: string;
  company: string;
  companyLink?: string;
  period: string;
  description: string[];
}

interface EduItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Translations {
  docTitle: string;
  nav: {
    projects: string;
    about: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    english: string;
    portuguese: string;
  };
  hero: {
    kicker: string;
    titleBefore: string;
    titleMark: string;
    titleAfter: string;
    subtitle: string;
    seeWork: string;
    getInTouch: string;
    portraitAlt: string;
  };
  projects: {
    heading: string;
    githubLabel: string;
    items: Record<string, ProjectCopy>;
    screenLabels: {
      upload: string;
      dashboard: string;
      share: string;
    };
    neblina: {
      heading: string;
      body: string;
      link: string;
      imageAlt: string;
    };
  };
  tech: {
    heading: string;
    groups: {
      development: { title: string; list: string };
      analytics: { title: string; list: string };
      design: { title: string; list: string };
      tools: { title: string; list: string };
    };
    whatTitle: string;
    whatBody: string;
    howTitle: string;
    howBody: string;
  };
  experience: {
    heading: string;
    workTitle: string;
    educationTitle: string;
    work: WorkItem[];
    education: EduItem[];
  };
  contact: {
    heading: string;
    subtitle: string;
    orDirect: string;
    remote: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    sent: string;
    success: string;
    error: string;
  };
  footer: {
    backToTop: string;
  };
}

const en: Translations = {
  docTitle: "Gabriela Barreira | Frontend Engineer for Marketing and Growth Teams",
  nav: {
    projects: "Work",
    about: "About",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    english: "English",
    portuguese: "Portuguese",
  },
  hero: {
    kicker: "Frontend Engineer · Marketing and Growth · Remote",
    titleBefore: "I build the systems",
    titleMark: "marketing teams",
    titleAfter: "run on.",
    subtitle:
      "Eight years of it, most recently on a site with 100,000+ visitors a month. I also set up the analytics that shows whether any of it worked.",
    seeWork: "See my work",
    getInTouch: "Get in touch",
    portraitAlt: "Gabriela Barreira",
  },
  projects: {
    heading: "Selected Work",
    githubLabel: "GitHub",
    items: {
      "pn-level1-landing": {
        title: "Precision Nutrition, Level 1 Certification landing page",
        description:
          "The main conversion page for PN's Level 1 Certification, which has 175,000+ coaches enrolled. Built in Astro with Preact islands, so the interactive parts ship as small islands and the rest of the page stays static. I own it end to end: layout, content structure, responsive behaviour, performance, and the tracking on it.",
        liveLabel: "Visit site",
      },
      "pn-flex-2026": {
        title: "Flex 2026, a sales page builder in WordPress",
        description:
          "A template of 18 modular ACF blocks that lets the marketing team assemble a full campaign page on their own. Field groups are versioned in JSON and go through code review, required fields stop half-built sections reaching production, and the field notes are written for the person filling them in rather than for a developer. The blocks port the Astro design system across to WordPress, fluid type and scroll animations included, matched across two separate CSS stacks.",
        liveLabel: "Visit site",
      },
      "pn-exit-popup": {
        title: "Exit-intent lead capture",
        description:
          "Ported off a WordPress plugin and rebuilt natively in Astro. The form posts to WordPress endpoints behind Cloudflare Turnstile, with nonce retry handling for the case where a cached page carries a stale token. PostHog events track impressions and submissions separately, so marketing can see where people drop between the two. Live in production and timed around the promo calendar.",
        liveLabel: "See the page",
      },
      "discloser-ios": {
        title: "Discloser - Mobile App",
        description:
          "A privacy-first React Native iOS app for sharing sensitive health information, with OCR document verification, time-limited QR sharing, and risk-based reminders. Designed and built end to end, currently in App Store review.",
        liveLabel: "Visit Landing Page",
      },
    },
    screenLabels: {
      upload: "Discloser app: document upload with OCR verification",
      dashboard: "Discloser app: home dashboard with risk-based reminders",
      share: "Discloser app: time-limited QR sharing",
    },
    neblina: {
      heading: "Neblina",
      body: "I also run Neblina, a product studio, where I take on client work outside my role at Precision Nutrition. Delivered projects include Yellow Brolly Co., Walkercraft, and Maxc Solutions, each with a custom CMS and analytics set up so the client can see where their leads come from.",
      link: "See client work at Neblina",
      imageAlt: "Neblina product studio, homepage",
    },
  },
  tech: {
    heading: "Skills",
    groups: {
      development: {
        title: "Development",
        list: "React, TypeScript, JavaScript, Astro, Preact, Node.js, Express, WordPress, PHP, ACF, SCSS, GSAP, Supabase/Postgres, MySQL, React Native, Vite, Webpack",
      },
      analytics: {
        title: "Analytics",
        list: "Google Tag Manager, GA4, PostHog, Cookiebot and consent mode, data layer design, event schema and naming, conversion tracking",
      },
      design: {
        title: "Design",
        list: "Figma, design systems, UX/UI, prototyping, responsive and accessible interfaces",
      },
      tools: {
        title: "Tools and Workflow",
        list: "Git, Claude Code, Cursor, MCP servers, Agile, Jira",
      },
    },
    whatTitle: "What I Build",
    whatBody:
      "Marketing sites and the tooling behind them. Astro, React, and WordPress on the front end, with the component systems and page templates that let a marketing team ship a campaign without waiting on a developer. Tracking set up in GA4, PostHog, and GTM so the results are measurable. I also build mobile apps in React Native.",
    howTitle: "How I Work",
    howBody:
      "I start in Figma and build it myself, so nothing is lost between the design file and the code. Claude Code, Cursor, and MCP servers are part of my daily workflow, along with the internal tooling and documentation around them.",
  },
  experience: {
    heading: "Experience",
    workTitle: "Work",
    educationTitle: "Education",
    work: [
      {
        title: "Web Developer & Content Manager",
        company: "Precision Nutrition",
        period: "Jul 2020 - Present",
        description: [
          "Build and maintain the marketing front end of a site with 100,000+ monthly visitors, including the Level 1 Certification page for a certification with 175,000+ coaches enrolled",
          "Own the Astro and Preact islands build for the main conversion pages, from layout and content structure through performance and responsive behaviour",
          "Build the authoring tooling the marketing team publishes with, including a template of 18 modular ACF blocks with versioned schemas and required-field guardrails",
          "Set up and maintain conversion tracking across GA4, PostHog, and GTM, including the event schema and the queries the marketing team reads results from",
        ],
      },
      {
        title: "Founder & Lead Developer",
        company: "Neblina",
        companyLink: "https://neblina.tech",
        period: "2026 - Present",
        description: [
          "Run a product studio delivering strategy, design, and development for founders and small teams, from brand and interface through full-stack build and deployment",
          "Delivered sites and custom CMSs for Yellow Brolly Co., Walkercraft, and Maxc Solutions, each with analytics and search setup so the client can attribute their leads",
          "Built an automated lead pipeline for Walkercraft in Astro and FastAPI, scoring inbound enquiries, drafting replies for approval, and running follow-ups on a schedule",
        ],
      },
      {
        title: "Web Marketing Coordinator",
        company: "EF Educational Tours",
        period: "Jul 2019 - Jun 2020",
        description: [
          "Built analytics dashboards tracking website performance and user behaviour",
          "Developed A/B testing strategies to improve conversion across marketing pages",
          "Coordinated with global teams to build, test, and deploy email campaigns and web content across multiple markets",
        ],
      },
      {
        title: "e-Commerce Manager",
        company: "BOXPT Equipment",
        period: "Jan 2018 - Jun 2019",
        description: [
          "Owned the website end to end, including setup, customization, and ongoing digital presence",
          "Built custom features and templates to improve product visibility and site functionality",
          "Delivered analytics reporting with recommendations for improving performance",
        ],
      },
    ],
    education: [
      {
        degree: "Diploma, Software Engineering",
        institution: "BrainStation",
        period: "Nov 2024 - Feb 2025",
        description:
          "Intensive software engineering program, 400+ hours of hands-on coding across JavaScript, TypeScript, React, Node.js, Express, and MySQL.",
      },
      {
        degree: "BSc, Media and Communication Technologies",
        institution: "Aveiro University",
        period: "2010 - 2014",
        description:
          "Technical program across digital media, communication strategy, and web technologies, including programming, media production, and user experience.",
      },
    ],
  },
  contact: {
    heading: "Get in Touch",
    subtitle:
      "I work on the front end of marketing platforms. The pages, the tooling the marketing team publishes with, and the tracking that measures both. Most of that has been at Precision Nutrition for the past six years. If you are hiring for something in that shape, or want to talk through a problem you are stuck on, send me a note.",
    orDirect: "Or reach me directly",
    remote: "Remote, based in Portugal",
    nameLabel: "Name *",
    namePlaceholder: "Your name",
    emailLabel: "Email *",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message *",
    messagePlaceholder: "Tell me what you are working on.",
    send: "Send message",
    sending: "Sending...",
    sent: "Message sent",
    success: "Thanks. I will get back to you soon.",
    error:
      "Something went wrong. Please try again, or email me directly at",
  },
  footer: {
    backToTop: "Back to top",
  },
};

const pt: Translations = {
  docTitle: "Gabriela Barreira | Programadora Web para Equipas de Marketing e Produto",
  nav: {
    projects: "Projetos",
    about: "Sobre",
    contact: "Contacto",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    english: "Inglês",
    portuguese: "Português",
  },
  hero: {
    kicker: "Programadora Web para Equipas de Marketing · Remoto",
    titleBefore: "Desenho e construo",
    titleMark: "landing pages",
    titleAfter: "que convertem.",
    subtitle:
      "Oito anos a fazer exatamente isto: do primeiro frame no Figma até uma página no ar a converter.",
    seeWork: "Ver o meu trabalho",
    getInTouch: "Falar comigo",
    portraitAlt: "Gabriela Barreira",
  },
  projects: {
    heading: "Trabalho Selecionado",
    githubLabel: "GitHub",
    items: {
      "pn-level1-landing": {
        title: "Precision Nutrition – Landing Page da Certificação Nível 1",
        description:
          "Página de conversão principal da Certificação Nível 1 da PN, ao serviço de mais de 175 000 coaches em todo o mundo. Responsável por todo o layout, estrutura de conteúdos, design responsivo e desempenho, construída com Astro e ilhas Preact.",
        liveLabel: "Visitar Site",
      },
      "pn-exit-popup": {
        title: "Popup de Marketing Exit-Intent",
        description:
          "Popup de captação de leads para a página do Nível 1, construído nativamente em Astro. Um formulário protegido por Turnstile envia para endpoints WordPress, eventos PostHog medem impressões e submissões, e o lançamento foi alinhado com o calendário promocional da PN. Em produção.",
        liveLabel: "Ver a Página",
      },
      "pn-flex-2026": {
        title: "Flex 2026 – Construtor de Páginas de Vendas WordPress",
        description:
          "Um template de páginas de vendas com 18 blocos ACF modulares que permite à equipa de marketing da PN montar páginas de campanha completas sem programador. Traduz o design system Astro para WordPress — tipografia fluida, animações scroll-reveal, blocos de preços e contagem decrescente — com paridade de pixel entre duas stacks de CSS.",
        liveLabel: "Visitar Site",
      },
      "discloser-ios": {
        title: "Discloser - Aplicação Móvel",
        description:
          "Uma aplicação iOS em React Native, focada na privacidade, para partilhar informação de saúde sensível, com verificação de documentos por OCR, partilha por QR com tempo limitado e lembretes baseados em risco. Concebida e construída de início ao fim, atualmente em revisão na App Store.",
        liveLabel: "Visitar Landing Page",
      },
    },
    screenLabels: {
      upload: "App Discloser: carregamento de documento com verificação OCR",
      dashboard: "App Discloser: painel inicial com lembretes baseados em risco",
      share: "App Discloser: partilha por QR com tempo limitado",
    },
    neblina: {
      heading: "Neblina",
      body: "Também tenho a Neblina, um estúdio de produto. Quando um projeto precisa de mais do que uma pessoa em estratégia, design e engenharia, é aí que ele vive. O trabalho concluído para clientes inclui a Yellow Brolly Co. e a Walkercraft.",
      link: "Ver trabalho com clientes na Neblina",
      imageAlt: "Neblina estúdio de produto — página inicial",
    },
  },
  tech: {
    heading: "Competências",
    groups: {
      development: {
        title: "Desenvolvimento",
        list: "React, TypeScript, JavaScript, Astro, Preact, Node.js, Express, MySQL, Supabase/Postgres, SCSS, GSAP, WordPress, PHP, Design Responsivo, React Native",
      },
      analytics: {
        title: "Analytics",
        list: "Google Tag Manager, GA4, PostHog, Cookiebot e consent mode, desenho da data layer, esquema e nomenclatura de eventos, tracking de conversão",
      },
      design: {
        title: "Design",
        list: "Figma, Design de Produto, Design UX/UI, Design Systems, Prototipagem",
      },
      tools: {
        title: "Ferramentas & Fluxo de Trabalho",
        list: "Git, Claude Code, Cursor, servidores MCP, Google Analytics, PostHog, Agile, Jira",
      },
    },
    whatTitle: "O Que Construo",
    whatBody:
      "Landing pages, sites de campanha e experiências web de marketing — construídas em Astro, React e WordPress, instrumentadas para conversão e rápidas. Do ficheiro Figma até à publicação. Também construo aplicações móveis com React Native.",
    howTitle: "Como Trabalho",
    howBody:
      "Design e código sob o mesmo teto. Começo no Figma, construo em React/React Native e uso ferramentas assistidas por IA (Claude Code, Cursor) para avançar mais depressa sem cortar caminho.",
  },
  experience: {
    heading: "Experiência",
    workTitle: "Trabalho",
    educationTitle: "Formação",
    work: [
      {
        title: "Fundadora e Programadora Principal",
        company: "Neblina",
        companyLink: "https://neblina.tech",
        period: "2026 - Presente",
        description: [
          "Dirijo um estúdio de produto que entrega estratégia, design e desenvolvimento a fundadores e pequenas equipas, da marca e UI até à construção full-stack e publicação.",
          "Lidero projetos de início ao fim, incluindo as automações e integrações de IA que os mantêm a funcionar depois do lançamento.",
          "Integro fluxos de trabalho assistidos por IA (Claude Code, Cursor, servidores MCP) tanto na entrega a clientes como nos meus próprios produtos.",
        ],
      },
      {
        title: "Programadora Web e Gestora de Conteúdos",
        company: "Precision Nutrition",
        period: "Jul 2020 - Presente",
        description: [
          "Construo e otimizo páginas de marketing e experiências de campanha focadas em conversão, numa plataforma com mais de 100 000 visitantes mensais.",
          "Responsável pela entrega front-end da landing page da Certificação Nível 1 em Astro e Preact, do layout e estrutura de conteúdos ao desempenho e comportamento responsivo.",
          "Implemento tracking de conversão e analytics para que a equipa de marketing possa medir o desempenho do funil e agir sobre ele.",
          "Construo ferramentas de edição que permitem à equipa de marketing montar páginas de campanha completas sem envolvimento de programadores.",
        ],
      },
      {
        title: "Coordenadora de Marketing Web",
        company: "EF Educational Tours",
        period: "Jul 2019 - Jun 2020",
        description: [
          "Construí dashboards de analytics para acompanhar a eficácia do site e o comportamento dos utilizadores.",
          "Desenvolvi estratégias de testes A/B para melhorar a conversão nas páginas de marketing.",
          "Coordenei com equipas globais a construção, teste e publicação de campanhas de email e conteúdos web em vários mercados.",
        ],
      },
      {
        title: "Gestora de e-Commerce",
        company: "BOXPT Equipment",
        period: "Jan 2018 - Jun 2019",
        description: [
          "Responsável pela configuração, personalização e presença digital contínua do site.",
          "Construí funcionalidades e templates personalizados para melhorar a visibilidade dos produtos e a funcionalidade do site.",
          "Entreguei relatórios de analytics com recomendações para melhorar o desempenho.",
        ],
      },
    ],
    education: [
      {
        degree: "Diploma, Engenharia de Software",
        institution: "BrainStation",
        period: "Nov 2024 - Fev 2025",
        description:
          "Programa intensivo de engenharia de software com mais de 400 horas de programação prática. Desenvolvimento full-stack incluindo JavaScript, TypeScript, React, Node.js, Express e MySQL.",
      },
      {
        degree: "Licenciatura em Novas Tecnologias da Comunicação",
        institution: "Universidade de Aveiro",
        period: "2010 - 2014",
        description:
          "Programa técnico que combina media digital, estratégias de comunicação e tecnologias web. Incluiu programação, produção de media digital e princípios de experiência do utilizador.",
      },
    ],
  },
  contact: {
    heading: "Entre em Contacto",
    subtitle:
      "Ajudo equipas de marketing e produto a lançar landing pages que convertem, sem sacrificar desempenho, acessibilidade ou QA. O meu trabalho vive onde o marketing encontra a engenharia: iteração rápida e o hábito de apanhar o que escapa sob a pressão dos prazos. Disponível para trabalho freelance e a contrato através da Neblina, em paralelo com o meu trabalho na Precision Nutrition.",
    orDirect: "Ou contacte-me diretamente",
    remote: "A trabalhar remotamente",
    nameLabel: "Nome *",
    namePlaceholder: "O seu nome",
    emailLabel: "Email *",
    emailPlaceholder: "seu@email.com",
    messageLabel: "Mensagem *",
    messagePlaceholder:
      "Diga-me o que procura, ou simplesmente cumprimente.",
    send: "Enviar Mensagem",
    sending: "A enviar...",
    sent: "Mensagem Enviada!",
    success: "Mensagem enviada! Respondo-lhe em breve.",
    error:
      "Algo correu mal. Tente novamente ou contacte-me diretamente em",
  },
  footer: {
    backToTop: "Voltar ao topo",
  },
};

export const translations: Record<Lang, Translations> = { en, pt };
