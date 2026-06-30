import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, Users, Target, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে | Ovizog.com",
  description: "Ovizog.com সম্পর্কে জানুন — বাংলাদেশের ডিজিটাল নাগরিক সুরক্ষা প্ল্যাটফর্ম।",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F4C3A] to-[#1e4337] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">আমাদের সম্পর্কে</h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Ovizog.com একটি ডিজিটাল নাগরিক অভিযোগ ও আইনি সহায়তা প্ল্যাটফর্ম যা বাংলাদেশের প্রতিটি নাগরিকের অধিকার সুরক্ষায় প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#0F4C3A] mb-4 flex items-center gap-3">
              <Target className="w-6 h-6" /> আমাদের লক্ষ্য
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              বাংলাদেশের প্রতিটি নাগরিককে একটি নিরাপদ, সহজলভ্য এবং কার্যকর ডিজিটাল মাধ্যমে তাদের অভিযোগ দায়ের করার সুযোগ প্রদান করা। আমরা বিশ্বাস করি যে ন্যায়বিচার পাওয়া প্রতিটি নাগরিকের মৌলিক অধিকার।
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#0F4C3A] mb-4 flex items-center gap-3">
              <Users className="w-6 h-6" /> RBIC অংশীদারিত্ব
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              আমরা Rupali Bangladesh Investigation Cell (RBIC)-এর সাথে সরাসরি অংশীদারিত্বে কাজ করি। RBIC একটি পেশাদার তদন্ত সংস্থা যারা দুর্নীতি, সহিংসতা এবং নাগরিক অধিকার লঙ্ঘনের বিরুদ্ধে লড়াই করে।
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#0F4C3A] mb-4 flex items-center gap-3">
              <Award className="w-6 h-6" /> আমাদের মূলনীতি
            </h2>
            <ul className="space-y-3 text-neutral-600">
              {[
                "গোপনীয়তা ও পরিচয় সুরক্ষা সর্বোচ্চ অগ্রাধিকার",
                "তথ্যের নিরাপদ সংরক্ষণ ও ব্যবহার",
                "স্বচ্ছ ও নিরপেক্ষ তদন্ত প্রক্রিয়া",
                "দ্রুত এবং কার্যকর পদক্ষেপ",
                "ডিজিটাল প্রমাণ সংরক্ষণ ও বিশ্লেষণ",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#0F4C3A] rounded-full flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
