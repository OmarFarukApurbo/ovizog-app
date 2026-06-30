import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "যোগাযোগ | Ovizog.com",
  description: "Ovizog.com-এর সাথে যোগাযোগ করুন।",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <Navbar />

      <section className="bg-gradient-to-br from-[#0F4C3A] to-[#1e4337] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">যোগাযোগ করুন</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            যেকোনো প্রশ্ন বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#0F4C3A] mb-6">যোগাযোগের তথ্য</h2>

            {[
              { icon: Phone, label: "ফোন", value: "+193 515 543 329", href: "tel:+193515543329" },
              {
                icon: Mail,
                label: "ইমেইল",
                value: "infock.contact@ovizog.com",
                href: "mailto:infock.contact@ovizog.com",
              },
              {
                icon: MapPin,
                label: "ঠিকানা",
                value: "Dhaka, Bangladesh",
                href: "#",
              },
              {
                icon: Clock,
                label: "কার্যসময়",
                value: "শনি–বৃহ: ৯টা – ৬টা",
                href: "#",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-neutral-100 hover:border-[#0F4C3A]/30 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-[#0F4C3A]/10 rounded-xl flex items-center justify-center group-hover:bg-[#0F4C3A] transition-colors">
                  <Icon className="w-5 h-5 text-[#0F4C3A] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium">{label}</p>
                  <p className="font-semibold text-neutral-800">{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl shadow-md border border-neutral-100 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#0F4C3A] mb-6">বার্তা পাঠান</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">আপনার নাম</label>
                <input
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:outline-none focus:border-[#0F4C3A] transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">ইমেইল</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:outline-none focus:border-[#0F4C3A] transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">বার্তা</label>
                <textarea
                  rows={5}
                  placeholder="আপনার বার্তা লিখুন..."
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:outline-none focus:border-[#0F4C3A] transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-[#0F4C3A] text-white font-bold rounded-xl hover:bg-[#1e4337] transition-all shadow-md hover:shadow-lg"
              >
                বার্তা পাঠান
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
