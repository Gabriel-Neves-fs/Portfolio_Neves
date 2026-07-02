import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  TerminalSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/experiences";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const quickStats = [
  "Suporte técnico pleno",
  "Incidentes, logs e APIs",
  "Produtos web reais",
  "Next.js · Node · PostgreSQL"
];

export default function Home() {
  return (
    <main>
      <section className="ink-panel">
        <div className="section-shell min-h-[92vh] py-6 md:py-8">
          <nav className="flex items-center justify-between border-b border-white/15 pb-4 text-sm">
            <a className="font-black uppercase tracking-[0.18em]" href="#">
              {profile.name}
            </a>
            <div className="hidden gap-5 text-white/65 md:flex">
              <a href="#about" className="hover:text-white">
                Sobre
              </a>
              <a href="#projects" className="hover:text-white">
                Projetos
              </a>
              <a href="#contact" className="hover:text-white">
                Contato
              </a>
            </div>
          </nav>

          <div className="grid min-h-[78vh] items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-5 inline-flex border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                Portfólio · Full Stack em evolução
              </p>
              <h1 className="font-display text-5xl font-black leading-[0.9] md:text-7xl lg:text-8xl">
                {profile.name}
              </h1>
              <p className="mt-6 max-w-2xl text-xl font-bold leading-8 text-white/90 md:text-2xl">
                {profile.headline}.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 md:text-lg">
                {profile.shortBio}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                    <Github size={18} />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                  <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </Button>
                {profile.resumeUrl ? (
                  <Button asChild variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                    <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                      <FileText size={18} />
                      Currículo
                    </a>
                  </Button>
                ) : null}
                <Button asChild variant="accent">
                  <a href="#contact">
                    <Mail size={18} />
                    Contato
                  </a>
                </Button>
              </div>
            </div>

            <aside className="relative border border-white/15 bg-white/[0.06] p-5">
              <div className="scanline absolute inset-0 opacity-30" />
              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-white/60">
                    Base profissional
                  </span>
                  <TerminalSquare className="text-accent" size={24} />
                </div>
                <div className="grid gap-3">
                  {quickStats.map((stat, index) => (
                    <div
                      className="flex items-center gap-4 border border-white/15 bg-black/20 p-4"
                      key={stat}
                    >
                      <span className="font-display text-4xl font-black text-accent">
                        0{index + 1}
                      </span>
                      <span className="font-bold text-white/86">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-foreground/15 py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="01 / Sobre"
            title="Suporte técnico como base para construir software melhor."
            description="Minha trajetória passa por sistemas em produção, incidentes reais, integrações e contato direto com operação. É daí que vem meu olhar para produto, clareza técnica e resolução de problemas."
          />
          <div className="space-y-5 text-lg leading-8 text-muted-foreground">
            <p>
              Atuo como Analista de Suporte Técnico Pleno, investigando incidentes,
              validando integrações e conectando evidências técnicas com impacto real
              na operação.
            </p>
            <p>
              Essa vivência com VTEX, Omnik, APIs, logs, Postman, Freshservice, Jira
              e fornecedores fortalece uma habilidade essencial para desenvolvimento:
              entender problema, contexto, usuário e sistema antes de escrever código.
            </p>
            <p className="font-bold text-foreground">
              Agora, essa base vira produto: interfaces modernas, APIs bem organizadas
              e projetos full stack que resolvem problemas de verdade.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/15 py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="02 / Stack"
            title="Stack que conecta interface, API e operação."
            description="Meu foco está em aplicações web com TypeScript, interfaces bem cuidadas, APIs organizadas e banco relacional. A vivência em suporte complementa essa base com leitura de logs, integrações e diagnóstico técnico."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article className="border border-foreground/15 bg-card p-5 shadow-line transition-transform hover:-translate-y-1" key={group.category}>
                <h3 className="mb-4 flex items-center gap-2 font-display text-2xl font-black">
                  <Code2 size={22} className="text-primary" />
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      className="rounded-full border border-border bg-background px-3 py-1 text-sm font-bold text-muted-foreground"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-foreground/15 py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="03 / Projetos"
            title="Projetos que mostram produto, rotina técnica e evolução."
            description="Fintra e Bugsy representam dois lados da minha evolução: uma aplicação full stack publicada e uma extensão criada a partir de dor real de organização técnica."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article className="project-card border border-foreground/15 bg-card p-5 shadow-line transition-transform hover:-translate-y-1" key={project.slug}>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                      {project.status}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-black">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="text-accent" />
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <p className="mt-4 border-l-4 border-primary bg-background/70 py-2 pl-4 font-bold">
                  {project.problem}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span className="rounded-full bg-muted px-3 py-1 text-sm font-bold" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>- {highlight}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.githubUrl ? (
                    <Button asChild variant="outline">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <Github size={18} />
                        Código
                      </a>
                    </Button>
                  ) : null}
                  {project.liveUrl ? (
                    <Button asChild variant="accent">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        <ArrowUpRight size={18} />
                        Ver online
                      </a>
                    </Button>
                  ) : null}
                  {project.downloadUrl ? (
                    <Button asChild variant="accent">
                      <a href={project.downloadUrl} target="_blank" rel="noreferrer">
                        <Download size={18} />
                        Download
                      </a>
                    </Button>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/15 py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="04 / Experiência"
            title="Trajetória conectada à engenharia."
            description="Atuar com sustentação me treinou para investigar, priorizar, validar hipóteses e comunicar problemas técnicos com clareza."
          />
          {experiences.map((experience) => (
            <article
              className="grid gap-6 border border-foreground/15 bg-card p-6 shadow-line md:grid-cols-[0.8fr_1.2fr]"
              key={experience.role}
            >
              <div>
                <BriefcaseBusiness className="mb-4 text-primary" />
                <p className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
                  {experience.period}
                </p>
                <h3 className="mt-2 font-display text-3xl font-black">
                  {experience.role}
                </h3>
                <p className="mt-2 font-bold text-primary">{experience.company}</p>
              </div>
              <div>
                <p className="leading-7 text-muted-foreground">{experience.summary}</p>
                <ul className="mt-5 grid gap-3 text-sm font-semibold">
                  {experience.activities.map((activity) => (
                    <li key={activity}>- {activity}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-foreground/15 py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-primary">
              05 / Contato
            </p>
            <h2 className="font-display text-4xl font-black leading-tight md:text-6xl">
              Vamos conversar sobre tecnologia, projetos ou oportunidades?
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <Button asChild variant="accent">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} />
                {profile.email}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                <Github size={18} />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
