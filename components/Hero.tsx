"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Hero() {
  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-8 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-20 overflow-hidden" id="top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Eyebrow & Status Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
              <span className="font-mono text-[11px] sm:text-xs tracking-editorial uppercase text-text-secondary">
                {PORTFOLIO_DATA.hero.eyebrow}
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#EBF7EE] border border-[#C5E8CC] text-[10px] sm:text-[11px] font-mono font-medium text-[#227238]">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span>{PORTFOLIO_DATA.hero.availability}</span>
              </div>
            </div>

            {/* Editorial Main Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.05] tracking-tight text-text-main mb-6">
              I BUILD DIGITAL<br />
              <span className="text-primary">PRODUCTS</span> THAT<br />
              PEOPLE<br />
              REMEMBER.
            </h1>

            {/* Subtitle / Description */}
            <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl mb-8">
              {PORTFOLIO_DATA.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={PORTFOLIO_DATA.hero.primaryCta.href}
                onClick={scrollToWork}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-text-main text-white font-mono text-xs font-semibold tracking-wider uppercase rounded hover:bg-primary transition-all duration-200 shadow-sm group"
                id="hero-view-work-btn"
              >
                <span>{PORTFOLIO_DATA.hero.primaryCta.label}</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PORTFOLIO_DATA.hero.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                download="Shreya_Raval_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white border border-border text-text-main font-mono text-xs font-semibold tracking-wider uppercase rounded hover:bg-surface-secondary hover:border-primary/50 transition-all duration-200 shadow-sm"
                id="hero-resume-btn"
              >
                <Download className="w-3.5 h-3.5 text-primary" />
                <span>{PORTFOLIO_DATA.hero.secondaryCta.label}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Editorial Framed Portrait Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] p-2 bg-white rounded border border-border shadow-md transition-transform duration-500 hover:scale-[1.01]">
              {/* Subtle top metadata stamp */}
              <div className="absolute top-4 right-4 z-10 px-2 py-0.5 bg-[#171717]/70 backdrop-blur-sm text-white font-mono text-[9px] uppercase tracking-widest rounded border border-white/20">
                SR // PORTFOLIO
              </div>

              <div className="relative w-full h-full overflow-hidden rounded bg-surface-secondary">
                <Image
                  src={PORTFOLIO_DATA.personal.photo}
                  alt="Shreya Raval — Full-Stack Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* Horizontal Technology Ticker Strip */}
      <div className="mt-14 sm:mt-20 w-full bg-[#171717] text-white py-3 sm:py-3.5 border-y border-border overflow-hidden">
        <div className="relative flex w-full overflow-hidden select-none group">
          <div className="flex shrink-0 items-center justify-around gap-6 sm:gap-8 whitespace-nowrap animate-ticker group-hover:[animation-play-state:paused]">
            {/* Repeat ticker items twice to create seamless loop */}
            {[...PORTFOLIO_DATA.hero.tickerItems, ...PORTFOLIO_DATA.hero.tickerItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 sm:gap-8">
                <span className="font-mono text-xs sm:text-[13px] tracking-widest uppercase font-semibold text-[#EDE8F5]">
                  {item}
                </span>
                <span className="text-primary text-xs">✦</span>
              </div>
            ))}
          </div>
          <div className="flex shrink-0 items-center justify-around gap-6 sm:gap-8 whitespace-nowrap animate-ticker group-hover:[animation-play-state:paused]" aria-hidden="true">
            {[...PORTFOLIO_DATA.hero.tickerItems, ...PORTFOLIO_DATA.hero.tickerItems].map((item, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-6 sm:gap-8">
                <span className="font-mono text-xs sm:text-[13px] tracking-widest uppercase font-semibold text-[#EDE8F5]">
                  {item}
                </span>
                <span className="text-primary text-xs">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
