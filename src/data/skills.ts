export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Fastify", "Prisma", "REST APIs"]
  },
  {
    category: "Banco de dados",
    skills: ["PostgreSQL", "SQL", "Supabase"]
  },
  {
    category: "Ferramentas",
    skills: ["Git", "GitHub", "Postman", "Jira", "Freshservice"]
  },
  {
    category: "E-commerce e integrações",
    skills: ["VTEX", "Omnik", "APIs", "Logs", "Sustentação"]
  },
  {
    category: "Deploy",
    skills: ["Vercel", "Render"]
  }
];
