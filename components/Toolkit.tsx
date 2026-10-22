import React from "react";
import SectionHeading from "./SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Toolkit() {
  const { eyebrow, tag, heading, categories } = PORTFOLIO_DATA.toolkit;

  const topRow = categories.slice(0, 3);
  const bottomRow = categories.slice(3, 5);

  return (
    <section className="py-16 sm:py-24 border-b border-border bg-background" id="stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading eyebrow={eyebrow} tag={tag} title={heading} />

        {/* Top Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {topRow.map((cat) => (
            <div
              key={cat.id}
              className="p-6 bg-white rounded border border-border flex flex-col justify-between hover:border-primary/50 transition-all duration-300 shadow-sm group"
            >
              <div>
                <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-primary font-semibold mb-2">
                  {cat.code}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-text-main mb-4 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#F8F6F1] border border-border/80 rounded text-[11px] font-mono text-text-main font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-border/60">
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-text-muted">
                  {cat.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row: 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomRow.map((cat) => (
            <div
              key={cat.id}
              className="p-6 bg-white rounded border border-border flex flex-col justify-between hover:border-primary/50 transition-all duration-300 shadow-sm group"
            >
              <div>
                <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-primary font-semibold mb-2">
                  {cat.code}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-text-main mb-4 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#F8F6F1] border border-border/80 rounded text-[11px] font-mono text-text-main font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-border/60">
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-text-muted">
                  {cat.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
