"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn, premiumEase } from "@/lib/utils";
import type { projects } from "@/lib/data";

type Project = (typeof projects)[0];

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{
        duration: 0.8,
        delay: (index % 3) * 0.1,
        ease: premiumEase,
      }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#0A0A0A]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.7, ease: premiumEase }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Dark overlay */}
        <motion.div
          className="absolute inset-0 bg-black/50"
          animate={{ opacity: hovered ? 0.35 : 0.55 }}
          transition={{ duration: 0.4 }}
        />

        {/* Hover reveal overlay */}
        <motion.div
          className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: premiumEase }}
        >
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#D4AF37]">
              {project.category}
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              {project.description}
            </p>
          </div>

          <motion.div
            className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
            animate={{ rotate: hovered ? 0 : -45, scale: hovered ? 1 : 0.7 }}
            transition={{ duration: 0.4, ease: premiumEase }}
          >
            <ArrowUpRight size={16} className="text-white" />
          </motion.div>
        </motion.div>

        {/* Year badge */}
        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white/50 backdrop-blur-sm">
          {project.year}
        </div>
      </div>

      {/* Card footer */}
      <div className="p-6">
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
            {project.title}
          </h3>
          <span className="text-xs font-medium text-white/30">
            {project.id}
          </span>
        </div>

        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-white/35">
          {project.category}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom border accent on hover */}
      <div
        className={cn(
          "absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent transition-opacity duration-500",
          hovered ? "opacity-100" : "opacity-0"
        )}
      />
    </motion.article>
  );
}
