import React from "react";
import SectionHeading from "./SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Experience() {
  const { eyebrow, tag, heading, academics, experience } =
    PORTFOLIO_DATA.accreditation;

  return (
    <section className="py-16 sm:py-24 border-b border-border bg-background" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading eyebrow={eyebrow} tag={tag} title={heading} />

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Academic Foundation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="pb-3 border-b border-border text-[11px] font-mono uppercase tracking-editorial text-primary font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              06A // ACADEMIC FOUNDATION
            </div>

            <div className="space-y-6">
              {academics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 bg-white rounded border border-border shadow-sm hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${
                        item.status === "IN PROGRESS"
                          ? "bg-primary-soft text-primary border-primary/30"
                          : "bg-surface-secondary text-text-muted border-border"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-text-main mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-mono text-xs text-text-muted mb-4">
                    {item.institution}
                  </p>

                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Experience */}
          <div className="lg:col-span-6 space-y-6">
            <div className="pb-3 border-b border-border text-[11px] font-mono uppercase tracking-editorial text-primary font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              06B // PROFESSIONAL PRACTICE
            </div>

            <div className="p-6 sm:p-8 bg-white rounded border border-border shadow-sm hover:border-primary/50 transition-colors group">
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-border/60">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-primary px-2.5 py-1 bg-surface-secondary rounded">
                  {experience.badge}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-text-muted px-2.5 py-1 bg-[#F8F6F1] border border-border rounded">
                  {experience.duration}
                </span>
              </div>

              {/* Role & Company */}
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-main mb-1 group-hover:text-primary transition-colors">
                {experience.role}
              </h3>
              <p className="font-mono text-xs text-text-secondary mb-1">
                {experience.company}
              </p>
              <p className="font-mono text-[11px] text-text-muted mb-6">
                {experience.location}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-primary font-semibold mb-3">
                  KEY CONTRIBUTIONS & RESPONSIBILITIES
                </span>
                <ul className="space-y-2.5">
                  {experience.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-text-secondary leading-relaxed">
                      <span className="text-primary mt-0.5 flex-shrink-0 text-xs">✦</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-border/60">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-text-muted mb-2">
                  TECHNOLOGIES
                </span>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-surface-secondary border border-border/80 rounded text-[11px] font-mono text-text-main font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
