import Link from "next/link";
import { Shield, Phone, Mail, ExternalLink } from "lucide-react";

const footerLinks = {
  platform: [
    { href: "/submit", label: "অভিযোগ দায়ের করুন" },
    { href: "/track", label: "অভিযোগ ট্র্যাক করুন" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
    { href: "/legal", label: "আইনের নিয়মাবলী" },
  ],
  support: [
    { href: "/contact", label: "যোগাযোগ" },
    { href: "/faq", label: "প্রশ্নোত্তর (FAQ)" },
    { href: "/privacy", label: "গোপনীয়তা নীতি" },
    { href: "/terms", label: "শর্তাবলী" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F4C3A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl text-white block">Ovizog.com</span>
                <span className="text-white/60 text-xs">নাগরিক ও ভিকটিম সুরক্ষা প্ল্যাটফর্ম</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Ovizog.com বাংলাদেশের নাগরিকদের জন্য একটি নিরাপদ ডিজিটাল অভিযোগ দায়ের ও আইনি সহায়তা প্ল্যাটফর্ম।
              আপনার পরিচয় গোপন রেখে অন্যায়ের বিরুদ্ধে গর্জে উঠুন।
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+8800960000000"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                +880 096000-0000
              </a>
              <a
                href="mailto:help@ovizog.com"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                help@ovizog.com
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-bold text-white text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#D32F2F] rounded-full inline-block" />
              প্ল্যাটফর্ম
            </h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors hover:translate-x-1 inline-flex items-center gap-1.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold text-white text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#D32F2F] rounded-full inline-block" />
              সহায়তা
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors hover:translate-x-1 inline-flex items-center gap-1.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* RBIC Tag */}
            <div className="mt-6 p-3 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-white/50 text-xs mb-1">টিকিটের সহায়তা সংস্থা</p>
              <p className="text-white font-semibold text-sm flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#D32F2F]" />
                RBIC
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Ovizog.com. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { href: "#", label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
              { href: "#", label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zm2-4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" },
            ].map(({ href, label, path }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d={path} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
