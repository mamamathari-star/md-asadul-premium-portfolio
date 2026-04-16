"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { MagneticButton } from "./ui/magnetic-button";
import { premiumEase } from "@/lib/utils";

const STAGGER = 0.12;

function HeroWord({
  word,
  delay,
}: {
  word: string;
  delay: number;
}) {
  return (
    <div className="overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, delay, ease: premiumEase }}
      >
        {word}
      </motion.span>
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Radial spotlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

      {/* Gold accent glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)]" />

      {/* Subtle grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={{ y: yTitle, opacity: opacityHero }}
        className="relative z-10 mx-auto max-w-[1320px] px-6 lg:px-10"
      >
        {/* Meta label */}
        <motion.div
          className="mb-10 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
        >
          <span className="h-px w-8 bg-[#D4AF37]" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
            Creative-Tech Portfolio
          </span>
        </motion.div>

        {/* Main headline */}
        <h1
          className="hero-heading mb-6 font-black uppercase leading-[0.9] tracking-[-0.04em] text-white"
          aria-label="Crafting Digital Experiences That Define Brands"
        >
          <div className="flex flex-wrap gap-x-[0.18em]">
            {["Crafting", "Digital"].map((word, i) => (
              <HeroWord key={word} word={word} delay={0.3 + i * STAGGER} />
            ))}
          </div>
          <div className="flex flex-wrap gap-x-[0.18em]">
            {["Experiences"].map((word, i) => (
              <HeroWord key={word} word={word} delay={0.5 + i * STAGGER} />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-[0.18em]">
            {["That"].map((word, i) => (
              <HeroWord key={word} word={word} delay={0.62 + i * STAGGER} />
            ))}
            <div className="overflow-hidden">
              <motion.span
                className="inline-block text-gradient-gold"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.0,
                  delay: 0.74,
                  ease: premiumEase,
                }}
              >
                Define
              </motion.span>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-[0.18em]">
            {["Brands."].map((word, i) => (
              <HeroWord key={word} word={word} delay={0.86 + i * STAGGER} />
            ))}
          </div>
        </h1>

        {/* Sub line */}
        <motion.p
          className="mb-12 max-w-xl text-lg leading-relaxed text-white/55 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: premiumEase }}
        >
          I&apos;m MD Asadul — a creative developer and UI/UX architect building
          premium digital experiences for founders, studios, and global brands.
        </motion.p>

        {/* CTA row */}
        <motion.div
          className="mb-16 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25, ease: premiumEase }}
        >
          <MagneticButton>
            <Link
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              View My Work
              <motion.span
                className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={12} />
              </motion.span>
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
              Let&apos;s Talk
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Trust stats row */}
        <motion.div
          className="flex flex-wrap items-center gap-8 border-t border-white/[0.06] pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4, ease: premiumEase }}
        >
          {[
            { value: "80+", label: "Projects" },
            { value: "5★", label: "Rating" },
            { value: "3+ Yrs", label: "Experience" },
            { value: "98%", label: "Retention" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="text-xl font-black text-white">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-white/35">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-1.5 text-white/30"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
