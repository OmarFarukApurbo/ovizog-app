"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2, CheckCircle2, Clock, FileSearch, Send, AlertCircle } from "lucide-react";
import type { Complaint } from "@/types/complaint";

const STATUS_STEPS = [
  {
    key: "Pending",
    labelBn: "অপেক্ষমাণ",
    labelEn: "Pending",
    icon: Clock,
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-300",
  },
  {
    key: "Under Investigation",
    labelBn: "তদন্তাধীন",
    labelEn: "Under Investigation",
    icon: FileSearch,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-300",
  },
  {
    key: "Forwarded",
    labelBn: "প্রেরিত",
    labelEn: "Forwarded to Authority",
    icon: Send,
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-300",
  },
  {
    key: "Resolved",
    labelBn: "সমাধান হয়েছে",
    labelEn: "Resolved",
    icon: CheckCircle2,
    color: "text-green-500",
    bg: "bg-green-50",
    border: "border-green-300",
  },
];

function getStepIndex(status: string): number {
  return STATUS_STEPS.findIndex((s) => s.key === status);
}

export default function TrackingPortal() {
  const searchParams = useSearchParams();
  const [token, setToken] = useState(searchParams.get("token") ?? "");
  const [complaint, setComplaint] = useState<Complaint | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  // Auto-search if token is in URL
  useEffect(() => {
    const urlToken = searchParams.get("token");
    if (urlToken) {
      setToken(urlToken);
      performSearch(urlToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const performSearch = async (searchToken: string) => {
    if (!searchToken.trim()) {
      setError("ট্র্যাকিং আইডি লিখুন");
      return;
    }

    setLoading(true);
    setError("");
    setSearched(false);
    setComplaint(null);

    try {
      const res = await fetch(
        `/api/track-complaint?token=${encodeURIComponent(searchToken.trim())}`
      );
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "অভিযোগ খুঁজে পাওয়া যায়নি");
      }

      setComplaint(data.complaint);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "অভিযোগ খুঁজে পাওয়া যায়নি");
    } finally {
      setLoading(false);
      setSearched(true);
    }
  };

  const activeStepIndex = complaint ? getStepIndex(complaint.status) : -1;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-[#0F4C3A]/10 text-[#0F4C3A] text-sm font-semibold px-4 py-2 rounded-full mb-4">
          <Search className="w-4 h-4" />
          অভিযোগ ট্র্যাকার
        </div>
        <h1 className="text-3xl font-extrabold text-neutral-900 mb-2">
          অভিযোগের অগ্রগতি দেখুন
        </h1>
        <p className="text-neutral-500">
          আপনার ট্র্যাকিং আইডি দিয়ে অভিযোগের বর্তমান অবস্থা জানুন।
        </p>
      </div>

      {/* Search Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-6 sm:p-8 mb-8">
        <div className="flex gap-3">
          <div className="flex-1">
            <input
              id="token-input"
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === "Enter" && performSearch(token)}
              placeholder="OV-2026-XXXXXXXX"
              className="w-full px-4 py-3.5 border-2 border-neutral-200 rounded-xl bg-white focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-[#0F4C3A]/10 transition-all text-base font-mono tracking-wider placeholder:font-sans placeholder:tracking-normal"
            />
            {error && (
              <p className="text-[#D32F2F] text-sm mt-2 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                {error}
              </p>
            )}
          </div>
          <button
            id="track-search-btn"
            onClick={() => performSearch(token)}
            disabled={loading}
            className="px-5 py-3.5 bg-[#0F4C3A] text-white rounded-xl font-semibold hover:bg-[#1e4337] transition-all shadow-md hover:shadow-lg disabled:opacity-60 flex items-center gap-2 flex-shrink-0"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Search className="w-5 h-5" />
            )}
            <span className="hidden sm:inline">খুঁজুন</span>
          </button>
        </div>
      </div>

      {/* Results */}
      <AnimatePresence mode="wait">
        {searched && !complaint && !loading && (
          <motion.div
            key="not-found"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-10 text-center"
          >
            <AlertCircle className="w-14 h-14 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-neutral-700 mb-2">অভিযোগ পাওয়া যায়নি</h3>
            <p className="text-neutral-500 text-sm">
              এই ট্র্যাকিং আইডি দিয়ে কোনো অভিযোগ পাওয়া যায়নি। আইডিটি সঠিক কিনা পুনরায় যাচাই করুন।
            </p>
          </motion.div>
        )}

        {complaint && (
          <motion.div
            key="found"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden"
          >
            {/* Token header */}
            <div className="bg-gradient-to-r from-[#0F4C3A] to-[#1e4337] px-6 sm:px-8 py-6 text-white">
              <p className="text-white/60 text-sm mb-1">অভিযোগ নং</p>
              <p className="text-2xl font-black font-mono tracking-widest">
                {complaint.token_id}
              </p>
              <p className="text-white/60 text-xs mt-2">
                দায়ের:{" "}
                {new Date(complaint.created_at).toLocaleDateString("bn-BD", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              {/* Progress Stepper */}
              <div>
                <h3 className="font-bold text-neutral-800 mb-6 text-base">অভিযোগের অগ্রগতি</h3>
                <div className="space-y-4">
                  {STATUS_STEPS.map((statusStep, i) => {
                    const Icon = statusStep.icon;
                    const isDone = i <= activeStepIndex;
                    const isActive = i === activeStepIndex;

                    return (
                      <motion.div
                        key={statusStep.key}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`flex items-start gap-4 p-4 rounded-2xl border-2 transition-all ${
                          isActive
                            ? `${statusStep.bg} ${statusStep.border}`
                            : isDone
                            ? "bg-[#0F4C3A]/5 border-[#0F4C3A]/20"
                            : "bg-neutral-50 border-neutral-100"
                        }`}
                      >
                        {/* Icon circle */}
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            isActive
                              ? `${statusStep.bg} ${statusStep.color}`
                              : isDone
                              ? "bg-[#0F4C3A]/15 text-[#0F4C3A]"
                              : "bg-neutral-100 text-neutral-300"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`font-bold text-sm ${
                                isActive
                                  ? statusStep.color
                                  : isDone
                                  ? "text-[#0F4C3A]"
                                  : "text-neutral-400"
                              }`}
                            >
                              {statusStep.labelBn}
                            </span>
                            <span className="text-neutral-400 text-xs">
                              {statusStep.labelEn}
                            </span>
                            {isActive && (
                              <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${statusStep.bg} ${statusStep.color}`}>
                                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse inline-block" />
                                বর্তমান অবস্থা
                              </span>
                            )}
                            {isDone && !isActive && (
                              <span className="text-[#0F4C3A] text-xs">✓ সম্পন্ন</span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Complaint details */}
              <div className="bg-neutral-50 rounded-2xl p-5 space-y-3">
                <h4 className="font-bold text-neutral-800 text-sm">অভিযোগের তথ্য</h4>
                {complaint.title && (
                  <div className="flex gap-3">
                    <span className="text-neutral-500 text-sm w-28 flex-shrink-0">শিরোনাম</span>
                    <span className="text-neutral-800 text-sm font-medium">{complaint.title}</span>
                  </div>
                )}
                <div className="flex gap-3">
                  <span className="text-neutral-500 text-sm w-28 flex-shrink-0">ধরন</span>
                  <span className="text-neutral-800 text-sm font-medium">{complaint.category}</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-neutral-500 text-sm w-28 flex-shrink-0">জেলা</span>
                  <span className="text-neutral-800 text-sm font-medium">
                    {complaint.location_district}, {complaint.location_upazila}
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-neutral-500 text-sm w-28 flex-shrink-0">পরিচয়</span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                      complaint.is_anonymous
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {complaint.is_anonymous ? "বেনামী" : "পরিচিত"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
