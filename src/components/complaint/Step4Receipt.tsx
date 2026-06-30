"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Copy, Check, ExternalLink, Home } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Step4ReceiptProps {
  tokenId: string;
  category: string;
  isAnonymous: boolean;
}

export default function Step4Receipt({ tokenId, category, isAnonymous }: Step4ReceiptProps) {
  const [copied, setCopied] = useState(false);

  const copyToken = async () => {
    await navigator.clipboard.writeText(tokenId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="text-center space-y-8">
      {/* Success animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-14 h-14 text-green-500" strokeWidth={1.5} />
          </div>
          {/* Ripple rings */}
          <div className="absolute inset-0 rounded-full bg-green-200 animate-ping opacity-30" />
        </div>
      </motion.div>

      {/* Success message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-extrabold text-[#0F4C3A] mb-3">
          অভিযোগ সফলভাবে দায়ের হয়েছে!
        </h3>
        <p className="text-neutral-600 text-base leading-relaxed max-w-md mx-auto">
          আপনার অভিযোগ RBIC-এর কাছে পাঠানো হয়েছে। নিচের ট্র্যাকিং আইডি দিয়ে অভিযোগের অগ্রগতি ট্র্যাক করুন।
        </p>
      </motion.div>

      {/* Token Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-[#0F4C3A] to-[#1e4337] rounded-2xl p-8 text-white max-w-sm mx-auto shadow-2xl"
      >
        <p className="text-white/70 text-sm mb-3 font-medium">আপনার ট্র্যাকিং আইডি</p>
        <div className="text-3xl sm:text-4xl font-black tracking-widest mb-5 font-mono">
          {tokenId}
        </div>

        {/* Copy button */}
        <button
          id="copy-token-btn"
          onClick={copyToken}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
            copied
              ? "bg-green-500 text-white"
              : "bg-white/15 border border-white/20 text-white hover:bg-white/25"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              কপি হয়েছে!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              আইডি কপি করুন
            </>
          )}
        </button>

        {/* Warning */}
        <p className="text-white/60 text-xs mt-4 leading-relaxed">
          ⚠️ এই আইডিটি সংরক্ষণ করুন। পরবর্তীতে অভিযোগের অগ্রগতি জানতে এটি প্রয়োজন হবে।
        </p>
      </motion.div>

      {/* Submission details */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 max-w-sm mx-auto text-left space-y-3"
      >
        <h4 className="font-bold text-neutral-800 text-sm">জমার বিবরণ</h4>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500">অভিযোগের ধরন</span>
          <span className="font-semibold text-neutral-800">{category || "—"}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500">পরিচয়</span>
          <span
            className={`font-semibold px-2.5 py-0.5 rounded-full text-xs ${
              isAnonymous
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {isAnonymous ? "বেনামী ✓" : "পরিচিত"}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500">বর্তমান অবস্থা</span>
          <span className="font-semibold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full text-xs">
            অপেক্ষমাণ
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500">জমার তারিখ</span>
          <span className="font-semibold text-neutral-800 text-xs">
            {new Date().toLocaleDateString("bn-BD", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <Link
          href={`/track?token=${tokenId}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0F4C3A] text-white font-semibold rounded-xl hover:bg-[#1e4337] transition-all shadow-md hover:shadow-lg"
        >
          <ExternalLink className="w-4 h-4" />
          অভিযোগ ট্র্যাক করুন
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-neutral-200 text-neutral-700 font-semibold rounded-xl hover:border-[#0F4C3A] hover:text-[#0F4C3A] transition-all"
        >
          <Home className="w-4 h-4" />
          প্রধান পাতায় ফিরুন
        </Link>
      </motion.div>
    </div>
  );
}
