import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="w-full border-t border-border bg-[#F8F6F1] py-10 sm:py-14 text-text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border/60">
          <div>
            <p className="font-heading font-bold text-base sm:text-lg text-text-main tracking-tight">
              {personal.name} <span className="text-text-muted font-normal">/</span> {personal.role.toUpperCase()}
            </p>
            <p className="font-mono text-xs text-text-muted mt-1">
              © {personal.copyrightYear} {personal.name} · {personal.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-xs uppercase tracking-wider font-semibold">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-main hover:text-primary transition-colors flex items-center gap-1 group"
              id="footer-github"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-3 h-3 text-text-muted group-hover:text-primary transition-colors" />
            </a>

            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-main hover:text-primary transition-colors flex items-center gap-1 group"
              id="footer-linkedin"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3 text-text-muted group-hover:text-primary transition-colors" />
            </a>

            <a
              href={personal.socials.email}
              className="text-text-main hover:text-primary transition-colors flex items-center gap-1 group"
              id="footer-email"
            >
              <span>EMAIL</span>
              <ArrowUpRight className="w-3 h-3 text-text-muted group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Sub-Footer Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-text-muted uppercase tracking-widest text-center sm:text-left">
          <span>DESIGNED AND DEVELOPED BY SHREYA RAVAL</span>
          <span className="text-primary font-medium">BUILT WITH NEXT.JS & TAILWIND CSS</span>
        </div>

      </div>
    </footer>
  );
}
