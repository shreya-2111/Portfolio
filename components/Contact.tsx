"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Contact() {
  const { tag, heading, description, email, availability } =
    PORTFOLIO_DATA.contact;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-16 sm:py-24 bg-background" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Deep Purple Card Container matching PDF */}
        <div className="rounded-xl bg-[#4F386F] text-white p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          
          {/* Subtle background glow/ambient accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7656A8]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3B2854]/40 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Subtitle & Direct Email Box */}
            <div className="lg:col-span-7">
              <span className="font-mono text-xs uppercase tracking-widest text-primary-light font-medium block mb-4">
                {tag}
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
                {heading}
              </h2>

              <p className="font-body text-base sm:text-lg text-[#EDE8F5] leading-relaxed max-w-xl mb-8">
                {description}
              </p>

              {/* Email CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`mailto:${email}?subject=Collaboration%20Inquiry%20%E2%80%94%20Portfolio`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-white text-[#4F386F] font-mono text-xs sm:text-sm font-bold tracking-wider uppercase rounded hover:bg-primary-light transition-all duration-200 shadow-md group"
                  id="contact-email-btn"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>{email}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 border border-white/30 text-white font-mono text-xs font-semibold tracking-wider uppercase rounded hover:bg-white/10 hover:border-white transition-all duration-200"
                  id="contact-copy-btn"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#86EFAC]" />
                      <span className="text-[#86EFAC]">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-primary-light" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Availability List */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-white/15">
              <span className="block font-mono text-xs uppercase tracking-widest text-primary-light font-bold mb-4">
                AVAILABILITY
              </span>

              <ul className="space-y-4">
                {availability.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base text-white/90 leading-snug"
                  >
                    <span className="text-primary-light text-sm mt-0.5">✦</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
