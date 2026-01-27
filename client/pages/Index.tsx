import {
  useState,
  useEffect,
  type CSSProperties,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "@/contexts/LanguageContext";

const heroStats = [
  { labelAr: "سنوات الخبرة", labelEn: "Years of excellence", value: "+15" },
  { labelAr: "مشاريع كبرى", labelEn: "Flagship projects", value: "28" },
  { labelAr: "شركاء استراتيجيون", labelEn: "Strategic partners", value: "12" },
];

const servicesData = [
  {
    tagAr: "المعادن النفيسة",
    tagEn: "Precious metals",
    titleAr: "التنقيب عن الذهب والمعادن",
    titleEn: "Gold & precious metals exploration",
    descriptionAr:
      "دراسات استكشاف شاملة واستخدام أحدث تقنيات الاستشعار والمسوحات الجيولوجية.",
    descriptionEn:
      "Comprehensive exploration programs powered by cutting-edge sensing and geological surveys.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Feb869ae859b84613983676bb2ddf5cd5?format=webp&width=1400",
  },
  {
    tagAr: "دراسات الجدوى",
    tagEn: "Feasibility",
    titleAr: "الدراسات الجيولوجية وتقييم المواقع",
    titleEn: "Geological studies & site evaluation",
    descriptionAr:
      "تحليل جيولوجي متكامل، تقييم المخاطر، وتحويل البيانات إلى رؤى استثمارية دقيقة.",
    descriptionEn:
      "Integrated geological analysis, risk evaluation, and investor-ready insights.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fcefe0a98350d48a7b7568e75e402b654?format=webp&width=1200",
  },
  {
    tagAr: "المعالجة الصناعية",
    tagEn: "Processing",
    titleAr: "تصميم وإنشاء مصانع معالجة الخامات",
    titleEn: "Ore processing plant design & build",
    descriptionAr:
      "حلول هندسية متكاملة من التصميم المفهومي إلى التشغيل الكامل للمصانع.",
    descriptionEn:
      "Integrated engineering covering concept design through commissioning of plants.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F90a802257a034486bf85e75e0a7e9151?format=webp&width=1400",
  },
];

type OrbitNodeConfig = {
  id: string;
  serviceIndex: number;
  coords: { x: number; y: number };
  infoPosition: CSSProperties;
  infoPositionRtl?: CSSProperties;
  delay: number;
};

const serviceNodesConfig: OrbitNodeConfig[] = [
  {
    id: "exploration",
    serviceIndex: 0,
    coords: { x: 50, y: 18 },
    infoPosition: {
      top: "calc(100% + 1.25rem)",
      left: "50%",
      transform: "translate(-50%, 0)",
    },
    delay: 0.1,
  },
  {
    id: "geology",
    serviceIndex: 1,
    coords: { x: 75, y: 78 },
    infoPosition: {
      left: "calc(100% + 1.25rem)",
      top: "50%",
      transform: "translateY(-50%)",
    },
    infoPositionRtl: {
      right: "calc(100% + 1.25rem)",
      top: "50%",
      transform: "translateY(-50%)",
    },
    delay: 0.2,
  },
  {
    id: "processing",
    serviceIndex: 2,
    coords: { x: 25, y: 78 },
    infoPosition: {
      right: "calc(100% + 1.25rem)",
      top: "50%",
      transform: "translateY(-50%)",
    },
    infoPositionRtl: {
      left: "calc(100% + 1.25rem)",
      top: "50%",
      transform: "translateY(-50%)",
    },
    delay: 0.3,
  },
];

const sliderImages = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fc00b85c2b9924a29ad4ace7f05a6415b?format=webp&width=800&height=1200",
    alt: "عمليات التعدين والاستكشاف",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fad505c4b24494313b6fca718f8bbdd37?format=webp&width=800&height=1200",
    alt: "معدات التنقيب الحديثة",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fa8be2489b83b40dba909010998a1795b?format=webp&width=800&height=1200",
    alt: "عمليات الاستخراج والمعالجة",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F2c35e86709754f2a84ab9d23f0d9096b?format=webp&width=800&height=1200",
    alt: "موقع التعدين والإنتاج",
  },
];

