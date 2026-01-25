import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMemo, useState } from "react";

const navLinks = [
  { path: "/", key: "nav.home" },
  { path: "/about", key: "nav.about" },
  { path: "/services", key: "nav.services" },
  { path: "/projects", key: "nav.projects" },
  { path: "/partnerships", key: "nav.partnerships" },
  { path: "/contact", key: "nav.contact" },
];

type PhoneEntry = string | { tel: string; display: string };

const primaryPhones: PhoneEntry[] = [
  { tel: "+249912350743", display: "+249 912 350 743" },
  { tel: "+249999900048", display: "+249 999 900 048" },
  { tel: "+24912372286", display: "+249 12 372 2286" },
];

const normalizePhone = (phone: PhoneEntry) => {
  if (typeof phone === "string") {
    const tel = phone.replace(/\s+/g, "");
    return { tel: `+${tel.replace(/^\+/, "")}`, display: phone };
  }
  return phone;
};

export const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isArabic = language === "ar";
  const location = useLocation();

  const phoneNumbers = useMemo(() => primaryPhones.map(normalizePhone), []);

  return (
    <header className="sticky top-0 z-50 shadow-xl shadow-black/5">
      {/* Top ribbon */}
      <div className="hidden md:block bg-primary text-white/90 text-sm">
        <div className="container max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-6">
          <p className="font-medium tracking-wide">
            السودان - الخرطوم - حي الطائف - مربع 23
          </p>
          <div className="flex items-center gap-4 text-white/80">
            {phoneNumbers.map((phone) => (
              <a
                key={phone.tel}
                href={`tel:${phone.tel}`}
                className="hover:text-gold-900 transition"
              >
                <span dir="ltr" className="tracking-wide font-semibold">
                  {phone.display}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="backdrop-blur-xl bg-[#fff6db] border-b border-gold-900/30 overflow-x-hidden">
        <div className="container max-w-7xl mx-auto px-3 sm:px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F85ad9b0283b74a648b7c4e0a53d78cd6?format=webp&width=800&height=1200"
                alt="Land Code Investment Logo"
                className="h-14 sm:h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-semibold tracking-wide transition pb-1 ${
                    location.pathname === link.path
                      ? "text-primary after:w-full after:bg-gold-900"
                      : "text-slate-500 hover:text-primary after:w-0 hover:after:w-1/2"
                  } after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:transition-all`}
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-primary shadow-inner hover:bg-primary hover:text-white transition"
              >
                <span
                  className={`${language === "ar" ? "text-white bg-primary rounded-full px-2 py-0.5" : "text-primary/70"}`}
                >
                  AR
                </span>
                <span className="text-slate-300">|</span>
                <span
                  className={`${language === "en" ? "text-white bg-primary rounded-full px-2 py-0.5" : "text-primary/70"}`}
                >
                  EN
                </span>
              </button>
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30 hover:bg-primary/90"
              >
                <span>{isArabic ? "تواصل معنا" : "Contact Us"}</span>
              </Link>
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 text-primary"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl">
            <nav className="container max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-semibold ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-slate-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.key)}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {isArabic ? "ابدأ شراكة جديدة" : "Start a partnership"}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
