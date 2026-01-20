import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const projects = [
    {
      name: 'همش ربّاب - ولاية البحر الأحمر',
      location: 'Red Sea State, Sudan',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      description: 'برامج استكشاف متكاملة ودراسات جيولوجية متقدمة، مع تطوير منجم سطحي وتوريد الخام بنظام إلى مصانع معالجة الذهب.',
      details: [
        'دراسات جيولوجية متقدمة',
        'تطوير منجم سطحي',
        'معدات استخراج حديثة',
        'نقل الخام إلى مصانع المعالجة',
      ],
    },
    {
      name: 'وادي حلفا - شمال السودان',
      location: 'Northern Sudan',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      description: 'دراسات استكشافية موسعة أسفرت عن تحديد عدة مواقع ذات مؤشرات تعدين واعدة، وفتح مناجم جديدة للاستخراج.',
      details: [
        'دراسات استكشافية موسعة',
        'تحديد مواقع تعدين جديدة',
        'أعمال استخراج متطورة',
        'تطوير منجم جديد',
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">مشاريعنا</h1>
          <p className="text-xl text-gray-200">
            مشاريع رائدة في التعدين والاستكشاف الجيولوجي
          </p>
          <div className="w-16 h-1 bg-gold-900 mx-auto mt-6"></div>
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            معرض الصور
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-gray-200 h-64 rounded-lg overflow-hidden"
              >
                <img
                  src={`https://images.unsplash.com/photo-1581092${161562 + i}?w=400&h=300&fit=crop`}
                  alt={`Gallery ${i}`}
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
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:auto-cols-reverse' : ''}`}>
        {/* Image */}
        <div>
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Content */}
        <div className={`p-8 flex flex-col justify-center ${isArabic ? 'text-right' : ''}`}>
          <h3 className="text-3xl font-bold text-primary mb-2">
            {project.name}
          </h3>
          <p className="text-gold-900 font-semibold mb-4">
            {project.location}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Details List */}
          <div className="space-y-2">
            <p className="font-semibold text-primary mb-3">المميزات:</p>
            <ul className={`space-y-2 ${isArabic ? 'text-right' : ''}`}>
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