const projects = [
  {
    nameAr: "مشروع همش ربّاب - ولاية البحر الأحمر",
    nameEn: "Hamash Rubab – Red Sea State",
    descriptionAr:
      "برنامج استكشاف جيولوجي متكامل لتطوير مناجم سطحية وبناء سلسلة إمداد لمصانع الذهب.",
    descriptionEn:
      "Integrated exploration and pit development with a dedicated supply chain to gold plants.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F486c06ee0357413fb5972319d30e3456?format=webp&width=1200",
  },
  {
    nameAr: "مشروع وادي حلفا - شمال السودان",
    nameEn: "Wadi Halfa – Northern Sudan",
    descriptionAr:
      "تحديد مناطق معدنية واعدة عبر دراسات استكشاف عميقة وتقنيات استشعار عن بعد.",
    descriptionEn:
      "Identifying promising mineral corridors with deep exploration and remote sensing.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F54887cbbad2748d2835293e88a3cdae1?format=webp&width=1200",
  },
];

const Index = () => {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div className="bg-white">
      <Hero language={language} isArabic={isArabic} />
      <AboutPreview isArabic={isArabic} />
      <ServicesShowcase language={language} isArabic={isArabic} />
      <ProjectsShowcase language={language} isArabic={isArabic} />
      <CSRSection language={language} isArabic={isArabic} />
      <PartnersSlider language={language} isArabic={isArabic} />
      <CTABand isArabic={isArabic} t={t} />
    </div>
  );
};

