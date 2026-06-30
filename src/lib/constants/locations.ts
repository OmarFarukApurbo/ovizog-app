export interface District {
  name: string;
  nameBn: string;
  upazilas: { name: string; nameBn: string }[];
}

export const BANGLADESH_DISTRICTS: District[] = [
  {
    name: "Dhaka",
    nameBn: "ঢাকা",
    upazilas: [
      { name: "Dhanmondi", nameBn: "ধানমন্ডি" },
      { name: "Mirpur", nameBn: "মিরপুর" },
      { name: "Gulshan", nameBn: "গুলশান" },
      { name: "Tejgaon", nameBn: "তেজগাঁও" },
      { name: "Mohammadpur", nameBn: "মোহাম্মদপুর" },
      { name: "Uttara", nameBn: "উত্তরা" },
      { name: "Demra", nameBn: "ডেমরা" },
      { name: "Savar", nameBn: "সাভার" },
      { name: "Keraniganj", nameBn: "কেরানীগঞ্জ" },
      { name: "Dohar", nameBn: "দোহার" },
      { name: "Nawabganj", nameBn: "নবাবগঞ্জ" },
    ],
  },
  {
    name: "Chittagong",
    nameBn: "চট্টগ্রাম",
    upazilas: [
      { name: "Kotwali", nameBn: "কোতোয়ালী" },
      { name: "Pahartali", nameBn: "পাহাড়তলী" },
      { name: "Panchlaish", nameBn: "পাঁচলাইশ" },
      { name: "Hathazari", nameBn: "হাটহাজারী" },
      { name: "Rangunia", nameBn: "রাঙ্গুনিয়া" },
      { name: "Fatikchhari", nameBn: "ফটিকছড়ি" },
      { name: "Sitakunda", nameBn: "সীতাকুণ্ড" },
      { name: "Mirsharai", nameBn: "মীরসরাই" },
      { name: "Sandwip", nameBn: "সন্দ্বীপ" },
      { name: "Anwara", nameBn: "আনোয়ারা" },
    ],
  },
  {
    name: "Sylhet",
    nameBn: "সিলেট",
    upazilas: [
      { name: "Sylhet Sadar", nameBn: "সিলেট সদর" },
      { name: "Beanibazar", nameBn: "বিয়ানীবাজার" },
      { name: "Bishwanath", nameBn: "বিশ্বনাথ" },
      { name: "Companiganj", nameBn: "কোম্পানীগঞ্জ" },
      { name: "Fenchuganj", nameBn: "ফেঞ্চুগঞ্জ" },
      { name: "Golapganj", nameBn: "গোলাপগঞ্জ" },
      { name: "Gowainghat", nameBn: "গোয়াইনঘাট" },
      { name: "Jaintiapur", nameBn: "জৈন্তাপুর" },
      { name: "Kanaighat", nameBn: "কানাইঘাট" },
      { name: "Zakiganj", nameBn: "জকিগঞ্জ" },
    ],
  },
  {
    name: "Rajshahi",
    nameBn: "রাজশাহী",
    upazilas: [
      { name: "Rajshahi Sadar", nameBn: "রাজশাহী সদর" },
      { name: "Bagha", nameBn: "বাঘা" },
      { name: "Bagmara", nameBn: "বাগমারা" },
      { name: "Charghat", nameBn: "চারঘাট" },
      { name: "Durgapur", nameBn: "দুর্গাপুর" },
      { name: "Godagari", nameBn: "গোদাগাড়ী" },
      { name: "Mohanpur", nameBn: "মোহনপুর" },
      { name: "Paba", nameBn: "পবা" },
      { name: "Tanore", nameBn: "তানোর" },
    ],
  },
  {
    name: "Khulna",
    nameBn: "খুলনা",
    upazilas: [
      { name: "Khulna Sadar", nameBn: "খুলনা সদর" },
      { name: "Batiaghata", nameBn: "বটিয়াঘাটা" },
      { name: "Dacope", nameBn: "দাকোপ" },
      { name: "Dumuria", nameBn: "ডুমুরিয়া" },
      { name: "Dighalia", nameBn: "দিঘলিয়া" },
      { name: "Koyra", nameBn: "কয়রা" },
      { name: "Paikgachha", nameBn: "পাইকগাছা" },
      { name: "Phultala", nameBn: "ফুলতলা" },
      { name: "Rupsa", nameBn: "রূপসা" },
      { name: "Terokhada", nameBn: "তেরখাদা" },
    ],
  },
  {
    name: "Barisal",
    nameBn: "বরিশাল",
    upazilas: [
      { name: "Barisal Sadar", nameBn: "বরিশাল সদর" },
      { name: "Agailjhara", nameBn: "আগৈলঝাড়া" },
      { name: "Babuganj", nameBn: "বাবুগঞ্জ" },
      { name: "Bakerganj", nameBn: "বাকেরগঞ্জ" },
      { name: "Banaripara", nameBn: "বানারীপাড়া" },
      { name: "Gaurnadi", nameBn: "গৌরনদী" },
      { name: "Hizla", nameBn: "হিজলা" },
      { name: "Mehendiganj", nameBn: "মেহেন্দিগঞ্জ" },
      { name: "Muladi", nameBn: "মুলাদী" },
      { name: "Wazirpur", nameBn: "উজিরপুর" },
    ],
  },
  {
    name: "Rangpur",
    nameBn: "রংপুর",
    upazilas: [
      { name: "Rangpur Sadar", nameBn: "রংপুর সদর" },
      { name: "Badarganj", nameBn: "বদরগঞ্জ" },
      { name: "Gangachara", nameBn: "গঙ্গাচড়া" },
      { name: "Kaunia", nameBn: "কাউনিয়া" },
      { name: "Mithapukur", nameBn: "মিঠাপুকুর" },
      { name: "Pirgachha", nameBn: "পীরগাছা" },
      { name: "Pirganj", nameBn: "পীরগঞ্জ" },
      { name: "Taraganj", nameBn: "তারাগঞ্জ" },
    ],
  },
  {
    name: "Mymensingh",
    nameBn: "ময়মনসিংহ",
    upazilas: [
      { name: "Mymensingh Sadar", nameBn: "ময়মনসিংহ সদর" },
      { name: "Bhaluka", nameBn: "ভালুকা" },
      { name: "Dhobaura", nameBn: "ধোবাউড়া" },
      { name: "Fulbaria", nameBn: "ফুলবাড়িয়া" },
      { name: "Gaffargaon", nameBn: "গফরগাঁও" },
      { name: "Gauripur", nameBn: "গৌরীপুর" },
      { name: "Haluaghat", nameBn: "হালুয়াঘাট" },
      { name: "Ishwarganj", nameBn: "ঈশ্বরগঞ্জ" },
      { name: "Muktagachha", nameBn: "মুক্তাগাছা" },
      { name: "Nandail", nameBn: "নান্দাইল" },
      { name: "Phulpur", nameBn: "ফুলপুর" },
      { name: "Trishal", nameBn: "ত্রিশাল" },
    ],
  },
  {
    name: "Cumilla",
    nameBn: "কুমিল্লা",
    upazilas: [
      { name: "Cumilla Sadar", nameBn: "কুমিল্লা সদর" },
      { name: "Barura", nameBn: "বরুড়া" },
      { name: "Brahmanpara", nameBn: "ব্রাহ্মণপাড়া" },
      { name: "Burichang", nameBn: "বুড়িচং" },
      { name: "Chandina", nameBn: "চান্দিনা" },
      { name: "Chauddagram", nameBn: "চৌদ্দগ্রাম" },
      { name: "Daudkandi", nameBn: "দাউদকান্দি" },
      { name: "Debidwar", nameBn: "দেবিদ্বার" },
      { name: "Homna", nameBn: "হোমনা" },
      { name: "Laksam", nameBn: "লাকসাম" },
    ],
  },
  {
    name: "Jessore",
    nameBn: "যশোর",
    upazilas: [
      { name: "Jessore Sadar", nameBn: "যশোর সদর" },
      { name: "Abhaynagar", nameBn: "অভয়নগর" },
      { name: "Bagherpara", nameBn: "বাঘেরপাড়া" },
      { name: "Chaugachha", nameBn: "চৌগাছা" },
      { name: "Jhikargachha", nameBn: "ঝিকরগাছা" },
      { name: "Keshabpur", nameBn: "কেশবপুর" },
      { name: "Manirampur", nameBn: "মণিরামপুর" },
      { name: "Sharsha", nameBn: "শার্শা" },
    ],
  },
];

export const getUpazilas = (districtName: string) => {
  const district = BANGLADESH_DISTRICTS.find(
    (d) => d.name === districtName || d.nameBn === districtName
  );
  return district?.upazilas ?? [];
};
