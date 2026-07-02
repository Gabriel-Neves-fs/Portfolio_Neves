import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin
} from "lucide-react";
import type { CSSProperties } from "react";
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
    <main className="site-surface overflow-hidden">
      <section className="ink-panel relative">
        <div className="section-shell min-h-screen py-4 md:py-5">
          <nav className="glass-nav mx-auto flex w-full max-w-3xl items-center justify-between rounded-full p-2 text-sm md:sticky md:top-4 md:z-20">
            <a className="rounded-full bg-white/8 px-4 py-3 font-black" href="#">
              Início
            </a>
            <div className="hidden items-center gap-1 text-white/55 md:flex">
              <a href="#about" className="rounded-full px-4 py-3 font-bold hover:bg-white/8 hover:text-white">
                Sobre
              </a>
              <a href="#experience" className="rounded-full px-4 py-3 font-bold hover:bg-white/8 hover:text-white">
                Carreira
              </a>
              <a href="#stack" className="rounded-full px-4 py-3 font-bold hover:bg-white/8 hover:text-white">
                Stack
              </a>
              <a href="#projects" className="rounded-full px-4 py-3 font-bold hover:bg-white/8 hover:text-white">
                Projetos
              </a>
            </div>
            <Button asChild variant="accent" className="rounded-full px-4 md:px-5">
              <a href="#contact">
                <Mail size={16} />
                Conversar
              </a>
            </Button>
          </nav>

          <div className="grid min-h-[calc(100vh-92px)] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-10 flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-10 text-xs font-black uppercase tracking-[0.22em] text-white/45">
                <span className="text-accent">- Portfólio · MMXXVI</span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={14} />
                  Brasil
                </span>
              </div>

              <div className="mb-12 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-black">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/12 px-3 py-1 text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Disponível
                </span>
                <span className="text-white/62">Projetos web e oportunidades full stack</span>
              </div>

              <p className="mb-8 text-xs font-black uppercase tracking-[0.24em] text-white/42">
                Nº 01 — Suporte Técnico · APIs · Builder
              </p>
              <h1 className="max-w-4xl font-display text-[4.6rem] font-black leading-[0.78] text-[#fff3e8] md:text-[8.4rem] lg:text-[9.6rem]">
                {profile.name}
              </h1>
              <p className="-mt-2 font-display text-[4rem] font-black italic leading-none text-accent md:text-[7.2rem]">
                Full Stack
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/52">
                <span className="rounded-full border border-white/12 px-4 py-2 font-bold text-white/88">
                  {profile.headline}
                </span>
                <span>— projetos reais com Next.js, Node e PostgreSQL</span>
              </div>
              <p className="mt-7 max-w-2xl text-base font-semibold leading-8 text-white/62 md:text-lg">
                {profile.shortBio}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                    <Github size={18} />
                    GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </Button>
                {profile.resumeUrl ? (
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                  >
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

            <aside className="relative mx-auto w-full max-w-[520px] lg:mt-28">
              <div
                className="hero-photo corner-frame relative aspect-[4/5] border border-white/12"
                style={{ "--hero-photo": `url(${profile.photoUrl})` } as CSSProperties}
              >
                <div className="absolute -left-6 top-10 rounded-full border border-white/12 bg-black/70 px-4 py-2 text-xs font-black text-white/75 shadow-2xl">
                  <span className="text-accent">•</span> Técnico Pleno · Full Stack
                </div>
                <div className="absolute -right-6 top-1/2 rounded-full border border-white/12 bg-black/70 px-4 py-2 text-xs font-black text-white/75 shadow-2xl">
                  <span className="text-accent">•</span> Fintra · Bugsy
                </div>
                <div className="absolute -bottom-6 left-8 rounded-full border border-white/12 bg-black/70 px-4 py-2 text-xs font-black text-white/75 shadow-2xl">
                  <span className="text-accent">•</span> APIs · Logs · Integrações
                </div>
              </div>
              <div className="mt-12 grid gap-3 sm:grid-cols-2">
                {quickStats.map((stat, index) => (
                  <div className="warm-card p-4" key={stat}>
                    <span className="font-display text-3xl font-black text-accent">
                      0{index + 1}
                    </span>
                    <p className="mt-2 text-sm font-black text-white/74">{stat}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 py-20">
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

      <section id="stack" className="border-t border-white/10 py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="02 / Stack"
            title="Stack que conecta interface, API e operação."
            description="Meu foco está em aplicações web com TypeScript, interfaces bem cuidadas, APIs organizadas e banco relacional. A vivência em suporte complementa essa base com leitura de logs, integrações e diagnóstico técnico."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                className="warm-card p-5 transition-transform hover:-translate-y-1"
                key={group.category}
              >
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

      <section id="projects" className="border-t border-white/10 py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="03 / Projetos"
            title="Projetos que mostram produto, rotina técnica e evolução."
            description="Fintra e Bugsy representam dois lados da minha evolução: uma aplicação full stack publicada e uma extensão criada a partir de dor real de organização técnica."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                className="project-card warm-card p-5 transition-transform hover:-translate-y-1"
                key={project.slug}
              >
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
                <p className="mt-4 border-l-4 border-primary bg-black/20 py-2 pl-4 font-bold">
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

      <section id="experience" className="border-t border-white/10 py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="04 / Experiência"
            title="Trajetória conectada à engenharia."
            description="Atuar com sustentação me treinou para investigar, priorizar, validar hipóteses e comunicar problemas técnicos com clareza."
          />
          {experiences.map((experience) => (
            <article
              className="warm-card grid gap-6 p-6 md:grid-cols-[0.8fr_1.2fr]"
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

      <section id="contact" className="border-t border-white/10 py-20">
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
