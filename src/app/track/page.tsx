import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrackingPortal from "@/components/track/TrackingPortal";

export const metadata: Metadata = {
  title: "অভিযোগ ট্র্যাক করুন | Ovizog.com",
  description:
    "আপনার ট্র্যাকিং আইডি দিয়ে অভিযোগের বর্তমান অগ্রগতি দেখুন।",
};

export default function TrackPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f0f7f4] to-[#F8F9FA]">
      <Navbar />
      <Suspense fallback={<div className="py-20 text-center text-neutral-500">লোড হচ্ছে...</div>}>
        <TrackingPortal />
      </Suspense>
      <Footer />
    </main>
  );
}
