import React from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Projects() {
  const { eyebrow, tag, heading, items, moreProjectsUrl } = PORTFOLIO_DATA.projects;

  return (
    <section className="py-16 sm:py-24 border-b border-border bg-background" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading eyebrow={eyebrow} tag={tag} title={heading} />

        {/* Selected Project Rows */}
        <div className="space-y-10 sm:space-y-12">
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* More Projects Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href={moreProjectsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-border text-text-main font-mono text-xs font-semibold tracking-wider uppercase rounded hover:bg-surface-secondary hover:border-primary/50 transition-all duration-200 shadow-sm group"
            id="more-projects-btn"
          >
            <span>MORE PROJECTS</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
