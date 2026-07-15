"use client";

import {
  ArrowUpRight,
  Download,
  Github,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import type { CSSProperties } from "react";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

function ProjectPreview({ project }: { project: Project }) {
  const galleryDuration = `${Math.max(project.images.length * 3.2, 6.4)}s`;
  const galleryShift =
    project.images.length > 1 ? `-${(project.images.length - 1) * 100}%` : "0%";

  return (
    <div
      className="project-preview mb-5"
      style={
        {
          "--gallery-duration": galleryDuration,
          "--gallery-shift": galleryShift,
        } as CSSProperties
      }
    >
      <div className="preview-window">
        <div className="preview-topbar">
          <span className="preview-dot" />
          <span className="preview-dot opacity-70" />
          <span className="preview-dot opacity-40" />
          <span className="preview-address">
            {project.title.toLowerCase()}.app
          </span>
          <span className="ml-auto text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
            {project.slug}
          </span>
        </div>
        <div className="preview-screen">
          {project.images.length > 0 ? (
            <div className="preview-gallery">
              {project.images.map((image, index) => (
                <span
                  className="preview-shot"
                  key={image}
                  style={
                    {
                      "--project-image": `url(${image})`,
                      "--shot-index": index,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
          ) : (
            <div className="preview-fallback" aria-hidden="true">
              <span>rpa</span>
              <span>python</span>
              <span>pandas</span>
              <span>api</span>
            </div>
          )}
          <div className="preview-scan" />
          <div className="preview-caption">
            <span className="preview-kicker">Preview</span>
            <strong>{project.title}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card warm-card h-full p-5 transition-transform hover:-translate-y-1">
      <ProjectPreview project={project} />
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
          <span
            className="rounded-full bg-muted px-3 py-1 text-sm font-bold"
            key={tech}
          >
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
            <a
              aria-label={`Ver código do projeto ${project.title} no GitHub`}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              Código
            </a>
          </Button>
        ) : null}
        {project.liveUrl ? (
          <Button asChild variant="accent">
            <a
              aria-label={`Abrir projeto ${project.title} online`}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={18} />
              Ver online
            </a>
          </Button>
        ) : null}
        {project.downloadUrl ? (
          <Button asChild variant="accent">
            <a
              aria-label={`Baixar ${project.title}`}
              href={project.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} />
              Download
            </a>
          </Button>
        ) : null}
      </div>
    </article>
  );
}

export function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const autoplay = useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  return (
    <Carousel
      className="projects-carousel"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[autoplay.current]}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-sm font-bold text-muted-foreground">
          Arraste ou navegue pelas setas para ver os projetos.
        </p>
        <div className="flex gap-2">
          <CarouselPrevious className="carousel-arrow static translate-x-0 translate-y-0" />
          <CarouselNext className="carousel-arrow static translate-x-0 translate-y-0" />
        </div>
      </div>

      <CarouselContent
        aria-label="Projetos em destaque"
        className="projects-carousel-track"
      >
        {projects.map((project) => (
          <CarouselItem className="project-slide" key={project.slug}>
            <ProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
