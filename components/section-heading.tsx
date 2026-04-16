"use client";

import { Reveal } from "./ui/reveal";

interface SectionHeadingProps {
  label: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  delay?: number;
}

export function SectionHeading({
  label,
  heading,
  subheading,
  align = "left",
  delay = 0,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 lg:mb-20 ${align === "center" ? "text-center" : ""}`}
    >
      <Reveal delay={delay}>
        <div
          className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="h-px w-6 bg-[#D4AF37]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
            {"// "}{label}
          </span>
        </div>
      </Reveal>

      <Reveal delay={delay + 0.1}>
        <h2 className="section-heading font-black uppercase leading-[1.0] tracking-[-0.03em] text-white">
          {heading}
        </h2>
      </Reveal>

      {subheading && (
        <Reveal delay={delay + 0.2}>
          <p
            className={`mt-5 text-base leading-relaxed text-white/55 md:text-lg ${
              align === "center" ? "mx-auto max-w-xl" : "max-w-xl"
            }`}
          >
            {subheading}
          </p>
        </Reveal>
      )}
    </div>
  );
}
