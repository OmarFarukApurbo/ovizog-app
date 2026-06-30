import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Lock, ShieldCheck, UserX, Database, HeartHandshake, EyeOff, FileKey, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "নিরাপত্তা ও পলিসি | Ovizog.com",
  description: "Ovizog.com-এর ডেটা সিকিউরিটি ফ্রেমওয়ার্ক এবং ভিকটিম প্রোটেকশন পলিসি সম্পর্কে জানুন।",
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F4C3A] to-[#1e4337] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">নিরাপত্তা ও পলিসি</h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Ovizog.com এবং RBIC প্ল্যাটফর্মে আপনার ডেটা এবং পরিচয়ের সম্পূর্ণ নিরাপত্তা নিশ্চিত করতে আমরা আন্তর্জাতিক মানের সিকিউরিটি প্রোটোকল অনুসরণ করি।
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Data Security Framework */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#0F4C3A]/10 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-[#0F4C3A]" />
              </div>
              <h2 className="text-3xl font-bold text-[#0F4C3A]">ডেটা সিকিউরিটি ফ্রেমওয়ার্ক</h2>
            </div>
            
            <p className="text-neutral-600 mb-8 text-lg">
              সংগৃহীত প্রতিটি নাগরিকের ডেটা সম্পূর্ণ সুরক্ষিত রাখতে ডিজিটাল নিরাপত্তা আইন এবং আন্তর্জাতিক সাইবার সিকিউরিটি স্ট্যান্ডার্ড (যেমন- ISO 27001) অনুসরণ করা হয়।
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#0F4C3A]/10 rounded-lg flex items-center justify-center mb-4">
                  <FileKey className="w-5 h-5 text-[#0F4C3A]" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">এন্ড-টু-এন্ড এনক্রিপশন</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  অভিযোগকারী যখন কোনো তথ্য, অডিও, ভিডিও বা নথি আপলোড করবেন, তখন তা ট্রান্সমিশন এবং স্টোরেজ উভয় অবস্থাতেই (AES-256 বিট এনক্রিপশন) এনক্রিপ্ট হয়ে যাবে। ফলে ডেটাবেজ হ্যাক হলেও মূল তথ্য কেউ দেখতে পারবে না।
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#0F4C3A]/10 rounded-lg flex items-center justify-center mb-4">
                  <EyeOff className="w-5 h-5 text-[#0F4C3A]" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">মেটাডেটা রিমুভাল (Metadata Stripping)</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  বেনামী অভিযোগের ক্ষেত্রে ব্যবহারকারী যে ছবি বা ভিডিও আপলোড করবেন, তা সার্ভারে জমা হওয়ার সাথে সাথে ফাইল থেকে লোকেশন, ডিভাইস আইডি এবং আইপি অ্যাড্রেস (IP Address) স্বয়ংক্রিয়ভাবে মুছে (Strip) ফেলা হবে।
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#0F4C3A]/10 rounded-lg flex items-center justify-center mb-4">
                  <UserX className="w-5 h-5 text-[#0F4C3A]" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">রোল-বেসড অ্যাক্সেস কন্ট্রোল (RBAC)</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  ওভিযোগ ও RBIC-এর সকল কর্মকর্তা সমস্ত ডেটা দেখতে পারবেন না। যার যতটুকু প্রয়োজন, তাকে কেবল ততটুকু ডেটার অ্যাক্সেস দেওয়া হবে। প্রতিবার ডেটা দেখার সময় সিস্টেমে ডিজিটাল অডিট লগ (Audit Log) তৈরি হবে।
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#0F4C3A]/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#0F4C3A]" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">সুরক্ষিত সরকারি ক্লাউড হোস্টিং</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  সরকারের সাথে কলাবোরেশনের অংশ হিসেবে পুরো ডেটাবেজটি বাংলাদেশ কম্পিউটার কাউন্সিলের (BCC) জাতীয় ডেটা সেন্টারে বা অত্যন্ত সুরক্ষিত ক্লাউড সার্ভারে হোস্ট করা হবে, যা সাইবার আক্রমণ প্রতিরোধে সক্ষম।
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-neutral-200 w-full" />

          {/* Victim Protection Policy */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#D32F2F]/10 rounded-xl flex items-center justify-center">
                <ShieldAlert className="w-6 h-6 text-[#D32F2F]" />
              </div>
              <h2 className="text-3xl font-bold text-[#D32F2F]">ভিকটিম প্রোটেকশন পলিসি</h2>
            </div>
            
            <p className="text-neutral-600 mb-8 text-lg">
              ভিকটিম বা অভিযোগকারীর শারীরিক, সামাজিক ও মানসিক নিরাপত্তা নিশ্চিত করা এই প্রজেক্টের প্রধান অঙ্গীকার। এর অধীনে নিম্নলিখিত নীতিসমূহ কঠোরভাবে বজায় রাখা হবে:
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#D32F2F]/10 flex flex-col md:flex-row gap-6">
                <div className="w-12 h-12 bg-[#D32F2F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#D32F2F] font-bold text-xl">১</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">আইডেন্টিটি মাস্কিং (Identity Masking)</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    যদি কোনো ভিকটিম নাম প্রকাশ করে অভিযোগ করেন, তবুও তদন্তের স্বার্থে বাংলাদেশ পুলিশ বা প্রশাসনের কাছে ফাইল হস্তান্তরের সময় ভিকটিমের সম্মতি ছাড়া তার আসল নাম-পরিচয় প্রকাশ করা হবে না। ফাইলে তাকে একটি কোড নম্বর (যেমন- V-2026-X) দ্বারা চিহ্নিত করা হবে।
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#D32F2F]/10 flex flex-col md:flex-row gap-6">
                <div className="w-12 h-12 bg-[#D32F2F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#D32F2F] font-bold text-xl">২</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">হয়রানি ও প্রতিশোধমূলক ব্যবস্থার বিরুদ্ধে আইনি সুরক্ষা</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    কোনো শক্তিশালী অপরাধী পক্ষ যদি বুঝতে পেরে ভিকটিম বা তার পরিবারকে হুমকি প্রদান করে, তবে RBIC তাৎক্ষণিকভাবে বাংলাদেশ পুলিশের বিশেষ টিম বা স্থানীয় প্রশাসনের মাধ্যমে ভিকটিমকে জরুরি পুলিশি নিরাপত্তা (Emergency Police Protection) প্রদানের ব্যবস্থা করবে।
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#D32F2F]/10 flex flex-col md:flex-row gap-6">
                <div className="w-12 h-12 bg-[#D32F2F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#D32F2F] font-bold text-xl">৩</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">ডিজিটাল কাউন্সেলিং ও লিগ্যাল এইড</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    প্রত্যন্ত অঞ্চলের ভিকটিমরা প্রায়শই মানসিকভাবে ভেঙে পড়েন। ওভিযোগ অ্যাপের মাধ্যমে ভিকটিমদের জন্য বিনামূল্যে মনস্তাত্ত্বিক পরামর্শ (Psychological Counseling) এবং সরকারি অনুদানে প্যানেল আইনজীবীদের মাধ্যমে আইনি লড়াইয়ের (Legal Aid) ব্যবস্থা করা হবে।
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#D32F2F]/10 flex flex-col md:flex-row gap-6">
                <div className="w-12 h-12 bg-[#D32F2F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#D32F2F] font-bold text-xl">৪</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">মিথ্যা বা উদ্দেশ্যপ্রণোদিত অভিযোগের ফিল্টারিং</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    ভিকটিমদের সুরক্ষার পাশাপাশি এই পলিসির অপব্যবহার রুখতে কঠোর স্ক্রিনিং করা হবে। কোনো ব্যক্তি যদি ব্যক্তিগত শত্রুতার জেরে মিথ্যা তথ্য দিয়ে কাউকে হেনস্তা করার চেষ্টা করেন, তবে প্রাথমিক তদন্তেই তা বাতিল করে ওভিযোগ-এর ব্ল্যাকলিস্টে যুক্ত করা হবে।
                  </p>
                </div>
              </div>
            </div>
            
            {/* Government Promises */}
            <div className="mt-10 bg-[#0F4C3A] rounded-2xl p-8 text-white relative overflow-hidden shadow-lg">
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <HeartHandshake className="w-48 h-48" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">সরকারের কাছে আমাদের প্রতিশ্রুতি ও প্রত্যাশা</h3>
              <p className="text-white/90 leading-relaxed relative z-10 mb-4">
                আমরা অত্যন্ত বিশ্বস্ততার সাথে প্রতিটি অভিযোগের সত্যতা যাচাই করব, ডেটার শতভাগ গোপনীয়তা রক্ষা করব এবং কোনো রাজনৈতিক বা ব্যক্তিগত এজেন্ডা ছাড়া কেবল দেশের সেবায় প্রশাসনকে অকাট্য প্রমাণ সরবরাহ করব।
              </p>
              <p className="text-white/90 leading-relaxed relative z-10 font-bold">
                সরকারের কাছে প্রত্যাশা: মাঠপর্যায়ে পুলিশ প্রশাসন, উপজেলা প্রশাসন (UNO) এবং জেলা প্রশাসন (DC) যেন আমাদের প্রেরিত তদন্ত রিপোর্টগুলোকে সর্বোচ্চ গুরুত্ব দিয়ে দ্রুত আইনি ব্যবস্থা (FIR/Action) গ্রহণ করে।
              </p>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
