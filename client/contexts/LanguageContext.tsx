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
