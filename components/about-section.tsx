"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./ui/reveal";
import { stats } from "@/lib/data";
import { premiumEase } from "@/lib/utils";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] py-[clamp(80px,12vw,160px)]"
    >
      {/* Subtle accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] bg-[radial-gradient(ellipse_60%_60%_at_100%_0%,rgba(212,175,55,0.04)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — Image Side */}
          <Reveal direction="left">
            <div className="relative">
              {/* Image container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85"
                  alt="MD Asadul — Creative Developer"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-white/[0.07] bg-[#1A1A1A] p-6 backdrop-blur-sm lg:block"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, ease: premiumEase }}
              >
                <div className="mb-1 text-3xl font-black text-white">80+</div>
                <div className="text-xs uppercase tracking-widest text-white/40">
                  Projects Delivered
                </div>
              </motion.div>

              {/* Gold accent line */}
              <div className="absolute -left-4 top-1/4 h-24 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
            </div>
          </Reveal>

          {/* Right — Content Side */}
          <div className="flex flex-col justify-center">
            <SectionHeading
              label="About"
              heading="Design Meets Engineering"
              delay={0.1}
            />

            <Reveal delay={0.2}>
              <p className="mb-6 text-base leading-[1.8] text-white/60 md:text-lg">
                I&apos;m MD Asadul — a creative-tech professional operating at
                the intersection of design and engineering. I create premium
                digital experiences that are equal parts beautiful and
                functional.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mb-10 text-base leading-[1.8] text-white/60 md:text-lg">
                With expertise spanning UI/UX architecture, frontend engineering,
                brand identity, and motion design — I bring a full-spectrum
                creative-technical skillset to every engagement. My work has
                helped global brands, funded startups, and ambitious founders
                elevate their digital presence.
              </p>
            </Reveal>

            {/* Milestones */}
            <div className="mb-10 grid grid-cols-2 gap-px rounded-2xl border border-white/[0.06] bg-white/[0.04] overflow-hidden">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.35 + i * 0.07}>
                  <div className="flex flex-col gap-1 p-6 bg-black/30">
                    <span className="text-3xl font-black text-white">
                      {stat.value}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-white/40">
                      {stat.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Skills */}
            <Reveal delay={0.5}>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Framer Motion",
                  "Tailwind CSS",
                  "Figma",
                  "UI/UX",
                  "Motion Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-white/60 transition-all duration-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
