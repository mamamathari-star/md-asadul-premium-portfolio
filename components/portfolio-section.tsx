"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";
import { Reveal } from "./ui/reveal";
import { projects } from "@/lib/data";

export function PortfolioSection() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#050505] py-[clamp(80px,12vw,160px)]"
    >
      {/* Accent gradient */}
      <div className="pointer-events-none absolute right-1/3 top-0 h-[600px] w-[600px] bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(255,0,0,0.025)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Work"
            heading={"Selected\nProjects"}
            delay={0}
          />
          <Reveal delay={0.2} direction="right">
            <Link
              href="#contact"
              className="group mb-16 inline-flex shrink-0 items-center gap-2 text-sm font-medium text-white/50 transition-colors duration-300 hover:text-white lg:mb-20"
            >
              All Projects
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.2} className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5 hover:text-[#D4AF37]"
          >
            Start Your Project
            <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
