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
    skills: ["Node.js", "Fastify", "Prisma", "REST APIs", "Python"]
  },
  {
    category: "Banco de dados",
    skills: ["PostgreSQL", "SQL", "Supabase", "Firebase"]
  },
  {
    category: "Automações",
    skills: ["RPA", "Python", "Pandas", "OpenPyXL", "Excel", "APIs"]
  }
];