const Hero = ({
  language,
  isArabic,
}: {
  language: "ar" | "en";
  isArabic: boolean;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {sliderImages.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-black/70" />
      </div>

      <div className="relative container max-w-6xl mx-auto px-4 py-24 lg:py-32 text-white">
        <div
          className={`grid gap-12 lg:grid-cols-[1.3fr,0.7fr] items-center ${isArabic ? "text-right" : ""}`}
        >
          <div>
            <p className="uppercase tracking-[0.4em] text-gold-900 text-xs mb-4">
              {language === "ar"
                ? "بانكوك مستقبل التعدين"
                : "Mining & Investment Firm"}
            </p>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.4] mb-6">
              {language === "ar"
                ? "نستخرج الفرص ونبني المستقبل في قطاع التعدين السوداني"
                : "We extract opportunities and build the future of Sudanese mining"}
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              {language === "ar"
                ? "لاندكود للاستثمار المحدودة تقود مشاريع الاستكشاف، الدراسات الجيولوجية، وتصميم المصانع بمعايير عالمية وخبرات تراكمية في القطاع."
                : "Land Code Investment Ltd. leads exploration programmes, geological studies, and plant design with world-class standards and deep local expertise."}
            </p>

            <div
              className={`flex flex-wrap items-center gap-4 ${isArabic ? "justify-end" : ""}`}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold-900 px-8 py-3 text-primary font-semibold text-base shadow-xl shadow-black/20 hover:bg-gold-900/90"
              >
                {language === "ar" ? "احجز استشارة" : "Book a consultation"}
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white/90 hover:bg-white/10"
              >
                {language === "ar" ? "استعرض مشاريعنا" : "Explore our projects"}
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur xl:px-8 xl:py-10 px-6 py-8 rounded-3xl border border-white/30 shadow-2xl">
            <p className="text-sm text-white/70 mb-6">
              {language === "ar"
                ? "حلول متكاملة تغطي الدورة الكاملة لمشاريع التعدين، من الدراسات الأولية إلى إدارة المصانع."
                : "End-to-end mining solutions from preliminary studies to plant operations."}
            </p>
            <div className="flex flex-col gap-6">
              {heroStats.map((stat) => (
                <div
                  key={stat.value}
                  className="border-b border-white/15 pb-5 last:border-none last:pb-0"
                >
                  <p className="text-4xl font-black text-gold-900">
                    {stat.value}
                  </p>
                  <p className="text-white/80 text-sm uppercase tracking-[0.3em]">
                    {language === "ar" ? stat.labelAr : stat.labelEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPreview = ({ isArabic }: { isArabic: boolean }) => (
  <section className="py-24 bg-white">
    <div className="container max-w-6xl mx-auto px-4">
      <div
        className={`grid lg:grid-cols-2 gap-12 items-center ${isArabic ? "text-right" : ""}`}
      >
        <div className="flex flex-col">
          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fe2a14d45778e4e87bb7ac9fb34875c34?format=webp&width=800&height=1200"
              alt="عمليات تعدينية - شركة لاندكود"
              className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
          <div className="mt-6 bg-white rounded-2xl shadow-xl p-6 border border-slate-100 max-w-sm mx-auto lg:mx-0">
            <p className="text-sm text-slate-500 mb-1">2020 → الآن</p>
            <p className="text-lg font-semibold text-primary">
              {isArabic
                ? "خبرة سودانية بجودة عالمية في التنقيب والخدمات الفنية"
                : "Sudanese expertise with global standards in exploration & engineering"}
            </p>
          </div>
        </div>
        <div>
          <p className="text-gold-900 font-semibold mb-3">
            {isArabic ? "نبذة عن الشركة" : "Company Profile"}
          </p>
          <h2 className="text-4xl font-black text-primary mb-6 leading-snug">
            {isArabic
              ? "شركة لاندكود للاستثمار المحدودة منذ عام 2020"
              : "Land Code Investment Ltd. since 2020"}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            {isArabic
              ? "نقدم خدمات استكشاف، دراسات جيولوجية، وتطوير مصانع المعالجة وفق أعلى معايير الجودة والحوكمة."
              : "We deliver exploration, geological studies, and processing plant development governed by international quality systems."}
          </p>
          <ul className="space-y-4 text-slate-600">
            {[
              isArabic
                ? "شراكات استراتيجية مع شركات تقنية وخبراء جيولوجيين"
                : "Strategic collaborations with technology firms and geologists",
              isArabic
                ? "التزام كامل بمعايير السلامة والاستدامة البيئية"
                : "Full compliance with safety and environmental stewardship",
              isArabic
                ? "فرق متعددة التخصصات تغطي التخطيط، التشغيل، والدعم الاستشاري"
                : "Multidisciplinary teams covering planning, execution, and advisory support",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 rounded-full bg-gold-900"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ServicesShowcase = ({
  language,
  isArabic,
}: {
  language: "ar" | "en";
  isArabic: boolean;
}) => {
  const [activeNode, setActiveNode] = useState<string | null>(
    serviceNodesConfig[0]?.id ?? null,
  );

  const serviceNodes = serviceNodesConfig.map((node) => {
    const mirroredX = isArabic ? 100 - node.coords.x : node.coords.x;

    return {
      ...node,
      coords: { x: mirroredX, y: node.coords.y },
      infoPosition:
        isArabic && node.infoPositionRtl
          ? node.infoPositionRtl
          : node.infoPosition,
      service: servicesData[node.serviceIndex],
    };
  });

  const activeServiceNode =
    serviceNodes.find((node) => node.id === activeNode) ?? serviceNodes[0];

  const hubVideo =
    "https://cdn.coverr.co/videos/coverr-pouring-molten-metal-6005/1080p.mp4";
  const arrowIcon = isArabic ? "←" : "→";

  return (
    <section className="py-28 bg-slate-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold-900 font-semibold tracking-[0.5em] uppercase text-xs mb-3">
            {language === "ar" ? "حلول متكاملة" : "Integrated solutions"}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-primary">
            {language === "ar"
              ? "مجالات عملنا المتخصصة"
              : "Our specialised practice areas"}
          </h2>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] min-h-[520px] sm:max-w-[640px] sm:min-h-[600px] lg:max-w-5xl lg:min-h-[640px]">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            {serviceNodes.map((node) => (
              <line
                key={`${node.id}-line`}
                x1="50"
                y1="50"
                x2={node.coords.x}
                y2={node.coords.y}
                className={`spoke-line ${activeNode === node.id ? "spoke-line-active" : ""}`}
                style={{ animationDelay: `${0.4 + node.delay}s` }}
              />
            ))}
          </svg>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="services-hub-wrapper relative">
              <div className="services-hub-glow" />
              <div className="services-hub relative w-[360px] h-[360px] rounded-full overflow-hidden border border-white/30 shadow-[0_30px_90px_rgba(10,25,49,0.35)] bg-primary">
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                  src={hubVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/70 to-black/40" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-8">
                  <span className="text-[4.5rem] font-black tracking-[0.3em] text-gold-900 drop-shadow-[0_0_25px_rgba(0,0,0,0.6)]">
                    LC
                  </span>
                  <p className="mt-4 text-sm uppercase tracking-[0.6em] text-white/70">
                    {language === "ar"
                      ? "حلول تعدين متكاملة"
                      : "Integrated mining solutions"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {serviceNodes.map((node) => (
            <OrbitNode
              key={node.id}
              node={node}
              language={language}
              isArabic={isArabic}
              activeNode={activeNode}
              setActiveNode={setActiveNode}
              arrowIcon={arrowIcon}
            />
          ))}
        </div>

        {activeServiceNode && (
          <div
            className={`mt-12 lg:hidden bg-white rounded-3xl border border-slate-100 shadow-xl p-6 transition ${isArabic ? "text-right" : ""}`}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-gold-900/80 mb-2">
              {language === "ar"
                ? activeServiceNode.service.tagAr
                : activeServiceNode.service.tagEn}
            </p>
            <h3 className="text-2xl font-bold text-primary mb-3">
              {language === "ar"
                ? activeServiceNode.service.titleAr
                : activeServiceNode.service.titleEn}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              {language === "ar"
                ? activeServiceNode.service.descriptionAr
                : activeServiceNode.service.descriptionEn}
            </p>
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 text-sm font-semibold text-gold-900 ${isArabic ? "flex-row-reverse" : ""}`}
            >
              {language === "ar" ? "اعرف المزيد" : "Learn more"}
              <span>{arrowIcon}</span>
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .services-hub-wrapper {
          opacity: 0;
          animation: hubPop 0.9s ease-out forwards;
          animation-delay: 0.2s;
        }
        .services-hub-glow {
          position: absolute;
          inset: -70px;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.35), transparent 70%);
          filter: blur(25px);
          animation: haloPulse 6s ease-in-out infinite;
        }
        .spoke-line {
          stroke: rgba(255, 255, 255, 0.25);
          stroke-width: 0.6;
          stroke-linecap: round;
          stroke-dasharray: 140;
          stroke-dashoffset: 140;
          opacity: 0;
          animation: spokeGrow 1.2s ease forwards;
        }
        .spoke-line-active {
          stroke: #d4af37;
          filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.6));
        }
        .orbit-node-button {
          opacity: 0;
          animation: nodeReveal 0.85s ease forwards;
        }
        @keyframes hubPop {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          60% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes haloPulse {
          0% {
            opacity: 0.25;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.45;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.25;
            transform: scale(0.95);
          }
        }
        @keyframes spokeGrow {
          0% {
            stroke-dashoffset: 140;
            opacity: 0;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        @keyframes nodeReveal {
          0% {
            transform: scale(0.75);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

type DerivedOrbitNode = OrbitNodeConfig & {
  coords: { x: number; y: number };
  infoPosition: CSSProperties;
  service: (typeof servicesData)[number];
};

type OrbitNodeProps = {
  node: DerivedOrbitNode;
  language: "ar" | "en";
  isArabic: boolean;
  activeNode: string | null;
  setActiveNode: Dispatch<SetStateAction<string | null>>;
  arrowIcon: string;
};

const OrbitNode = ({
  node,
  language,
  isArabic,
  activeNode,
  setActiveNode,
  arrowIcon,
}: OrbitNodeProps) => {
  const title = language === "ar" ? node.service.titleAr : node.service.titleEn;
  const description =
    language === "ar" ? node.service.descriptionAr : node.service.descriptionEn;
  const tag = language === "ar" ? node.service.tagAr : node.service.tagEn;
  const isActive = activeNode === node.id;

  const handleToggle = () => {
    setActiveNode((prev) => (prev === node.id ? null : node.id));
  };

  return (
    <div
      className="absolute"
      style={{
        top: `${node.coords.y}%`,
        left: `${node.coords.x}%`,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={() => setActiveNode(node.id)}
      onMouseLeave={() => setActiveNode(null)}
    >
      {node.id === "exploration" ||
      node.id === "geology" ||
      node.id === "processing" ? (
        <Link
          to={
            node.id === "exploration"
              ? "/exploration"
              : node.id === "geology"
                ? "/geology"
                : "/processing"
          }
          className={`orbit-node-button group relative w-36 h-36 rounded-full border border-white/35 overflow-hidden shadow-[0_20px_50px_rgba(10,25,49,0.35)] transition-all duration-500 backdrop-blur inline-flex items-center justify-center ${
            isActive
              ? "border-gold-900 ring-2 ring-gold-900/70 scale-105"
              : "bg-white/5"
          }`}
          style={{ animationDelay: `${0.6 + node.delay}s` }}
          onMouseEnter={() => setActiveNode(node.id)}
          onMouseLeave={() => setActiveNode(null)}
        >
          <img
            src={node.service.image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-b from-black/5 via-black/50 to-black/85 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-90"} group-hover:opacity-100`}
          />

          {/* Fixed text display - always visible */}
          <div
            className={`absolute inset-0 h-full flex flex-col items-center justify-center text-center text-white px-4 z-10`}
          >
            <span className="text-[0.55rem] uppercase tracking-[0.45em] text-white/70 mb-2">
              {tag}
            </span>
            <p className="text-sm font-semibold leading-snug">{title}</p>
          </div>
        </Link>
      ) : (
        <button
          type="button"
          className={`orbit-node-button group relative w-36 h-36 rounded-full border border-white/35 overflow-hidden shadow-[0_20px_50px_rgba(10,25,49,0.35)] transition-all duration-500 backdrop-blur ${
            isActive
              ? "border-gold-900 ring-2 ring-gold-900/70 scale-105"
              : "bg-white/5"
          }`}
          style={{ animationDelay: `${0.6 + node.delay}s` }}
          onFocus={() => setActiveNode(node.id)}
          onBlur={() => setActiveNode(null)}
          onClick={handleToggle}
        >
          <img
            src={node.service.image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/50 to-black/85 opacity-90 transition group-hover:opacity-100" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
            <span className="text-[0.55rem] uppercase tracking-[0.45em] text-white/70 mb-2">
              {tag}
            </span>
            <p className="text-sm font-semibold leading-snug">{title}</p>
          </div>
        </button>
      )}
    </div>
  );
};

const ProjectsShowcase = ({
  language,
  isArabic,
}: {
  language: "ar" | "en";
  isArabic: boolean;
}) => (
  <section className="py-24 bg-white">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
        <div className={isArabic ? "text-right" : ""}>
          <p className="text-gold-900 font-semibold">
            {language === "ar" ? "مشاريعنا الحية" : "Active portfolios"}
          </p>
          <h2 className="text-4xl font-black text-primary mt-2">
            {language === "ar"
              ? "قصص نجاح ميدانية"
              : "Field-proven success stories"}
          </h2>
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-primary font-semibold"
        >
          {language === "ar" ? "اكتشف جميع المشاريع" : "View all projects"}
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.nameEn}
            className="relative overflow-hidden rounded-3xl shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.nameEn}
              className="w-full h-[360px] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div
              className={`absolute inset-0 p-8 flex flex-col justify-end text-white ${isArabic ? "text-right" : ""}`}
            >
              <p className="text-sm text-gold-900/80 mb-2">
                {language === "ar" ? "موقع استراتيجي" : "Strategic site"}
              </p>
              <h3 className="text-2xl font-bold mb-3">
                {language === "ar" ? project.nameAr : project.nameEn}
              </h3>
              <p className="text-white/85 text-base leading-relaxed">
                {language === "ar"
                  ? project.descriptionAr
                  : project.descriptionEn}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const partnersData = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fb852a176283543bfb77519d3752688bb?format=webp&width=800&height=1200",
    alt: "Albarajoub Group",
    nameAr: "مجموعة البراج الذهبية",
    nameEn: "Albarajoub Group",
    descriptionAr:
      "شركة رائدة في قطاع التعدين والاستثمار مع خبرة عميقة في إدارة المشاريع",
    descriptionEn:
      "Leading mining and investment company with deep expertise in project management",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F9e3d8f532faf46719933b2c598921491?format=webp&width=800&height=1200",
    alt: "Dal Mining",
    nameAr: "دال للتعدين",
    nameEn: "Dal Mining",
    descriptionAr: "متخصصة في المسوحات الجيولوجية والاستكشاف المعدني المتقدم",
    descriptionEn:
      "Specialized in geological surveys and advanced mineral exploration",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fe07743e56dff44cdb479ca5ff91a8d05?format=webp&width=800&height=1200",
    alt: "Geological Research Authority",
    nameAr: "الهيئة الجيولوجية السودانية",
    nameEn: "Geological Research Authority",
    descriptionAr: "هيئة حكومية متخصصة في البحوث الجيولوجية والدراسات المعدنية",
    descriptionEn:
      "Government authority specialized in geological research and mineral studies",
  },
];

const CSRSection = ({
  language,
  isArabic,
}: {
  language: "ar" | "en";
  isArabic: boolean;
}) => {
  const csrInitiatives = [
    {
      iconAr: "🍎",
      titleAr: "الدعم الغذائي",
      titleEn: "Food Support",
      descriptionAr:
        "توزيع المواد الغذائية للمدارس والداخليات في المناطق المستضيفة",
      descriptionEn:
        "Distributing food items to schools and hostels in host communities",
    },
    {
      iconAr: "🛣️",
      titleAr: "تطوير البنية التحتية",
      titleEn: "Infrastructure Development",
      descriptionAr:
        "مساعدة المحليات في فتح الطرق ومشاريع المياه للمشاريع الزراعية",
      descriptionEn:
        "Assisting local authorities in road development and water projects",
    },
    {
      iconAr: "🤝",
      titleAr: "دعم المجتمع المحلي",
      titleEn: "Community Support",
      descriptionAr:
        "معاونة المجتمع المحلي في جميع الاحتياجات الخاصة للأسر المتعففة",
      descriptionEn:
        "Supporting local communities in addressing needs of low-income families",
    },
    {
      iconAr: "🌍",
      titleAr: "الإصحاح البيئي",
      titleEn: "Environmental Sanitation",
      descriptionAr:
        "حملات إصحاح بيئي شامل في المناطق التي عملنا بها للمحافظة على الصحة العامة",
      descriptionEn:
        "Environmental sanitation campaigns in all operational areas for public health",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 ${isArabic ? "text-right" : ""}`}>
          <p className="text-gold-900 font-semibold tracking-[0.5em] uppercase text-xs mb-3">
            {language === "ar" ? "التزامنا الاجتماعي" : "Our Commitment"}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
            {language === "ar"
              ? "مسؤوليتنا المجتمعية"
              : "Corporate Social Responsibility"}
          </h2>
        </div>

        {/* Main Description */}
        <div
          className={`max-w-4xl mx-auto mb-16 p-8 bg-slate-50 rounded-2xl border-l-4 border-gold-900 ${isArabic ? "text-right border-l-0 border-r-4 border-r-gold-900" : ""}`}
        >
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            {language === "ar"
              ? "تقوم الشركة بدورها في المسؤولية المجتمعية في المناطق المستضيفة للتعدين مثل توزيع المواد الغذائية للمدارس والداخليات، مساعدة المحليات في فتح الطرق ومشاريع المياه للمشاريع الزراعية، ومعاونة المجتمع المحلي في جميع الاحتياجات الخاصة لذوي الدخل المحدود من الأسر المتعففة."
              : "The company fulfills its corporate social responsibility in mining host communities through food distribution to schools and hostels, assisting local authorities in road development and water projects for agricultural initiatives, and supporting local communities in addressing all special needs of low-income and disadvantaged families."}
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            {language === "ar"
              ? "كما تقوم الشركة بحملات إصحاح بيئي في جميع المناطق التي عملت بها، إيماناً منا بدور البيئة المهم في تنمية المجتمعات والمحافظة على الصحة العامة في المناطق المستضيفة لمجالات التعدين من الاستكشاف ومصانع معالجة الذهب."
              : "Additionally, the company conducts environmental sanitation campaigns in all areas where it operates, believing in the crucial role of environmental protection in community development and maintaining public health in mining host communities, from exploration activities to gold processing plants."}
          </p>
        </div>

        {/* Initiative Cards */}
        <div className={`mb-16 ${isArabic ? "text-right" : ""}`}>
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            {language === "ar" ? "مجالات تركيزنا" : "Our Focus Areas"}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {csrInitiatives.map((initiative, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 hover:border-gold-900 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {initiative.iconAr}
              </div>
              <h3
                className={`text-xl font-bold text-primary mb-3 ${isArabic ? "text-right" : ""}`}
              >
                {language === "ar" ? initiative.titleAr : initiative.titleEn}
              </h3>
              <p
                className={`text-slate-600 leading-relaxed text-sm ${isArabic ? "text-right" : ""}`}
              >
                {language === "ar"
                  ? initiative.descriptionAr
                  : initiative.descriptionEn}
              </p>
              <div
                className={`mt-4 h-1 w-12 bg-gold-900 rounded-full group-hover:w-full transition-all duration-300 ${isArabic ? "ml-auto" : ""}`}
              ></div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 p-8 bg-gold-900 rounded-2xl text-white ${isArabic ? "text-right" : ""}`}
        >
          <div className="flex items-start gap-4">
            <span className="text-4xl">🌱</span>
            <div>
              <h3 className="text-2xl font-bold mb-3">
                {language === "ar"
                  ? "التزام بيئي شامل"
                  : "Comprehensive Environmental Commitment"}
              </h3>
              <p className="text-white/95 leading-relaxed">
                {language === "ar"
                  ? "نؤمن أن الاستدامة البيئية هي أساس التنمية المستدامة، لذلك نقوم بحملات إصحاح بيئي في كل مناطق عملياتنا"
                  : "We believe environmental sustainability is the foundation of sustainable development, so we conduct environmental sanitation campaigns across all our operational areas."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnersSlider = ({
  language,
  isArabic,
}: {
  language: "ar" | "en";
  isArabic: boolean;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 ${isArabic ? "text-right" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-black text-primary">
            {language === "ar"
              ? "شركائنا الاستراتيجيون"
              : "Our strategic partners"}
          </h2>
          <p className="text-lg text-slate-600 mt-4">
            {language === "ar"
              ? "نتعاون مع أفضل الشركات والمؤسسات الرائدة في قطاع التعدين والاستثمار"
              : "We collaborate with leading companies and institutions in mining and investment"}
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap">
          {partnersData.map((partner, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg border-4 border-white bg-white flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Popup Card on Hover */}
              {hoveredIndex === index && (
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-56 bg-white rounded-2xl shadow-2xl p-6 border border-slate-100 transition-all duration-300 ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <p className="text-sm font-semibold text-gold-900 mb-2">
                    {language === "ar" ? "شريك استراتيجي" : "Strategic Partner"}
                  </p>
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {language === "ar" ? partner.nameAr : partner.nameEn}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {language === "ar"
                      ? partner.descriptionAr
                      : partner.descriptionEn}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTABand = ({
  isArabic,
  t,
}: {
  isArabic: boolean;
  t: (key: string) => string;
}) => (
  <section
    className="relative py-24"
    style={{
      backgroundImage:
        "linear-gradient(135deg, rgba(10, 25, 49, 0.95), rgba(10, 25, 49, 0.85)), url(https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1600&auto=format&fit=crop)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="container max-w-4xl mx-auto px-4 text-center text-white">
      <p className="uppercase tracking-[0.4em] text-gold-900 text-xs mb-4">
        {isArabic ? "شراكات مستدامة" : "Sustainable partnerships"}
      </p>
      <h2 className="text-4xl font-black mb-6">
        {isArabic
          ? "نقود الاستثمارات التعدينية بثقة وشفافية"
          : "Leading mining investments with trust & clarity"}
      </h2>
      <p className="text-lg text-white/85 mb-10">
        {isArabic
          ? "تواصل معنا لبناء شراكة تحقق أهدافك الاستثمارية وتضمن استدامة المشاريع المستقبلية."
          : "Partner with us to unlock investment goals while ensuring resilient, future-ready projects."}
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 rounded-full bg-gold-900 px-10 py-3 text-lg font-semibold text-primary shadow-xl hover:bg-gold-900/90"
      >
        {t("cta.button")}
      </Link>
    </div>
  </section>
);

export default Index;
