import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const services = [
    {
      title: "التنقيب عن الذهب والمعادن النفيسة",
      description: "برامج استكشاف متقدمة باستخدام أحدث التقنيات الجيولوجية",
      icon: "⛏️",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fc2a3904b26644acaafe714a85d647549?format=webp&width=1400",
    },
    {
      title: "الدراسات الجيولوجية وتقييم المواقع",
      description: "دراسات شاملة وتقييم متفصل لمواقع التعدين المحتملة",
      icon: "🔍",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fe3917f69177046fd94bd50e3ba2ef46a?format=webp&width=1400",
    },
    {
      title: "تحليل العينات الصخرية وعينات التربة",
      description: "تحليل دقيق ومفصل للعينات باستخدام تقنيات حديثة",
      icon: "🧪",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F13be5dfef7c84a8e93c37499abfd71c2?format=webp&width=1400",
    },
    {
      title: "تحديد عروق الذهب ومناطق التعدين",
      description: "تحديد دقيق لمناطق التركيز العالي للمعادن القيمة",
      icon: "⚙️",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fd5ecb315e797467cb614e772f34a10e6?format=webp&width=1400",
    },
    {
      title: "أعمال المسح الجيولوجي والاستشعار عن بعد",
      description: "استخدام تقنيات GIS والاستشعار بالأقمار الصناعية",
      icon: "📡",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F2a06be97766645dbbfbbccebbdba7bf7?format=webp&width=1400",
    },
    {
      title: "إعداد التقارير الفنية والأولية",
      description: "تقارير تفصيلية وشاملة للاستثمارين ومتخذي القرار",
      icon: "📊",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F51c19b40413949988ea6693eafc1575c?format=webp&width=1400",
    },
    {
      title: "تصميم وإنشاء مصانع معالجة الخامات",
      description: "حلول متكاملة لتصميم وإنشاء مصانع معالجة الخامات",
      icon: "🏭",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fb89c6d959c664b229e9e68c35b4454ce?format=webp&width=1400",
    },
    {
      title: "الدراسات الأولية والتصميم الهندسي",
      description: "دراسات هندسية دقيقة لتحديد المواصفات الفنية المثلى",
      icon: "🔧",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F62fee2e19a8f4a25b414a4b440bf91b0?format=webp&width=1400",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">خدماتنا</h1>
          <p className="text-xl text-gray-200">
            نقدم خدمات متخصصة في التعدين والاستكشاف الجيولوجي
          </p>
          <div className="w-16 h-1 bg-gold-900 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="text-xs tracking-[0.3em] uppercase text-white/80">
                      {isArabic ? "خدمة" : "Service"}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3
                    className={`text-xl font-semibold text-primary mb-3 leading-snug ${isArabic ? "text-right" : ""}`}
                  >
                    {service.title}
                  </h3>
                  <p className={`text-gray-600 ${isArabic ? "text-right" : ""}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">هل تريد معرفة المزيد؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            تواصل معنا لمناقشة احتياجاتك والحصول على عرض متخصص
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-gold-900 text-primary font-semibold rounded hover:bg-gold-900/80 transition"
          >
            اتصل بنا الآن
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
