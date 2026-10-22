import React from "react";
import SectionHeading from "./SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Services() {
  const { eyebrow, tag, heading, description, items } = PORTFOLIO_DATA.services;

  return (
    <section className="py-16 sm:py-24 border-b border-border bg-background" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow={eyebrow}
          tag={tag}
          title={heading}
          description={description}
        />

        {/* 6 Services Grid (2 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {items.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 bg-white rounded border border-border flex flex-col justify-between hover:border-primary/60 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <div>
                {/* Header with Number and Practice Badge */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/60">
                  <span className="font-mono text-sm sm:text-base font-bold text-primary group-hover:text-primary-deep transition-colors">
                    {service.id}
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-text-muted px-2.5 py-1 bg-surface-secondary rounded">
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm sm:text-[15px] text-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Technologies Tag Pills */}
              <div className="pt-4 border-t border-border/40">
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#F8F6F1] border border-border/80 rounded text-[11px] font-mono text-text-main font-medium group-hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
