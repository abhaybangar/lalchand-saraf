export const STORE_INFO = {
  name: "J. Lalchand Saraf",
  marathiName: "जे. लालचंद सराफ",
  tagline: "Timeless Pure Gold & Diamond Craftsmanship Since 1994",
  address: "Shop no. 1915, Shree Ram Lane, opposite Janata Bank, Police Head Quarters, Ratnagiri, Maharashtra 415612",
  shortAddress: "Opp. Janata Bank, Shree Ram Lane, Ratnagiri - 415612",
  googleMapsUrl: "https://maps.google.com/?q=X7VV+HM+Ratnagiri,+Maharashtra",
  plusCode: "X7VV+HM Ratnagiri, Maharashtra",
  phone: "091691 62260",
  phoneRaw: "+919169162260",
  whatsapp: "919169162260",
  instagramUrl: "https://www.instagram.com/jlalchandsaraf",
  instagramHandle: "@jlalchandsaraf",
  rating: 4.9,
  reviewsCount: 1607,
  establishedYear: 1994,
  timing: "10:30 AM – 8:30 PM (Mon – Sun)",
  isOpenNow: true,
  services: [
    "In-store shopping",
    "In-store pick-up",
    "Insured Pan-India Delivery",
    "Custom Karigar Jewellery",
    "Gold Exchange & Valuation",
    "100% BIS Hallmarked Purity"
  ]
};

export const LIVE_RATES = {
  gold24k: 7480, // per gram
  gold22k: 6890,
  gold18k: 5640,
  silver999: 92.5,
  lastUpdated: "Today, 10:30 AM"
};

export const CATEGORIES = [
  {
    id: "earrings",
    title: "Earrings",
    subtitle: "From stud elegance to royal jhumkas",
    count: "140+ Designs",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "rings",
    title: "Rings",
    subtitle: "Solitaires, engagement & cocktail bands",
    count: "95+ Designs",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "necklaces",
    title: "Necklaces",
    subtitle: "Bridal sets, chokers & traditional harams",
    count: "180+ Designs",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "bangles",
    title: "Bangles & Bracelets",
    subtitle: "Traditional kadas, patlya & modern cuffs",
    count: "110+ Designs",
    image: "https://images.unsplash.com/photo-1611591475102-468ae7f3a8b4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "mangalsutra",
    title: "Mangalsutra & Pendants",
    subtitle: "Sacred wati designs & solitaire pendants",
    count: "75+ Designs",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "chains",
    title: "Chains & Men's",
    subtitle: "Classic Italian rope, curb links & kadas",
    count: "60+ Designs",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop",
  }
];

