import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/data/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isImageLeft = project.alignRight; // true for project 2

  return (
    <div className="bg-white rounded border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Text Container */}
        <div
          className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
            isImageLeft ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div>
            {/* Project Eyebrow / Category */}
            <div className="flex items-center gap-3 pb-3 mb-4 border-b border-border/60">
              <span className="font-mono text-xs font-bold text-primary">
                {project.number}
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-text-main mb-4 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Metadata Table (Role / Deliverable or Stack / Pipeline) */}
            <div className="grid grid-cols-2 gap-4 py-4 mb-6 border-y border-border/60 text-xs">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-text-muted mb-1">
                  {project.roleOrStackLabel}
                </span>
                <span className="font-heading font-semibold text-text-main">
                  {project.roleOrStackValue}
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-text-muted mb-1">
                  {project.deliverableOrPipelineLabel}
                </span>
                <span className="font-heading font-semibold text-text-main">
                  {project.deliverableOrPipelineValue}
                </span>
              </div>
            </div>

            {/* Technology tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-surface-secondary border border-border/80 rounded text-[11px] font-mono text-text-main font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTA Link */}
          <div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-text-main text-white font-mono text-xs font-semibold uppercase tracking-wider rounded hover:bg-primary transition-all duration-200 shadow-sm"
              id={`project-cta-${project.id}`}
            >
              <span>{project.ctaText}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            {project.isConfigurableUrl && (
              <span className="block text-[10px] font-mono text-text-muted mt-2">
                * Live / code repository configurable in portfolio.ts
              </span>
            )}
          </div>
        </div>

        {/* Image Preview Container */}
        <div
          className={`lg:col-span-6 relative min-h-[280px] sm:min-h-[360px] lg:min-h-full bg-surface-secondary border-t lg:border-t-0 ${
            isImageLeft
              ? "lg:order-1 lg:border-r border-border"
              : "lg:order-2 lg:border-l border-border"
          } p-4 sm:p-6 lg:p-8 flex items-center justify-center overflow-hidden`}
        >
          <div className="relative w-full h-full min-h-[240px] sm:min-h-[300px] rounded border border-border overflow-hidden bg-white shadow-inner group-hover:scale-[1.01] transition-transform duration-500">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
