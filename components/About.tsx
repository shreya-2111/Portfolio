import React from "react";
import SectionHeading from "./SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function About() {
  const { eyebrow, tag, heading, description, manifesto, metadataGrid } =
    PORTFOLIO_DATA.about;

  return (
    <section className="py-16 sm:py-24 border-b border-border" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Bar */}
        <SectionHeading eyebrow={eyebrow} tag={tag} />

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Heading, Subtitle & Manifesto Card */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-main mb-6 leading-[1.12]">
                {heading}
              </h3>
              <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed mb-8">
                {description}
              </p>
            </div>

            {/* Manifesto Card */}
            <div className="p-6 sm:p-7 rounded bg-white border border-border shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                  {manifesto.badge}
                </span>
              </div>
              <blockquote className="font-heading text-lg sm:text-xl font-medium text-text-main italic leading-snug mb-4">
                {manifesto.quote}
              </blockquote>
              <div className="flex items-center justify-between pt-3 border-t border-border/60 text-[11px] font-mono text-text-muted uppercase tracking-wider">
                <span>{manifesto.signature}</span>
                <span className="text-primary font-semibold">CRAFT & CODE</span>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Compact Metadata Grid */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {metadataGrid.map((item, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 bg-white rounded border border-border flex flex-col justify-between hover:border-primary/50 transition-colors shadow-sm group"
                >
                  <span className="font-mono text-[11px] uppercase tracking-editorial text-text-muted mb-3 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-primary/60 group-hover:bg-primary" />
                    {item.label}
                  </span>
                  <div>
                    <p className="font-heading font-bold text-base sm:text-lg text-text-main leading-tight">
                      {item.value}
                    </p>
                    {item.subtext && (
                      <p className="font-body text-xs text-text-secondary mt-1">
                        {item.subtext}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
