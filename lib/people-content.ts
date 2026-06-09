export type PersonTier = "leadership" | "engineering" | "research" | "operations";

export type PersonLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type PersonProject = {
  name: string;
  paragraphs: string[];
  href?: string;
  external?: boolean;
  linkLabel?: string;
};

export type PersonWorkItem = {
  title: string;
  paragraphs: string[];
  href?: string;
  external?: boolean;
  linkLabel?: string;
};

export type PersonSkillGroup = {
  category: string;
  description: string;
};

export type PersonCollaborator = {
  name: string;
  role: string;
  slug?: string;
};

export type PersonEducation = {
  institution: string;
  degree: string;
  period?: string;
  location?: string;
};

export type PersonExperience = {
  title: string;
  organization: string;
  period: string;
  location?: string;
  highlights: string[];
};

export type Person = {
  slug: string;
  name: string;
  roles: string[];
  tier: PersonTier;
  image?: string;
  imageAlt?: string;
  shortBio: string;
  focus?: string;
  isResearcher: boolean;
  sortOrder: number;
};

export type ResearcherProfile = Person & {
  email?: string;
  location?: string;
  about: string[];
  researchInterests: string[];
  currentWork: PersonWorkItem[];
  projects: PersonProject[];
  collaborators?: PersonCollaborator[];
  affiliations?: string[];
  education?: PersonEducation[];
  experience?: PersonExperience[];
  skillGroups?: PersonSkillGroup[];
  resumeUrl?: string;
  links?: PersonLink[];
};

export const TIER_LABELS: Record<PersonTier, string> = {
  leadership: "Leadership",
  engineering: "Engineering",
  research: "Research",
  operations: "Operations",
};

export const people: Person[] = [
  {
    slug: "yuvraj-pandey",
    name: "Yuvraj Pandey",
    roles: ["CEO", "Founder", "Chief AI Engineer / Researcher"],
    tier: "leadership",
    image: "/team/yuvraj-pandey.png",
    imageAlt: "Portrait of Yuvraj Pandey, CEO and Founder of Cogerphere AI Labs",
    shortBio:
      "Founder, AI engineer, and full-stack builder at Cogerphere. Leads research and product across Openbentt, Meridian, and the Context Intelligence Framework.",
    focus: "Applied AI, agentic systems, local-first research tooling, and product architecture",
    isResearcher: true,
    sortOrder: 1,
  },
  {
    slug: "shivanshi-tripathi",
    name: "Shivanshi Tripathi",
    roles: ["Co-founder", "AI Researcher", "Backend Engineer"],
    tier: "leadership",
    image: "/team/shivanshi-tripathi.png",
    imageAlt: "Portrait of Shivanshi Tripathi, Co-founder of Cogerphere AI Labs",
    shortBio:
      "Co-founder and AI researcher at Cogerphere. Builds backend microservices, AI pipelines, and core systems across Openbentt, Meridian 0.1, and Clox.",
    focus: "Backend microservices, AI pipelines, context engineering, and local model research",
    isResearcher: true,
    sortOrder: 2,
  },
];

