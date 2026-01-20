import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">اتصل بنا</h1>
          <p className="text-xl text-gray-200">
            نحن هنا للإجابة على جميع أسئلتك والاستماع إلى اقتراحاتك
          </p>
          <div className="w-16 h-1 bg-gold-900 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Address */}
            <ContactCard isArabic={isArabic} icon="📍" title="العنوان">
              <p>السودان - الخرطوم</p>
              <p>حي الطائف - مربع 23</p>
            </ContactCard>

            {/* Email */}
            <ContactCard isArabic={isArabic} icon="✉️" title="البريد الإلكتروني">
              <a href="mailto:landcode2026@gmail.com" className="text-gold-900 hover:text-gold-900/80">
                landcode2026@gmail.com
              </a>
            </ContactCard>

            {/* Phone */}
            <ContactCard isArabic={isArabic} icon="📞" title="الهاتف">
              <div className="space-y-2">
                <a href="tel:+249912350743" className="block text-gold-900 hover:text-gold-900/80">
                  <span dir="ltr" className="tracking-wide">
                    +249 912 350 743
                  </span>
                </a>
                <a href="tel:+249999900048" className="block text-gold-900 hover:text-gold-900/80">
                  <span dir="ltr" className="tracking-wide">
                    +249 999 900 048
                  </span>
                </a>
                <a href="tel:+24912372286" className="block text-gold-900 hover:text-gold-900/80">
                  <span dir="ltr" className="tracking-wide">
                    +249 12 372 2286
                  </span>
                </a>
              </div>
            </ContactCard>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div className={isArabic ? 'order-2' : ''}>
              <h2 className={`text-3xl font-bold text-primary mb-6 ${isArabic ? 'text-right' : ''}`}>
                نموذج الاتصال
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className={`block text-primary font-semibold mb-2 ${isArabic ? 'text-right' : ''}`}>
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسمك"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-900 ${isArabic ? 'text-right' : ''}`}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-primary font-semibold mb-2 ${isArabic ? 'text-right' : ''}`}>
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-900 ${isArabic ? 'text-right' : ''}`}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className={`block text-primary font-semibold mb-2 ${isArabic ? 'text-right' : ''}`}>
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+249 ..."
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-900 ${isArabic ? 'text-right' : ''}`}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className={`block text-primary font-semibold mb-2 ${isArabic ? 'text-right' : ''}`}>
                    الموضوع
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="موضوع الاستفسار"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-900 ${isArabic ? 'text-right' : ''}`}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-primary font-semibold mb-2 ${isArabic ? 'text-right' : ''}`}>
                    الرسالة
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="أكتب رسالتك هنا..."
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-900 resize-none ${isArabic ? 'text-right' : ''}`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gold-900 text-primary font-semibold rounded-lg hover:bg-gold-900/80 transition"
                >
                  إرسال الرسالة
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    شكراً لك! تم استقبال رسالتك بنجاح سيتم التواصل معك قريباً.
                  </div>
                )}
              </form>
            </div>

            {/* Map Placeholder */}
            <div className={isArabic ? 'order-1' : ''}>
              <h2 className={`text-3xl font-bold text-primary mb-6 ${isArabic ? 'text-right' : ''}`}>
                موقعنا
              </h2>
              <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                {/* In a real application, you would embed a Google Map here */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.8293270485576!2d32.548823!3d15.501702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16849d7c7e7c7c7d%3A0x0!2sKhartoum%2C%20Sudan!5e0!3m2!1sen!2sus!4v1234567890"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className={`mt-6 p-4 bg-gray-50 rounded-lg ${isArabic ? 'text-right' : ''}`}>
                <p className="text-gray-700">
                  <span className="font-semibold text-primary">ساعات العمل:</span> <br />
                  السبت - الخميس: 8:00 صباحاً - 5:00 مساءً <br />
                  الجمعة: مغلق
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactCard = ({ isArabic, icon, title, children }: any) => {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all ${isArabic ? 'text-right' : ''}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
      <div className="text-gray-700 space-y-1">{children}</div>
    </div>
  );
};

export default Contact;
