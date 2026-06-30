"use client";

import { motion } from "framer-motion";
import { Shield, ExternalLink, CheckCircle } from "lucide-react";

export default function PartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#D32F2F]/10 text-[#D32F2F] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            অংশীদার
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F4C3A] mb-4">
            আমাদের সহযোগী
          </h2>
          <div className="w-16 h-1 bg-[#D32F2F] rounded-full mx-auto mb-4" />
          <p className="text-neutral-600 max-w-lg mx-auto">
            বিশ্বস্ত সংস্থার সাথে অংশীদারিত্বে আমরা ন্যায়বিচার নিশ্চিত করি।
          </p>
        </motion.div>

        {/* RBIC Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-[#0F4C3A] to-[#1e4337] rounded-3xl p-8 sm:p-10 text-white overflow-hidden shadow-2xl">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D32F2F]/10 rounded-full translate-y-24 -translate-x-24" />

            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white/10 border-2 border-white/20 rounded-2xl flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    Rupali Bangladesh Investigation Cell
                  </h3>
                  <span className="bg-white/20 text-white/90 text-xs font-bold px-2.5 py-1 rounded-full">
                    RBIC
                  </span>
                </div>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-5">
                  Rupali Bangladesh Investigation Cell (RBIC). বাংলাদেশের সকলের প্রতিটি সোজা অভিযোগ বা অন্যায়ের বিরুদ্ধে লড়াই করতে পারেন।
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "পেশাদার তদন্ত দল",
                    "২৪/৭ সহায়তা",
                    "সম্পূর্ণ গোপনীয়তা",
                    "দ্রুত পদক্ষেপ",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="relative mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/60 text-sm">
                সরকারি ও বেসরকারি সংস্থার সাথে সরাসরি যোগাযোগ রক্ষা করে
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/25 transition-all duration-200"
              >
                আরও জানুন
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mt-14"
        >
          {[
            { label: "স্বচ্ছতা", value: "100%" },
            { label: "অভিযোগ সমাধান", value: "৮৭%" },
            { label: "গড় প্রতিক্রিয়া সময়", value: "৪৮ ঘণ্টা" },
            { label: "সক্রিয় মামলা", value: "৩৪২+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-[#0F4C3A] mb-1">{stat.value}</div>
              <div className="text-sm text-neutral-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
