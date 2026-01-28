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
      <CompanyHistory isArabic={isArabic} t={t} />

      {/* Mission & Vision */}
      <MissionVision isArabic={isArabic} t={t} />

      {/* CEO Message */}
      <CEOMessage isArabic={isArabic} t={t} />

      {/* Management Team */}
      <ManagementTeam isArabic={isArabic} t={t} />
    </div>
  );
};

const CompanyHistory = ({ isArabic, t }: any) => {
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

const MissionVision = ({ isArabic, t }: any) => {
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
              <h3 className="text-2xl font-semibold text-primary">
                {t("about.mission")}
              </h3>
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
              <h3 className="text-2xl font-semibold text-primary">
                {t("about.vision")}
              </h3>
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

const CEOMessage = ({ isArabic, t }: any) => {
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

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
            isVisible ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        >
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
            <p
              className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold italic border-l-4 border-gold-900 pl-6"
              style={{
                borderLeft: isArabic ? "none" : "",
                borderRight: isArabic ? "4px solid #d4af37" : "none",
                paddingRight: isArabic ? "24px" : "0",
                paddingLeft: isArabic ? "0" : "24px",
              }}
            >
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

const ManagementTeam = ({ isArabic, t }: any) => {
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
      nameEn: "A.M. ABUZAR Mohamed Osman",
      role: "المدير العام",
      roleEn: "General Manager",
      icon: "👔",
      description: "يشرف على إدارة الشركة وتوجيه الاستراتيجيات العامة",
      descriptionEn:
        "Oversees company management and directs general strategies",
    },
    {
      name: "أ. م. أحمد حسن عيد",
      nameEn: "A.M. Ahmed Hassan Eid",
      role: "نائب المدير العام",
      roleEn: "Deputy General Manager",
      icon: "👔",
      description:
        "يدعم المدير العام ويشرف على متابعة المشاريع والإدارة التشغيلية",
      descriptionEn:
        "Supports the General Manager and oversees project tracking and operational management",
    },
    {
      name: "م. عمر الحاج بس",
      nameEn: "Eng. Omar Al-Haj Bas",
      role: "مهندس تعدين",
      roleEn: "Mining Engineer",
      icon: "⛏️",
      description:
        "مسؤول عن تخطيط وتنفيذ عمليات التعدين وفق المعايير الهندسية الفنية",
      descriptionEn:
        "Responsible for planning and executing mining operations according to technical engineering standards",
    },
    {
      name: "م. أحمد فتح الرحمن",
      nameEn: "Eng. Ahmed Fath Al-Rahman",
      role: "مهندس جيولوجي",
      roleEn: "Geological Engineer",
      icon: "🔬",
      description:
        "يتولى الدراسات الجيولوجية والاستكشاف وتقييم الموارد المعدنية",
      descriptionEn:
        "Handles geological studies, exploration, and mineral resource evaluation",
    },
    {
      name: "م. وليد عبدالحميد محمود",
      nameEn: "Eng. Waleed Abdel-Hamid Mahmoud",
      role: "مهندس معالجة",
      roleEn: "Processing Engineer",
      icon: "🏭",
      description:
        "يشرف على تصميم وتشغيل مصانع معالجة الخامات وتحسين معدلات الاستخلاص",
      descriptionEn:
        "Oversees design and operation of ore processing plants and improves extraction rates",
    },
    {
      name: "أ. م. أحمد حسن عيد (GIS)",
      nameEn: "A.M. Ahmed Hassan Eid (GIS)",
      role: "متخصص نظم معلومات جغرافية",
      roleEn: "GIS Information Systems Specialist",
      icon: "🗺️",
      description:
        "يدير نظم المعلومات الجيولوجية وتحليل البيانات لدعم القرارات الفنية",
      descriptionEn:
        "Manages geological information systems and data analysis to support technical decisions",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-2 text-center">
          {t("about.management")}
        </h2>
        <p className="text-center text-gold-900 font-semibold mb-12">
          {t("about.partnerships")}
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
        {isArabic ? member.name : member.nameEn}
      </h3>
      <p
        className={`text-gold-900 font-semibold mb-3 ${isArabic ? "text-right" : ""}`}
      >
        {isArabic ? member.role : member.roleEn}
      </p>
      <p className={`text-gray-600 text-sm ${isArabic ? "text-right" : ""}`}>
        {isArabic ? member.description : member.descriptionEn}
      </p>
    </div>
  );
};

export default About;
