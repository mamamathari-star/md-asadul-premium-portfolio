"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/data";
import { premiumEase } from "@/lib/utils";

interface MobileMenuProps {
  onClose: () => void;
  onNavClick: (href: string) => void;
}

export function MobileMenu({ onNavClick }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex flex-col bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: premiumEase }}
    >
      {/* Background noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Accent gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(212,175,55,0.06)_0%,transparent_60%)]" />

      <div className="flex flex-1 flex-col justify-center px-8 pt-24 pb-12">
        {/* Nav Items */}
        <nav className="mb-auto">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{
                delay: 0.1 + i * 0.07,
                duration: 0.5,
                ease: premiumEase,
              }}
            >
              <Link
                href={link.href}
                onClick={() => onNavClick(link.href)}
                className="group flex items-baseline justify-between border-b border-white/[0.06] py-5"
              >
                <span className="text-[clamp(36px,8vw,56px)] font-black uppercase tracking-tight text-white/90 transition-colors duration-300 group-hover:text-[#D4AF37]">
                  {link.label}
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-white/30 transition-colors duration-300 group-hover:text-[#D4AF37]/60">
                  0{i + 1}
                </span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Footer bar */}
        <motion.div
          className="flex items-center justify-between pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5, ease: premiumEase }}
        >
          <div className="flex items-center gap-5">
            {socialLinks.slice(0, 3).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium uppercase tracking-widest text-white/40 transition-colors duration-300 hover:text-white/80"
              >
                {s.label}
              </a>
            ))}
          </div>
          <Link
            href="#contact"
            onClick={() => onNavClick("#contact")}
            className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2.5 text-sm font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37]/20"
          >
            Let&apos;s Talk
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
