import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language, t } = useLanguage();
  const isArabic = language === "ar";

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div
      className={`min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 ${isArabic ? "text-right" : ""}`}
    >
      <div className="text-center">
        <div className="text-9xl font-bold text-gold-900 mb-4">404</div>
        <h1 className="text-4xl font-bold text-primary mb-4">
          {isArabic ? "الصفحة غير موجودة" : "Page Not Found"}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md">
          {isArabic
            ? "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها"
            : "Sorry, the page you are looking for does not exist or has been moved"}
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-gold-900 text-primary font-semibold rounded hover:bg-gold-900/80 transition"
        >
          {t("placeholder.backHome")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
