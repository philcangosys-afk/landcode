import { useLanguage } from '@/contexts/LanguageContext';

const Processing = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const galleryImages = [
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Ffd23f9c469e7460ea1d3e4499eaf13aa?format=webp&width=800&height=1200',
      titleAr: 'معدات المعالجة المتقدمة',
      titleEn: 'Advanced Processing Equipment',
      descAr: 'آلات معالجة حديثة بأعلى كفاءة في استخلاص المعادن',
      descEn: 'Modern processing machinery with highest extraction efficiency',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F0d97b446c05b4fa28060cbee144cabf5?format=webp&width=800&height=1200',
      titleAr: 'خزانات المعالجة الصناعية',
      titleEn: 'Industrial Processing Tanks',
      descAr: 'خزانات تجهيز كبيرة الحجم لمعالجة الخامات بكميات ضخمة',
      descEn: 'Large-scale processing tanks for bulk ore treatment',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F9cdbdda3279b40bda64cab10a7747417?format=webp&width=800&height=1200',
      titleAr: 'مراقبة جودة المعالجة',
      titleEn: 'Processing Quality Control',
      descAr: 'أنظمة مراقبة متطورة لضمان جودة العملية',
      descEn: 'Advanced monitoring systems ensuring process quality',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F7bc7878eea114e3cbb79119bcedf2f32?format=webp&width=800&height=1200',
      titleAr: 'حوض التحليل والمعالجة',
      titleEn: 'Analysis & Processing Basin',
      descAr: 'حوض معالجة متطور مع أنظمة تحليل ذكية',
      descEn: 'Advanced processing basin with intelligent analysis systems',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F7719b7615cfd4209a4a4a540f459b389?format=webp&width=800&height=1200',
      titleAr: 'منشآت الاستخلاص المائي',
      titleEn: 'Aqueous Extraction Facilities',
      descAr: 'منشآت استخلاص حديثة تعتمد على التقنيات المائية',
      descEn: 'Modern extraction facilities using aqueous technologies',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fa7fd2088c8ff4b1086f16a9676a1f51c?format=webp&width=800&height=1200',
      titleAr: 'مجمع معالجة متكامل',
      titleEn: 'Integrated Processing Complex',
      descAr: 'مجمع معالجة شامل مع جميع أنظمة المعالجة المتقدمة',
      descEn: 'Complete processing complex with all advanced systems',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            {isArabic ? 'تصميم وإنشاء مصانع معالجة الخامات' : 'Ore Processing Plant Design & Build'}
          </h1>
          <div className="w-16 h-1 bg-gold-900 mx-auto"></div>
          <p className="text-xl text-white/80 mt-6">
            {isArabic
              ? 'حلول هندسية متكاملة من التصميم إلى التشغيل الكامل'
              : 'Integrated engineering solutions from design to full operations'}
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
                  ? 'توفر شركة لاندكود للاستثمار المحدودة خدمات تصميم وبناء مصانع معالجة الخامات بمعايير عالمية. من خلال فهم عميق لعمليات المعالجة والهندسة المتقدمة، نقوم بتصميم منشآت معالجة فعالة تتمتع بأعلى معدلات استخلاص واستدامة.'
                  : 'Land Code Investment Ltd. provides ore processing plant design and build services to international standards. Through deep understanding of processing operations and advanced engineering, we design efficient facilities with highest extraction rates and sustainability.'}
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                {isArabic
                  ? 'يغطي فريقنا جميع مراحل المشروع من الدراسة الأولية والتصميم الهندسي المفصل إلى التشغيل الكامل والدعم الفني المستمر لضمان أداء مثالي.'
                  : 'Our team covers all project phases from initial studies and detailed engineering design to full commissioning and continuous technical support ensuring optimal performance.'}
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
              {isArabic ? 'معرض مصانع المعالجة' : 'Processing Plants Gallery'}
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

export default Processing;
