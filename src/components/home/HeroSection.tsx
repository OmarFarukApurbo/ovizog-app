"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Mic, ArrowRight, Lock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center bg-[#F8F9FA]">

      {/* ── Background Image on Right Side ── */}
      <div className="absolute inset-0 z-0 opacity-20 md:opacity-100">
        <Image
          src="/hero_bg.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-right-bottom md:object-[center_right]"
        />
      </div>

      {/* ── Gradient Overlay ── */}
      {/* Fades from solid background color on the left to transparent on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/90 md:via-[#F8F9FA]/95 lg:via-[#F8F9FA]/80 to-[#F8F9FA]/10 md:to-[#F8F9FA]/20 lg:to-transparent z-10 pointer-events-none" />

      {/* ── Background decoration grid ── */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none z-10"
        style={{
          backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full z-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="self-start inline-flex items-center gap-2 bg-[#0F4C3A]/10 border border-[#0F4C3A]/25 text-[#0F4C3A] text-sm font-semibold px-4 py-2 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-[#0F4C3A] rounded-full animate-pulse" />
            নাগরিক সুরক্ষা প্ল্যাটফর্ম
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-[1.25] mb-5"
          >
            <span className="block text-[#0F4C3A]">
              আপনার অধিকার সুরক্ষিত করুন,
            </span>
            <span className="block text-[#0F4C3A]">
              অন্যায়ের বিরুদ্ধে
            </span>
            <span className="block text-[#D32F2F]">
              গর্জে উঠুন!
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-700 text-lg sm:text-xl mb-8 max-w-lg leading-relaxed font-medium"
          >
            <span className="font-bold text-[#0F4C3A]">Ovizog.com</span> – The
            Digital Citizen Complaint and Legal Support Platform for Bangladesh.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-6"
          >
            <Link
              href="/submit"
              id="hero-cta-btn"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D32F2F] text-white font-bold text-lg rounded-xl hover:bg-[#b71c1c] active:bg-[#991b1b] transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
            >
              <Mic className="w-5 h-5" />
              অভিযোগ দায়ের করুন
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/track"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-[#0F4C3A] border-2 border-[#0F4C3A]/30 font-semibold rounded-xl hover:bg-[#0F4C3A] hover:text-white transition-all duration-200"
            >
              অভিযোগ ট্র্যাক করুন
            </Link>
          </motion.div>

          {/* Anonymous safety note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-2 text-neutral-600 text-sm mb-8"
          >
            <Lock className="w-4 h-4 text-[#0F4C3A] flex-shrink-0" />
            <span>
              <span className="font-bold text-[#0F4C3A]">বেনামে (নাম প্রকাশ না করে)</span>{" "}
              অভিযোগ করুন — আপনার পরিচয় সম্পূর্ণ সুরক্ষিত।
            </span>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 pt-6 border-t border-neutral-300"
          >
            {[
              { label: "১০,০০০+", sub: "অভিযোগ দায়ের" },
              { label: "৬৪", sub: "জেলা কভারেজ" },
              { label: "১০০%", sub: "পরিচয় গোপনীয়" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold text-[#0F4C3A]">
                  {stat.label}
                </div>
                <div className="text-xs text-neutral-600 font-medium">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

