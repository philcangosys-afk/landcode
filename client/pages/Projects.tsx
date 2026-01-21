import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";

  const projects = [
    {
      ar: {
        name: "همش ربّاب - ولاية البحر الأحمر",
        location: "الولاية الحمراء، السودان",
        description: "برامج استكشاف متكاملة ودراسات جيولوجية متقدمة، مع تطوير منجم سطحي وتوريد الخام بنظام إلى مصانع معالجة الذهب.",
        details: ["دراسات جيولوجية متقدمة", "تطوير منجم سطحي", "معدات استخراج حديثة", "نقل الخام إلى مصانع المعالجة"],
      },
      en: {
        name: "Hamash Rubab - Red Sea State",
        location: "Red Sea State, Sudan",
        description: "Integrated exploration programs and advanced geological studies, with development of an open-pit mine and ore supply to gold processing plants.",
        details: ["Advanced geological studies", "Open-pit mine development", "Modern extraction equipment", "Ore transportation to processing plants"],
      },
      image: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F486c06ee0357413fb5972319d30e3456?format=webp&width=1200",
    },
    {
      ar: {
        name: "وادي حلفا - شمال السودان",
        location: "شمال السودان",
        description: "دراسات استكشافية موسعة أسفرت عن تحديد عدة مواقع ذات مؤشرات تعدين واعدة، وفتح مناجم جديدة للاستخراج.",
        details: ["دراسات استكشافية موسعة", "تحديد مواقع تعدين جديدة", "أعمال استخراج متطورة", "تطوير منجم جديد"],
      },
      en: {
        name: "Wadi Halfa - Northern Sudan",
        location: "Northern Sudan",
        description: "Extensive exploratory studies that resulted in identifying several sites with promising mining indicators, and opening new mines for extraction.",
        details: ["Extensive exploratory studies", "Identification of new mining sites", "Advanced extraction operations", "New mine development"],
      },
      image: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F54887cbbad2748d2835293e88a3cdae1?format=webp&width=1200",
    },
    {
      ar: {
        name: "مصنع الهصور CIL",
        location: "الولاية الشمالية، دلقو",
        description: "تأهيل وتطوير شامل لمصنع معالجة الذهب باستخدام تقنية CIL (Carbon in Leach) المتقدمة، مع تدريب القوى العاملة وتشغيل المصنع بكفاءة عالية.",
        details: ["تطوير مصنع CIL متقدم", "تركيب معدات معالجة حديثة", "تدريب القوى البشرية", "ضمان معايير السلامة والبيئة"],
      },
      en: {
        name: "Al-Hasour CIL Plant",
        location: "Northern State, Delgo",
        description: "Comprehensive rehabilitation and development of a gold processing plant using advanced CIL (Carbon in Leach) technology, with workforce training and efficient plant operation.",
        details: ["Advanced CIL plant development", "Installation of modern processing equipment", "Workforce training", "Safety and environmental standards assurance"],
      },
      image: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F90a802257a034486bf85e75e0a7e9151?format=webp&width=1200",
    },
    {
      ar: {
        name: "مصنع الشركة الدولية CIL",
        location: "الولاية الشمالية، وادي حلفا",
        description: "تأهيل شامل لمصنع معالجة الذهب بتقنية CIL للشركة الدولية، يتضمن تحديث البنية التحتية والمعدات والأنظمة الإدارية لضمان الإنتاج الأمثل.",
        details: ["تحديث البنية التحتية", "استبدال المعدات القديمة", "تطوير الأنظمة الإدارية", "زيادة الطاقة الإنتاجية"],
      },
      en: {
        name: "International Company CIL Plant",
        location: "Northern State, Wadi Halfa",
        description: "Comprehensive rehabilitation of an international company's gold processing plant using CIL technology, including infrastructure updates, equipment upgrades, and administrative system development for optimal production.",
        details: ["Infrastructure updates", "Equipment replacement", "Administrative system development", "Production capacity increase"],
      },
      image: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F416100acc0eb4e8384b3081c642200da?format=webp&width=1200",
    },
    {
      ar: {
        name: "مصنع المسار",
        location: "ولاية نهر النيل، منطقة العبيدية",
        description: "تقييم شامل وإعادة تشغيل مصنع المعالجة الموجود مع تحسين كفاءة العمليات والتحديث التكنولوجي، مما يضمن استدامة الإنتاج وجودة المخرجات.",
        details: ["تقييم شامل للمنشآت", "تحديث المعدات والأنظمة", "تحسين كفاءة العمليات", "إعادة تشغيل متدرجة وآمنة"],
      },
      en: {
        name: "Al-Massar Plant",
        location: "Nile State, Al-Obeidi Region",
        description: "Comprehensive assessment and reactivation of an existing processing plant with improved operational efficiency and technological upgrades, ensuring sustainable production and output quality.",
        details: ["Comprehensive facility assessment", "Equipment and system updates", "Operational efficiency improvement", "Gradual and safe plant restart"],
      },
      image: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F3e47241f4891406090746f0cc4cfda1a?format=webp&width=1200",
    },
    {
      ar: {
        name: "مصنع سنابل المحدودة VAT LEACH",
        location: "الولاية الشمالية، وادي حلفا",
        description: "بدء مرحلة الإنشاء والتطوير لمصنع معالجة الذهب بتقنية VAT LEACH المتقدمة، يتضمن التصميم الهندسي والبناء والتجهيز لتصبح منشأة حديثة عالمية المعايير.",
        details: ["تصميم هندسي متطور", "تقنية VAT LEACH الحديثة", "البناء والتطوير المرحلي", "معايير عالمية للسلامة والجودة"],
      },
      en: {
        name: "Sunabel Ltd. VAT LEACH Plant",
        location: "Northern State, Wadi Halfa",
        description: "Initial construction and development phase of an advanced VAT LEACH gold processing plant, including engineering design, construction, and commissioning to become a modern world-class facility.",
        details: ["Advanced engineering design", "Modern VAT LEACH technology", "Phased construction and development", "International standards for safety and quality"],
      },
      image: "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Ff9f4decc97bd4e90b73ab01f5ebfbf17?format=webp&width=1200",
    },
  ];

  const galleryImages = [
    "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F0d3a1d2c6c144b65a2c27d785ca2539b?format=webp&width=1400",
    "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F4af10a6df4c549f29045993d31e2f216?format=webp&width=1400",
    "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F655b2bb199ca4826b706f08b1bbaa01a?format=webp&width=1400",
    "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F8999d2b736c642c2a30f89daff55372a?format=webp&width=1400",
    "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F7957f38e5d1d40498390238d71e870fb?format=webp&width=1400",
    "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F3e47241f4891406090746f0cc4cfda1a?format=webp&width=1400",
    "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F416100acc0eb4e8384b3081c642200da?format=webp&width=1400",
    "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Ff9f4decc97bd4e90b73ab01f5ebfbf17?format=webp&width=1400",
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{t("projects.title")}</h1>
          <p className="text-xl text-gray-200">
            {isArabic ? "مشاريع رائدة في التعدين والاستكشاف الجيولوجي" : "Leading projects in mining and geological exploration"}
          </p>
          <div className="w-16 h-1 bg-gold-900 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Projects Introduction */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`space-y-6 ${isArabic ? "text-right" : ""}`}>
              <div className="prose prose-lg max-w-none">
                {isArabic ? (
                  <>
                    <p className="text-slate-700 leading-relaxed text-lg">
                      المشاركة مع شركات أخرى في عمليات الاستكشاف في مربع للتعدين تبلغ مساحته 344كم بالولاية الشماليه بمنطقة عكاشا و تم من خلاله حفر ثمانيه مناجم من أصل اثني عشر منجم و سيتم تركيب مصنع CIL قريبا.
                    </p>
                    <p className="text-slate-700 leading-relaxed text-lg">
                      مسح جيولوجي لمنطقة المحس بدأ من منطقة دلقو شمالاً إلى حدود وادي حلفا جنوباً لتجهيز خرائط استثمارية للتعدين و أخذ أكثر من 380 عينة مختلفة من الكوارتز و الحجر الجيري تراوحت النسب من 1.5 إلى 6 جرام للطن الواحد.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-slate-700 leading-relaxed text-lg">
                      Partnership with other companies in exploration operations at a 344 km² mining concession in Northern State, in the Akasha region. Eight mines have been drilled out of a planned twelve, with a CIL plant installation scheduled soon.
                    </p>
                    <p className="text-slate-700 leading-relaxed text-lg">
                      Geological survey of the Mahass region spanning from Delgo in the north to Wadi Halfa in the south to prepare investment maps for mining. Over 380 different samples of quartz and limestone were collected with assay values ranging from 1.5 to 6 grams per ton.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <ProjectDetail
                key={index}
                project={project}
                index={index}
                isArabic={isArabic}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            {isArabic ? "معرض الصور" : "Photo Gallery"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={src}
                className="bg-gray-200 h-64 rounded-lg overflow-hidden"
              >
                <img
                  src={src}
                  alt={`معرض الصور ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectDetail = ({ project, index, isArabic }: any) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:auto-cols-reverse" : ""}`}
      >
        {/* Image */}
        <div>
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Content */}
        <div
          className={`p-8 flex flex-col justify-center ${isArabic ? "text-right" : ""}`}
        >
          <h3 className="text-3xl font-bold text-primary mb-2">
            {project.name}
          </h3>
          <p className="text-gold-900 font-semibold mb-4">{project.location}</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Details List */}
          <div className="space-y-2">
            <p className="font-semibold text-primary mb-3">المميزات:</p>
            <ul className={`space-y-2 ${isArabic ? "text-right" : ""}`}>
              {project.details.map((detail: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2">
                  {isArabic ? (
                    <>
                      <span className="text-gold-900">•</span>
                      <span className="text-gray-700">{detail}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-gold-900">•</span>
                      <span className="text-gray-700">{detail}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
