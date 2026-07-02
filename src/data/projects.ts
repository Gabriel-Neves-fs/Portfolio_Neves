export type Project = {
  title: string;
  slug: string;
  description: string;
  problem: string;
  stack: string[];
  status: "Publicado" | "Em evolução" | "Em desenvolvimento";
  githubUrl: string;
  liveUrl?: string;
  downloadUrl?: string;
  images: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: "Fintra",
    slug: "fintra",
    description:
      "Aplicação full stack para gestão financeira pessoal, com organização de receitas, despesas e visão mensal.",
    problem:
      "Centralizar dados financeiros e transformar lançamentos em leitura clara para tomada de decisão.",
    stack: ["Next.js", "TypeScript", "Fastify", "Prisma", "PostgreSQL"],
    status: "Em evolução",
    githubUrl: "https://github.com/Gabriel-Neves-fs/fintra_public",
    liveUrl: "https://fintra-web-swart.vercel.app/",
    images: ["/projects/fintra01.png", "/projects/fintra02.png"],
    highlights: [
      "Autenticação com cookies HTTP Only",
      "Dashboard mensal",
      "API REST modular",
      "Modelagem relacional com Prisma"
    ]
  },
  {
    title: "Bugsy",
    slug: "bugsy",
    description:
      "Extensão para apoiar organização, acompanhamento e consulta de bugs, tarefas técnicas e evidências de investigação.",
    problem:
      "Apoiar o registro claro de problemas, contexto técnico, status e histórico de resolução.",
    stack: ["JavaScript", "Chrome Extensions", "HTML", "CSS"],
    status: "Publicado",
    githubUrl: "https://github.com/Gabriel-Neves-fs/bugsy_public",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=1L4L00ZCQ5T7yriPEDrEIV5VrnzgyNbbw",
    images: [
      "/projects/bugsy01.png",
      "/projects/bugsy02.png",
      "/projects/bugsy03.png",
      "/projects/bugsy04.png",
      "/projects/bugsy05.png",
      "/projects/bugsy06.png"
    ],
    highlights: [
      "Extensão empacotada para instalação local",
      "Distribuição por arquivo externo",
      "Fluxo pensado para investigação técnica",
      "Interface leve para consulta durante a rotina"
    ]
  }
];