export const PRODUCTS = [
  {
    id: "prod-1",
    name: "Royal Rajwada 22KT Gold Choker Necklace",
    marathiName: "राजवाडा २२ कॅरेट सोने चोकर हार",
    category: "necklaces",
    karat: "22KT",
    purity: "916 Hallmarked",
    grossWeight: 42.5,
    netWeight: 42.5,
    estimatedPrice: 322500,
    badge: "BESTSELLER",
    occasion: "Bridal",
    gender: "Women",
    description: "Handcrafted 22KT gold antique bridal choker featuring intricate filigree work, kundan stone accents, and hanging gold bead drops.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
    makingChargePercent: "11%",
    inStock: true
  },
  {
    id: "prod-2",
    name: "Solitaire Illusion Diamond Stud Earrings",
    marathiName: "डायमंड स्टड इअररिंग्स",
    category: "earrings",
    karat: "18KT",
    purity: "750 Hallmarked + IGI Certified",
    grossWeight: 4.8,
    netWeight: 4.2,
    diamondWeight: "0.85 Cts (VVS-EF)",
    estimatedPrice: 78500,
    badge: "TRENDING",
    occasion: "Daily Wear",
    gender: "Women",
    description: "Brilliant round-cut IGI certified natural diamonds set in premium 18KT white and rose gold prong setting with screw back locks.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
    makingChargePercent: "8%",
    inStock: true
  },
  {
    id: "prod-3",
    name: "Classic Solitaire Cushion Cut Diamond Ring",
    marathiName: "क्लासिक सॉलिटेअर डायमंड अंगठी",
    category: "rings",
    karat: "18KT",
    purity: "750 BIS Hallmarked",
    grossWeight: 5.2,
    netWeight: 4.9,
    diamondWeight: "0.90 Cts (VS-GH)",
    estimatedPrice: 94000,
    badge: "NEW ARRIVAL",
    occasion: "Engagement",
    gender: "Women",
    description: "An epitome of grace. 18KT white gold band crowned with a sparkling cushion-cut diamond flanked by pave set diamonds.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
    makingChargePercent: "9%",
    inStock: true
  },
  {
    id: "prod-4",
    name: "Heritage 22KT Lakshmi Kolhapuri Saaj Necklace",
    marathiName: "पारंपारिक कोल्हापुरी साज हार",
    category: "necklaces",
    karat: "22KT",
    purity: "916 Hallmarked",
    grossWeight: 58.0,
    netWeight: 58.0,
    estimatedPrice: 438000,
    badge: "HERITAGE",
    occasion: "Bridal",
    gender: "Women",
    description: "Authentic Maharashtrian Kolhapuri Saaj with 21 auspicious leaves (panadi), central Laxmi padak, and intricate hand-etched craftsmanship.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
    makingChargePercent: "12%",
    inStock: true
  },
  {
    id: "prod-5",
    name: "Traditional Handcrafted 22KT Gold Patlya Bangles (Pair)",
    marathiName: "सोन्याच्या पाटल्या / तोडे (जोडी)",
    category: "bangles",
    karat: "22KT",
    purity: "916 Hallmarked",
    grossWeight: 36.4,
    netWeight: 36.4,
    estimatedPrice: 275000,
    badge: "AUTHENTIC",
    occasion: "Festive",
    gender: "Women",
    description: "Exquisite pair of Maharashtrian Patlya with diamond-cut floral motifs and secure screw fastening. Pure 22KT gold weight.",
    image: "https://images.unsplash.com/photo-1611591475102-468ae7f3a8b4?q=80&w=800&auto=format&fit=crop",
    makingChargePercent: "10%",
    inStock: true
  },
  {
    id: "prod-6",
    name: "Auspicious 22KT Gold Double Wati Mangalsutra",
    marathiName: "पारंपारिक दोन वाटी मंगळसूत्र",
    category: "mangalsutra",
    karat: "22KT",
    purity: "916 Hallmarked",
    grossWeight: 18.5,
    netWeight: 18.5,
    estimatedPrice: 142000,
    badge: "ESSENTIAL",
    occasion: "Bridal",
    gender: "Women",
    description: "Traditional double wati gold pendant strung on 4-line authentic black bead chain with pure 22KT gold links.",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop",
    makingChargePercent: "10%",
    inStock: true
  },
  {
    id: "prod-7",
    name: "Italian Solid 22KT Yellow Gold Curb Link Chain",
    marathiName: "इटालियन सोन्याची मजबूत चैन",
    category: "chains",
    karat: "22KT",
    purity: "916 Hallmarked",
    grossWeight: 24.0,
    netWeight: 24.0,
    estimatedPrice: 182000,
    badge: "MEN'S FAVORITE",
    occasion: "Daily Wear",
    gender: "Men",
    description: "High-polish durable 22KT gold curb link chain with heavy lobster lock clasp. Perfect for everyday luxury.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop",
    makingChargePercent: "9%",
    inStock: true
  },
  {
    id: "prod-8",
    name: "Royal Mayur (Peacock) Jhumka Earrings with South Sea Pearls",
    marathiName: "मयूर झुमका इअररिंग्स",
    category: "earrings",
    karat: "22KT",
    purity: "916 Hallmarked",
    grossWeight: 21.2,
    netWeight: 19.8,
    estimatedPrice: 154000,
    badge: "ROYAL",
    occasion: "Festive",
    gender: "Women",
    description: "Stunning peacock motif top with handcrafted antique domes, hanging ruby glass beads, and certified South Sea pearls.",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop",
    makingChargePercent: "12%",
    inStock: true
  },
  {
    id: "prod-9",
    name: "Contemporary 18KT Diamond Floating Pendant & Chain",
    marathiName: "डायमंड पेंडंट व नाजूक चैन",
    category: "mangalsutra",
    karat: "18KT",
    purity: "750 Hallmarked",
    grossWeight: 6.2,
    netWeight: 5.8,
    diamondWeight: "0.42 Cts (VS-GH)",
    estimatedPrice: 46500,
    badge: "OFFICE WEAR",
    occasion: "Daily Wear",
    gender: "Women",
    description: "Lightweight and chic modern diamond halo pendant suspended on a sleek 18KT gold chain.",
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=800&auto=format&fit=crop",
    makingChargePercent: "8%",
    inStock: true
  },
  {
    id: "prod-10",
    name: "22KT Gold Heavy Royal Navratna Men's Signet Ring",
    marathiName: "नवरत्न पुरुषांची सोन्याची अंगठी",
    category: "rings",
    karat: "22KT",
    purity: "916 Hallmarked",
    grossWeight: 12.8,
    netWeight: 11.2,
    estimatedPrice: 92000,
    badge: "TRADITIONAL",
    occasion: "Auspicious",
    gender: "Men",
    description: "Stately 22KT gold ring encrusted with nine planetary Vedic gemstones, handcrafted by our master Ratnagiri karigars.",
    image: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&w=800&auto=format&fit=crop",
    makingChargePercent: "11%",
    inStock: true
  },
  {
    id: "prod-11",
    name: "Antique 22KT Gold Temple Bridal Thushi Choker",
    marathiName: "पारंपारिक ठुशी नेकलेस",
    category: "necklaces",
    karat: "22KT",
    purity: "916 Hallmarked",
    grossWeight: 28.6,
    netWeight: 28.6,
    estimatedPrice: 216000,
    badge: "BRIDAL CLASSIC",
    occasion: "Bridal",
    gender: "Women",
    description: "Close-fitting Maharashtrian Thushi woven with solid high-polish gold beads and adjustable royal dori cord.",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop",
    makingChargePercent: "10%",
    inStock: true
  },
  {
    id: "prod-12",
    name: "Fine 24KT 999.9 Pure Gold Laxmi-Ganesh Bar (10 Grams)",
    marathiName: "२४ कॅरेट शुद्ध लक्ष्मी सुवर्ण नाणे (१० ग्रॅम)",
    category: "chains",
    karat: "24KT",
    purity: "999.9 Fine Gold",
    grossWeight: 10.0,
    netWeight: 10.0,
    estimatedPrice: 76500,
    badge: "INVESTMENT",
    occasion: "Gifting",
    gender: "Unisex",
    description: "Tamper-proof certified blister card 24KT pure gold coin with Goddess Laxmi embossing. Zero making loss on exchange.",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=800&auto=format&fit=crop",
    makingChargePercent: "2.5%",
    inStock: true
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "ShraddhaPrashant Keer",
    role: "Verified Google Reviewer",
    stars: 5,
    date: "3 months ago",
    badge: "1 review · 6 photos",
    comment: "My experience of purchasing gold from Lalchand Saraf was very good. The staff provided proper guidance, the transaction was transparent, and the quality of the jewellery was excellent. I am satisfied with their service and trustworthiness.",
    highlight: "Transparent transactions & excellent guidance"
  },
  {
    id: 2,
    name: "Rohan Harachakar",
    role: "Loyal Customer since 1994",
    stars: 5,
    date: "2 months ago",
    badge: "Customer since 1994 · 5 photos",
    comment: "जे लालचंद सराफ रत्नागिरी या शॉप मध्ये आम्ही १९९४ पासून सोने खरेदी करतो आहे. त्यांचा सोन्या च्या ब्रेसलेट, चैन इत्यादी वस्तू खूप छान असतात. (We have been buying gold from J. Lalchand Saraf Ratnagiri since 1994. Their bracelets, gold chains, and ornaments are always top-notch!)",
    highlight: "30+ years of family trust"
  },
  {
    id: 3,
    name: "Shruti Maynak",
    role: "Verified Buyer",
    stars: 5,
    date: "7 months ago",
    badge: "3 reviews · 2 photos",
    comment: "The staff at Lalchand Saraf Jewellers were incredibly patient and knowledgeable. They helped me pick the perfect bracelet without any pressure. Excellent service, friendly staff, and great ambiance. I always find something unique here.",
    highlight: "Patient staff & unique bridal designs"
  },
  {
    id: 4,
    name: "Sachin Deshmukh",
    role: "Local Guide · Ratnagiri",
    stars: 5,
    date: "1 month ago",
    badge: "Local Guide · 14 reviews",
    comment: "Best gold jeweller in Ratnagiri! 100% genuine hallmark, accurate electronic weighing scale right in front of you, and zero hidden charges. Highly recommended for wedding shopping.",
    highlight: "Accurate weighing & 100% BIS hallmark"
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "ig-1",
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop",
    caption: "The Royal Kokan Bride ✨ Handcrafted 22KT antique gold choker collection at @jlalchandsaraf",
    likes: "1.4k",
    comments: "82"
  },
  {
    id: "ig-2",
    imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop",
    caption: "Sparkle in natural diamonds everyday. Certified IGI solitaire studs now at our Ratnagiri flagship store 💎",
    likes: "980",
    comments: "45"
  },
  {
    id: "ig-3",
    imageUrl: "https://images.unsplash.com/photo-1611591475102-468ae7f3a8b4?q=80&w=600&auto=format&fit=crop",
    caption: "Timeless Maharashtrian Tode & Patlya. Pure 916 hallmarked heritage designs 💫",
    likes: "2.1k",
    comments: "114"
  },
  {
    id: "ig-4",
    imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop",
    caption: "A promise of forever. Explore bespoke engagement rings crafted for your love story 💍",
    likes: "1.8k",
    comments: "93"
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    tagline: "ROYAL HERITAGE & BRIDAL SPLENDOUR",
    title: "Elevated Daily Essentials",
    subtitle: "Intricately crafted, lightweight and high-glamour hallmark jewellery for your everyday and royal occasions.",
    cta1: "BROWSE DESIGNS",
    cta2: "BOOK AN APPOINTMENT",
    bgImage: "/hero_woman.webp",
    badge: "100% BIS Hallmarked Pure Gold"
  },
  {
    id: 2,
    tagline: "SINCE 1994 • RATNAGIRI FLAGSHIP",
    title: "Timeless Kokan Craftsmanship",
    subtitle: "Experience traditional Maharashtrian Kolhapuri Saaj, Thushi, and certified natural diamond jewellery with 30+ years of trust.",
    cta1: "EXPLORE BRIDAL",
    cta2: "CHECK TODAY'S GOLD RATE",
    bgImage: "/hero_diamonds.webp",
    badge: "Rated 4.9★ by 1,600+ Families"
  }
];
