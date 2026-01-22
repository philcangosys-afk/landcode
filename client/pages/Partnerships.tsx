import { useLanguage } from "@/contexts/LanguageContext";

const Partnerships = () => {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const partnerships = [
    {
      titleAr: "الشركة اليابانية للتمنية المحدودة",
      titleEn: "Japanese Development Co. Ltd",
      descriptionAr:
        "تم توقيع عقد شراكة مع الشركة اليابانية للتمنية المحدودة بمنطقة نمرة ٣ وادي حلفاء لتطوير منجم الشركة و إنشاء مصنع Vat leach لمعالجة خام الذهب.",
      descriptionEn:
        "Partnership agreement signed with Japanese Development Co. Ltd in zone 3, Wadi Halfa for developing the company's mine and establishing a Vat leach plant for gold ore processing.",
    },
    {
      titleAr: "شركة الأوركيدا العالمية",
      titleEn: "Orchida Global Company",
      descriptionAr:
        "تم توقيع عقد شراكة مع شركة الاوركيدا العالميه لعمل استكشاف واسع النطاق في مناطق البحر الأحمر ابتدأ من منطقة قُرت الي منطقة وادي أمور مرورا بمنطقة ارياب لاكتشاف الخام و تحديد مناطقه من ثم فتح مناجم سطحية لستخراج الخام و من ثم توريده لمصانع المعالجه.",
      descriptionEn:
        "Partnership agreement with Orchida Global Company for large-scale exploration in Red Sea regions from Qurt to Wadi Amour through Aryab area. The project involves ore discovery, site identification, opening surface mines for extraction, and supplying ore to processing plants.",
    },
    {
      titleAr: "القيادة الذهبية للتعدين",
      titleEn: "Golden Leadership Mining",
      descriptionAr:
        "تم توقيع عقد مع القيادة الذهبية للتعدين تشغيل مناجم الشركة بمنطقة أبوحمد و استخراج الخام.",
      descriptionEn:
        "Agreement signed with Golden Leadership Mining for operating the company's mines in Abu Hamad region and ore extraction.",
    },
    {
      titleAr: "شركة الاعتماد للتعدين",
      titleEn: "Al-Eatemad Mining Company",
      descriptionAr:
        "تم توقيع عقد للإستكشاف مع شركة الاعتماد للتعدين لبدء الاستكشاف في الولاية الشمالية و التي بها مصنعين تتبع للشركة.",
      descriptionEn:
        "Exploration agreement signed with Al-Eatemad Mining Company for initiating exploration in Northern State, which includes two processing plants operated by the company.",
    },
    {
      titleAr: "المشاركة في عمليات الاستكشاف",
      titleEn: "Exploration Partnerships",
      descriptionAr:
        "المشاركة مع شركات أخرى في عمليات الاستكشاف في مربع للتعدين تبلغ مساحته 344كم بالولاية الشماليه بمنطقة عكاشا و تم من خلاله حفر ثمانيه مناجم من أصل اثني عشر منجم و سيتم تركيب مصنع CIL قريبا.",
      descriptionEn:
        "Collaboration with other companies in exploration activities covering a mining block of 344 km² in Northern State, Akasha area. Eight mines out of twelve have been drilled, with a CIL plant to be installed soon.",
    },
    {
      titleAr: "المسح الجيولوجي لمنطقة المحس",
      titleEn: "Al-Mahass Geological Survey",
      descriptionAr:
        "مسح جيولوجي لمنطقة المحس بدأ من منطقة دلقو شمالاً إلى حدود وادي حلفا جنوباً لتجهيز خرائط استثمارية للتعدين و أخذ أكثر من 380 عينة مختلفة من الكوارتز و الحجر الجيري تراوحت النسب من 1.5 إلى 6 جرام للطن الواحد.",
      descriptionEn:
        "Geological survey of Al-Mahass region from Delgo in the north to Wadi Halfa in the south. Investment maps prepared for mining, with over 380 different samples of quartz and limestone collected, with grades ranging from 1.5 to 6 grams per ton.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-900 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-900 rounded-full blur-3xl" />
        </div>

        <div className="relative container max-w-6xl mx-auto px-4 text-white">
          <div className={`text-center ${isArabic ? "text-right" : ""}`}>
            <p className="uppercase tracking-[0.4em] text-gold-900 text-xs mb-4">
              {isArabic ? "شراكات موثوقة" : "Strategic Partnerships"}
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              {isArabic
                ? "شراكاتنا العالمية والمحلية"
                : "Our Global & Local Partnerships"}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              {isArabic
                ? "نعمل مع شركات عالمية وعربية رائدة لتقديم أفضل الحلول في مجال التعدين والاستكشاف."
                : "We collaborate with leading global and Arab companies to deliver the best solutions in mining and exploration."}
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Image Section */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fabb03dc5ab934e248f939054703a560a?format=webp&width=800&height=1200"
            alt="Partnership signing ceremony"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Partnerships List */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="space-y-12">
            {partnerships.map((partnership, index) => (
              <div
                key={index}
                className={`border-l-4 border-gold-900 pl-6 py-6 ${isArabic ? "border-l-0 border-r-4 pr-6 pl-0" : ""}`}
              >
                <h3 className="text-2xl font-black text-primary mb-4">
                  {isArabic ? partnership.titleAr : partnership.titleEn}
                </h3>
                <p className={`text-lg text-slate-700 leading-relaxed ${isArabic ? "text-right" : ""}`}>
                  {isArabic
                    ? partnership.descriptionAr
                    : partnership.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-gold-900/5">
        <div className="container max-w-6xl mx-auto px-4">
          <div className={`grid md:grid-cols-3 gap-8 text-center ${isArabic ? "text-right" : ""}`}>
            <div>
              <p className="text-5xl font-black text-gold-900 mb-2">6+</p>
              <p className="text-lg text-slate-700 font-semibold">
                {isArabic ? "شركات شريكة" : "Partner Companies"}
              </p>
            </div>
            <div>
              <p className="text-5xl font-black text-gold-900 mb-2">344 km²</p>
              <p className="text-lg text-slate-700 font-semibold">
                {isArabic ? "مساحة عمليات" : "Operations Area"}
              </p>
            </div>
            <div>
              <p className="text-5xl font-black text-gold-900 mb-2">380+</p>
              <p className="text-lg text-slate-700 font-semibold">
                {isArabic ? "عينات جيولوجية" : "Geological Samples"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