const researcherProfiles: Record<string, ResearcherProfile> = {
  "yuvraj-pandey": {
    slug: "yuvraj-pandey",
    name: "Yuvraj Pandey",
    roles: ["CEO", "Founder", "Chief AI Engineer / Researcher"],
    tier: "leadership",
    image: "/team/yuvraj-pandey.png",
    imageAlt: "Portrait of Yuvraj Pandey, CEO and Founder of Cogerphere AI Labs",
    shortBio:
      "Founder, AI engineer, and full-stack builder at Cogerphere. Leads research and product across Openbentt, Meridian, and the Context Intelligence Framework.",
    focus: "Applied AI, agentic systems, local-first research tooling, and product architecture",
    isResearcher: true,
    sortOrder: 1,
    email: "yuvraj032006@gmail.com",
    location: "Lucknow, India",
    affiliations: ["Cogerphere AI Labs", "Maharishi University of Information Technology (MUIT)"],
    resumeUrl: "/team/yuvraj-pandey-resume.pdf",
    about: [
      "Yuvraj Pandey is the CEO, Founder, and Chief AI Engineer / Researcher at Cogerphere AI Labs in Lucknow, India. He founded the company in 2025 to build research-first AI software, developer tooling, and intelligent systems that prioritize local control, privacy, and technical rigor.",
      "As the main architect of Openbentt and Cogerphere's broader product portfolio, Yuvraj works across applied AI research, full-stack engineering, and product strategy. His work spans agentic systems, Retrieval-Augmented Generation (RAG), local inference, model evaluation pipelines, and the Context Intelligence Framework — the research backbone behind Cogerphere's local-first tools.",
      "Before founding Cogerphere, Yuvraj served as Product Manager & AI Engineer at Molyweb, leading cross-functional product delivery from ideation through deployment. He is currently pursuing a Bachelor of Computer Applications (BCA) at Maharishi University of Information Technology while building and shipping production-grade AI products.",
      "Yuvraj works closely with co-founder Shivanshi Tripathi on core product engineering across Openbentt and related Cogerphere systems — combining research depth with full-stack execution to ship tools researchers and developers can trust on their own hardware.",
    ],
    researchInterests: [
      "Context Intelligence Framework (CIF) — adaptive compression, drift detection, and threshold-gated validation",
      "Agentic AI systems and multi-step reasoning pipelines",
      "Retrieval-Augmented Generation (RAG) and prompt engineering",
      "Local-first and on-device language models for research workflows",
      "Meridian 0.1 — proofreading, LaTeX, and academic writing assistance",
      "Model evaluation, benchmarking, and multi-model experimentation",
      "Privacy-preserving AI workspaces for researchers and developers",
    ],
    skillGroups: [
      {
        category: "Languages & systems",
        description:
          "TypeScript, JavaScript, Python, Rust, and SQL across production web apps, AI pipelines, and systems tooling. Comfortable working from UI through backend services to deployment and infrastructure on Linux.",
      },
      {
        category: "Full-stack product engineering",
        description:
          "React, Next.js, Node.js, Express, REST APIs, WebSockets, authentication flows, and system design for multi-surface products. Builds modular desktop-oriented architectures with emphasis on speed, usability, and maintainable codebases.",
      },
      {
        category: "Applied AI & research tooling",
        description:
          "LLM integration, agentic systems, Retrieval-Augmented Generation (RAG), prompt engineering, model evaluation pipelines, benchmarking across providers, fine-tuning workflows, and local inference — including WebGPU and on-device model experimentation inside research products.",
      },
      {
        category: "Document & research workflows",
        description:
          "PDF analysis, document intelligence, structured note-taking, LaTeX editing and compilation support, AI-assisted academic writing, and researcher-centric workflows designed for offline-capable, privacy-first environments.",
      },
      {
        category: "Context intelligence & model research",
        description:
          "Context drift detection, adaptive compression, threshold-gated validation, coherence preservation in long-horizon sessions, and secondary-agent architectures — the technical foundation of Cogerphere's Context Intelligence Framework (CIF).",
      },
      {
        category: "Databases, cloud & DevOps",
        description:
          "PostgreSQL, MongoDB, AWS (EC2, S3), Docker, CI/CD, Nginx, and production deployment pipelines. Strong Linux user with practical experience shipping and maintaining startup-grade applications.",
      },
      {
        category: "Web3 & intelligent automation",
        description:
          "Smart contract generation workflows, blockchain-oriented developer tooling via Clox, automation pipelines, dashboard interfaces, and AI-assisted conversion of requirements into executable technical outputs.",
      },
    ],
    experience: [
      {
        title: "Founder & CEO",
        organization: "Cogerphere AI Labs",
        period: "Feb 2025 – Present",
        location: "Lucknow, India",
        highlights: [
          "Founded and lead an AI-focused research and software engineering company building developer tools, AI products, and intelligent systems.",
          "Architected Openbentt — a local-first AI workspace for research, PDF analysis, LaTeX workflows, model benchmarking, and multi-model experimentation.",
          "Conduct research on agentic AI, RAG, local inference, prompt systems, and model evaluation pipelines.",
          "Lead product strategy, architecture design, deployment pipelines, and engineering execution across the Cogerphere product stack.",
        ],
      },
      {
        title: "Product Manager & AI Engineer",
        organization: "Molyweb",
        period: "Feb 2024 – Jan 2025",
        location: "India",
        highlights: [
          "Managed product development across multiple software applications from ideation through deployment.",
          "Designed AI-powered workflows using LLMs, automation pipelines, and intelligent software architectures.",
          "Contributed to backend engineering, API development, database architecture, and cloud deployment.",
          "Defined product roadmaps, technical requirements, and feature prioritization across cross-functional teams.",
        ],
      },
    ],
    education: [
      {
        institution: "Maharishi University of Information Technology (MUIT)",
        degree: "Bachelor of Computer Applications (BCA)",
        period: "2024 – 2027",
        location: "Lucknow, India",
      },
    ],
    currentWork: [
      {
        title: "Context Intelligence Framework (CIF)",
        paragraphs: [
          "Yuvraj's primary research program at Cogerphere centers on a threshold-triggered secondary-agent architecture that monitors long-horizon LLM sessions for context drift and selectively compresses stale context. The goal is to extend effective context utilization without degrading answer quality or pushing end-to-end latency beyond acceptable bounds.",
          "This work connects directly to Openbentt and Meridian — systems where researchers depend on coherent, trustworthy AI assistance over extended writing and analysis sessions. CIF is the research layer that keeps those products technically grounded as sessions grow.",
        ],
        href: "/research",
        linkLabel: "Read the CIF overview",
      },
      {
        title: "Meridian 0.1",
        paragraphs: [
          "Meridian 0.1 is Cogerphere's upcoming on-device research model, currently in active development under Yuvraj's direction. It is being built for proofreading, LaTeX workflows, manuscript preparation, and research writing — with inference designed to run locally on researcher hardware rather than through cloud APIs.",
          "Meridian is intended to ship first inside Openbentt, giving researchers a private, research-grade assistant tuned for academic work rather than casual chat.",
        ],
        href: "/research#meridian",
        linkLabel: "Meridian research preview",
      },
      {
        title: "Agentic systems & evaluation pipelines",
        paragraphs: [
          "Alongside CIF and Meridian, Yuvraj continues work on agentic AI systems, multi-step reasoning pipelines, RAG architectures, and reproducible model evaluation — comparing outputs across providers, configurations, and local inference setups.",
          "These research threads inform how Cogerphere designs benchmarking, prompt systems, and experimentation tooling inside its products.",
        ],
      },
    ],
    projects: [
      {
        name: "Openbentt",
        paragraphs: [
          "Openbentt is Cogerphere's flagship local-first AI workspace — architected and led by Yuvraj from the ground up, with core engineering alongside co-founder Shivanshi Tripathi. It supports PDF analysis, document intelligence, LaTeX editing, AI-assisted writing, model benchmarking, fine-tuning, and multi-provider experimentation without requiring cloud accounts or sending research data off-machine.",
          "The product is built around researcher trust: offline-capable workflows, local and cloud AI provider flexibility, and a desktop-oriented architecture optimized for serious technical work rather than generic chatbot interactions.",
        ],
        href: "https://openbentt.cogerphere.com/",
        external: true,
        linkLabel: "openbentt.cogerphere.com",
      },
      {
        name: "Clox",
        paragraphs: [
          "Clox is an AI-assisted platform for smart contract generation and simplified blockchain development. Yuvraj designed the full-stack architecture — TypeScript-based frontend and backend layers, automated requirement-to-contract flows, and developer-friendly interfaces aimed at reducing friction for Web3 builders.",
        ],
        href: "https://cogy01.vercel.app/",
        external: true,
        linkLabel: "Visit Clox",
      },
      {
        name: "Multi-Model AI Platform",
        paragraphs: [
          "A unified platform for interacting with multiple foundation models through a single interface — including model selection, conversation flow, prompt handling, and API integration across providers. Built to support experimentation and reusable AI workflow components at scale.",
        ],
      },
    ],
    collaborators: [
      {
        name: "Shivanshi Tripathi",
        role: "Co-founder & AI Researcher",
        slug: "shivanshi-tripathi",
      },
    ],
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/yuvraj-pandey-62729222a/",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/yuvrajpandey77",
        external: true,
      },
      {
        label: "X (Twitter)",
        href: "https://x.com/BrotudeG",
        external: true,
      },
      {
        label: "Resume (PDF)",
        href: "/team/yuvraj-pandey-resume.pdf",
        external: true,
      },
      {
        label: "Cogerphere Research",
        href: "/research",
      },
      {
        label: "Openbentt",
        href: "https://openbentt.cogerphere.com/",
        external: true,
      },
    ],
  },
  "shivanshi-tripathi": {
    slug: "shivanshi-tripathi",
    name: "Shivanshi Tripathi",
    roles: ["Co-founder", "AI Researcher", "Backend Engineer"],
    tier: "leadership",
    image: "/team/shivanshi-tripathi.png",
    imageAlt: "Portrait of Shivanshi Tripathi, Co-founder of Cogerphere AI Labs",
    shortBio:
      "Co-founder and AI researcher at Cogerphere. Builds backend microservices, AI pipelines, and core systems across Openbentt, Meridian 0.1, and Clox.",
    focus: "Backend microservices, AI pipelines, context engineering, and local model research",
    isResearcher: true,
    sortOrder: 2,
    email: "shivanshi048@gmail.com",
    location: "Lucknow, India",
    affiliations: [
      "Cogerphere AI Labs",
      "Maharishi University of Information Technology (MUIT)",
      "IBM AI Engineering Professional Certificate",
    ],
    resumeUrl: "/team/shivanshi-tripathi-resume.pdf",
    about: [
      "Shivanshi Tripathi is Co-founder, AI Researcher, and Backend Microservices Developer at Cogerphere AI Labs in Lucknow, India. She builds the backend systems, AI pipelines, and production infrastructure that power Cogerphere's research products — from Openbentt and Meridian 0.1 to Clox.",
      "Her work spans scalable microservices with Node.js and PostgreSQL, real-time systems over WebSockets, LLM integration and fine-tuning pipelines, and context engineering to improve retrieval quality and model behavior. She has contributed directly to Meridian 0.1 research — including AI architecture, evaluation methodologies, reasoning systems, and local deployment for researchers.",
      "Shivanshi is pursuing a Bachelor of Computer Applications (BCA) in AI & Computer Science at Maharishi University of Information Technology and holds an IBM AI Engineering Professional Certificate covering machine learning, deep learning, and AI systems. She works closely with co-founder Yuvraj Pandey across product engineering, research execution, and shipping production-grade applications on AWS.",
      "Outside Cogerphere, Shivanshi is a selected participant in the Smart India Hackathon, an active member of Lucknow DAO and Lucknow AI Labs, and a contributor to open-source AI research tooling through Openbentt.",
    ],
    researchInterests: [
      "Meridian 0.1 — local research models for LaTeX, thesis drafting, and proofreading",
      "Context engineering for retrieval quality and response relevance",
      "LLM fine-tuning, evaluation methodologies, and reasoning systems",
      "Local deployment of lightweight models on smaller GPUs and devices",
      "Backend microservices and real-time AI pipeline architecture",
      "Web-grounded knowledge access for academic writing workflows",
      "Agentic harness design and secure AI code generation (Clox)",
    ],
    skillGroups: [
      {
        category: "Languages & core programming",
        description:
          "Python, Java, JavaScript, and TypeScript — including Python expertise in file handling, networking, database integration, NumPy, Pandas, Matplotlib, and Scikit-learn for data-driven AI workflows.",
      },
      {
        category: "Backend & microservices",
        description:
          "Node.js, Express, REST APIs, WebSockets, Prisma, and PostgreSQL/MongoDB/MySQL for scalable backend systems. Builds modular, production-ready services with optimized database handling and real-time data streaming.",
      },
      {
        category: "AI, ML & LLM systems",
        description:
          "Machine learning, supervised and unsupervised learning, classification, clustering, linear and logistic regression, reinforcement learning, LLM integration, fine-tuning, and intelligent automation pipelines for AI-driven products.",
      },
      {
        category: "Context engineering & research AI",
        description:
          "Context engineering to improve retrieval quality, response relevance, and model behavior inside research platforms. Contributed to Meridian 0.1 architecture, evaluation design, and local inference workflows for academic use.",
      },
      {
        category: "Frontend & mobile",
        description:
          "React and React Native for product interfaces and cross-surface development alongside backend integration and AI workflow design.",
      },
      {
        category: "Cloud, tooling & deployment",
        description:
          "AWS deployment, Git, Postman, and production application delivery — emphasizing scalability, modular design, and performance across Cogerphere's product stack.",
      },
    ],
    experience: [
      {
        title: "Co-Founder, AI Researcher & Backend Microservices Developer",
        organization: "Cogerphere AI Labs",
        period: "6 months – Present",
        location: "Lucknow, India",
        highlights: [
          "Develop scalable backend microservices using Node.js, Express, and PostgreSQL for AI-driven systems.",
          "Engineer AI pipelines leveraging LLMs, fine-tuning, and intelligent automation workflows.",
          "Build real-time systems using WebSockets for efficient data streaming and communication.",
          "Deploy production-ready applications on AWS with optimized database handling using Prisma and MongoDB.",
          "Contribute to Meridian 0.1 research — AI architecture, evaluation methodologies, reasoning systems, and local deployment.",
          "Collaborate on multiple production applications emphasizing scalability, modular design, and performance.",
        ],
      },
    ],
    education: [
      {
        institution: "Maharishi University of Information Technology (MUIT)",
        degree: "Bachelor of Computer Applications (BCA) in AI & Computer Science — GPA 8.5",
        period: "2024 – 2027",
        location: "Lucknow, India",
      },
      {
        institution: "IBM",
        degree: "AI Engineering Professional Certificate",
        period: "Completed",
        location: "Online",
      },
    ],
    currentWork: [
      {
        title: "Meridian 0.1 research",
        paragraphs: [
          "Shivanshi contributes to the research and development of Meridian 0.1 — Cogerphere's lightweight local research model designed to run efficiently on smaller GPUs and devices. Her work focuses on AI architecture, evaluation methodologies, reasoning systems, and deployment patterns that keep inference local and researcher-controlled.",
          "She supports capabilities for LaTeX writing, thesis drafting, proofreading, and research assistance — including web-grounded knowledge access and improved academic writing workflows inside the model stack.",
        ],
        href: "/research#meridian",
        linkLabel: "Meridian research preview",
      },
      {
        title: "Backend microservices & AI pipelines",
        paragraphs: [
          "At Cogerphere, Shivanshi leads backend engineering for AI-driven products — building scalable microservices, real-time WebSocket systems, and production pipelines that connect LLM providers, local GGUF models, and application layers across Openbentt and related systems.",
          "This infrastructure work ensures Cogerphere's research tools remain fast, modular, and deployable on AWS with reliable database and streaming layers underneath the AI experience.",
        ],
      },
      {
        title: "Context engineering",
        paragraphs: [
          "Shivanshi works on context engineering inside Openbentt and related platforms — improving how models retrieve, reason over, and respond to research context. The goal is higher retrieval quality, more relevant responses, and more predictable model behavior in long-running research sessions.",
        ],
      },
    ],
    projects: [
      {
        name: "Openbentt",
        paragraphs: [
          "Shivanshi contributed to the creation and development of Openbentt — Cogerphere's AI-powered research and knowledge intelligence platform. She helped integrate AI models, local GGUF models, and API-based model access into the application stack, and worked on context engineering and scalable AI workflow architecture alongside the founding team.",
        ],
        href: "https://openbentt.cogerphere.com/",
        external: true,
        linkLabel: "openbentt.cogerphere.com",
      },
      {
        name: "Clox",
        paragraphs: [
          "Built an AI-powered platform to generate production-ready smart contracts from natural language inputs — with automated security checks, fail-safe architecture, and deployment across Ethereum, Polygon, and Base networks. Designed intelligent prompt pipelines for optimized and secure code generation.",
        ],
        href: "https://cogy01.vercel.app/",
        external: true,
        linkLabel: "Visit Clox",
      },
      {
        name: "Meridian 0.1",
        paragraphs: [
          "Contributed to Meridian 0.1 as a research model initiative — focusing on local deployment, academic writing support, and evaluation workflows that help researchers run capable AI on their own hardware without sacrificing privacy or control.",
        ],
        href: "/research#meridian",
        linkLabel: "Learn more about Meridian",
      },
    ],
    collaborators: [
      {
        name: "Yuvraj Pandey",
        role: "Founder & CEO",
        slug: "yuvraj-pandey",
      },
    ],
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/shivanshi-tripathi-1b7771307/",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/Shivanshi913",
        external: true,
      },
      {
        label: "X (Twitter)",
        href: "https://x.com/Shivans7521808",
        external: true,
      },
      {
        label: "Resume (PDF)",
        href: "/team/shivanshi-tripathi-resume.pdf",
        external: true,
      },
      {
        label: "Cogerphere Research",
        href: "/research",
      },
      {
        label: "Openbentt",
        href: "https://openbentt.cogerphere.com/",
        external: true,
      },
    ],
  },
};

export function getPeopleByTier(): { tier: PersonTier; label: string; members: Person[] }[] {
  const tiers: PersonTier[] = ["leadership", "engineering", "research", "operations"];

  return tiers
    .map((tier) => ({
      tier,
      label: TIER_LABELS[tier],
      members: people.filter((person) => person.tier === tier).sort((a, b) => a.sortOrder - b.sortOrder),
    }))
    .filter((group) => group.members.length > 0);
}

export function getResearchers(): Person[] {
  return people.filter((person) => person.isResearcher).sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getResearcherProfile(slug: string): ResearcherProfile | undefined {
  return researcherProfiles[slug];
}

export function getResearcherSlugs(): string[] {
  return Object.keys(researcherProfiles);
}

export function getPerson(slug: string): Person | undefined {
  return people.find((person) => person.slug === slug);
}
