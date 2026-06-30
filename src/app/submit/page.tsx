import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ComplaintWizard from "@/components/complaint/ComplaintWizard";

export const metadata: Metadata = {
  title: "অভিযোগ দায়ের করুন | Ovizog.com",
  description:
    "নিরাপদে এবং বেনামে আপনার অভিযোগ দায়ের করুন। মাত্র ৪টি ধাপে সম্পূর্ণ করুন।",
};

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f0f7f4] to-[#F8F9FA]">
      <Navbar />
      <ComplaintWizard />
      <Footer />
    </main>
  );
}
