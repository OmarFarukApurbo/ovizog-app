import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  display: "swap",
  variable: "--font-bengali",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ovizog.com | নাগরিক ও ভিকটিম সুরক্ষা প্ল্যাটফর্ম",
  description:
    "Ovizog.com – বাংলাদেশের ডিজিটাল নাগরিক অভিযোগ ও আইনি সহায়তা প্ল্যাটফর্ম। আপনার অধিকার সুরক্ষিত করুন, অন্যায়ের বিরুদ্ধে গর্জে উঠুন। বেনামে অভিযোগ করুন।",
  keywords: [
    "Ovizog",
    "অভিযোগ",
    "নাগরিক অধিকার",
    "RBIC",
    "Bangladesh complaint",
    "digital evidence",
    "citizen protection",
    "ভিকটিম সুরক্ষা",
  ],
  authors: [{ name: "Rupali Bangladesh Investigation Cell (RBIC)" }],
  openGraph: {
    title: "Ovizog.com | নাগরিক ও ভিকটিম সুরক্ষা প্ল্যাটফর্ম",
    description:
      "আপনার অধিকার সুরক্ষিত করুন। বেনামে অভিযোগ দায়ের করুন এবং ডিজিটাল প্রমাণ আপলোড করুন।",
    type: "website",
    locale: "bn_BD",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} ${inter.variable}`}>
      <body className={`${hindSiliguri.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
