export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  activities: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Analista de Suporte Técnico Pleno",
    company: "Experiência atual",
    period: "Atual",
    summary:
      "Atuação em sustentação de sistemas, investigação técnica e suporte a operações com integrações, APIs e plataformas de e-commerce.",
    activities: [
      "Investigação de incidentes com análise de logs, payloads e comportamento sistêmico",
      "Apoio técnico em integrações com VTEX, Omnik e sistemas internos",
      "Uso de Postman para validar APIs, reproduzir cenários e documentar evidências",
      "Interface com times internos e fornecedores para resolução de problemas complexos"
    ],
    stack: ["VTEX", "Omnik", "APIs", "Postman", "Freshservice", "Jira", "Logs"]
  }
];
