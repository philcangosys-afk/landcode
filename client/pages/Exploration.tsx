import { useLanguage } from '@/contexts/LanguageContext';

const Exploration = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const galleryImages = [
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fad01fb9849b94be08cd56756f5c9a10c?format=webp&width=800&height=1200',
      titleAr: 'عمليات الحفر الجيولوجي',
      titleEn: 'Geological Drilling Operations',
      descAr: 'دراسات استكشافية متقدمة باستخدام أحدث تقنيات الحفر',
      descEn: 'Advanced exploration using cutting-edge drilling technology',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F18b8b7a175ad46308c64e6483df5dbec?format=webp&width=800&height=1200',
      titleAr: 'عينات الذهب الخام',
      titleEn: 'Raw Gold Samples',
      descAr: 'عينات مستخرجة من الدراسات الجيولوجية تظهر جودة المعادن',
      descEn: 'Extracted samples demonstrating mineral quality',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F81df8e3d49c241e194b27f9d08432747?format=webp&width=800&height=1200',
      titleAr: 'موقع التعدين الاستكشافي',
      titleEn: 'Exploration Mining Site',
      descAr: 'فريق العمل يقوم بالمسح والتقييم الميداني الشامل',
      descEn: 'Field survey and comprehensive site evaluation team',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F197510996e5641a4a77102fa2b567347?format=webp&width=800&height=1200',
      titleAr: 'الدراسات الجيولوجية الميدانية',
      titleEn: 'Field Geological Studies',
      descAr: 'متخصصون في الجيولوجيا يقومون بتحليل العينات والبيانات',
      descEn: 'Geologists analyzing samples and field data',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F4a158fcecdfc4ca88cf5b01e1bfab046?format=webp&width=800&height=1200',
      titleAr: 'معدات الحفر المتقدمة',
      titleEn: 'Advanced Drilling Equipment',
      descAr: 'استخدام أحدث معدات الحفر والاستكشاف في الميدان',
      descEn: 'Latest drilling and exploration equipment in field operations',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            {isArabic ? 'التنقيب عن الذهب والمعادن' : 'Gold & Precious Metals Exploration'}
          </h1>
          <div className="w-16 h-1 bg-gold-900 mx-auto"></div>
          <p className="text-xl text-white/80 mt-6">
            {isArabic
              ? 'دراسات استكشافية شاملة وتقييم جيولوجي متطور'
              : 'Comprehensive exploration studies and advanced geological evaluation'}
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`prose prose-lg max-w-none ${isArabic ? 'text-right' : ''}`}>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {isArabic
                  ? 'تقدم شركة لاندكود للاستثمار المحدودة خدمات استكشاف متكاملة تجمع بين الخبرة الجيولوجية المتقدمة والتقنيات الحديثة. من خلال دراسات استكشافية شاملة وتحليل جيولوجي دقيق، نحدد المناطق الواعدة للتعدين ونقيم الموارد المعدنية بدقة عالية.'
                  : 'Land Code Investment Ltd. offers integrated exploration services combining advanced geological expertise with modern technology. Through comprehensive exploration studies and precise geological analysis, we identify promising mining areas and evaluate mineral resources with high accuracy.'}
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                {isArabic
                  ? 'يعمل فريقنا على استخدام أحدث تقنيات المسح الجيولوجي والحفر الاستكشافي لضمان الحصول على بيانات دقيقة وموثوقة تدعم قرارات الاستثمار.'
                  : 'Our team utilizes the latest geological survey and exploration drilling techniques to ensure accurate and reliable data that supports investment decisions.'}
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
              {isArabic ? 'الصور الميدانية' : 'Field Photography'}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-primary">
              {isArabic ? 'معرض عمليات الاستكشاف' : 'Exploration Operations Gallery'}
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
      <div className={`bg-white p-6 ${isArabic ? 'text-right' : ''}`}>
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

export default Exploration;
