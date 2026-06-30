"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { COMPLAINT_CATEGORIES } from "@/lib/constants/categories";
import { BANGLADESH_DISTRICTS, getUpazilas } from "@/lib/constants/locations";

interface Step2DetailsProps {
  title: string;
  description: string;
  category: string;
  district: string;
  upazila: string;
  onFieldChange: (field: string, value: string) => void;
  errors: Partial<Record<string, string>>;
}

export default function Step2Details({
  title,
  description,
  category,
  district,
  upazila,
  onFieldChange,
  errors,
}: Step2DetailsProps) {
  const upazilas = getUpazilas(district);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">
          অভিযোগের বিবরণ
        </h3>
        <p className="text-neutral-500 text-sm">
          অভিযোগের বিস্তারিত তথ্য যতটা সম্ভব স্পষ্টভাবে লিখুন।
        </p>
      </div>

      {/* Title */}
      <div>
        <label htmlFor="complaint-title" className="block text-sm font-semibold text-neutral-700 mb-2">
          অভিযোগের শিরোনাম
        </label>
        <input
          id="complaint-title"
          type="text"
          value={title}
          onChange={(e) => onFieldChange("title", e.target.value)}
          placeholder="সংক্ষেপে অভিযোগের বিষয় লিখুন"
          className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl bg-white focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-[#0F4C3A]/10 transition-all text-sm"
        />
      </div>

      {/* Category */}
      <div>
        <label htmlFor="complaint-category" className="block text-sm font-semibold text-neutral-700 mb-2">
          অভিযোগের ধরন <span className="text-[#D32F2F]">*</span>
        </label>
        <div className="relative">
          <select
            id="complaint-category"
            value={category}
            onChange={(e) => onFieldChange("category", e.target.value)}
            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl bg-white focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-[#0F4C3A]/10 transition-all text-sm appearance-none pr-10 cursor-pointer"
          >
            <option value="">— অভিযোগের ধরন বেছে নিন —</option>
            {COMPLAINT_CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.icon} {cat.labelBn} ({cat.labelEn})
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
        </div>
        {errors.category && (
          <p className="text-[#D32F2F] text-xs mt-1">{errors.category}</p>
        )}
      </div>

      {/* Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* District */}
        <div>
          <label htmlFor="district-select" className="block text-sm font-semibold text-neutral-700 mb-2">
            জেলা <span className="text-[#D32F2F]">*</span>
          </label>
          <div className="relative">
            <select
              id="district-select"
              value={district}
              onChange={(e) => {
                onFieldChange("district", e.target.value);
                onFieldChange("upazila", ""); // reset upazila on district change
              }}
              className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl bg-white focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-[#0F4C3A]/10 transition-all text-sm appearance-none pr-10 cursor-pointer"
            >
              <option value="">— জেলা বেছে নিন —</option>
              {BANGLADESH_DISTRICTS.map((d) => (
                <option key={d.name} value={d.name}>
                  {d.nameBn} ({d.name})
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
          </div>
          {errors.district && (
            <p className="text-[#D32F2F] text-xs mt-1">{errors.district}</p>
          )}
        </div>

        {/* Upazila */}
        <div>
          <label htmlFor="upazila-select" className="block text-sm font-semibold text-neutral-700 mb-2">
            উপজেলা <span className="text-[#D32F2F]">*</span>
          </label>
          <div className="relative">
            <select
              id="upazila-select"
              value={upazila}
              onChange={(e) => onFieldChange("upazila", e.target.value)}
              disabled={!district}
              className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl bg-white focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-[#0F4C3A]/10 transition-all text-sm appearance-none pr-10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">
                {district ? "— উপজেলা বেছে নিন —" : "আগে জেলা বেছে নিন"}
              </option>
              {upazilas.map((u) => (
                <option key={u.name} value={u.name}>
                  {u.nameBn} ({u.name})
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
          </div>
          {errors.upazila && (
            <p className="text-[#D32F2F] text-xs mt-1">{errors.upazila}</p>
          )}
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="complaint-desc" className="block text-sm font-semibold text-neutral-700 mb-2">
          বিস্তারিত বিবরণ <span className="text-[#D32F2F]">*</span>
          <span className="ml-2 text-neutral-400 font-normal">
            ({description.length}/5000 অক্ষর)
          </span>
        </label>
        <textarea
          id="complaint-desc"
          rows={7}
          value={description}
          onChange={(e) => onFieldChange("description", e.target.value)}
          maxLength={5000}
          placeholder="ঘটনার বিস্তারিত বিবরণ লিখুন। কখন, কোথায়, কে বা কারা জড়িত ছিল — সবকিছু যতটা সম্ভব স্পষ্টভাবে উল্লেখ করুন।"
          className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl bg-white focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-[#0F4C3A]/10 transition-all text-sm resize-y leading-relaxed"
        />
        {errors.description && (
          <p className="text-[#D32F2F] text-xs mt-1">{errors.description}</p>
        )}
        <p className="text-neutral-400 text-xs mt-2">
          💡 টিপস: তারিখ, সময়, স্থান এবং সাক্ষীর নাম উল্লেখ করলে তদন্ত সহজ হয়।
        </p>
      </div>
    </div>
  );
}
