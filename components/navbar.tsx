"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { MobileMenu } from "./mobile-menu";
import { premiumEase } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (_href: string) => {
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: premiumEase, delay: 0.2 }}
      >
        <div
          className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
              : "bg-transparent"
          }`}
        >
          <nav className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-5 lg:px-10">
            {/* Logo */}
            <Link
              href="#home"
              onClick={() => handleNavClick("#home")}
              className="group relative z-10"
            >
              <motion.span
                className="text-lg font-black tracking-[0.08em] text-white uppercase"
                whileHover={{ letterSpacing: "0.12em" }}
                transition={{ duration: 0.3, ease: premiumEase }}
              >
                MD{" "}
                <span className="text-gradient-gold">ASADUL</span>
              </motion.span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="group relative text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="#contact"
                onClick={() => handleNavClick("#contact")}
                className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] lg:inline-flex"
              >
                Let&apos;s Talk
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/25 lg:hidden"
                aria-label="Toggle menu"
              >
                <motion.span
                  className="h-px w-5 bg-white origin-center"
                  animate={
                    menuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: premiumEase }}
                />
                <motion.span
                  className="h-px w-5 bg-white origin-center"
                  animate={
                    menuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: premiumEase }}
                />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            onClose={() => setMenuOpen(false)}
            onNavClick={handleNavClick}
          />
        )}
      </AnimatePresence>
    </>
  );
}
