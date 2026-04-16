"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Send } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./ui/reveal";
import { premiumEase } from "@/lib/utils";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formState.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSending(true);
    // Simulate send
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSending(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-[clamp(80px,12vw,160px)]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(212,175,55,0.04)_0%,transparent_60%)]" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left */}
          <div>
            <SectionHeading
              label="Contact"
              heading={"Let's Build\nSomething\nExceptional"}
              delay={0}
            />

            <Reveal delay={0.2}>
              <p className="mb-10 text-base leading-relaxed text-white/55 md:text-lg">
                Ready to elevate your digital presence? Whether it&apos;s a
                brand refresh, a new product, or a complete digital
                transformation — I&apos;d love to hear about your vision.
              </p>
            </Reveal>

            {/* Contact details */}
            <Reveal delay={0.3}>
              <div className="mb-8 space-y-4">
                <a
                  href="mailto:hello@mdasadul.com"
                  className="group flex items-center gap-4 transition-colors duration-300 hover:text-[#D4AF37]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/10">
                    <Mail size={15} className="text-white/50 group-hover:text-[#D4AF37]" />
                  </div>
                  <span className="text-sm text-white/60 group-hover:text-[#D4AF37]">
                    hello@mdasadul.com
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <MapPin size={15} className="text-white/50" />
                  </div>
                  <span className="text-sm text-white/60">
                    Available Worldwide · Remote
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Availability indicator */}
            <Reveal delay={0.4}>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-medium text-white/60">
                  Currently available for new projects
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: premiumEase }}
                className="flex h-full flex-col items-center justify-center rounded-3xl border border-white/[0.06] bg-white/[0.02] p-12 text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                  <Send size={24} className="text-[#D4AF37]" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Message Sent
                </h3>
                <p className="text-sm leading-relaxed text-white/55">
                  Thank you for reaching out. I&apos;ll review your message and
                  get back to you within 24–48 hours.
                </p>
              </motion.div>
            ) : (
              <Reveal delay={0.15}>
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm md:p-10"
                  noValidate
                >
                  {/* Name + Email */}
                  <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/40">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`input-premium w-full rounded-xl px-4 py-3.5 text-sm placeholder:text-white/25 ${
                          errors.name ? "border-red-500/60" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-[#FF0000]">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/40">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`input-premium w-full rounded-xl px-4 py-3.5 text-sm placeholder:text-white/25 ${
                          errors.email ? "border-red-500/60" : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-[#FF0000]">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company + Budget */}
                  <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/40">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="input-premium w-full rounded-xl px-4 py-3.5 text-sm"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/40">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="input-premium w-full rounded-xl px-4 py-3.5 text-sm appearance-none"
                      >
                        <option value="" disabled className="bg-[#1A1A1A]">
                          Select range
                        </option>
                        {[
                          "$3k – $6k",
                          "$6k – $12k",
                          "$12k – $25k",
                          "$25k+",
                        ].map((range) => (
                          <option
                            key={range}
                            value={range}
                            className="bg-[#1A1A1A]"
                          >
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-7">
                    <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/40">
                      Project Brief
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project — goals, timeline, and what success looks like..."
                      rows={5}
                      className={`input-premium w-full resize-none rounded-xl px-4 py-3.5 text-sm placeholder:text-white/25 ${
                        errors.message ? "border-red-500/60" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-[#FF0000]">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={sending}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    {sending ? (
                      <>
                        <motion.div
                          className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black"
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.8,
                            ease: "linear",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </motion.button>
                </form>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
