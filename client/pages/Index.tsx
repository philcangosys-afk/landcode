import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';

const Index = () => {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection isArabic={isArabic} t={t} />

      {/* About Section */}
      <AboutSection isArabic={isArabic} t={t} />

      {/* Services Section */}
      <ServicesSection isArabic={isArabic} t={t} />

      {/* Projects Section */}
      <ProjectsSection isArabic={isArabic} t={t} />

      {/* CTA Section */}
      <CTASection isArabic={isArabic} t={t} />
    </div>
  );
};

const HeroSection = ({ isArabic, t }: any) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&h=900&fit=crop"
          alt="Mining Operation at Sunset"
          className="w-full h-full object-cover animate-ken-burns"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl font-light drop-shadow-md">
          {t('hero.tagline')}
        </p>
        <Link
          to="/contact"
          className="inline-block mt-8 px-8 py-3 bg-gold-900 text-primary font-semibold rounded hover:bg-gold-900/80 transition"
        >
          {t('cta.button')}
        </Link>
      </div>

      {/* Add Ken Burns animation to global.css */}
      <style>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1) translateX(0);
          }
          100% {
            transform: scale(1.05) translateX(2%);
          }
        }
        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

const AboutSection = ({ isArabic, t }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`py-20 bg-gray-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`overflow-hidden rounded-lg ${isArabic ? 'order-2' : ''}`}>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
              alt="Mining Operations"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className={isArabic ? 'order-1 text-right' : ''}>
            <h2 className="text-4xl font-bold text-primary mb-6">{t('about.title')}</h2>
            <div className="w-12 h-1 bg-gold-900 mb-6" style={{ marginLeft: isArabic ? 'auto' : '0' }}></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              شركة لاندكود للاستثمار المحدودة متخصصة في أعمال التعدين والاستكشاف الجيولوجي، وقد تأسست عام 2020 كشركة متخصصة في أعمال التعدين وخدماتها، بالإضافة إلى تقديم الخدمات الفنية والهندسية والاستشارية في مجال الاستكشاف الجيولوجي، مع تركيز خاص على البحث عن الذهب والمعادن النفيسة في المنطقة والمنطقة المحلية.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              تعتمد الشركة على المنهجيات العلمية والتقنيات الحديثة، والتزام بالمعايير البيئية ومتطلبات السلامة والصحة المهنية لضمان استدامة الأعمال وتوثيقها.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = ({ isArabic, t }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: '⛏️',
      title: t('services.service1.title'),
      description: t('services.service1.desc'),
    },
    {
      icon: '🔍',
      title: t('services.service2.title'),
      description: t('services.service2.desc'),
    },
    {
      icon: '🏭',
      title: t('services.service3.title'),
      description: t('services.service3.desc'),
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-2 text-center">
          {t('services.title')}
        </h2>
        <div className="w-16 h-1 bg-gold-900 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isVisible={isVisible}
              isArabic={isArabic}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index, isVisible, isArabic }: any) => {
  return (
    <div
      className={`p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-500 ${
        isVisible
          ? `opacity-100 translate-y-0`
          : `opacity-0 translate-y-10`
      }`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
    >
      <div className="text-5xl mb-4">{service.icon}</div>
      <h3 className={`text-xl font-semibold text-primary mb-3 ${isArabic ? 'text-right' : ''}`}>
        {service.title}
      </h3>
      <p className={`text-gray-600 ${isArabic ? 'text-right' : ''}`}>
        {service.description}
      </p>
    </div>
  );
};

const ProjectsSection = ({ isArabic, t }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-2 text-center">
          {t('projects.title')}
        </h2>
        <div className="w-16 h-1 bg-gold-900 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Hamash Rubab Project */}
          <ProjectCard
            isArabic={isArabic}
            t={t}
            title={t('projects.hamash')}
            image="https://images.unsplash.com/photo-1518611505867-48a1ad300e15?w=600&h=400&fit=crop"
            description="برامج استكشاف متكاملة ودراسات جيولوجية متقدمة، مع تطوير منجم سطحي وتوريد الخام بنظام إلى مصانع معالجة الذهب"
            mapImage="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=300&h=300&fit=crop"
            isVisible={isVisible}
            delay={0}
          />

          {/* Wadi Halfa Project */}
          <ProjectCard
            isArabic={isArabic}
            t={t}
            title={t('projects.wadi')}
            image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop"
            description="دراسات استكشافية موسعة أسفرت عن تحديد عدة مواقع ذات مؤشرات تعدين واعدة، وفتح مناجم جديدة للاستخراج"
            mapImage="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=300&h=300&fit=crop"
            isVisible={isVisible}
            delay={150}
          />
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition"
          >
            {t('projects.learnMore')}
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ isArabic, t, title, image, description, mapImage, isVisible, delay }: any) => {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ${
        isVisible
          ? `opacity-100 translate-y-0`
          : `opacity-0 translate-y-10`
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className={`text-xl font-semibold text-primary mb-3 ${isArabic ? 'text-right' : ''}`}>
          {title}
        </h3>
        <p className={`text-gray-600 mb-4 ${isArabic ? 'text-right' : ''}`}>
          {description}
        </p>
        <img src={mapImage} alt="Map" className="w-full h-48 object-cover rounded" />
      </div>
    </div>
  );
};

const CTASection = ({ isArabic, t }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1581092161562-40b08b6fed0b?w=1600&h=600&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className={`relative z-10 container max-w-4xl mx-auto px-4 text-center text-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('cta.title')}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          {t('cta.description')}
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-gold-900 text-primary font-semibold rounded text-lg hover:bg-gold-900/80 transition"
        >
          {t('cta.button')}
        </Link>
      </div>
    </section>
  );
};

export default Index;
