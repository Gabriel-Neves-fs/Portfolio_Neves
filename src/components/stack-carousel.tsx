import type { IconType } from "react-icons";
import {
  SiFastify,
  SiFirebase,
  SiNextdotjs,
  SiNodedotjs,
  SiPandas,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";
import type { SkillGroup } from "@/data/skills";

type StackCarouselProps = {
  groups: SkillGroup[];
};

const stackIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "shadcn/ui": SiShadcnui,
  "Node.js": SiNodedotjs,
  Fastify: SiFastify,
  Prisma: SiPrisma,
  Python: SiPython,
  Pandas: SiPandas,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  Firebase: SiFirebase
};

export function StackCarousel({ groups }: StackCarouselProps) {
  const skills = groups.flatMap((group) =>
    group.skills
      .filter((skill) => stackIcons[skill])
      .map((skill) => ({
        name: skill,
        category: group.category,
        Icon: stackIcons[skill]
      }))
  );

  const marqueeSkills = [...skills, ...skills];

  return (
    <div className="stack-carousel" aria-label="Tecnologias utilizadas">
      <div className="stack-carousel-track">
        {marqueeSkills.map((skill, index) => (
          <div className="stack-chip" key={`${skill.name}-${index}`}>
            <span className="stack-chip-icon" aria-hidden="true">
              <skill.Icon size={23} />
            </span>
            <span>
              <strong>{skill.name}</strong>
              <small>{skill.category}</small>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
