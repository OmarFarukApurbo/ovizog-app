import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Scale, FileText, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "আইনের নিয়মাবলী | Ovizog.com",
  description: "অভিযোগ দায়েরের আগে প্রাসঙ্গিক আইন ও নিয়মাবলী জেনে নিন।",
};

const laws = [
  {
    title: "তথ্য ও যোগাযোগ প্রযুক্তি আইন ২০০৬",
    desc: "ডিজিটাল অপরাধ, সাইবার হুমকি এবং অনলাইন হয়রানির বিরুদ্ধে আইনি সুরক্ষা প্রদান করে।",
  },
  {
    title: "দুর্নীতি দমন কমিশন আইন ২০০৪",
    desc: "সরকারি কর্মকর্তাদের দুর্নীতি ও ঘুষ গ্রহণের বিরুদ্ধে অভিযোগ দায়েরের পদ্ধতি নির্ধারণ করে।",
  },
  {
    title: "নারী ও শিশু নির্যাতন দমন আইন ২০০০",
    desc: "নারী ও শিশু নির্যাতন, যৌন হয়রানি এবং পারিবারিক সহিংসতার বিরুদ্ধে কঠোর আইনি ব্যবস্থা।",
  },
  {
    title: "তথ্য অধিকার আইন ২০০৯",
    desc: "নাগরিকদের সরকারি তথ্যে প্রবেশাধিকার এবং জনস্বার্থ সম্পর্কিত তথ্য চাওয়ার অধিকার নিশ্চিত করে।",
  },
  {
    title: "ভোক্তা অধিকার সংরক্ষণ আইন ২০০৯",
    desc: "ভোক্তা প্রতারণা, নকল পণ্য এবং অনৈতিক ব্যবসায়িক অনুশীলনের বিরুদ্ধে সুরক্ষা।",
  },
];

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <Navbar />

      <section className="bg-gradient-to-br from-[#0F4C3A] to-[#1e4337] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">আইনের নিয়মাবলী</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            অভিযোগ দায়েরের আগে প্রাসঙ্গিক আইন জেনে নিন। আপনার অধিকার সম্পর্কে সচেতন থাকুন।
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Important notice */}
          <div className="flex gap-3 p-5 bg-amber-50 border border-amber-200 rounded-2xl mb-10">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>গুরুত্বপূর্ণ:</strong> এখানে প্রদত্ত তথ্য শুধুমাত্র সাধারণ তথ্যের উদ্দেশ্যে। নির্দিষ্ট আইনি পরামর্শের জন্য অনুগ্রহ করে একজন যোগ্য আইনজীবীর সাথে পরামর্শ করুন।
            </p>
          </div>

          <div className="space-y-6">
            {laws.map((law, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 flex gap-4">
                <div className="w-10 h-10 bg-[#0F4C3A]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="w-5 h-5 text-[#0F4C3A]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F4C3A] text-base mb-2">{law.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{law.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
