import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GitMerge, Monitor, Search, Landmark, ArrowDown } from "lucide-react";

export const metadata: Metadata = {
  title: "কার্যপদ্ধতি | Ovizog.com",
  description: "Ovizog.com এবং RBIC-এর যৌথ কার্যপদ্ধতি সম্পর্কে জানুন।",
};

export default function WorkflowPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F4C3A] to-[#1e4337] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
            <GitMerge className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">যৌথ কার্যপদ্ধতি</h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            ওভিযোগ (Ovizog.com) এবং রূপালী বাংলাদেশ ইনভেস্টিগেশন সেল (RBIC)-এর সমন্বয়ে ৩টি স্তরে আমাদের কার্যপদ্ধতি পরিচালিত হয়।
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          <p className="text-center text-neutral-600 text-lg mb-16 max-w-2xl mx-auto">
            প্ল্যাটফর্মটি মূলত তিনটি স্তরে কাজ করবে, যার মাধ্যমে প্রত্যন্ত অঞ্চলের একজন সাধারণ নাগরিকের অভিযোগও দেশের প্রচলিত প্রশাসনিক ব্যবস্থার মাধ্যমে সমাধান করা সম্ভব হবে:
          </p>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-8 md:before:ml-[50%] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#0F4C3A] before:via-[#0F4C3A] before:to-transparent">
            
            {/* Step 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-[#0F4C3A] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 transform -translate-x-1/2">
                <Monitor className="w-6 h-6" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pl-12 md:pl-0 p-6 rounded-2xl bg-white shadow-md border border-neutral-100 ml-auto md:ml-0 md:group-even:text-right">
                <h3 className="mb-2 font-bold text-xl text-[#0F4C3A]">১. প্রথম স্তর: অভিযোগ তদারকি ও ফিল্টারিং</h3>
                <h4 className="mb-4 font-semibold text-neutral-900 text-sm">(Ovizog.com)</h4>
                <ul className="space-y-3 text-neutral-600 text-sm leading-relaxed md:group-even:text-right">
                  <li><strong>কেন্দ্রীয় কন্ট্রোল রুম:</strong> দেশের যেকোনো প্রান্ত থেকে নাগরিকের সাবমিট করা প্রতিটি অভিযোগ সরাসরি ওভিযোগ ডট কম-এর ড্যাশবোর্ডে জমা হবে।</li>
                  <li><strong>প্রাথমিক স্ক্রিনিং:</strong> অভিযোগ টিম অভিযোগগুলোর গুরুত্ব, বিষয়বস্তু এবং সংযুক্ত তথ্যপ্রমাণের প্রাথমিক সত্যতা যাচাই করবে, যাতে কোনো ভুয়া অভিযোগ মূল তদন্তে না যায়।</li>
                  <li><strong>কেস ডায়েরি ও ট্র্যাকিং:</strong> প্রতিটি বৈধ অভিযোগের জন্য একটি ইউনিক টোকেন আইডি জেনারেট করা হবে এবং অভিযোগটি পরবর্তী পর্যালোচনার জন্য RBIC-এর কাছে স্থানান্তরিত করা হবে।</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-[#D32F2F] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 transform -translate-x-1/2">
                <Search className="w-6 h-6" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pl-12 md:pl-0 p-6 rounded-2xl bg-white shadow-md border border-neutral-100 ml-auto md:ml-0 md:group-even:text-right">
                <h3 className="mb-2 font-bold text-xl text-[#D32F2F]">২. দ্বিতীয় স্তর: নিবিড় অনুসন্ধান ও তদন্ত</h3>
                <h4 className="mb-4 font-semibold text-neutral-900 text-sm">(RBIC)</h4>
                <ul className="space-y-3 text-neutral-600 text-sm leading-relaxed md:group-even:text-right">
                  <li><strong>ফ্যাক্ট চেকিং:</strong> অভিযোগ টিম থেকে প্রাপ্ত অভিযোগগুলো নিয়ে রূপালী বাংলাদেশ ইনভেস্টিগেশন সেল বিস্তারিত অনুসন্ধান শুরু করবে।</li>
                  <li><strong>ডিজিটাল ও লজিস্টিক ফরেনসিক:</strong> অভিযোগে সংযুক্ত অডিও, ভিডিও বা নথিপত্রগুলোর ফরেনসিক ও টেকনিক্যাল সত্যতা যাচাই করবে RBIC।</li>
                  <li><strong>তদন্ত প্রতিবেদন প্রস্তুত:</strong> ঘটনাটি যদি মাঠপর্যায়ের হয়, তবে RBIC-এর বিশেষায়িত টিম ছদ্মবেশে বা নিজস্ব সোর্সের মাধ্যমে প্রত্যন্ত অঞ্চল থেকে প্রকৃত সত্য উদ্ঘাটন করে একটি নিখুঁত ও অকাট্য &quot;তদন্ত রিপোর্ট&quot; (Investigation Report) তৈরি করবে।</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-[#0F4C3A] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 transform -translate-x-1/2">
                <Landmark className="w-6 h-6" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pl-12 md:pl-0 p-6 rounded-2xl bg-white shadow-md border border-neutral-100 ml-auto md:ml-0 md:group-even:text-right">
                <h3 className="mb-2 font-bold text-xl text-[#0F4C3A]">৩. তৃতীয় স্তর: আইনি রূপান্তর ও প্রশাসনিক ব্যবস্থা</h3>
                <h4 className="mb-4 font-semibold text-neutral-900 text-sm">(বাংলাদেশ পুলিশ ও সার্বিক প্রশাসন)</h4>
                <ul className="space-y-3 text-neutral-600 text-sm leading-relaxed md:group-even:text-right">
                  <li><strong>পুলিশ প্রশাসনের সাথে লিংকেজ:</strong> RBIC-এর তৈরি করা অকাট্য তথ্যপ্রমাণসহ তদন্ত প্রতিবেদনটি সরাসরি বাংলাদেশ পুলিশের সংশ্লিষ্ট উইং, রেঞ্জ ডিআইজি, জেলা পুলিশ সুপার (SP) কিংবা স্থানীয় থানায় আইনি ব্যবস্থা গ্রহণের জন্য প্রেরণ করা হবে।</li>
                  <li><strong>সার্বিক প্রশাসনিক সহযোগিতা:</strong> ঘটনাটি যদি দেওয়ানি, দুর্নীতি, সরকারি পরিষেবা কিংবা স্থানীয় ভূমি সংক্রান্ত হয়, তবে জেলা প্রশাসক (DC) কিংবা উপজেলা নির্বাহী অফিসারের (UNO) মাধ্যমে সার্বিক প্রশাসনিক হস্তক্ষেপ নিশ্চিত করা হবে।</li>
                  <li><strong>আইনি সুরক্ষা:</strong> ওভিযোগ ও RBIC-এর দেওয়া রিপোর্টের ভিত্তিতে পুলিশ প্রশাসন দ্রুততম সময়ে এজাহার (FIR) গ্রহণ, আসামিদের আইনের আওতায় আনা এবং ভিকটিমের শতভাগ আইনি সুরক্ষা নিশ্চিত করবে।</li>
                </ul>
              </div>
            </div>

          </div>
          
        </div>
      </section>

      <Footer />
    </main>
  );
}
