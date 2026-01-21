import { useLanguage } from "@/contexts/LanguageContext";

const Geology = () => {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const galleryImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F210b2156407043a4a639e0772a52c598?format=webp&width=800&height=1200",
      titleAr: "الحفر الجيولوجي العميق",
      titleEn: "Deep Geological Drilling",
      descAr: "عمليات حفر متقدمة لجمع العينات الجيولوجية من أعماق مختلفة",
      descEn:
        "Advanced drilling operations to collect geological samples from various depths",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F505f893d85e24ca9969349e73dcb8b77?format=webp&width=800&height=1200",
      titleAr: "تحليل الخرائط الحرارية",
      titleEn: "Thermal Map Analysis",
      descAr: "استخدام الصور الحرارية والقمر الصناعي لتحديد المناطق الموعودة",
      descEn:
        "Using thermal imagery and satellite data to identify promising zones",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F11f0a368089e46be9b74f5b73b1ee0df?format=webp&width=800&height=1200",
      titleAr: "فحص طبقات الأرض",
      titleEn: "Geological Layer Inspection",
      descAr: "دراسة شاملة لطبقات الأرض وتكوينها المعدني",
      descEn: "Comprehensive study of rock layers and mineral composition",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fbb536404815949e48c44853d84d0f098?format=webp&width=800&height=1200",
      titleAr: "عمليات المسح الميداني",
      titleEn: "Field Survey Operations",
      descAr: "مسح شامل للموقع باستخدام معدات متطورة وتقنيات حديثة",
      descEn:
        "Comprehensive site survey using advanced equipment and modern techniques",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F5a072650e2fe4782b49fcd747a65b1a8?format=webp&width=800&height=1200",
      titleAr: "التقييم المتكامل للموقع",
      titleEn: "Integrated Site Evaluation",
      descAr: "تقييم شامل للموقع يشمل جميع جوانب الدراسة الجيولوجية",
      descEn:
        "Complete site evaluation covering all aspects of geological assessment",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            {isArabic
              ? "الدراسات الجيولوجية وتقييم المواقع"
              : "Geological Studies & Site Evaluation"}
          </h1>
          <div className="w-16 h-1 bg-gold-900 mx-auto"></div>
          <p className="text-xl text-white/80 mt-6">
            {isArabic
              ? "تقييم شامل وتحليل دقيق للمواقع المحتملة"
              : "Comprehensive evaluation and precise analysis of potential sites"}
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className={`prose prose-lg max-w-none ${isArabic ? "text-right" : ""}`}
            >
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {isArabic
                  ? "توفر شركة لاندكود للاستثمار المحدودة خدمات دراسات جيولوجية متقدمة تجمع بين الخبرة العميقة والتقنيات الحديثة. من خلال تحليل شامل للبيانات الجيولوجية والدراسات الميدانية المتقنة، نقيم المواقع بدقة عالية ونحدد الفرص الاستثمارية الواعدة."
                  : "Land Code Investment Ltd. provides advanced geological study services combining deep expertise with modern technology. Through comprehensive geological data analysis and precise field studies, we evaluate sites with high accuracy and identify promising investment opportunities."}
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                {isArabic
                  ? "يعتمد فريقنا على أحدث التقنيات المتطورة في المسح الجيولوجي والتحليل الرقمي لضمان تقديم تقارير دقيقة وموثوقة تدعم القرارات الاستثمارية."
                  : "Our team relies on the latest advanced technology in geological surveys and digital analysis to ensure accurate and reliable reports that support investment decisions."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold-900 font-semibold tracking-[0.5em] uppercase text-xs mb-3">
              {isArabic ? "الصور الميدانية" : "Field Photography"}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-primary">
              {isArabic
                ? "معرض الدراسات الجيولوجية"
                : "Geological Studies Gallery"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <GalleryCard
                key={index}
                image={image}
                index={index}
                isArabic={isArabic}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const GalleryCard = ({
  image,
  index,
  isArabic,
}: {
  image: {
    src: string;
    titleAr: string;
    titleEn: string;
    descAr: string;
    descEn: string;
  };
  index: number;
  isArabic: boolean;
}) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
      style={{
        animation: `fadeInUp 0.6s ease-out forwards`,
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
      }}
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden bg-slate-300">
        <img
          src={image.src}
          alt={isArabic ? image.titleAr : image.titleEn}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Card Content */}
      <div className={`bg-white p-6 ${isArabic ? "text-right" : ""}`}>
        <h3 className="text-lg font-bold text-primary mb-2">
          {isArabic ? image.titleAr : image.titleEn}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {isArabic ? image.descAr : image.descEn}
        </p>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Geology;
