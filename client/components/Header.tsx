import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="text-2xl font-bold text-gold-900">LC</div>
              <div className="text-xs font-semibold text-primary">
                <div>LAND CODE</div>
                <div>INVESTMENT LTD.</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-primary hover:text-gold-900 transition font-medium text-sm">
              {t('nav.home')}
            </Link>
            <Link to="/about" className="text-primary hover:text-gold-900 transition font-medium text-sm">
              {t('nav.about')}
            </Link>
            <Link to="/services" className="text-primary hover:text-gold-900 transition font-medium text-sm">
              {t('nav.services')}
            </Link>
            <Link to="/projects" className="text-primary hover:text-gold-900 transition font-medium text-sm">
              {t('nav.projects')}
            </Link>
            <Link to="/contact" className="text-primary hover:text-gold-900 transition font-medium text-sm">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded border border-gold-900 text-primary hover:bg-gold-900 hover:text-white transition font-semibold text-sm"
            >
              {language === 'ar' ? 'EN' : 'العربية'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-primary"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3">
            <Link
              to="/"
              className="text-primary hover:text-gold-900 transition font-medium text-sm py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/about"
              className="text-primary hover:text-gold-900 transition font-medium text-sm py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/services"
              className="text-primary hover:text-gold-900 transition font-medium text-sm py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.services')}
            </Link>
            <Link
              to="/projects"
              className="text-primary hover:text-gold-900 transition font-medium text-sm py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.projects')}
            </Link>
            <Link
              to="/contact"
              className="text-primary hover:text-gold-900 transition font-medium text-sm py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
