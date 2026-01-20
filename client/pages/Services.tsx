import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const services = [
    {
      title: 'التنقيب عن الذهب والمعادن النفيسة',
      description: 'برامج استكشاف متقدمة باستخدام أحدث التقنيات الجيولوجية',
      icon: '⛏️',
    },
    {
      title: 'الدراسات الجيولوجية وتقييم المواقع',
      description: 'دراسات شاملة وتقييم متفصل لمواقع التعدين المحتملة',
      icon: '🔍',
    },
    {
      title: 'تحليل العينات الصخرية وعينات التربة',
      description: 'تحليل دقيق ومفصل للعينات باستخدام تقنيات حديثة',
      icon: '🧪',
    },
    {
      title: 'تحديد عروق الذهب ومناطق التعدين',
      description: 'تحديد دقيق لمناطق التركيز العالي للمعادن القيمة',
      icon: '⚙️',
    },
    {
      title: 'أعمال المسح الجيولوجي والاستشعار عن بعد',
      description: 'استخدام تقنيات GIS والاستشعار بالأقمار الصناعية',
      icon: '📡',
    },
    {
      title: 'إعداد التقارير الفنية والأولية',
      description: 'تقارير تفصيلية وشاملة للاستثمارين ومتخذي القرار',
      icon: '📊',
    },
    {
      title: 'تصميم وإنشاء مصانع معالجة الخامات',
      description: 'حلول متكاملة لتصميم وإنشاء مصانع معالجة الخامات',
      icon: '🏭',
    },
    {
      title: 'الدراسات الأولية والتصميم الهندسي',
      description: 'دراسات هندسية دقيقة لتحديد المواصفات الفنية المثلى',
      icon: '🔧',
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
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className={`text-xl font-semibold text-primary mb-3 ${isArabic ? 'text-right' : ''}`}>
                  {service.title}
                </h3>
                <p className={`text-gray-600 ${isArabic ? 'text-right' : ''}`}>
                  {service.description}
                </p>
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
