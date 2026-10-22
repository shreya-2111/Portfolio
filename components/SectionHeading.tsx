import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  tag?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  tag,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`w-full mb-10 sm:mb-14 ${className}`}>
      {/* Top Bar with Eyebrow and Tag */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-6 border-b border-border text-[11px] sm:text-xs font-mono uppercase tracking-editorial text-text-secondary">
        <span className="text-primary font-semibold flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
        {tag && (
          <span className="text-text-muted tracking-widest text-[10px] sm:text-[11px]">
            {tag}
          </span>
        )}
      </div>

      {/* Main Section Title */}
      {title && (
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-main mb-4">
          {title}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p className="font-body text-base sm:text-lg text-text-secondary max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
