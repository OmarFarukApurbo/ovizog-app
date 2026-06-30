export interface Category {
  value: string;
  labelBn: string;
  labelEn: string;
  icon: string;
}

export const COMPLAINT_CATEGORIES: Category[] = [
  { value: "corruption", labelBn: "দুর্নীতি ও ঘুষ", labelEn: "Corruption & Bribery", icon: "💰" },
  { value: "violence", labelBn: "শারীরিক সহিংসতা", labelEn: "Physical Violence", icon: "⚡" },
  { value: "sexual_harassment", labelBn: "যৌন হয়রানি", labelEn: "Sexual Harassment", icon: "🛡️" },
  { value: "domestic_violence", labelBn: "পারিবারিক সহিংসতা", labelEn: "Domestic Violence", icon: "🏠" },
  { value: "local_harassment", labelBn: "স্থানীয় উৎপীড়ন", labelEn: "Local Harassment", icon: "🏘️" },
  { value: "land_dispute", labelBn: "ভূমি বিরোধ", labelEn: "Land Dispute", icon: "📋" },
  { value: "police_misconduct", labelBn: "পুলিশি অসদাচরণ", labelEn: "Police Misconduct", icon: "🚔" },
  { value: "fraud", labelBn: "প্রতারণা ও জালিয়াতি", labelEn: "Fraud & Forgery", icon: "🎭" },
  { value: "drug", labelBn: "মাদক সংক্রান্ত", labelEn: "Drug Related", icon: "💊" },
  { value: "child_abuse", labelBn: "শিশু নির্যাতন", labelEn: "Child Abuse", icon: "👶" },
  { value: "human_trafficking", labelBn: "মানব পাচার", labelEn: "Human Trafficking", icon: "⚠️" },
  { value: "environmental", labelBn: "পরিবেশ দূষণ", labelEn: "Environmental Pollution", icon: "🌿" },
  { value: "cyber_crime", labelBn: "সাইবার অপরাধ", labelEn: "Cyber Crime", icon: "💻" },
  { value: "property_crime", labelBn: "সম্পত্তি অপরাধ", labelEn: "Property Crime", icon: "🏚️" },
  { value: "health_negligence", labelBn: "স্বাস্থ্যসেবায় অবহেলা", labelEn: "Health Negligence", icon: "🏥" },
  { value: "education_issues", labelBn: "শিক্ষা প্রতিষ্ঠান সমস্যা", labelEn: "Education Issues", icon: "📚" },
  { value: "other", labelBn: "অন্যান্য", labelEn: "Other", icon: "📝" },
];

export const getCategoryLabel = (value: string, lang: "bn" | "en" = "bn"): string => {
  const cat = COMPLAINT_CATEGORIES.find((c) => c.value === value);
  if (!cat) return value;
  return lang === "bn" ? cat.labelBn : cat.labelEn;
};
