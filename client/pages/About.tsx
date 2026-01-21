import { useLanguage } from "@/contexts/LanguageContext";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{t("about.heroTitle")}</h1>
          <div className="w-16 h-1 bg-gold-900 mx-auto"></div>
        </div>
      </section>

      {/* Company History */}
      <CompanyHistory isArabic={isArabic} />

      {/* Mission & Vision */}
      <MissionVision isArabic={isArabic} />

      {/* CEO Message */}
      <CEOMessage isArabic={isArabic} />

      {/* Management Team */}
      <ManagementTeam isArabic={isArabic} />
    </div>
  );
};

const CompanyHistory = ({ isArabic }: any) => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`py-20 bg-gray-50 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={isArabic ? "order-2" : ""}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fc0e917a30a934526be4721d6246b24e9?format=webp&width=800&height=1200"
              alt="عمليات التعدين والاستخراج"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className={isArabic ? "order-1 text-right" : ""}>
            <h2 className="text-4xl font-bold text-primary mb-6">
              {t("about.history.title")}
            </h2>
            <div
              className="w-12 h-1 bg-gold-900 mb-6"
              style={{ marginLeft: isArabic ? "auto" : "0" }}
            ></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t("about.history.paragraph1")}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t("about.history.paragraph2")}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("about.history.paragraph3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionVision = ({ isArabic }: any) => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-2 text-center">
          {t("about.missionVision")}
        </h2>
        <div className="w-16 h-1 bg-gold-900 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div
            className={`p-8 bg-gray-50 rounded-lg border-l-4 border-gold-900 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl">🎯</span>
              <h3 className="text-2xl font-semibold text-primary">{t("about.mission")}</h3>
            </div>
            <p
              className={`text-gray-700 text-lg leading-relaxed ${isArabic ? "text-right" : ""}`}
            >
              {t("about.mission.text")}
            </p>
          </div>

          {/* Vision */}
          <div
            className={`p-8 bg-gray-50 rounded-lg border-l-4 border-gold-900 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl">🚀</span>
              <h3 className="text-2xl font-semibold text-primary">{t("about.vision")}</h3>
            </div>
            <p
              className={`text-gray-700 text-lg leading-relaxed ${isArabic ? "text-right" : ""}`}
            >
              {t("about.vision.text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CEOMessage = ({ isArabic }: any) => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-2 text-center">
          {t("about.ceoMessage")}
        </h2>
        <div className="w-16 h-1 bg-gold-900 mx-auto mb-12"></div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-all duration-1000`}>
          {/* CEO Image */}
          <div className={isArabic ? "order-2" : ""}>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F5fc6dd578ab94e528fbb9fac68065a4d?format=webp&width=800&height=1200"
                alt="Abuzar Mohamed - CEO"
                className="w-full max-w-sm h-auto rounded-lg shadow-xl object-cover"
              />
              <h3 className="text-2xl font-bold text-primary mt-6 text-center">
                Abuzar Mohamed
              </h3>
              <p className="text-lg text-gold-900 font-semibold text-center">
                CEO
              </p>
            </div>
          </div>

          {/* CEO Message */}
          <div className={isArabic ? "order-1 text-right" : ""}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold italic border-l-4 border-gold-900 pl-6" style={{ borderLeft: isArabic ? "none" : "", borderRight: isArabic ? "4px solid #d4af37" : "none", paddingRight: isArabic ? "24px" : "0", paddingLeft: isArabic ? "0" : "24px" }}>
              "{t("about.ceoMessage.text")}"
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t("about.ceoMessage.paragraph")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ManagementTeam = ({ isArabic }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const team = [
    {
      name: "أ. م. أيوذر محمد عثمان",
      role: "المدير العام",
      icon: "👔",
      description: "يشرف على إدارة الشركة وتوجيه الاستراتيجيات العامة",
    },
    {
      name: "أ. م. أحمد حسن عيد",
      role: "نائب المدير العام",
      icon: "👔",
      description:
        "يدعم المدير العام ويشرف على متابعة المشاريع والإدارة التشغيلية",
    },
    {
      name: "م. عمر الحاج بس",
      role: "مهندس تعدين",
      icon: "⛏️",
      description:
        "مسؤول عن تخطيط وتنفيذ عمليات التعدين وفق المعايير الهندسية الفنية",
    },
    {
      name: "م. أحمد فتح الرحمن",
      role: "مهندس جيولوجي",
      icon: "🔬",
      description:
        "يتولى الدراسات الجيولوجية والاستكشاف وتقييم الموارد المعدنية",
    },
    {
      name: "م. وليد عبدالحميد محمود",
      role: "مهندس معالجة",
      icon: "🏭",
      description:
        "يشرف على تصميم وتشغيل مصانع معالجة الخامات وتحسين معدلات الاستخلاص",
    },
    {
      name: "أ. م. أحمد حسن عيد (GIS)",
      role: "متخصص نظم معلومات جغرافية",
      icon: "🗺️",
      description:
        "يدير نظم المعلومات الجيولوجية وتحليل البيانات لدعم القرارات الفنية",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-2 text-center">
          الهيكل الاداري والفني
        </h2>
        <p className="text-center text-gold-900 font-semibold mb-12">
          Partnerships & Management Team
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              member={member}
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

const TeamMember = ({ member, index, isVisible, isArabic }: any) => {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ${
        isVisible ? `opacity-100 translate-y-0` : `opacity-0 translate-y-10`
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
    >
      <div className="text-5xl mb-4">{member.icon}</div>
      <h3
        className={`text-lg font-semibold text-primary mb-1 ${isArabic ? "text-right" : ""}`}
      >
        {member.name}
      </h3>
      <p
        className={`text-gold-900 font-semibold mb-3 ${isArabic ? "text-right" : ""}`}
      >
        {member.role}
      </p>
      <p className={`text-gray-600 text-sm ${isArabic ? "text-right" : ""}`}>
        {member.description}
      </p>
    </div>
  );
};

export default About;
