"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Loader2, Shield } from "lucide-react";
import Step1Identity from "./Step1Identity";
import Step2Details from "./Step2Details";
import Step3Evidence from "./Step3Evidence";
import Step4Receipt from "./Step4Receipt";
import { getCategoryLabel } from "@/lib/constants/categories";

type SubmissionType = "anonymous" | "identified";

interface FormState {
  submissionType: SubmissionType;
  fullName: string;
  phoneNumber: string;
  email: string;
  nationalId: string;
  title: string;
  description: string;
  category: string;
  district: string;
  upazila: string;
  evidenceFiles: File[];
}

interface FormErrors {
  [key: string]: string | undefined;
  fullName?: string;
  description?: string;
  category?: string;
  district?: string;
  upazila?: string;
}

const STEP_LABELS = [
  "পরিচয়",
  "বিবরণ",
  "প্রমাণপত্র",
  "রসিদ",
];

const initialState: FormState = {
  submissionType: "anonymous",
  fullName: "",
  phoneNumber: "",
  email: "",
  nationalId: "",
  title: "",
  description: "",
  category: "",
  district: "",
  upazila: "",
  evidenceFiles: [],
};

export default function ComplaintWizard() {
  const [step, setStep] = useState(0);
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tokenId, setTokenId] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleFieldChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep = (): boolean => {
    const newErrors: FormErrors = {};

    if (step === 0 && formState.submissionType === "identified") {
      if (!formState.fullName.trim()) {
        newErrors.fullName = "পূর্ণ নাম আবশ্যক";
      }
    }

    if (step === 1) {
      if (!formState.description.trim() || formState.description.length < 20) {
        newErrors.description = "কমপক্ষে ২০ অক্ষরের বিবরণ প্রদান করুন";
      }
      if (!formState.category) {
        newErrors.category = "অভিযোগের ধরন বেছে নিন";
      }
      if (!formState.district) {
        newErrors.district = "জেলা বেছে নিন";
      }
      if (!formState.upazila) {
        newErrors.upazila = "উপজেলা বেছে নিন";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const payload = new FormData();
      payload.append("submissionType", formState.submissionType);
      payload.append("title", formState.title);
      payload.append("description", formState.description);
      payload.append("category", formState.category);
      payload.append("district", formState.district);
      payload.append("upazila", formState.upazila);

      if (formState.submissionType === "identified") {
        payload.append("fullName", formState.fullName);
        payload.append("phoneNumber", formState.phoneNumber);
        payload.append("email", formState.email);
        payload.append("nationalId", formState.nationalId);
      }

      formState.evidenceFiles.forEach((file) => {
        payload.append("evidence", file);
      });

      const response = await fetch("/api/submit-complaint", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "অভিযোগ জমা দিতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
      }

      setTokenId(data.token_id);
      setStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: unknown) {
      setSubmitError(
        err instanceof Error ? err.message : "অভিযোগ জমা দিতে সমস্যা হয়েছে। আবার চেষ্টা করুন।"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2.5 bg-[#0F4C3A]/10 border border-[#0F4C3A]/20 text-[#0F4C3A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <Shield className="w-4 h-4" />
          নিরাপদ অভিযোগ প্রক্রিয়া
        </div>
        <h1 className="text-3xl font-extrabold text-neutral-900 mb-2">
          অভিযোগ দায়ের করুন
        </h1>
        <p className="text-neutral-500">
          সহজ ৪টি ধাপে আপনার অভিযোগ জমা দিন
        </p>
      </div>

      {/* Step Indicator */}
      {step < 3 && (
        <div className="flex items-center justify-center mb-8">
          {STEP_LABELS.slice(0, 3).map((label, i) => (
            <div key={label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    i === step
                      ? "bg-[#0F4C3A] text-white shadow-lg scale-110"
                      : i < step
                      ? "bg-[#0F4C3A]/20 text-[#0F4C3A]"
                      : "bg-neutral-200 text-neutral-500"
                  }`}
                >
                  {i < step ? "✓" : i + 1}
                </div>
                <span
                  className={`text-xs mt-1.5 font-medium ${
                    i === step ? "text-[#0F4C3A]" : "text-neutral-400"
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < 2 && (
                <div
                  className={`w-16 sm:w-24 h-0.5 mb-5 mx-2 transition-colors duration-300 ${
                    i < step ? "bg-[#0F4C3A]" : "bg-neutral-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden">
        <div className="p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <Step1Identity
                  submissionType={formState.submissionType}
                  onChange={(type) => setFormState((p) => ({ ...p, submissionType: type }))}
                  fullName={formState.fullName}
                  phoneNumber={formState.phoneNumber}
                  email={formState.email}
                  nationalId={formState.nationalId}
                  onFieldChange={handleFieldChange}
                  errors={errors}
                />
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <Step2Details
                  title={formState.title}
                  description={formState.description}
                  category={formState.category}
                  district={formState.district}
                  upazila={formState.upazila}
                  onFieldChange={handleFieldChange}
                  errors={errors}
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <Step3Evidence
                  files={formState.evidenceFiles}
                  onFilesChange={(files) =>
                    setFormState((p) => ({ ...p, evidenceFiles: files }))
                  }
                />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Step4Receipt
                  tokenId={tokenId}
                  category={getCategoryLabel(formState.category, "bn")}
                  isAnonymous={formState.submissionType === "anonymous"}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit error */}
          {submitError && (
            <div className="mt-4 p-4 bg-[#D32F2F]/10 border border-[#D32F2F]/30 rounded-xl text-[#D32F2F] text-sm">
              ⚠️ {submitError}
            </div>
          )}
        </div>

        {/* Navigation Footer */}
        {step < 3 && (
          <div className="px-6 sm:px-8 py-5 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
            {step > 0 ? (
              <button
                id="wizard-back-btn"
                type="button"
                onClick={handleBack}
                className="flex items-center gap-2 px-5 py-2.5 text-neutral-600 border border-neutral-200 rounded-xl font-semibold text-sm hover:border-[#0F4C3A] hover:text-[#0F4C3A] transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                পূর্ববর্তী
              </button>
            ) : (
              <div />
            )}

            {step < 2 ? (
              <button
                id="wizard-next-btn"
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#0F4C3A] text-white rounded-xl font-semibold text-sm hover:bg-[#1e4337] transition-all shadow-md hover:shadow-lg"
              >
                পরবর্তী
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                id="wizard-submit-btn"
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-7 py-3 bg-[#D32F2F] text-white rounded-xl font-bold text-sm hover:bg-[#b71c1c] transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    জমা হচ্ছে...
                  </>
                ) : (
                  <>
                    অভিযোগ জমা দিন
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Progress text */}
      {step < 3 && (
        <p className="text-center text-neutral-400 text-xs mt-4">
          ধাপ {step + 1} / ৩ — আপনার তথ্য সম্পূর্ণ এনক্রিপ্টেড
        </p>
      )}
    </div>
  );
}
