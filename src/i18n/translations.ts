export type Lang = "en" | "pt";

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
    status: string;
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
  docTitle: "Gabriela Barreira | Web Developer for Marketing & Product Teams",
  nav: {
    projects: "Projects",
    about: "About",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    english: "English",
    portuguese: "Portuguese",
  },
  hero: {
    status: "Available for new work",
    kicker: "Web Developer for Marketing Teams · Remote",
    titleBefore: "I design and build",
    titleMark: "mobile apps",
    titleAfter: "& web products.",
    subtitle:
      "Eight years of it — I take a product from the blank Figma file to the thing people actually open on their phones.",
    seeWork: "See my work",
    getInTouch: "Get in touch",
    portraitAlt: "Gabriela Barreira",
  },
  projects: {
    heading: "Selected Work",
    githubLabel: "GitHub",
    items: {
      "pn-level1-landing": {
        title: "Precision Nutrition – Level 1 Certification Landing Page",
        description:
          "Flagship conversion page for PN's Level 1 Certification, serving 175,000+ coaches worldwide. Full ownership of layout, content structure, responsive design, and performance, built with Astro and Preact islands.",
        liveLabel: "Visit Site",
      },
      "pn-exit-popup": {
        title: "Exit-Intent Marketing Popup",
        description:
          "Lead-capture popup for the Level 1 page, built natively in Astro. A Turnstile-protected form posts to WordPress endpoints, PostHog events track impressions and submissions, and the rollout was timed around PN's promo calendar. Live in production.",
        liveLabel: "See the Page",
      },
      "pn-flex-2026": {
        title: "Flex 2026 – WordPress Sales Page Builder",
        description:
          "A sales-page template of 18 modular ACF blocks that lets PN's marketing team assemble full campaign pages without a developer. Ports the Astro design system to WordPress — fluid type, scroll-reveal animations, pricing and countdown blocks — pixel-matched across two CSS stacks.",
        liveLabel: "Visit Site",
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
      body: "I also run Neblina, a product studio. When a project needs more than one person's worth of strategy, design, and engineering, that's where it lives.",
      link: "See client work at Neblina",
      imageAlt: "Neblina product studio — homepage",
    },
  },
  tech: {
    heading: "Skills",
    groups: {
      development: {
        title: "Development",
        list: "React Native, React, TypeScript, JavaScript, Astro, Preact, Node.js, Express, MySQL, Supabase/Postgres, SCSS, GSAP, WordPress, PHP, Responsive Design",
      },
      design: {
        title: "Design",
        list: "Figma, Product Design, UX/UI Design, Design Systems, Prototyping",
      },
      tools: {
        title: "Tools & Workflow",
        list: "Git, Claude Code, Cursor, MCP servers, Google Analytics, PostHog, Agile, Jira",
      },
    },
    whatTitle: "What I Build",
    whatBody:
      "Mobile apps (iOS & Android) with React Native, responsive websites, and full-stack web applications. From initial design in Figma through deployment.",
    howTitle: "How I Work",
    howBody:
      "Design and code under one roof. I start in Figma, build in React/React Native, and use AI-assisted tools (Claude Code, Cursor) to move faster without cutting corners.",
  },
  experience: {
    heading: "Experience",
    workTitle: "Work",
    educationTitle: "Education",
    work: [
      {
        title: "Founder & Lead Developer",
        company: "Neblina",
        companyLink: "https://neblina.tech",
        period: "2026 - Present",
        description: [
          "Run a product studio delivering strategy, design, and development for founders and small teams, from brand and UI through full-stack build and deployment.",
          "Lead projects end to end, including the automation and AI integrations that keep them running after launch.",
          "Build AI-assisted workflows (Claude Code, Cursor, MCP servers) into both client delivery and my own products.",
        ],
      },
      {
        title: "Web Developer & Content Manager",
        company: "Precision Nutrition",
        period: "Jul 2020 - Present",
        description: [
          "Full-stack development including React application rebuilds and feature work",
          "Focused on user experience, responsive design, and code quality",
        ],
      },
    ],
    education: [
      {
        degree: "Diploma, Software Engineering",
        institution: "BrainStation",
        period: "Nov 2024 - Feb 2025",
        description:
          "Intensive software engineering program with 400+ hours of hands-on coding. Full-stack development including JavaScript, TypeScript, React, Node.js, Express, and MySQL.",
      },
      {
        degree: "Bachelors in Media and Communication Technologies",
        institution: "Aveiro University",
        period: "2010 - 2014",
        description:
          "Technical program combining digital media, communication strategies, and web technologies. Coursework included programming, digital media production, and user experience principles.",
      },
    ],
  },
  contact: {
    heading: "Get in Touch",
    subtitle:
      "I help marketing and product teams ship websites and landing pages that actually convert, without sacrificing performance, accessibility, or QA. Most of my work sits at the intersection of marketing and engineering: fast iteration, AI-assisted workflows, and a habit of catching what gets missed under deadline pressure. Available for freelance and contract work through Neblina, alongside my role at Precision Nutrition.",
    orDirect: "Or reach me directly",
    remote: "Portugal • Remote",
    nameLabel: "Name *",
    namePlaceholder: "Your name",
    emailLabel: "Email *",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message *",
    messagePlaceholder:
      "Tell me about what you're looking for, or just say hello.",
    send: "Send Message",
    sending: "Sending...",
    sent: "Message Sent!",
    success: "Message sent! I'll get back to you soon.",
    error:
      "Something went wrong. Please try again or email me directly at",
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
    status: "Disponível para novos projetos",
    kicker: "Programadora Web para Equipas de Marketing · Remoto",
    titleBefore: "Desenho e construo",
    titleMark: "aplicações móveis",
    titleAfter: "e produtos web.",
    subtitle:
      "Oito anos disto — pego num produto desde o ficheiro Figma em branco até àquilo que as pessoas abrem mesmo no telemóvel.",
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
      body: "Também tenho a Neblina, um estúdio de produto. Quando um projeto precisa de mais do que uma pessoa em estratégia, design e engenharia, é aí que ele vive.",
      link: "Ver trabalho com clientes na Neblina",
      imageAlt: "Neblina estúdio de produto — página inicial",
    },
  },
  tech: {
    heading: "Competências",
    groups: {
      development: {
        title: "Desenvolvimento",
        list: "React Native, React, TypeScript, JavaScript, Astro, Preact, Node.js, Express, MySQL, Supabase/Postgres, SCSS, GSAP, WordPress, PHP, Design Responsivo",
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
      "Aplicações móveis (iOS e Android) com React Native, sites responsivos e aplicações web full-stack. Do design inicial no Figma até à publicação.",
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
          "Desenvolvimento full-stack, incluindo reconstruções de aplicações em React e desenvolvimento de funcionalidades.",
          "Foco na experiência do utilizador, design responsivo e qualidade do código.",
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
      "Ajudo equipas de marketing e produto a lançar sites e landing pages que realmente convertem, sem sacrificar desempenho, acessibilidade ou QA. A maior parte do meu trabalho vive na interseção entre marketing e engenharia: iteração rápida, fluxos de trabalho assistidos por IA e o hábito de apanhar o que escapa sob a pressão dos prazos. Disponível para trabalho freelance e a contrato através da Neblina, em paralelo com o meu trabalho na Precision Nutrition.",
    orDirect: "Ou contacte-me diretamente",
    remote: "Portugal • Remoto",
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
