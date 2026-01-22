import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string, lang?: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translations = {
  // Navigation
  "nav.home": { ar: "الصفحة الرئيسية", en: "Home" },
  "nav.about": { ar: "من نحن", en: "About Us" },
  "nav.services": { ar: "خدماتنا", en: "Services" },
  "nav.projects": { ar: "مشاريعنا", en: "Projects" },
  "nav.partnerships": { ar: "الشراكات", en: "Partnerships" },
  "nav.contact": { ar: "اتصل بنا", en: "Contact Us" },

  // Hero Section
  "hero.title": {
    ar: "شركة لاندكود للاستثمار المحدودة",
    en: "Land Code Investment Ltd.",
  },
  "hero.tagline": {
    ar: "نستخرج الفرص... ونبني المستقبل",
    en: "We Extract Opportunities... We Build the Future",
  },

  // About Section
  "about.title": { ar: "عن الشركة", en: "About Us" },
  "about.text": {
    ar: "شركة لاندكود للاستثمار المحدودة متخصصة في أعمال التعدين والاستكشاف الجيولوجي، مع تركيز خاص على البحث عن الذهب والمعادن النفيسة في المنطقة والمنطقة المحلية.",
    en: "Land Code Investment Ltd. is a specialized mining and geological exploration company, with a particular focus on gold and precious metals exploration in the region.",
  },

  // Services Section
  "services.title": { ar: "خدماتنا الأساسية", en: "Core Services" },
  "services.service1.title": {
    ar: "التنقيب عن الذهب والمعادن النفيسة",
    en: "Gold & Precious Metals Exploration",
  },
  "services.service1.desc": {
    ar: "برامج استكشاف متقدمة للذهب والمعادن النفيسة",
    en: "Advanced exploration programs for gold and precious metals",
  },
  "services.service2.title": {
    ar: "الدراسات الجيولوجية وتقييم المواقع",
    en: "Geological Studies & Site Evaluation",
  },
  "services.service2.desc": {
    ar: "دراسات جيولوجية شاملة وتقييم المواقع",
    en: "Comprehensive geological studies and site evaluation",
  },
  "services.service3.title": {
    ar: "تصميم وإنشاء مصانع معالجة الخامات",
    en: "Ore Processing Plant Design & Construction",
  },
  "services.service3.desc": {
    ar: "تصميم وإنشاء مصانع معالجة الخامات",
    en: "Complete ore processing plant design and construction",
  },

  // Projects Section
  "projects.title": { ar: "مشاريعنا المميزة", en: "Featured Projects" },
  "projects.learnMore": { ar: "اعرف أكثر", en: "Learn More" },
  "projects.hamash": {
    ar: "همش ربّاب - ولاية البحر الأحمر",
    en: "Hamash Rubab - Red Sea State",
  },
  "projects.wadi": {
    ar: "وادي حلفا - شمال السودان",
    en: "Wadi Halfa - Northern Sudan",
  },

  // CTA Section
  "cta.title": {
    ar: "شركاء النمو والاستثمار",
    en: "Partners in Growth & Investment",
  },
  "cta.description": {
    ar: "تواصل معنا للحصول على فرص استثمارية متميزة",
    en: "Contact us for exclusive investment opportunities",
  },
  "cta.button": { ar: "تواصل معنا الآن", en: "Contact Us Now" },

  // Footer
  "footer.quickLinks": { ar: "روابط سريعة", en: "Quick Links" },
  "footer.contact": { ar: "اتصل بنا", en: "Contact" },
  "footer.rights": { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },

  // Contact Info
  "contact.address": {
    ar: "السودان - الخرطوم - حي الطائف - مربع 23",
    en: "Sudan - Khartoum - Al-Taif - Block 23",
  },
  "contact.email": { ar: "البريد الإلكتروني", en: "Email" },
  "contact.phone": { ar: "الهاتف", en: "Phone" },
  "contact.title": { ar: "اتصل بنا", en: "Contact Us" },

  // Placeholder
  "placeholder.comingSoon": {
    ar: "هذه الصفحة قيد الإنشاء",
    en: "This page is coming soon",
  },
  "placeholder.backHome": { ar: "العودة للصفحة الرئيسية", en: "Back to Home" },

  // About Page
  "about.heroTitle": { ar: "من نحن", en: "About Us" },
  "about.history.title": { ar: "تاريخ الشركة", en: "Company History" },
  "about.history.paragraph1": {
    ar: "تأسست شركة لاندكود للاستثمار المحدودة عام 2020 كشركة متخصصة في أعمال التعدين والاستكشاف الجيولوجي. منذ نشأتها، ركزت الشركة على تقديم خدمات عالية الجودة في مجال التعدين والاستكشاف.",
    en: "Land Code Investment Ltd. was founded in 2020 as a specialized mining and geological exploration company. Since its inception, the company has focused on providing high-quality services in the mining and exploration sector.",
  },
  "about.history.paragraph2": {
    ar: "بدأت الشركة برؤية واضحة لتصبح الشركة الرائدة في مجال التعدين وخدمات التعدين في المنطقة، مع الالتزام بأعلى معايير الجودة والسلامة والبيئة.",
    en: "The company started with a clear vision to become the leading company in mining and mining services in the region, with a commitment to the highest standards of quality, safety, and environmental protection.",
  },
  "about.history.paragraph3": {
    ar: "عبر سنوات عملها، نجحت الشركة في تنفيذ عدد من المشاريع المهمة في استكشاف الذهب والمعادن النفيسة، وبناء سمعة قوية في السوق.",
    en: "Over its years of operation, the company has successfully implemented numerous important projects in gold and precious metals exploration, building a strong reputation in the market.",
  },
  "about.missionVision": { ar: "رسالتنا و رؤيتنا", en: "Our Mission & Vision" },
  "about.mission": { ar: "رسالتنا", en: "Our Mission" },
  "about.mission.text": {
    ar: "تقديم خدمات تعدين متكاملة، دقيقة وموثوقة تسهم في تعظيم القيمة الاقتصادية للموارد المعدنية، مع الحفاظ على البيئة والسلامة المهنية والصحة المهنية لضمان استدامة الأعمال وتوثيقها.",
    en: "To provide integrated, precise and reliable mining services that contribute to maximizing the economic value of mineral resources, while preserving the environment and ensuring occupational safety and health to ensure business sustainability.",
  },
  "about.vision": { ar: "رؤيتنا", en: "Our Vision" },
  "about.vision.text": {
    ar: "أن تكون شركة لاندكود من الشركات الرائدة في مجال التعدين وخدمات التعدين في السودان والمنطقة، من خلال توظيف الخبرات الجيولوجية والتقنيات الحديثة.",
    en: "To be a leading company in mining and mining services in Sudan and the region, leveraging geological expertise and modern technologies.",
  },
  "about.ceoMessage": { ar: "كلمة المدير العام", en: "CEO's Message" },
  "about.ceoMessage.text": {
    ar: "نحو مستقبل تعديني واعد بما تحمله أرضنا من ثروات معدنية هائلة ستغير الواقع. اسست لاندكود للمساهمة في تطوير القطاع وتحويل رؤيتنا إلى واقع ملموس يخدم اقتصادنا الوطني ويرفع من مستوى التنمية المستدامة.",
    en: "Towards a promising mining future with the vast mineral wealth our land holds that will change the reality. Land Code was established to contribute to sector development and transform our vision into tangible reality serving our national economy and advancing sustainable development.",
  },
  "about.ceoMessage.paragraph": {
    ar: "في لاندكود، نؤمن بأن الاستثمار الحقيقي في الموارد المعدنية لا يقتصر على الاستخراج، بل يتعدى ذلك إلى بناء قاعدة اقتصادية قوية وتطوير المهارات المحلية. نسعى لنكون شركاء أساسيين في تحقيق أهداف التنمية الوطنية من خلال الالتزام بأعلى معايير الجودة والسلامة والاستدامة البيئية.",
    en: "At Land Code, we believe that true investment in mineral resources extends beyond extraction to building a strong economic foundation and developing local skills. We strive to be key partners in achieving national development goals through commitment to the highest standards of quality, safety, and environmental sustainability.",
  },
  "about.management": {
    ar: "الهيكل الاداري والفني",
    en: "Administrative & Technical Structure",
  },
  "about.partnerships": {
    ar: "Partnerships & Management Team",
    en: "Partnerships & Management Team",
  },

  // Services Page
  "services.title": { ar: "خدماتنا", en: "Services" },
  "services.learnMore": { ar: "اعرف المزيد", en: "Learn More" },
  "services.exploration": {
    ar: "التنقيب والاستكشاف",
    en: "Exploration & Discovery",
  },
  "services.geology": { ar: "الدراسات الجيولوجية", en: "Geological Studies" },
  "services.processing": { ar: "معالجة الخامات", en: "Ore Processing" },

  // Projects Page
  "projects.viewAll": { ar: "اكتشف جميع المشاريع", en: "View All Projects" },
  "projects.strategic": { ar: "موقع استراتيجي", en: "Strategic Site" },
  "projects.alHashoor": {
    ar: "مشروع همش ربّاب - ولاية البحر الأحمر",
    en: "Hamash Rubab Project - Red Sea State",
  },
  "projects.internationalCo": {
    ar: "مشروع وادي حلفا - شمال السودان",
    en: "Wadi Halfa Project - Northern Sudan",
  },

  // Contact Page
  "contact.heroTitle": { ar: "اتصل بنا", en: "Contact Us" },
  "contact.form.name": { ar: "الاسم الكامل", en: "Full Name" },
  "contact.form.namePlaceholder": { ar: "أدخل اسمك", en: "Enter your name" },
  "contact.form.email": { ar: "البريد الإلكتروني", en: "Email" },
  "contact.form.emailPlaceholder": {
    ar: "your@email.com",
    en: "your@email.com",
  },
  "contact.form.phone": { ar: "رقم الهاتف", en: "Phone Number" },
  "contact.form.phonePlaceholder": { ar: "+249 ...", en: "+249 ..." },
  "contact.form.message": { ar: "الرسالة", en: "Message" },
  "contact.form.messagePlaceholder": {
    ar: "اكتب رسالتك هنا",
    en: "Write your message here",
  },
  "contact.form.submit": { ar: "إرسال الرسالة", en: "Send Message" },
  "contact.form.success": {
    ar: "تم إرسال رسالتك بنجاح",
    en: "Your message has been sent successfully",
  },
  "contact.location": { ar: "العنوان", en: "Location" },
  "contact.working.hours": { ar: "ساعات العمل", en: "Working Hours" },
  "contact.phone.number": { ar: "رقم الهاتف", en: "Phone Number" },
  "contact.hours": {
    ar: "من الاثنين إلى الخميس: 8:00 صباحاً - 5:00 مساءً (بتوقيت كارتوم)",
    en: "Monday to Thursday: 8:00 AM - 5:00 PM (Khartoum Time)",
  },

  // CSR Section
  "csr.title": {
    ar: "مسؤوليتنا المجتمعية",
    en: "Corporate Social Responsibility",
  },
  "csr.subtitle": { ar: "التزامنا الاجتماعي", en: "Our Commitment" },
  "csr.description": {
    ar: "نؤمن بأن النجاح الحقيقي يأتي من خلال العطاء والمساهمة الفعلية في تنمية المجتمعات المحلية والحفاظ على البيئة",
    en: "We believe true success comes through genuine contribution to local community development and environmental preservation",
  },
  "csr.focusAreas": { ar: "مجالات تركيزنا", en: "Our Focus Areas" },
  "csr.foodSupport": { ar: "الدعم الغذائي", en: "Food Support" },
  "csr.infrastructure": {
    ar: "تطوير البنية التحتية",
    en: "Infrastructure Development",
  },
  "csr.community": { ar: "دعم المجتمع المحلي", en: "Community Support" },
  "csr.environment": { ar: "الإصحاح البيئي", en: "Environmental Sanitation" },
  "csr.commitment": {
    ar: "التزام بيئي شامل",
    en: "Comprehensive Environmental Commitment",
  },

  // Partners Section
  "partners.title": {
    ar: "شركائنا الاستراتيجيون",
    en: "Our Strategic Partners",
  },
  "partners.description": {
    ar: "نتعاون مع أفضل الشركات والمؤسسات الرائدة في قطاع التعدين والاستثمار",
    en: "We collaborate with leading companies and institutions in mining and investment",
  },
  "partners.partner": { ar: "شريك استراتيجي", en: "Strategic Partner" },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved) setLanguage(saved);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const toggleLanguage = () => {
    const newLang = language === "ar" ? "en" : "ar";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = (key: string, lang?: Language): string => {
    const currentLang = lang || language;
    const entry = (translations as any)[key];
    return entry?.[currentLang] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
