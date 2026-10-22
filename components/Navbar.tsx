"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["work", "about", "services", "stack", "experience", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        setActiveSection(targetId);
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#F8F6F1]/95 backdrop-blur-md border-border shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          : "bg-[#F8F6F1] border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#top"
          onClick={(e) => handleLinkClick(e, "#top")}
          className="font-heading font-bold text-base sm:text-lg tracking-tight text-text-main hover:text-primary transition-colors flex items-center gap-2 group"
          id="nav-logo"
        >
          <span className="w-2 h-2 rounded-full bg-primary inline-block transition-transform group-hover:scale-125" />
          <span>{PORTFOLIO_DATA.personal.name}</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-mono font-medium tracking-editorial uppercase">
          {PORTFOLIO_DATA.navigation.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-text-secondary hover:text-text-main"
                }`}
                id={`nav-link-${sectionId}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Resume Button */}
        <div className="hidden lg:flex items-center">
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-border rounded text-[12px] font-mono font-semibold tracking-wider uppercase text-text-main bg-white hover:bg-surface-secondary hover:border-primary/50 transition-all duration-200 shadow-sm"
            id="nav-resume-btn"
          >
            <span>RESUME</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
          </a>
        </div>

        {/* Mobile / Tablet Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 border border-border rounded text-[11px] font-mono font-semibold uppercase text-text-main bg-white"
            aria-label="Resume"
          >
            <span>RESUME</span>
            <ArrowUpRight className="w-3 h-3 text-primary" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-main hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-[#F8F6F1] px-5 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="pb-3 border-b border-border/50">
            <p className="font-heading font-bold text-sm text-text-main">
              {PORTFOLIO_DATA.personal.name}
            </p>
            <p className="font-mono text-xs text-primary">
              {PORTFOLIO_DATA.personal.role}
            </p>
          </div>

          <div className="flex flex-col space-y-3 pt-2">
            {PORTFOLIO_DATA.navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`flex items-center justify-between text-sm font-mono tracking-wider py-2 px-1 border-b border-border/20 ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-text-main hover:text-primary"
                  }`}
                  id={`mobile-nav-${sectionId}`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </a>
              );
            })}
          </div>

          <div className="pt-2">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 border border-primary text-primary font-mono text-xs font-semibold uppercase rounded hover:bg-primary-light/40 transition-colors"
            >
              <span>OPEN RESUME (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
