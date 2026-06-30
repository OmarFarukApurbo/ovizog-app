"use client";

import { motion, AnimatePresence } from "framer-motion";
import { UserX, User } from "lucide-react";

interface Step1IdentityProps {
  submissionType: "anonymous" | "identified";
  onChange: (type: "anonymous" | "identified") => void;
  // Identified fields
  fullName: string;
  phoneNumber: string;
  email: string;
  nationalId: string;
  onFieldChange: (field: string, value: string) => void;
  errors: Partial<Record<string, string>>;
}

export default function Step1Identity({
  submissionType,
  onChange,
  fullName,
  phoneNumber,
  email,
  nationalId,
  onFieldChange,
  errors,
}: Step1IdentityProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">
          পরিচয় নির্বাচন করুন
        </h3>
        <p className="text-neutral-500 text-sm">
          আপনি কি নাম প্রকাশ করে নাকি বেনামে অভিযোগ দায়ের করতে চান?
        </p>
      </div>

      {/* Toggle buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Anonymous */}
        <button
          id="anonymous-btn"
          type="button"
          onClick={() => onChange("anonymous")}
          className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-300 group ${
            submissionType === "anonymous"
              ? "border-[#0F4C3A] bg-[#0F4C3A]/5 shadow-lg"
              : "border-neutral-200 bg-white hover:border-[#0F4C3A]/50 hover:shadow-md"
          }`}
        >
          {submissionType === "anonymous" && (
            <motion.div
              layoutId="identity-highlight"
              className="absolute inset-0 rounded-2xl border-2 border-[#0F4C3A]"
            />
          )}

          <div className="relative flex items-start gap-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                submissionType === "anonymous"
                  ? "bg-[#0F4C3A] text-white"
                  : "bg-neutral-100 text-neutral-500 group-hover:bg-[#0F4C3A]/10 group-hover:text-[#0F4C3A]"
              }`}
            >
              <UserX className="w-6 h-6" />
            </div>
            <div>
              <div
                className={`font-bold text-lg mb-1 ${
                  submissionType === "anonymous" ? "text-[#0F4C3A]" : "text-neutral-800"
                }`}
              >
                বেনামী অভিযোগ
              </div>
              <div className="text-xs text-neutral-500 leading-relaxed">
                Anonymous Submission
              </div>
              <div className="text-sm text-neutral-600 mt-2 leading-relaxed">
                আপনার নাম, পরিচয় বা যোগাযোগের তথ্য সম্পূর্ণ গোপন থাকবে।
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                ✓ সম্পূর্ণ নিরাপদ
              </div>
            </div>
          </div>
        </button>

        {/* Identified */}
        <button
          id="identified-btn"
          type="button"
          onClick={() => onChange("identified")}
          className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-300 group ${
            submissionType === "identified"
              ? "border-[#D32F2F] bg-[#D32F2F]/5 shadow-lg"
              : "border-neutral-200 bg-white hover:border-[#D32F2F]/50 hover:shadow-md"
          }`}
        >
          {submissionType === "identified" && (
            <motion.div
              layoutId="identity-highlight"
              className="absolute inset-0 rounded-2xl border-2 border-[#D32F2F]"
            />
          )}

          <div className="relative flex items-start gap-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                submissionType === "identified"
                  ? "bg-[#D32F2F] text-white"
                  : "bg-neutral-100 text-neutral-500 group-hover:bg-[#D32F2F]/10 group-hover:text-[#D32F2F]"
              }`}
            >
              <User className="w-6 h-6" />
            </div>
            <div>
              <div
                className={`font-bold text-lg mb-1 ${
                  submissionType === "identified" ? "text-[#D32F2F]" : "text-neutral-800"
                }`}
              >
                নাম প্রকাশ করুন
              </div>
              <div className="text-xs text-neutral-500 leading-relaxed">
                Identified Submission
              </div>
              <div className="text-sm text-neutral-600 mt-2 leading-relaxed">
                আপনার নাম ও যোগাযোগ তথ্য প্রদান করুন। শুধুমাত্র তদন্তকারী দেখতে পাবেন।
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                ✓ দ্রুত প্রতিক্রিয়া
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Identified fields — shown only when "identified" is selected */}
      <AnimatePresence>
        {submissionType === "identified" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="bg-[#D32F2F]/5 border border-[#D32F2F]/20 rounded-2xl p-6 space-y-5">
              <div className="flex items-center gap-2 text-[#D32F2F] font-semibold text-sm mb-4">
                <User className="w-4 h-4" />
                আপনার ব্যক্তিগত তথ্য প্রদান করুন (শুধুমাত্র RBIC দেখতে পাবে)
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    পূর্ণ নাম <span className="text-[#D32F2F]">*</span>
                  </label>
                  <input
                    id="full-name-input"
                    type="text"
                    value={fullName}
                    onChange={(e) => onFieldChange("fullName", e.target.value)}
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl bg-white focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F]/10 transition-all text-sm"
                  />
                  {errors.fullName && (
                    <p className="text-[#D32F2F] text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    মোবাইল নম্বর
                  </label>
                  <input
                    id="phone-input"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => onFieldChange("phoneNumber", e.target.value)}
                    placeholder="০১XXXXXXXXX"
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl bg-white focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F]/10 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    ইমেইল ঠিকানা
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={(e) => onFieldChange("email", e.target.value)}
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl bg-white focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F]/10 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    জাতীয় পরিচয়পত্র নম্বর
                  </label>
                  <input
                    id="nid-input"
                    type="text"
                    value={nationalId}
                    onChange={(e) => onFieldChange("nationalId", e.target.value)}
                    placeholder="NID নম্বর (ঐচ্ছিক)"
                    className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl bg-white focus:outline-none focus:border-[#D32F2F] focus:ring-2 focus:ring-[#D32F2F]/10 transition-all text-sm"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
