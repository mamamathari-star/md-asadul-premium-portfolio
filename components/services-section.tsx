"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { services } from "@/lib/data";
import { premiumEase } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

function ServiceItem({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
        ease: premiumEase,
      }}
    >
      <div className="group relative flex cursor-default items-start gap-6 border-b border-white/[0.06] py-7 transition-all duration-500 hover:pl-3 md:gap-10 md:py-8">
        {/* Hover accent line */}
        <div className="absolute left-0 top-0 h-full w-px scale-y-0 bg-[#D4AF37] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

        {/* Number */}
        <span className="mt-1 shrink-0 font-mono text-xs font-medium tracking-widest text-white/25 transition-colors duration-300 group-hover:text-[#D4AF37]/60">
          {service.number}
        </span>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-12">
          <h3 className="text-xl font-bold text-white/90 transition-colors duration-300 group-hover:text-white md:text-2xl">
            {service.title}
          </h3>
          <p className="max-w-sm text-sm leading-relaxed text-white/45 transition-colors duration-300 group-hover:text-white/60">
            {service.description}
          </p>
        </div>

        {/* Arrow */}
        <motion.div
          className="hidden shrink-0 items-center justify-center rounded-full border border-white/10 p-2 opacity-0 transition-all duration-300 group-hover:border-[#D4AF37]/30 group-hover:opacity-100 md:flex"
          whileHover={{ rotate: 45 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight size={14} className="text-[#D4AF37]" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black py-[clamp(80px,12vw,160px)]"
    >
      {/* Accent */}
      <div className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] bg-[radial-gradient(ellipse_60%_60%_at_0%_100%,rgba(0,191,255,0.03)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
          {/* Left heading */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeading
              label="Services"
              heading={"What I\nDeliver"}
              subheading="End-to-end creative-tech capabilities from concept to launch."
              delay={0}
            />
          </div>

          {/* Right list */}
          <div className="border-t border-white/[0.06]">
            {services.map((service, i) => (
              <ServiceItem key={service.number} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
