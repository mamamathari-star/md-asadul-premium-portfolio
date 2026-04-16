"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./ui/reveal";
import { testimonials } from "@/lib/data";
import { premiumEase } from "@/lib/utils";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goNext = () => {
    setDirection("next");
    setActiveIndex((i) => (i + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection("prev");
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir: "next" | "prev") => ({
      x: dir === "next" ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: "next" | "prev") => ({
      x: dir === "next" ? -60 : 60,
      opacity: 0,
    }),
  };

  const current = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-[clamp(80px,12vw,160px)]">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(212,175,55,0.04)_0%,transparent_60%)]" />

      {/* Large quote mark bg */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-black leading-none text-white/[0.015] select-none">
        &ldquo;
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <SectionHeading
          label="Testimonials"
          heading="Client Stories"
          subheading="What collaborators and clients say about working with me."
          align="center"
          delay={0}
        />

        <div className="mx-auto max-w-3xl">
          {/* Quote Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10 md:p-14 backdrop-blur-sm">
            {/* Quote icon */}
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10">
              <Quote size={20} className="text-[#D4AF37]" />
            </div>

            {/* Testimonial text */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: premiumEase }}
              >
                <blockquote className="mb-8 text-xl leading-[1.7] text-white/75 md:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#D4AF37]">
                      {current.name[0]}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {current.name}
                    </div>
                    <div className="text-xs text-white/40">
                      {current.role} · {current.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center justify-between">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > activeIndex ? "next" : "prev");
                      setActiveIndex(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-400 ${
                      i === activeIndex
                        ? "w-8 bg-[#D4AF37]"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={goPrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} className="text-white/60" />
                </button>
                <button
                  onClick={goNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/10"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} className="text-[#D4AF37]" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
