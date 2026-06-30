import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, Users, Target, Award, Building, LandPlot, Scale } from "lucide-react";

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
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Background & Objective */}
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-10 border border-neutral-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#0F4C3A]/10 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-[#0F4C3A]" />
              </div>
              <h2 className="text-2xl font-bold text-[#0F4C3A]">প্রজেক্টের পটভূমি ও উদ্দেশ্য</h2>
            </div>
            <div className="space-y-4 text-neutral-600 leading-relaxed text-lg">
              <p>
                বাংলাদেশের প্রত্যন্ত অঞ্চলের মানুষ প্রায়শই বিভিন্ন অন্যায়, দুর্নীতি বা সহিংসতার শিকার হলেও ভৌগোলিক দূরত্ব, সামাজিক ভয়, আইনি জটিলতা এবং আর্থিক অসচ্ছলতার কারণে সঠিক সময়ে সঠিক প্রশাসনিক দপ্তরে পৌঁছাতে পারেন না।
              </p>
              <p>
                <strong>Ovizog.com</strong> এবং <strong>RBIC</strong>-এর মূল উদ্দেশ্য হলো তথ্যপ্রযুক্তির সর্বোচ্চ ব্যবহারের মাধ্যমে দেশের বর্তমান প্রশাসনিক কাঠামোর (ইউনিয়ন, উপজেলা, জেলা ও বিভাগীয় পর্যায়) সঙ্গে ভিকটিমের একটি সরাসরি ও সুরক্ষিত সেতু বন্ধন তৈরি করা।
              </p>
              <p>
                যেখানে নাগরিকেরা নাম প্রকাশ করে কিংবা সম্পূর্ণ বেনামে, ডিজিটাল তথ্যপ্রমাণসহ (ছবি, অডিও, ভিডিও) অভিযোগ দায়ের করতে পারবেন এবং RBIC-এর মাধ্যমে দ্রুততম সময়ে আইনি ও প্রশাসনিক সহযোগিতা পাবেন।
              </p>
            </div>
          </div>

          {/* Government Collaboration Model */}
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-10 border border-neutral-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#D32F2F]/10 rounded-xl flex items-center justify-center">
                <Building className="w-6 h-6 text-[#D32F2F]" />
              </div>
              <h2 className="text-2xl font-bold text-[#D32F2F]">বাংলাদেশ সরকারের সাথে কলাবোরেশন মডেল</h2>
            </div>
            
            <p className="text-neutral-600 mb-8 text-lg">
              এই প্রজেক্টের পূর্ণাঙ্গ সফলতা এবং আইনি কার্যকারিতার জন্য বাংলাদেশ সরকারের সক্রিয় অংশগ্রহণ ও কলাবোরেশন অপরিহার্য। সরকার যেভাবে এই প্রজেক্টে অংশীদার হতে পারে:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Home Ministry */}
              <div className="border border-neutral-200 rounded-xl p-6 bg-neutral-50/50 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4 text-[#0F4C3A] font-bold text-lg">
                  <Shield className="w-5 h-5" /> স্বরাষ্ট্র মন্ত্রণালয় ও পুলিশ
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  ওভিযোগ (Ovizog) অ্যাপের ব্যাকএন্ড প্যানেলকে সরাসরি বাংলাদেশ পুলিশের ক্রাইম ডেটা ম্যানেজমেন্ট বা স্থানীয় থানার (SP/UNO অফিস) সাথে ইন্টিগ্রেট করা। যাতে RBIC কোনো গুরুতর অপরাধের প্রাথমিক সত্যতা পেলে তা সরাসরি আইন প্রয়োগকারী সংস্থাকে হস্তান্তর করতে পারে।
                </p>
              </div>

              {/* ICT Division */}
              <div className="border border-neutral-200 rounded-xl p-6 bg-neutral-50/50 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4 text-[#0F4C3A] font-bold text-lg">
                  <LandPlot className="w-5 h-5" /> তথ্য ও যোগাযোগ প্রযুক্তি (ICT) বিভাগ
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  সরকারি &apos;জাতীয় তথ্য বাতায়ন&apos; এবং &apos;মাইগভ&apos; (MyGov) অ্যাপের সাথে অভিযোগ প্ল্যাটফর্মের সংযোগ স্থাপন। এছাড়া প্রত্যন্ত অঞ্চলের ডিজিটাল সেন্টারগুলোকে (UDC) এই সেবা সাধারণ মানুষের কাছে পৌঁছে দেওয়ার বুথ হিসেবে ব্যবহার করা।
                </p>
              </div>

              {/* Law Ministry */}
              <div className="border border-neutral-200 rounded-xl p-6 bg-neutral-50/50 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4 text-[#0F4C3A] font-bold text-lg">
                  <Scale className="w-5 h-5" /> আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  ভিকটিমদের জন্য সরকারি লিগ্যাল এইড (Legal Aid) সেবার সঙ্গে RBIC-এর প্যানেল আইনজীবীদের যুক্ত করা, যাতে দরিদ্র ভিকটিমদের সরকারি খরচে বিনামূল্যে আইনি লড়াইয়ের ব্যবস্থা করা যায়।
                </p>
              </div>

              {/* LGD */}
              <div className="border border-neutral-200 rounded-xl p-6 bg-neutral-50/50 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4 text-[#0F4C3A] font-bold text-lg">
                  <Users className="w-5 h-5" /> স্থানীয় সরকার বিভাগ (LGD)
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  ইউনিয়ন পরিষদ ও উপজেলা পরিষদের মাধ্যমে গ্রামীণ জনপদে এই অ্যাপের কার্যকারিতা ও সচেতনতা প্রচার করা।
                </p>
              </div>
            </div>
          </div>

          {/* Principles */}
          <div className="bg-[#0F4C3A] rounded-2xl shadow-xl p-8 md:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
              <Award className="w-64 h-64" />
            </div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
              <Award className="w-6 h-6 text-yellow-400" /> আমাদের মূলনীতি
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {[
                "গোপনীয়তা ও পরিচয় সুরক্ষা সর্বোচ্চ অগ্রাধিকার",
                "তথ্যের নিরাপদ সংরক্ষণ ও ব্যবহার",
                "স্বচ্ছ ও নিরপেক্ষ তদন্ত প্রক্রিয়া",
                "দ্রুত এবং কার্যকর পদক্ষেপ",
                "ডিজিটাল প্রমাণ সংরক্ষণ ও বিশ্লেষণ",
                "প্রান্তিক মানুষের আইনি প্রবেশাধিকার",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-lg backdrop-blur-sm">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                  <span className="font-medium text-white/90">{point}</span>
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
