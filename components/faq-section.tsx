"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { faqs } from "@/lib/data";
import { premiumEase } from "@/lib/utils";

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: premiumEase,
      }}
      className="border-b border-white/[0.06] last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 py-7 text-left transition-colors duration-200 hover:text-white/90"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-5">
          <span className="mt-0.5 shrink-0 font-mono text-xs font-medium tracking-widest text-white/25">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-base font-semibold text-white/80 transition-colors duration-300 group-hover:text-white md:text-lg">
            {faq.question}
          </span>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.35, ease: premiumEase }}
          className="mt-1 shrink-0"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 group-hover:border-[#D4AF37]/30">
            <Plus
              size={13}
              className={`transition-colors duration-300 ${isOpen ? "text-[#D4AF37]" : "text-white/50"}`}
            />
          </div>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: premiumEase }}
            className="overflow-hidden"
          >
            <p className="pb-7 pl-10 text-sm leading-[1.8] text-white/50 md:text-base">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-black py-[clamp(80px,12vw,160px)]">
      {/* Accent */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] bg-[radial-gradient(ellipse_60%_60%_at_100%_50%,rgba(0,191,255,0.025)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
          {/* Left heading */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeading
              label="FAQ"
              heading={"Common\nQuestions"}
              subheading="Everything you need to know before we start working together."
              delay={0}
            />
          </div>

          {/* Right accordion */}
          <div className="border-t border-white/[0.06]">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
