"use client";

import { motion } from "framer-motion";
import { Globe, PenLine, UploadCloud, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "১",
    icon: Globe,
    titleBn: "সাইটে যান",
    descBn: "আকাউন্ট তৈরি বা লগইন করুন",
    color: "#0F4C3A",
  },
  {
    number: "২",
    icon: PenLine,
    titleBn: "অভিযোগ লিখুন",
    descBn: "অভিযোগের বিবরণ ও তথ্য লিখুন",
    color: "#0F4C3A",
  },
  {
    number: "৩",
    icon: UploadCloud,
    titleBn: "প্রমাণপত্র আপলোড করুন",
    descBn: "ডিজিটাল তথ্যপ্রমাণ আপলোড করুন",
    color: "#0F4C3A",
  },
  {
    number: "৪",
    icon: CheckCircle2,
    titleBn: "জমা দিন",
    descBn: "জমা দিন এবং ট্রাকিং আইডি নিন",
    color: "#D32F2F",
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#0F4C3A]/10 text-[#0F4C3A] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            কিভাবে কাজ করে
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F4C3A] mb-4">
            অভিযোগের ধাপসমূহ
          </h2>
          <div className="w-16 h-1 bg-[#D32F2F] rounded-full mx-auto mb-4" />
          <p className="text-neutral-600 max-w-lg mx-auto">
            মাত্র চারটি সহজ ধাপে আপনার অভিযোগ দায়ের করুন এবং ট্র্যাকিং আইডি পান।
          </p>
        </motion.div>

        {/* Desktop: Horizontal steps with connecting line */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-7 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-neutral-200 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-[#0F4C3A] to-[#D32F2F] origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Circle */}
                  <div
                    className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mb-5 transition-transform duration-300 group-hover:scale-110`}
                    style={{ backgroundColor: isLast ? "#D32F2F" : "#0F4C3A" }}
                  >
                    {step.number}
                    {/* Ripple effect */}
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-20"
                      style={{ backgroundColor: isLast ? "#D32F2F" : "#0F4C3A" }}
                    />
                  </div>

                  {/* Icon card */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:-translate-y-1 transition-transform duration-300`}
                    style={{ backgroundColor: isLast ? "#D32F2F10" : "#0F4C3A10" }}
                  >
                    <Icon
                      className="w-8 h-8"
                      style={{ color: isLast ? "#D32F2F" : "#0F4C3A" }}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 mb-2">
                    ({step.titleBn})
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.descBn}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="/submit"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#D32F2F] text-white font-bold text-lg rounded-xl hover:bg-[#b71c1c] transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            এখনই শুরু করুন
            <CheckCircle2 className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
