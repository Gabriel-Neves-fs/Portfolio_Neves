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
  },
  {
    role: "Designer gráfico",
    company: "FLOR DE MARIA - Embalagens",
    period: "ago de 2024 - fev de 2026 · 1 ano 7 meses",
    summary:
      "Atuação presencial em Itinga do Maranhão, conectando criação visual, atendimento ao cliente, suporte técnico e acompanhamento operacional de pedidos até a entrega final.",
    activities: [
      "Criação de artes para impressão, redes sociais e produtos gráficos personalizados",
      "Operação e manutenção de impressoras durante a rotina de produção",
      "Atendimento ao cliente, vendas e organização de pedidos personalizados",
      "Controle de estoque, suporte administrativo e acompanhamento do processo de entrega"
    ],
    stack: ["Design gráfico", "Impressão", "Atendimento", "Vendas", "Estoque"]
  }
];
