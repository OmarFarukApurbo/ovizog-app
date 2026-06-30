"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Lock, EyeOff, FileVideo } from "lucide-react";

const pillars = [
  {
    icon: Lock,
    titleBn: "সহজ ও নিরাপদ",
    titleEn: "Easy & Secure",
    descBn: "আপনার সকল তথ্য নিরাপদ রাখা হয়। এন্ড-টু-এন্ড এনক্রিপশন নিশ্চিত করা হয়।",
    color: "from-[#0F4C3A] to-[#2d6854]",
    bgLight: "bg-[#0F4C3A]/8",
    iconColor: "text-[#0F4C3A]",
  },
  {
    icon: EyeOff,
    titleBn: "বেনামে অভিযোগ",
    titleEn: "Anonymous Complaints",
    descBn: "নাম প্রকাশ না করে (বেনামে) অভিযোগ করতে পারবেন। পরিচয় সম্পূর্ণ গোপন থাকবে।",
    color: "from-blue-600 to-blue-500",
    bgLight: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: FileVideo,
    titleBn: "তথ্যপ্রমাণ সহ",
    titleEn: "Digital Evidence Vault",
    descBn: "ডিজিটাল তথ্যপ্রমাণ (ছবি, অডিও, ভিডিও) সংযুক্ত করার সুবিধা রয়েছে।",
    color: "from-purple-600 to-purple-500",
    bgLight: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export default function PillarsSection() {
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
          <div className="inline-flex items-center gap-2 bg-[#0F4C3A]/10 text-[#0F4C3A] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            আমাদের মূলনীতি
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F4C3A] mb-4">
            কেন Ovizog.com বেছে নেবেন?
          </h2>
          <div className="w-16 h-1 bg-[#D32F2F] rounded-full mx-auto" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.titleBn}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl border border-neutral-100 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <div
                  className={`w-14 h-14 ${pillar.bgLight} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 ${pillar.iconColor}`} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-900 mb-1">{pillar.titleBn}</h3>
                <p className="text-sm font-medium text-neutral-400 mb-3">{pillar.titleEn}</p>
                <p className="text-neutral-600 leading-relaxed text-sm">{pillar.descBn}</p>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
