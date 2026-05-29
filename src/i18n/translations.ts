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
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    seeWork: string;
  };
  projects: {
    heading: string;
    githubLabel: string;
    items: Record<string, ProjectCopy>;
    neblina: {
      heading: string;
      body: string;
      link: string;
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
    location: string;
  };
}

const en: Translations = {
  docTitle: "Gabriela Barreira | Product Designer & Developer",
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
    titleLead: "I design and build",
    titleAccent: "mobile apps & web products",
    subtitle:
      "Product designer & developer, 8+ years. From Figma to React Native to deployment.",
    seeWork: "See my work",
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
      "discloser-ios": {
        title: "Discloser - Mobile App",
        description:
          "A privacy-first React Native iOS app for sharing sensitive health information, with OCR document verification, time-limited QR sharing, and risk-based reminders. Designed and built end to end, currently in App Store review.",
        liveLabel: "Visit Landing Page",
      },
    },
    neblina: {
      heading: "Neblina",
      body: "I also run Neblina, a product studio. When a project needs more than one person's worth of strategy, design, and engineering, that's where it lives.",
      link: "See client work at Neblina",
    },
  },
  tech: {
    heading: "Skills",
    groups: {
      development: {
        title: "Development",
        list: "React Native, React, TypeScript, JavaScript, Astro, Preact, Node.js, Express, MySQL, Supabase/Postgres, SCSS, GSAP, WordPress, Responsive Design",
      },
      design: {
        title: "Design",
        list: "Figma, Product Design, UX/UI Design, Design Systems, Prototyping",
      },
      tools: {
        title: "Tools & Workflow",
        list: "Git, Claude Code, Cursor, MCP servers, Google Analytics, Agile, Jira",
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
      "Interested in working together? Send me a message and I'll get back to you.",
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
    location: "Portugal",
  },
};

const pt: Translations = {
  docTitle: "Gabriela Barreira | Designer e Programadora de Produto",
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
    titleLead: "Desenho e construo",
    titleAccent: "aplicações móveis e produtos web",
    subtitle:
      "Designer e programadora de produto, mais de 8 anos. Do Figma ao React Native até à publicação.",
    seeWork: "Ver o meu trabalho",
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
      "discloser-ios": {
        title: "Discloser - Aplicação Móvel",
        description:
          "Uma aplicação iOS em React Native, focada na privacidade, para partilhar informação de saúde sensível, com verificação de documentos por OCR, partilha por QR com tempo limitado e lembretes baseados em risco. Concebida e construída de início ao fim, atualmente em revisão na App Store.",
        liveLabel: "Visitar Landing Page",
      },
    },
    neblina: {
      heading: "Neblina",
      body: "Também tenho a Neblina, um estúdio de produto. Quando um projeto precisa de mais do que uma pessoa em estratégia, design e engenharia, é aí que ele vive.",
      link: "Ver trabalho com clientes na Neblina",
    },
  },
  tech: {
    heading: "Competências",
    groups: {
      development: {
        title: "Desenvolvimento",
        list: "React Native, React, TypeScript, JavaScript, Astro, Preact, Node.js, Express, MySQL, Supabase/Postgres, SCSS, GSAP, WordPress, Design Responsivo",
      },
      design: {
        title: "Design",
        list: "Figma, Design de Produto, Design UX/UI, Design Systems, Prototipagem",
      },
      tools: {
        title: "Ferramentas & Fluxo de Trabalho",
        list: "Git, Claude Code, Cursor, servidores MCP, Google Analytics, Agile, Jira",
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
      "Interessado em trabalhar comigo? Envie-me uma mensagem e eu respondo-lhe.",
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
    location: "Portugal",
  },
};

export const translations: Record<Lang, Translations> = { en, pt };
