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
    liveUrl: "https://bugsy-web.vercel.app/",
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
      "README no GitHub com passo a passo de instalação",
      "Distribuição por arquivo externo",
      "Fluxo pensado para investigação técnica",
      "Interface leve para consulta durante a rotina"
    ]
  },
  {
    title: "Validação de Emails VTEX",
    slug: "automacao-emails-vtex",
    description:
      "Automação RPA em Python para validar emails em massa contra API pública de Master Data da VTEX, com controle de velocidade e consolidação em planilha Excel.",
    problem:
      "Reduzir o trabalho manual na validação de emails, diminuindo erros operacionais e acelerando o processamento de dados.",
    stack: ["RPA", "Python", "Pandas", "OpenPyXL", "VTEX Master Data API", "Excel"],
    status: "Publicado",
    githubUrl:
      "https://github.com/Gabriel-Neves-fs/automacao_consulta_emails_massa_vtex",
    images: [],
    highlights: [
      "Consultas em massa com controle de velocidade",
      "Rate limiting para evitar excesso de requisições",
      "Leitura e consolidação de dados em planilha Excel",
      "RPA criada a partir de necessidade real do ambiente de trabalho"
    ]
  },
  {
    title: "Automação de EANs na VTEX",
    slug: "automacao-eans-vtex",
    description:
      "Automação RPA em Python para atualizar EANs de produtos na VTEX em massa, usando planilha Excel e API de catálogo.",
    problem:
      "Atualizar EANs de mais de 200 produtos sem depender de alterações manuais no painel, reduzindo tempo operacional e risco de erro no cadastro.",
    stack: ["RPA", "Python", "Pandas", "OpenPyXL", "VTEX Catalog API", "Excel"],
    status: "Publicado",
    githubUrl: "https://github.com/Gabriel-Neves-fs/automacao_eans",
    images: [],
    highlights: [
      "Leitura de planilha Excel com SKUs e novos EANs",
      "Modo dry-run para validar dados antes da execução real",
      "Consulta, remoção e cadastro de EANs via API da VTEX",
      "Relatório final em Excel com status de cada linha processada"
    ]
  }
];
