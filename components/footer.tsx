"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navLinks, socialLinks } from "@/lib/data";
import { Reveal } from "./ui/reveal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-black">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      {/* Background accent */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(212,175,55,0.04)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {/* Brand block */}
          <Reveal direction="up" delay={0} className="lg:col-span-2">
            <div>
              <Link href="#home" className="mb-6 inline-block">
                <span className="text-2xl font-black uppercase tracking-[0.08em] text-white">
                  MD <span className="text-gradient-gold">ASADUL</span>
                </span>
              </Link>
              <p className="mb-6 max-w-xs text-sm leading-[1.8] text-white/50">
                Creative developer and UI/UX architect crafting premium digital
                experiences for global brands, founders, and studios who refuse
                to be ordinary.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/10"
                    aria-label={s.label}
                  >
                    <ArrowUpRight
                      size={13}
                      className="text-white/40 transition-colors duration-300 group-hover:text-[#D4AF37]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Navigation */}
          <Reveal direction="up" delay={0.1}>
            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-white/50 transition-all duration-300 hover:text-white"
                    >
                      <span className="h-px w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal direction="up" delay={0.2}>
            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@mdasadul.com"
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    hello@mdasadul.com
                  </a>
                </li>
                <li>
                  <span className="text-sm text-white/50">
                    Available Worldwide
                  </span>
                </li>
                <li>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    <span className="text-xs font-medium text-white/50">
                      Open to Projects
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* CTA strip */}
        <Reveal delay={0.3}>
          <div className="mb-12 flex flex-col items-start gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="mb-1 text-lg font-bold text-white">
                Ready to start your project?
              </h3>
              <p className="text-sm text-white/45">
                Let&apos;s create something extraordinary together.
              </p>
            </div>
            <Link
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              Get in Touch
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.05] py-8 sm:flex-row">
          <p className="text-xs text-white/25">
            © {currentYear} MD Asadul. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-white/25 transition-colors duration-300 hover:text-white/50"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
