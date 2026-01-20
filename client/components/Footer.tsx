import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white">
      <div className="border-b-4 border-gold-900"></div>
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Section */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-gold-900">LC</div>
              <div className="text-xs font-semibold text-gray-300">
                <div>LAND CODE</div>
                <div>INVESTMENT LTD.</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              استثمار متخصص في التعدين والاستكشاف الجيولوجي
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gold-900 mb-4 text-sm uppercase">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-gold-900 transition">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-900 transition">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-900 transition">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-gold-900 transition">
                  {t('nav.projects')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gold-900 mb-4 text-sm uppercase">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="mailto:landcode2026@gmail.com" className="hover:text-gold-900 transition">
                  landcode2026@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+249912350743" className="hover:text-gold-900 transition">
                  +249 912 350 743
                </a>
              </li>
              <li>
                <a href="tel:+249999900048" className="hover:text-gold-900 transition">
                  +249 999 900 048
                </a>
              </li>
              <li>
                <a href="tel:+24912372286" className="hover:text-gold-900 transition">
                  +249 12 372 2286
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold text-gold-900 mb-4 text-sm uppercase">
              {t('contact.address')}
            </h3>
            <address className="text-sm text-gray-300 not-italic">
              السودان - الخرطوم<br />
              حي الطائف - مربع 23
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Land Code Investment Ltd. {t('footer.rights')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold-900 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-900 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-900 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5s10.5 4.701 10.5 10.5S17.799 22.5 12 22.5zm3.75-12c0 2.068-1.682 3.75-3.75 3.75S8.25 12.568 8.25 10.5 9.932 6.75 12 6.75s3.75 1.682 3.75 3.75z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
